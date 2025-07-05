#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if TypeScript is compiled
const distPath = path.join(__dirname, '../dist/index.js');

if (!fs.existsSync(distPath)) {
  console.error('❌ CLI not built. Please run: npm run build');
  process.exit(1);
}

// Import and execute the built CLI module
try {
  await import(distPath);
} catch (error) {
  console.error('❌ Failed to start CLI:', error.message);
  process.exit(1);
}
