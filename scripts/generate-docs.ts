import * as fs from 'fs';
import * as path from 'path';
import { REGISTRY, listComponents, getComponent } from '../src/registry/index.js';
import { ComponentRegistry } from '../src/registry/schema/index.js';

class EnhancedDocumentationGenerator {
  private components: ComponentRegistry[];
  private outputPath: string;

  constructor(outputPath: string = './docs/components.md') {
    this.components = listComponents();
    this.outputPath = outputPath;
  }

  // コンポーネントをカテゴリ別に分類
  private categorizeComponents(): Map<string, ComponentRegistry[]> {
    const categories = new Map<string, ComponentRegistry[]>();
    
    this.components.forEach(component => {
      const category = component.category || 'General';
      if (!categories.has(category)) {
        categories.set(category, []);
      }
      categories.get(category)!.push(component);
    });

    return categories;
  }

  // 依存関係の情報を取得
  private getDependencyInfo(component: ComponentRegistry): string {
    const deps = component.dependencies || [];
    const regDeps = component.registryDependencies || [];
    const hooks = component.hooks || [];
    const theme = component.theme || [];

    let info = '';
    
    if (deps.length > 0) {
      info += `**External Dependencies:** ${deps.join(', ')}\n\n`;
    }
    
    if (regDeps.length > 0) {
      info += `**Registry Dependencies:** ${regDeps.join(', ')}\n\n`;
    }
    
    if (hooks.length > 0) {
      info += `**Required Hooks:** ${hooks.join(', ')}\n\n`;
    }
    
    if (theme.length > 0) {
      info += `**Theme Dependencies:** ${theme.join(', ')}\n\n`;
    }

    return info;
  }

  // コンポーネントファイルからpropsの型情報を抽出
  private extractTypeInfo(componentName: string): string {
    const componentPath = `./templates/components/ui/${componentName}.tsx`;
    
    if (!fs.existsSync(componentPath)) {
      return '';
    }

    try {
      const content = fs.readFileSync(componentPath, 'utf-8');
      
      // TypeScriptインターフェースを抽出
      const interfaceMatch = content.match(/export interface \w+Props[^}]+}/s);
      const typeMatch = content.match(/export type \w+(?:Variant|Size)[^;]+/g);
      
      let typeInfo = '';
      
      if (interfaceMatch) {
        typeInfo += '#### Props Interface\n\n```typescript\n' + interfaceMatch[0] + '\n```\n\n';
      }
      
      if (typeMatch) {
        typeInfo += '#### Types\n\n```typescript\n' + typeMatch.join('\n\n') + '\n```\n\n';
      }
      
      return typeInfo;
    } catch (error) {
      console.error(`Error reading component file ${componentPath}:`, error);
      return '';
    }
  }

  // 基本的な使用例を生成
  private generateBasicUsageExample(componentName: string): string {
    const component = getComponent(componentName);
    if (!component) return '';

    // READMEからサンプルコードを抽出
    const readmeSample = this.extractReadmeExample(componentName);
    if (readmeSample) {
      return `#### Basic Usage\n\n${readmeSample}\n\n`;
    }

    // 基本的な使用パターンを生成
    const basicExample = this.generateBasicExample(componentName);
    return `#### Basic Usage\n\n\`\`\`tsx\nimport { ${this.capitalizeFirst(componentName)} } from '@/components/ui/${componentName}';\n\n${basicExample}\`\`\`\n\n`;
  }

  // READMEからサンプルコードを抽出
  private extractReadmeExample(componentName: string): string {
    try {
      const readmePath = './README.md';
      if (!fs.existsSync(readmePath)) return '';

      const content = fs.readFileSync(readmePath, 'utf-8');
      
      // READMEからコンポーネント関連のコードブロックを抽出
      const codeBlocks = content.match(/```tsx[\s\S]*?```/g) || [];
      
      for (const block of codeBlocks) {
        if (block.toLowerCase().includes(componentName)) {
          return block;
        }
      }
    } catch (error) {
      console.error(`Error reading README.md:`, error);
    }
    
    return '';
  }

  // 基本的な使用例を自動生成
  private generateBasicExample(componentName: string): string {
    const examples: { [key: string]: string } = {
      button: `export default function Example() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Click me
    </Button>
  );
}`,
      card: `export default function Example() {
  return (
    <Card>
      <Text>Card content</Text>
    </Card>
  );
}`,
      input: `export default function Example() {
  const [value, setValue] = useState('');
  
  return (
    <Input 
      value={value}
      onChangeText={setValue}
      placeholder="Enter text"
    />
  );
}`,
    };

    return examples[componentName] || `export default function Example() {
  return (
    <${this.capitalizeFirst(componentName)} />
  );
}`;
  }

  // 改良されたgetExamplesメソッド
  private getExamples(componentName: string): string {
    const examples: string[] = [];
    
    // 基本的な使用例を追加
    const basicUsage = this.generateBasicUsageExample(componentName);
    if (basicUsage) {
      examples.push(basicUsage);
    }

    // registryから詳細な例を取得（既存の機能）
    const registryExamples = this.getRegistryExamples(componentName);
    if (registryExamples) {
      examples.push(`#### Advanced Examples\n\n${registryExamples}`);
    }

    // プロップス別のサンプルを生成
    const propExamples = this.generatePropExamples(componentName);
    if (propExamples) {
      examples.push(propExamples);
    }

    return examples.join('\n');
  }

  // registryから例を取得（既存の機能を分離）
  private getRegistryExamples(componentName: string): string {
    const examples: string[] = [];
    
    Object.entries(REGISTRY).forEach(([key, value]) => {
      if (key.startsWith(componentName + '-') && value.type === 'registry:example') {
        const examplePath = value.files[0]?.path;
        if (examplePath && fs.existsSync(examplePath)) {
          try {
            const content = fs.readFileSync(examplePath, 'utf-8');
            examples.push(`##### ${value.name}\n\n${value.description}\n\n\`\`\`tsx\n${content}\n\`\`\`\n`);
          } catch (error) {
            console.error(`Error reading example file ${examplePath}:`, error);
          }
        }
      }
    });

    return examples.join('\n');
  }

  // プロップス別のサンプル生成
  private generatePropExamples(componentName: string): string {
    const component = getComponent(componentName);
    if (!component) return '';

    // コンポーネントファイルからpropsを解析してサンプル生成
    const typeInfo = this.extractTypeInfo(componentName);
    if (!typeInfo) return '';

    const propExamples = this.generateExamplesFromTypes(componentName, typeInfo);
    return propExamples ? `#### Props Examples\n\n${propExamples}` : '';
  }

  // 型情報からサンプルを生成
  private generateExamplesFromTypes(componentName: string, typeInfo: string): string {
    // 型情報から主要なプロップスを抽出してサンプル生成
    const examples: string[] = [];
    
    // variant プロップスの例
    if (typeInfo.includes('variant')) {
      examples.push(`\`\`\`tsx
// Different variants
<${this.capitalizeFirst(componentName)} variant="default">Default</${this.capitalizeFirst(componentName)}>
<${this.capitalizeFirst(componentName)} variant="outline">Outline</${this.capitalizeFirst(componentName)}>
\`\`\``);
    }

    // size プロップスの例
    if (typeInfo.includes('size')) {
      examples.push(`\`\`\`tsx
// Different sizes
<${this.capitalizeFirst(componentName)} size="sm">Small</${this.capitalizeFirst(componentName)}>
<${this.capitalizeFirst(componentName)} size="lg">Large</${this.capitalizeFirst(componentName)}>
\`\`\``);
    }

    return examples.join('\n\n');
  }

  // 実用的なコード例を追加
  private generatePracticalExamples(componentName: string): string {
    const practicalExamples: { [key: string]: string[] } = {
      button: [
        `// Form submission button
<Button 
  variant="success" 
  onPress={handleSubmit}
  loading={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit Form'}
</Button>`,
        `// Icon button
<Button 
  variant="outline" 
  size="icon"
  icon={Search}
  onPress={() => setShowSearch(true)}
/>`
      ],
      input: [
        `// Email input with validation
<Input
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  value={email}
  onChangeText={setEmail}
  error={emailError}
/>`,
        `// Password input
<Input
  placeholder="Password"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>`
      ]
    };

    const examples = practicalExamples[componentName];
    if (!examples) return '';

    return `#### Practical Examples\n\n${examples.map(ex => `\`\`\`tsx\n${ex}\n\`\`\``).join('\n\n')}\n\n`;
  }

  // 改良されたgenerateMarkdownメソッド
  public generateMarkdown(): string {
    const categories = this.categorizeComponents();
    let markdown = '';

    // ヘッダー部分
    markdown += `# BNA UI Components Documentation\n\n`;
    markdown += `This documentation is auto-generated from the component registry.\n\n`;
    markdown += `## Quick Start\n\n`;
    markdown += `\`\`\`bash\nnpx bna-ui init\ncd bna-app\nnpx bna-ui add <component-name>\n\`\`\`\n\n`;
    markdown += `## Table of Contents\n\n`;

    // 目次生成
    categories.forEach((components, category) => {
      markdown += `- [${category}](#${category.toLowerCase().replace(/\s+/g, '-')})\n`;
      components.forEach(component => {
        markdown += `  - [${component.name}](#${component.name})\n`;
      });
    });

    markdown += '\n---\n\n';

    // コンポーネントドキュメント生成
    categories.forEach((components, category) => {
      markdown += `## ${category}\n\n`;
      
      components.forEach(component => {
        markdown += `### ${component.name}\n\n`;
        markdown += `${component.description}\n\n`;

        // インストール方法
        markdown += `**Installation:**\n\`\`\`bash\nnpx bna-ui add ${component.name}\n\`\`\`\n\n`;

        // 依存関係情報
        const depInfo = this.getDependencyInfo(component);
        if (depInfo) {
          markdown += depInfo;
        }

        // 型情報
        const typeInfo = this.extractTypeInfo(component.name);
        if (typeInfo) {
          markdown += typeInfo;
        }

        // プレビュー
        if (component.preview) {
          markdown += `**Preview:**\n\n`;
          markdown += `![${component.name} preview](${component.preview.light})\n\n`;
        }

        // サンプルコード（改良版）
        const examples = this.getExamples(component.name);
        if (examples) {
          markdown += `${examples}`;
        }

        // 実用的な例
        const practicalExamples = this.generatePracticalExamples(component.name);
        if (practicalExamples) {
          markdown += practicalExamples;
        }

        markdown += '---\n\n';
      });
    });

    // フッター
    markdown += `\n*Documentation generated on ${new Date().toISOString()}*\n`;

    return markdown;
  }

  // ドキュメントをファイルに保存
  public generateDocumentation(): void {
    const markdown = this.generateMarkdown();
    
    // 出力ディレクトリを作成
    const outputDir = path.dirname(this.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // ファイルに書き込み
    fs.writeFileSync(this.outputPath, markdown, 'utf-8');
    console.log(`Documentation generated at: ${this.outputPath}`);
  }

  // 個別コンポーネントのドキュメント生成
  public generateComponentDoc(componentName: string): void {
    const component = getComponent(componentName);
    if (!component) {
      console.error(`Component ${componentName} not found`);
      return;
    }

    const outputPath = `./docs/components/${componentName}.md`;
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let markdown = `# ${component.name}\n\n`;
    markdown += `${component.description}\n\n`;
    
    const depInfo = this.getDependencyInfo(component);
    if (depInfo) {
      markdown += depInfo;
    }
    
    const typeInfo = this.extractTypeInfo(component.name);
    if (typeInfo) {
      markdown += typeInfo;
    }
    
    const examples = this.getExamples(component.name);
    if (examples) {
      markdown += `${examples}`;
    }

    const practicalExamples = this.generatePracticalExamples(component.name);
    if (practicalExamples) {
      markdown += practicalExamples;
    }

    fs.writeFileSync(outputPath, markdown, 'utf-8');
    console.log(`Component documentation generated at: ${outputPath}`);
  }

  // ユーティリティメソッド
  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// CLI interface
const isMainModule = process.argv[1] === new URL(import.meta.url).pathname || 
                    process.argv[1].endsWith('generate-docs.ts') ||
                    process.argv[1].endsWith('scripts/generate-docs.ts');

if (isMainModule) {
  const args = process.argv.slice(2);
  const generator = new EnhancedDocumentationGenerator();

  if (args.length === 0) {
    // 全体のドキュメント生成
    generator.generateDocumentation();
  } else if (args[0] === 'component' && args[1]) {
    // 個別コンポーネントのドキュメント生成
    generator.generateComponentDoc(args[1]);
  } else {
    console.log('Usage:');
    console.log('  npm run generate-docs           # Generate full documentation');
    console.log('  npm run generate-docs component <name>  # Generate specific component docs');
  }
}

export { EnhancedDocumentationGenerator };