# BNA UI Components Documentation

This documentation is auto-generated from the component registry.

## Quick Start

```bash
npx bna-ui init
cd bna-app
npx bna-ui add <component-name>
```

## Table of Contents

- [General](#general)
  - [accordion](#accordion)
  - [action-sheet](#action-sheet)
  - [alert](#alert)
  - [alert-dialog](#alert-dialog)
  - [area-chart](#area-chart)
  - [audio-player](#audio-player)
  - [audio-recorder](#audio-recorder)
  - [audio-waveform](#audio-waveform)
  - [avatar](#avatar)
  - [avoid-keyboard](#avoid-keyboard)
  - [badge](#badge)
  - [bar-chart](#bar-chart)
  - [bottom-sheet](#bottom-sheet)
  - [bubble-chart](#bubble-chart)
  - [button](#button)
  - [camera](#camera)
  - [camera-preview](#camera-preview)
  - [candlestick-chart](#candlestick-chart)
  - [card](#card)
  - [carousel](#carousel)
  - [chart-container](#chart-container)
  - [checkbox](#checkbox)
  - [collapsible](#collapsible)
  - [color-picker](#color-picker)
  - [column-chart](#column-chart)
  - [combobox](#combobox)
  - [combobox-demo](#combobox-demo)
  - [combobox-disabled](#combobox-disabled)
  - [combobox-form](#combobox-form)
  - [combobox-groups](#combobox-groups)
  - [combobox-large](#combobox-large)
  - [combobox-multiple](#combobox-multiple)
  - [combobox-search](#combobox-search)
  - [date-picker](#date-picker)
  - [doughnut-chart](#doughnut-chart)
  - [file-picker](#file-picker)
  - [gallery](#gallery)
  - [heatmap-chart](#heatmap-chart)
  - [hello-wave](#hello-wave)
  - [icon](#icon)
  - [image](#image)
  - [input](#input)
  - [input-otp](#input-otp)
  - [line-chart](#line-chart)
  - [link](#link)
  - [media-picker](#media-picker)
  - [mode-toggle](#mode-toggle)
  - [onboarding](#onboarding)
  - [parallax-scrollview](#parallax-scrollview)
  - [picker](#picker)
  - [pie-chart](#pie-chart)
  - [polar-area-chart](#polar-area-chart)
  - [popover](#popover)
  - [progress](#progress)
  - [progress-ring-chart](#progress-ring-chart)
  - [radar-chart](#radar-chart)
  - [radial-bar-chart](#radial-bar-chart)
  - [radio](#radio)
  - [scatter-chart](#scatter-chart)
  - [scroll-view](#scroll-view)
  - [searchbar](#searchbar)
  - [separator](#separator)
  - [share](#share)
  - [sheet](#sheet)
  - [skeleton](#skeleton)
  - [spinner](#spinner)
  - [stacked-area-chart](#stacked-area-chart)
  - [stacked-bar-chart](#stacked-bar-chart)
  - [switch](#switch)
  - [table](#table)
  - [tabs](#tabs)
  - [text](#text)
  - [toast](#toast)
  - [toggle](#toggle)
  - [treemap-chart](#treemap-chart)
  - [video](#video)
  - [view](#view)

---

## General

### accordion

A vertically stacked set of interactive headings that each reveal a section of content.

**Installation:**
```bash
npx bna-ui add accordion
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, view, icon

**Preview:**

![accordion preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 06-09-54_1.mov)

#### Basic Usage

```tsx
import { Accordion } from '@/components/ui/accordion';

export default function Example() {
  return (
    <Accordion />
  );
}```


#### Advanced Examples

##### accordion-demo

A basic accordion with collapsible sections

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionDemo() {
  return (
    <Accordion type='single' collapsible defaultValue='item-1'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It's animated by default, but you can disable it if you prefer.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

##### accordion-single

An accordion that allows only one item to be open at a time

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionSingle() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>What is React Native?</AccordionTrigger>
        <AccordionContent>
          <Text>
            React Native is a framework for building native mobile applications
            using React. It allows you to create mobile apps for iOS and Android
            using JavaScript and React components.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>What is Expo?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Expo is a platform for making universal native apps that run on
            Android, iOS, and the web. It provides a set of tools and services
            built around React Native.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>What is TypeScript?</AccordionTrigger>
        <AccordionContent>
          <Text>
            TypeScript is a programming language developed by Microsoft. It is a
            strict syntactical superset of JavaScript and adds optional static
            type checking to the language.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

##### accordion-multiple

An accordion that allows multiple items to be open simultaneously

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionMultiple() {
  return (
    <Accordion type='multiple' defaultValue={['item-1', 'item-2']}>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Frontend Technologies</AccordionTrigger>
        <AccordionContent>
          <Text>
            Modern frontend development includes React, Vue, Angular, and many
            other frameworks that help build interactive user interfaces.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Backend Technologies</AccordionTrigger>
        <AccordionContent>
          <Text>
            Backend development involves server-side technologies like Node.js,
            Python, Java, and databases to handle data and business logic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Mobile Development</AccordionTrigger>
        <AccordionContent>
          <Text>
            Mobile development can be done natively with Swift/Kotlin or with
            cross-platform solutions like React Native, Flutter, or Xamarin.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>DevOps & Cloud</AccordionTrigger>
        <AccordionContent>
          <Text>
            DevOps practices and cloud platforms like AWS, Azure, and GCP help
            deploy, scale, and maintain applications efficiently.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

##### accordion-controlled

An accordion with controlled state management

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function AccordionControlled() {
  const [value, setValue] = React.useState<string | string[]>('');

  return (
    <View>
      <Text variant='caption' style={{ marginBottom: 12 }}>
        Currently open: {value || 'None'}
      </Text>
      <Accordion
        type='single'
        collapsible
        value={value}
        onValueChange={setValue}
      >
        <AccordionItem value='settings'>
          <AccordionTrigger>Settings</AccordionTrigger>
          <AccordionContent>
            <Text>
              Configure your application preferences, notifications, and account
              settings here.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='privacy'>
          <AccordionTrigger>Privacy</AccordionTrigger>
          <AccordionContent>
            <Text>
              Manage your privacy settings, data sharing preferences, and
              visibility controls.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='security'>
          <AccordionTrigger>Security</AccordionTrigger>
          <AccordionContent>
            <Text>
              Set up two-factor authentication, change passwords, and review
              security logs.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}

```

##### accordion-faq

An accordion formatted as a frequently asked questions section

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionFAQ() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='shipping'>
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Standard shipping typically takes 3-5 business days. Express
            shipping is available for 1-2 business days delivery.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='returns'>
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          <Text>
            We offer a 30-day return policy for all items in original condition.
            Return shipping is free for defective items.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='warranty'>
        <AccordionTrigger>Do you offer warranty?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes, all products come with a 1-year manufacturer warranty. Extended
            warranty options are available at checkout.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='support'>
        <AccordionTrigger>How can I contact support?</AccordionTrigger>
        <AccordionContent>
          <Text>
            You can reach our support team via email at support@example.com or
            through our live chat feature available 24/7.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

##### accordion-non-collapsible

An accordion where at least one item must always remain open

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionNonCollapsible() {
  return (
    <Accordion type='single' defaultValue='step-1'>
      <AccordionItem value='step-1'>
        <AccordionTrigger>Step 1: Planning</AccordionTrigger>
        <AccordionContent>
          <Text>
            Start by defining your project requirements and creating a detailed
            plan. This includes wireframing and technical specifications.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='step-2'>
        <AccordionTrigger>Step 2: Development</AccordionTrigger>
        <AccordionContent>
          <Text>
            Begin the development process by setting up your environment and
            implementing the core features according to your plan.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='step-3'>
        <AccordionTrigger>Step 3: Testing</AccordionTrigger>
        <AccordionContent>
          <Text>
            Thoroughly test your application across different devices and
            scenarios to ensure it works as expected.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='step-4'>
        <AccordionTrigger>Step 4: Deployment</AccordionTrigger>
        <AccordionContent>
          <Text>
            Deploy your application to production and monitor its performance.
            Set up analytics and error tracking.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

##### accordion-styled

An accordion with custom styling and icons

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function AccordionStyled() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: card,
        borderRadius: BORDER_RADIUS,
      }}
    >
      <Accordion type='single' collapsible>
        <AccordionItem value='features'>
          <AccordionTrigger>🚀 Features</AccordionTrigger>
          <AccordionContent style={{ paddingLeft: 8 }}>
            <Text>
              • Cross-platform compatibility{'\n'}• TypeScript support{'\n'}•
              Theme system integration{'\n'}• Customizable animations
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='performance'>
          <AccordionTrigger>⚡ Performance</AccordionTrigger>
          <AccordionContent style={{ paddingLeft: 8 }}>
            <Text>
              • Optimized rendering{'\n'}• Minimal re-renders{'\n'}• Smooth
              animations{'\n'}• Memory efficient
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='accessibility'>
          <AccordionTrigger>♿ Accessibility</AccordionTrigger>
          <AccordionContent style={{ paddingLeft: 8 }}>
            <Text>
              • Screen reader support{'\n'}• Keyboard navigation{'\n'}• Focus
              management{'\n'}• ARIA attributes
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}

```
---

### action-sheet

A native-feeling action sheet component that provides a menu of options triggered from the bottom of the screen.

**Installation:**
```bash
npx bna-ui add action-sheet
```

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![action-sheet preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 06-18-08_1.MP4)

#### Basic Usage

```tsx
import { Action-sheet } from '@/components/ui/action-sheet';

export default function Example() {
  return (
    <Action-sheet />
  );
}```


#### Advanced Examples

##### action-sheet-demo

A basic action sheet with multiple options

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ActionSheetDemo() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Edit',
      onPress: () => console.log('Edit pressed'),
    },
    {
      title: 'Share',
      onPress: () => console.log('Share pressed'),
    },
    {
      title: 'Delete',
      onPress: () => console.log('Delete pressed'),
      destructive: true,
    },
  ];

  return (
    <View>
      <Button onPress={() => setVisible(true)}>Show Action Sheet</Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='Choose an action'
        message='Select one of the options below'
        options={options}
      />
    </View>
  );
}

```

##### action-sheet-icons

An action sheet with icons next to each option

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Download, Edit, Share, Trash2 } from 'lucide-react-native';
import React, { useState } from 'react';

export function ActionSheetIcons() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Edit',
      onPress: () => console.log('Edit pressed'),
      icon: <Icon name={Edit} size={20} />,
    },
    {
      title: 'Share',
      onPress: () => console.log('Share pressed'),
      icon: <Icon name={Share} size={20} />,
    },
    {
      title: 'Download',
      onPress: () => console.log('Download pressed'),
      icon: <Icon name={Download} size={20} />,
    },
    {
      title: 'Delete',
      onPress: () => console.log('Delete pressed'),
      destructive: true,
      icon: <Icon name={Trash2} size={20} />,
    },
  ];

  return (
    <>
      <Button onPress={() => setVisible(true)}>
        Show Action Sheet with Icons
      </Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='File Actions'
        options={options}
      />
    </>
  );
}

```

##### action-sheet-destructive

An action sheet featuring destructive actions with appropriate styling

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { AlertTriangle, Trash2 } from 'lucide-react-native';
import React, { useState } from 'react';

export function ActionSheetDestructive() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Remove from Library',
      onPress: () => console.log('Remove from library'),
      destructive: true,
    },
    {
      title: 'Delete Permanently',
      onPress: () => console.log('Delete permanently'),
      destructive: true,
      icon: <Icon name={Trash2} size={20} />,
    },
    {
      title: 'Report Content',
      onPress: () => console.log('Report content'),
      destructive: true,
      icon: <Icon name={AlertTriangle} size={20} />,
    },
  ];

  return (
    <>
      <Button variant='destructive' onPress={() => setVisible(true)}>
        Destructive Actions
      </Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='Are you sure?'
        message='These actions cannot be undone'
        options={options}
      />
    </>
  );
}

```

##### action-sheet-disabled

An action sheet with some disabled options

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Copy, Edit, Share, Trash2 } from 'lucide-react-native';
import React, { useState } from 'react';

export function ActionSheetDisabled() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Edit',
      onPress: () => console.log('Edit pressed'),
      icon: <Icon name={Edit} size={20} />,
    },
    {
      title: 'Copy',
      onPress: () => console.log('Copy pressed'),
      icon: <Icon name={Copy} size={20} />,
      disabled: true,
    },
    {
      title: 'Share',
      onPress: () => console.log('Share pressed'),
      icon: <Icon name={Share} size={20} />,
      disabled: true,
    },
    {
      title: 'Delete',
      onPress: () => console.log('Delete pressed'),
      destructive: true,
      icon: <Icon name={Trash2} size={20} />,
    },
  ];

  return (
    <>
      <Button onPress={() => setVisible(true)}>
        Show with Disabled Options
      </Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='Document Actions'
        message='Some actions are not available'
        options={options}
      />
    </>
  );
}

```

##### action-sheet-styled

An action sheet with custom styling and branding

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Bookmark, Heart, Send, Star } from 'lucide-react-native';
import React, { useState } from 'react';

export function ActionSheetStyled() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Add to Favorites',
      onPress: () => console.log('Add to favorites'),
      icon: <Icon name={Heart} size={20} color='#FF6B6B' />,
    },
    {
      title: 'Rate this Item',
      onPress: () => console.log('Rate item'),
      icon: <Icon name={Star} size={20} color='#FFD93D' />,
    },
    {
      title: 'Save for Later',
      onPress: () => console.log('Save for later'),
      icon: <Icon name={Bookmark} size={20} color='#4ECDC4' />,
    },
    {
      title: 'Share with Friends',
      onPress: () => console.log('Share with friends'),
      icon: <Icon name={Send} size={20} color='#45B7D1' />,
    },
  ];

  return (
    <>
      <Button variant='secondary' onPress={() => setVisible(true)}>
        Custom Styled Sheet
      </Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='✨ Quick Actions'
        message='Choose how you want to interact with this item'
        options={options}
        cancelButtonTitle='Maybe Later'
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      />
    </>
  );
}

```

##### action-sheet-long

An action sheet with many options that scrolls

```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
  Archive,
  Bookmark,
  Copy,
  Download,
  Edit,
  EyeOff,
  Flag,
  Heart,
  Pin,
  Send,
  Share,
  Star,
  Trash2,
} from 'lucide-react-native';
import React, { useState } from 'react';

export function ActionSheetLong() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Edit Document',
      onPress: () => console.log('Edit'),
      icon: <Icon name={Edit} size={20} />,
    },
    {
      title: 'Share',
      onPress: () => console.log('Share'),
      icon: <Icon name={Share} size={20} />,
    },
    {
      title: 'Download',
      onPress: () => console.log('Download'),
      icon: <Icon name={Download} size={20} />,
    },
    {
      title: 'Copy Link',
      onPress: () => console.log('Copy link'),
      icon: <Icon name={Copy} size={20} />,
    },
    {
      title: 'Archive',
      onPress: () => console.log('Archive'),
      icon: <Icon name={Archive} size={20} />,
    },
    {
      title: 'Pin to Top',
      onPress: () => console.log('Pin'),
      icon: <Icon name={Pin} size={20} />,
    },
    {
      title: 'Add to Favorites',
      onPress: () => console.log('Favorite'),
      icon: <Icon name={Heart} size={20} />,
    },
    {
      title: 'Rate & Review',
      onPress: () => console.log('Rate'),
      icon: <Icon name={Star} size={20} />,
    },
    {
      title: 'Bookmark',
      onPress: () => console.log('Bookmark'),
      icon: <Icon name={Bookmark} size={20} />,
    },
    {
      title: 'Send Message',
      onPress: () => console.log('Send message'),
      icon: <Icon name={Send} size={20} />,
    },
    {
      title: 'Hide from Feed',
      onPress: () => console.log('Hide'),
      icon: <Icon name={EyeOff} size={20} />,
    },
    {
      title: 'Report Issue',
      onPress: () => console.log('Report'),
      icon: <Icon name={Flag} size={20} />,
    },
    {
      title: 'Delete',
      onPress: () => console.log('Delete'),
      destructive: true,
      icon: <Icon name={Trash2} size={20} />,
    },
  ];

  return (
    <>
      <Button onPress={() => setVisible(true)}>Show Long List</Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='All Actions'
        message='Scroll to see all available options'
        options={options}
      />
    </>
  );
}

```

##### action-sheet-hook

Using the useActionSheet hook for easier management

```tsx
import { useActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { View } from '@/components/ui/view';
import { Camera, FileText, Image, Mic } from 'lucide-react-native';
import React from 'react';

export function ActionSheetHook() {
  const { show, ActionSheet } = useActionSheet();

  const showMediaOptions = () => {
    show({
      title: 'Add Media',
      message: 'Choose the type of media to add',
      options: [
        {
          title: 'Take Photo',
          onPress: () => console.log('Take photo'),
          icon: <Icon name={Camera} size={20} />,
        },
        {
          title: 'Choose from Gallery',
          onPress: () => console.log('Choose from gallery'),
          icon: <Icon name={Image} size={20} />,
        },
        {
          title: 'Record Audio',
          onPress: () => console.log('Record audio'),
          icon: <Icon name={Mic} size={20} />,
        },
        {
          title: 'Add Document',
          onPress: () => console.log('Add document'),
          icon: <Icon name={FileText} size={20} />,
        },
      ],
    });
  };

  const showConfirmation = () => {
    show({
      title: 'Confirm Action',
      message: 'This action cannot be undone',
      options: [
        {
          title: 'Yes, Continue',
          onPress: () => console.log('Confirmed'),
          destructive: true,
        },
      ],
    });
  };

  return (
    <View style={{ gap: 12 }}>
      <Button onPress={showMediaOptions}>Add Media</Button>
      <Button variant='outline' onPress={showConfirmation}>
        Show Confirmation
      </Button>
      {ActionSheet}
    </View>
  );
}

```
---

### alert

Display important messages to users with both visual inline alerts and native system alerts.

**Installation:**
```bash
npx bna-ui add alert
```

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![alert preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 06-25-10_1.mov)

#### Basic Usage

```tsx
import { Alert } from '@/components/ui/alert';

export default function Example() {
  return (
    <Alert />
  );
}```


#### Advanced Examples

##### alert-demo

A basic native alert with two buttons

```tsx
import { createTwoButtonAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertDemo() {
  const handleTwoButtonAlert = () => {
    createTwoButtonAlert({
      title: 'Two Button Alert',
      message: 'This is a two-button alert example',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    });
  };

  return <Button onPress={handleTwoButtonAlert}>Show Two Button Alert</Button>;
}

```

##### alert-three-button-demo

A native alert with three button options

```tsx
import { createThreeButtonAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertThreeButtonDemo() {
  const handleThreeButtonAlert = () => {
    createThreeButtonAlert({
      title: 'Three Button Alert',
      message: 'This is a three-button alert example',
      buttons: [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    });
  };

  return (
    <Button onPress={handleThreeButtonAlert} variant='outline'>
      Show Three Button Alert
    </Button>
  );
}

```

##### alert-success-demo

Success alert with positive messaging

```tsx
import { showSuccessAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertSuccessDemo() {
  const handleSuccessAlert = () => {
    showSuccessAlert(
      'Success!',
      'Your action was completed successfully.',
      () => console.log('Success acknowledged')
    );
  };

  return (
    <Button onPress={handleSuccessAlert} variant='secondary'>
      Show Success Alert
    </Button>
  );
}

```

##### alert-error-demo

Error alert with destructive styling

```tsx
import { showErrorAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertErrorDemo() {
  const handleErrorAlert = () => {
    showErrorAlert('Error', 'Something went wrong. Please try again.', () =>
      console.log('Error acknowledged')
    );
  };

  return (
    <Button onPress={handleErrorAlert} variant='destructive'>
      Show Error Alert
    </Button>
  );
}

```

##### alert-confirm-demo

Confirmation alert for destructive actions

```tsx
import { showConfirmAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertConfirmDemo() {
  const handleConfirmAlert = () => {
    showConfirmAlert(
      'Confirm Action',
      'Are you sure you want to proceed with this action?',
      () => console.log('Action confirmed'),
      () => console.log('Action cancelled')
    );
  };

  return (
    <Button onPress={handleConfirmAlert} variant='success'>
      Show Confirm Alert
    </Button>
  );
}

```

##### alert-custom-demo

Custom native alert with multiple options

```tsx
import { showNativeAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertCustomDemo() {
  const handleCustomAlert = () => {
    showNativeAlert({
      title: 'Custom Alert',
      message: 'This is a custom native alert with multiple options',
      buttons: [
        {
          text: 'Option 1',
          onPress: () => console.log('Option 1 selected'),
        },
        {
          text: 'Option 2',
          onPress: () => console.log('Option 2 selected'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled'),
          style: 'cancel',
        },
      ],
    });
  };

  return <Button onPress={handleCustomAlert}>Show Custom Alert</Button>;
}

```

##### alert-visual-demo

Inline visual alerts that appear within your content

```tsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function AlertVisualDemo() {
  return (
    <View>
      <Alert>
        <AlertTitle>Visual Alert</AlertTitle>
        <AlertDescription>
          This is a default visual alert that appears inline with your content.
        </AlertDescription>
      </Alert>

      <Text variant='caption' style={{ marginTop: 16 }}>
        Visual alerts appear inline with your content, while native alerts
        appear as system dialogs on top of your app.
      </Text>
    </View>
  );
}

```

##### alert-visual-destructive-demo

Destructive visual alerts for error messages

```tsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function AlertVisualDestructiveDemo() {
  return (
    <View>
      <Alert variant='destructive' style={{ marginBottom: 24 }}>
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive visual alert for error messages.
        </AlertDescription>
      </Alert>

      <Text variant='caption' style={{ marginTop: 16 }}>
        Visual alerts appear inline with your content, while native alerts
        appear as system dialogs on top of your app.
      </Text>
    </View>
  );
}

```

##### alert-advanced-demo

Advanced alert usage patterns and combinations

```tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
  showConfirmAlert,
  showNativeAlert,
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function AlertAdvancedDemo() {
  const [showVisualAlert, setShowVisualAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const handleAsyncOperation = async () => {
    // Show loading state
    setShowVisualAlert(true);
    setAlertType(null);

    try {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success
      setAlertType('success');

      // Auto hide after 3 seconds
      setTimeout(() => {
        setShowVisualAlert(false);
        setAlertType(null);
      }, 3000);
    } catch (error) {
      setAlertType('error');
    }
  };

  const handleDeleteWithConfirmation = () => {
    showConfirmAlert(
      'Delete Item',
      'This action cannot be undone. Are you sure you want to delete this item?',
      () => {
        // First confirmation passed, show second confirmation for critical action
        showConfirmAlert(
          'Final Confirmation',
          'This will permanently delete the item and all associated data. This cannot be undone.',
          () => {
            console.log('Item deleted');
          },
          () => {
            console.log('Delete cancelled at final step');
          }
        );
      },
      () => {
        console.log('Delete cancelled');
      }
    );
  };

  const handleComplexAlert = () => {
    showNativeAlert({
      title: 'Choose Your Action',
      message: 'What would you like to do with this item?',
      buttons: [
        {
          text: 'Edit',
          onPress: () => console.log('Edit selected'),
        },
        {
          text: 'Share',
          onPress: () => console.log('Share selected'),
        },
        {
          text: 'Archive',
          onPress: () => console.log('Archive selected'),
        },
        {
          text: 'Delete',
          onPress: () => handleDeleteWithConfirmation(),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled'),
          style: 'cancel',
        },
      ],
    });
  };

  return (
    <View style={{ gap: 16 }}>
      {/* Dynamic Visual Alert */}
      {showVisualAlert && (
        <Alert variant={alertType === 'error' ? 'destructive' : 'default'}>
          <AlertTitle>
            {alertType === null && 'Processing...'}
            {alertType === 'success' && 'Success!'}
            {alertType === 'error' && 'Error'}
          </AlertTitle>
          <AlertDescription>
            {alertType === null && 'Please wait while we process your request.'}
            {alertType === 'success' &&
              'Your operation completed successfully.'}
            {alertType === 'error' && 'Something went wrong. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <View style={{ gap: 12 }}>
        <Button onPress={handleAsyncOperation} variant='secondary'>
          Simulate Async Operation
        </Button>

        <Button onPress={handleComplexAlert} variant='outline'>
          Show Complex Alert
        </Button>

        <Button onPress={handleDeleteWithConfirmation} variant='destructive'>
          Delete with Double Confirmation
        </Button>
      </View>

      <Text variant='caption' style={{ opacity: 0.7, marginTop: 8 }}>
        These demo demonstrate advanced patterns like chained confirmations,
        dynamic visual alerts, and complex multi-option native alerts.
      </Text>
    </View>
  );
}

```

##### alert-dialog-demo

A basic alert dialog with confirmation buttons

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';

export default function AlertDialogDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button onPress={dialog.open}>
        Show Dialog
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        confirmText="Yes, delete"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Account deleted');
          dialog.close();
        }}
        onCancel={dialog.close}
      />
    </View>
  );
}
```

##### alert-dialog-destructive

An alert dialog for destructive actions like delete

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';

export default function AlertDialogDestructiveDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button variant="destructive" onPress={dialog.open}>
        Delete Item
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Item deleted');
          dialog.close();
        }}
        onCancel={dialog.close}
      />
    </View>
  );
}
```

##### alert-dialog-custom

A custom styled alert dialog with different appearance

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { Text } from '@/components/ui/text';

export default function AlertDialogCustomDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button variant="outline" onPress={dialog.open}>
        Custom Dialog
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        confirmText="Continue"
        cancelText="Go Back"
        onConfirm={() => {
          console.log('Continued');
          dialog.close();
        }}
        onCancel={dialog.close}
        style={{ borderRadius: 24 }}
      >
        <View style={{ alignItems: 'center', padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Custom Content
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 16 }}>
            This dialog contains custom content instead of using the title and description props.
          </Text>
        </View>
      </AlertDialog>
    </View>
  );
}
```
---

### alert-dialog

A modal dialog that interrupts the user with important content and expects a response.

**Installation:**
```bash
npx bna-ui add alert-dialog
```

**External Dependencies:** react-native-reanimated

**Registry Dependencies:** card, button, text, view

**Preview:**

![alert-dialog preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/alert-dialog-preview.mov)

#### Basic Usage

```tsx
import { Alert-dialog } from '@/components/ui/alert-dialog';

export default function Example() {
  return (
    <Alert-dialog />
  );
}```


#### Advanced Examples

##### alert-dialog-demo

A basic alert dialog with confirmation buttons

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';

export default function AlertDialogDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button onPress={dialog.open}>
        Show Dialog
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        confirmText="Yes, delete"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Account deleted');
          dialog.close();
        }}
        onCancel={dialog.close}
      />
    </View>
  );
}
```

##### alert-dialog-destructive

An alert dialog for destructive actions like delete

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';

export default function AlertDialogDestructiveDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button variant="destructive" onPress={dialog.open}>
        Delete Item
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Item deleted');
          dialog.close();
        }}
        onCancel={dialog.close}
      />
    </View>
  );
}
```

##### alert-dialog-custom

A custom styled alert dialog with different appearance

```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { Text } from '@/components/ui/text';

export default function AlertDialogCustomDemo() {
  const dialog = useAlertDialog();

  return (
    <View style={{ padding: 20 }}>
      <Button variant="outline" onPress={dialog.open}>
        Custom Dialog
      </Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        confirmText="Continue"
        cancelText="Go Back"
        onConfirm={() => {
          console.log('Continued');
          dialog.close();
        }}
        onCancel={dialog.close}
        style={{ borderRadius: 24 }}
      >
        <View style={{ alignItems: 'center', padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Custom Content
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 16 }}>
            This dialog contains custom content instead of using the title and description props.
          </Text>
        </View>
      </AlertDialog>
    </View>
  );
}
```
---

### area-chart

A customizable area chart component with gradient fills and smooth animations.

**Installation:**
```bash
npx bna-ui add area-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Registry Dependencies:** line-chart

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![area-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 15-15-47_1.mov)

#### Basic Usage

```tsx
import { Area-chart } from '@/components/ui/area-chart';

export default function Example() {
  return (
    <Area-chart />
  );
}```


#### Advanced Examples

##### area-chart-demo

An area chart with gradient fill and smooth animations

```tsx
import { AreaChart } from '@/components/charts/area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 100, label: 'January' },
  { x: 'Feb', y: 120, label: 'February' },
  { x: 'Mar', y: 90, label: 'March' },
  { x: 'Apr', y: 140, label: 'April' },
  { x: 'May', y: 110, label: 'May' },
  { x: 'Jun', y: 130, label: 'June' },
];

export function AreaChartDemo() {
  return (
    <ChartContainer
      title='Website Traffic'
      description='Daily visitors with gradient fill'
    >
      <AreaChart
        data={sampleData}
        config={{
          height: 200,
          showGrid: true,
          showLabels: false,
          animated: true,
          duration: 1800,
          gradient: true,
        }}
      />
    </ChartContainer>
  );
}

```

##### area-chart-interactive

An interactive area chart with touch gestures

```tsx
import { AreaChart } from '@/components/charts/area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 4000, label: 'January' },
  { x: 'Feb', y: 3000, label: 'February' },
  { x: 'Mar', y: 5000, label: 'March' },
  { x: 'Apr', y: 4500, label: 'April' },
  { x: 'May', y: 6000, label: 'May' },
  { x: 'Jun', y: 7200, label: 'June' },
  { x: 'Jul', y: 6800, label: 'July' },
];

export function AreaChartInteractive() {
  return (
    <ChartContainer
      title='Interactive User Engagement'
      description='Touch to explore monthly user activity'
    >
      <AreaChart
        data={sampleData}
        config={{
          height: 250,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
          interactive: true,
          showYLabels: true,
          yLabelCount: 5,
        }}
      />
    </ChartContainer>
  );
}

```

##### area-chart-styled

A customized area chart with custom styling

```tsx
import { AreaChart } from '@/components/charts/area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { x: 'Week 1', y: 850, label: 'Week 1' },
  { x: 'Week 2', y: 1200, label: 'Week 2' },
  { x: 'Week 3', y: 980, label: 'Week 3' },
  { x: 'Week 4', y: 1450, label: 'Week 4' },
  { x: 'Week 5', y: 1100, label: 'Week 5' },
  { x: 'Week 6', y: 1650, label: 'Week 6' },
];

export function AreaChartStyled() {
  const borderColor = useThemeColor({}, 'border');
  const backgroundColor = useThemeColor({}, 'card');

  return (
    <ChartContainer
      title='Weekly Sales Volume'
      description='Styled area chart with custom appearance'
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
        margin: 8,
      }}
    >
      <AreaChart
        data={sampleData}
        config={{
          height: 220,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1800,
          showYLabels: true,
          yLabelCount: 6,
          padding: 24,
        }}
      />
    </ChartContainer>
  );
}

```

##### area-chart-large

An area chart with large data

```tsx
import { AreaChart } from '@/components/charts/area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 65000, label: 'January' },
  { x: 'Feb', y: 80000, label: 'February' },
  { x: 'Mar', y: 75000, label: 'March' },
  { x: 'Apr', y: 95000, label: 'April' },
  { x: 'May', y: 110000, label: 'May' },
  { x: 'Jun', y: 125000, label: 'June' },
  { x: 'Jul', y: 140000, label: 'July' },
  { x: 'Aug', y: 135000, label: 'August' },
  { x: 'Sep', y: 150000, label: 'September' },
  { x: 'Oct', y: 165000, label: 'October' },
  { x: 'Nov', y: 180000, label: 'November' },
  { x: 'Dec', y: 195000, label: 'December' },
];

export function AreaChartLarge() {
  return (
    <ChartContainer
      title='Annual Revenue Growth'
      description='Comprehensive yearly performance data'
    >
      <AreaChart
        data={sampleData}
        config={{
          height: 280,
          showGrid: true,
          showLabels: false,
          animated: true,
          duration: 2500,
          showYLabels: true,
          yLabelCount: 7,
          padding: 20,
        }}
      />
    </ChartContainer>
  );
}

```
---

### audio-player

A feature-rich audio player component with waveform visualization, playback controls, and seeking capabilities for music, podcasts, and voice recordings.

**Installation:**
```bash
npx bna-ui add audio-player
```

**External Dependencies:** expo-audio, lucide-react-native

**Registry Dependencies:** button, progress, text, audio-waveform

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface AudioPlayerProps {
  source: AudioSource;
  style?: ViewStyle;
  showControls?: boolean;
  showWaveform?: boolean;
  showTimer?: boolean;
  showProgressBar?: boolean;
  autoPlay?: boolean;
  onPlaybackStatusUpdate?: (status: any) => void;
}
```

**Preview:**

![audio-player preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 20-06-28_1.MP4)

#### Basic Usage

```tsx
import { Audio-player } from '@/components/ui/audio-player';

export default function Example() {
  return (
    <Audio-player />
  );
}```


#### Advanced Examples

##### audio-player-demo

A complete audio player with all features enabled

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';

export function AudioPlayerDemo() {
  // Sample audio URL - replace with your actual audio source
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={true}
      showTimer={true}
      showProgressBar={true}
      autoPlay={false}
      onPlaybackStatusUpdate={(status) => {
        console.log('Playback status:', status);
      }}
    />
  );
}

```

##### audio-player-minimal

A minimal audio player with only essential controls

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';

export function AudioPlayerMinimal() {
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={false}
      showTimer={false}
      showProgressBar={true}
      autoPlay={false}
    />
  );
}

```

##### audio-player-waveform

Audio player focused on waveform visualization

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';

export function AudioPlayerWaveform() {
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={true}
      showTimer={true}
      showProgressBar={false}
      autoPlay={false}
    />
  );
}

```

##### audio-player-progress

Audio player using only a progress bar for seeking

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';

export function AudioPlayerProgress() {
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={false}
      showTimer={true}
      showProgressBar={true}
      autoPlay={false}
    />
  );
}

```

##### audio-player-autoplay

Audio player that starts playing automatically when loaded

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';

export function AudioPlayerAutoplay() {
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={true}
      showTimer={true}
      showProgressBar={true}
      autoPlay={true}
      onPlaybackStatusUpdate={(status) => {
        if (status.isLoaded && status.playing) {
          console.log('Auto-playing audio');
        }
      }}
    />
  );
}

```

##### audio-player-styled

An audio player with custom styling and theming

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';
import { useThemeColor } from '@/hooks/useThemeColor';

export function AudioPlayerStyled() {
  const blue = useThemeColor({}, 'indigo');

  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <AudioPlayer
      source={{ uri: sampleAudioUrl }}
      showControls={true}
      showWaveform={true}
      showTimer={true}
      showProgressBar={true}
      autoPlay={false}
      style={{
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: blue,
      }}
    />
  );
}

```

##### audio-player-music

Audio player with music-focused UI including album art and track info

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import {
  Heart,
  MoreHorizontal,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

export function AudioPlayerMusic() {
  const [isLiked, setIsLiked] = useState(false);
  const sampleAudioUrl =
    'https://www.thesoundarchive.com/ringtones/old-phone-ringing.wav';

  return (
    <View style={styles.musicPlayer}>
      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center',
          }}
          style={styles.albumArt}
        />
      </View>

      {/* Track Information */}
      <View style={styles.trackInfo}>
        <Text variant='body' style={styles.trackTitle}>
          Midnight Waves
        </Text>
        <Text variant='caption' style={styles.artistName}>
          Ocean Sounds Orchestra
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <Button
          variant='ghost'
          size='icon'
          onPress={() => setIsLiked(!isLiked)}
          style={styles.actionButton}
        >
          <Heart
            size={20}
            color={isLiked ? '#ff6b6b' : '#666'}
            fill={isLiked ? '#ff6b6b' : 'transparent'}
          />
        </Button>
        <Button variant='ghost' size='icon' style={styles.actionButton}>
          <MoreHorizontal size={20} color='#666' />
        </Button>
      </View>

      {/* Audio Player */}
      <AudioPlayer
        source={{ uri: sampleAudioUrl }}
        showControls={true}
        showWaveform={true}
        showTimer={true}
        showProgressBar={false}
        autoPlay={false}
        style={styles.playerContainer}
      />

      {/* Additional Controls */}
      <View style={styles.additionalControls}>
        <Button variant='ghost' size='icon' style={styles.controlButton}>
          <Shuffle size={18} color='#666' />
        </Button>
        <Button variant='ghost' size='icon' style={styles.controlButton}>
          <SkipBack size={18} color='#666' />
        </Button>
        <View style={styles.spacer} />
        <Button variant='ghost' size='icon' style={styles.controlButton}>
          <SkipForward size={18} color='#666' />
        </Button>
        <Button variant='ghost' size='icon' style={styles.controlButton}>
          <Shuffle size={18} color='#666' />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  musicPlayer: {
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  albumArtContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  albumArt: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  trackInfo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  artistName: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  actionButton: {
    width: 36,
    height: 36,
  },
  playerContainer: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
    marginBottom: 16,
  },
  additionalControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  controlButton: {
    width: 36,
    height: 36,
  },
  spacer: {
    width: 40,
  },
});

```
---

### audio-recorder

A comprehensive audio recording component with real-time waveform visualization, quality settings, and built-in playback capabilities.

**Installation:**
```bash
npx bna-ui add audio-recorder
```

**External Dependencies:** expo-audio, lucide-react-native

**Registry Dependencies:** audio-player, audio-waveform, button, text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface AudioRecorderProps {
  style?: ViewStyle;
  quality?: 'high' | 'low';
  showWaveform?: boolean;
  showTimer?: boolean;
  maxDuration?: number; // in seconds
  onRecordingComplete?: (uri: string) => void;
  onRecordingStart?: () => void;
  onRecordingStop?: () => void;
  customRecordingOptions?: RecordingOptions;
}
```

**Preview:**

![audio-recorder preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 20-42-54_1.MP4)

#### Basic Usage

```tsx
import { Audio-recorder } from '@/components/ui/audio-recorder';

export default function Example() {
  return (
    <Audio-recorder />
  );
}```


#### Advanced Examples

##### audio-recorder-demo

Full-featured audio recorder with real-time waveform and playback

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';

export function AudioRecorderDemo() {
  const handleRecordingComplete = (uri: string) => {
    console.log('Recording saved to:', uri);
  };

  const handleRecordingStart = () => {
    console.log('Recording started');
  };

  const handleRecordingStop = () => {
    console.log('Recording stopped');
  };

  return (
    <AudioRecorder
      quality='high'
      showWaveform={true}
      showTimer={true}
      maxDuration={300} // 5 minutes
      onRecordingComplete={handleRecordingComplete}
      onRecordingStart={handleRecordingStart}
      onRecordingStop={handleRecordingStop}
    />
  );
}

```

##### audio-recorder-voice

Optimized recorder for quick voice notes with time limit

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';

export function AudioRecorderVoice() {
  const handleRecordingComplete = (uri: string) => {
    // Here you could add the voice note to a list or send it
    console.log('Voice note saved:', uri);
  };

  return (
    <AudioRecorder
      quality='low'
      showWaveform={true}
      showTimer={true}
      maxDuration={120} // 2 minutes for voice notes
      onRecordingComplete={handleRecordingComplete}
    />
  );
}

```

##### audio-recorder-hq

High-quality recorder for music or professional audio

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';
import { RecordingPresets } from 'expo-audio';

export function AudioRecorderHQ() {
  const handleRecordingComplete = (uri: string) => {
    console.log('HQ recording saved:', uri);
  };

  return (
    <AudioRecorder
      quality='high'
      showWaveform={true}
      showTimer={true}
      maxDuration={1800} // 30 minutes
      customRecordingOptions={{
        ...RecordingPresets.HIGH_QUALITY,
        sampleRate: 48000,
        bitRate: 192000,
        numberOfChannels: 2,
      }}
      onRecordingComplete={handleRecordingComplete}
    />
  );
}

```

##### audio-recorder-minimal

Minimal recorder without waveform visualization

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';

export function AudioRecorderMinimal() {
  const handleRecordingComplete = (uri: string) => {
    console.log('Your audio has been recorded.', uri);
  };

  return (
    <AudioRecorder
      quality='low'
      showWaveform={false}
      showTimer={true}
      maxDuration={60} // 1 minute
      onRecordingComplete={handleRecordingComplete}
    />
  );
}

```

##### audio-recorder-styled

Audio recorder with custom styling and branding

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';

export function AudioRecorderStyled() {
  const handleRecordingComplete = (uri: string) => {
    console.log('🎵 Recording Complete', uri);
  };

  return (
    <AudioRecorder
      quality='high'
      showWaveform={true}
      showTimer={true}
      maxDuration={300}
      style={{
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 20,
        padding: 24,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
      }}
      onRecordingComplete={handleRecordingComplete}
    />
  );
}

```

##### audio-recorder-callbacks

Recorder with comprehensive callback handling

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useState } from 'react';

export function AudioRecorderCallbacks() {
  const [status, setStatus] = useState('Ready to record');
  const [recordingCount, setRecordingCount] = useState(0);

  const handleRecordingStart = () => {
    setStatus('🔴 Recording in progress...');
    console.log('Recording started');
  };

  const handleRecordingStop = () => {
    setStatus('✅ Recording stopped');
    console.log('Recording stopped');
  };

  const handleRecordingComplete = (uri: string) => {
    setRecordingCount((prev) => prev + 1);
    setStatus(`📁 Recording #${recordingCount + 1} saved`);

    // Reset status after 3 seconds
    setTimeout(() => setStatus('Ready to record'), 3000);
  };

  const getOrdinalSuffix = (num: number) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th';
    if (lastDigit === 1) return 'st';
    if (lastDigit === 2) return 'nd';
    if (lastDigit === 3) return 'rd';
    return 'th';
  };

  return (
    <View style={{ width: '100%' }}>
      <Text
        variant='body'
        style={{ marginBottom: 16, textAlign: 'center', fontWeight: '500' }}
      >
        Status: {status}
      </Text>

      <AudioRecorder
        quality='high'
        showWaveform={true}
        showTimer={true}
        maxDuration={180} // 3 minutes
        onRecordingStart={handleRecordingStart}
        onRecordingStop={handleRecordingStop}
        onRecordingComplete={handleRecordingComplete}
      />

      {recordingCount > 0 && (
        <Text variant='caption' style={{ marginTop: 12, textAlign: 'center' }}>
          Total recordings: {recordingCount}
        </Text>
      )}
    </View>
  );
}

```

##### audio-recorder-cloud

Recorder with cloud storage integration

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

export function AudioRecorderCloud() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateCloudUpload = async (uri: string): Promise<string> => {
    return new Promise((resolve) => {
      setUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            resolve(
              `https://cloud-storage.example.com/audio/${Date.now()}.m4a`
            );
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    });
  };

  const handleRecordingComplete = async (uri: string) => {
    try {
      const cloudUrl = await simulateCloudUpload(uri);

      console.log(`Recording uploaded to cloud storage!\n\nURL: ${cloudUrl}`);

      setUploadProgress(0);
    } catch (error) {
      console.log('Failed to upload recording to cloud storage.');

      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <View style={{ width: '100%' }}>
      <AudioRecorder
        quality='high'
        showWaveform={true}
        showTimer={true}
        maxDuration={600} // 10 minutes
        onRecordingComplete={handleRecordingComplete}
      />

      {uploading && (
        <View style={{ marginTop: 16, alignItems: 'center' }}>
          <ActivityIndicator size='small' />
          <Text variant='caption' style={{ marginTop: 8 }}>
            Uploading... {uploadProgress}%
          </Text>
        </View>
      )}
    </View>
  );
}

```

##### audio-recorder-interview

Long-form recorder optimized for interviews and meetings

```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { RecordingPresets } from 'expo-audio';
import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

export function AudioRecorderInterview() {
  const [interviewTitle, setInterviewTitle] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingStart = () => {
    setIsRecording(true);
    const title = `Interview ${new Date().toLocaleDateString()}`;
    setInterviewTitle(title);
  };

  const handleRecordingStop = () => {
    setIsRecording(false);
  };

  const handleRecordingComplete = (uri: string) => {
    Alert.alert(
      '🎤 Interview Complete',
      `"${interviewTitle}" has been recorded and saved.\n\nDuration: Available in file metadata\nQuality: High (48kHz, Stereo)`,
      [{ text: 'Save & Exit' }]
    );
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.interviewHeader}>
        <Text variant='title' style={styles.interviewTitle}>
          {interviewTitle || 'Ready for Interview'}
        </Text>

        <View
          style={[styles.statusBadge, isRecording && styles.recordingBadge]}
        >
          <Text
            style={[styles.statusText, isRecording && styles.recordingText]}
          >
            {isRecording ? '🔴 LIVE' : '⏸️ READY'}
          </Text>
        </View>
      </View>

      <AudioRecorder
        quality='high'
        showWaveform={true}
        showTimer={true}
        maxDuration={7200} // 2 hours for long interviews
        customRecordingOptions={{
          ...RecordingPresets.HIGH_QUALITY,
          sampleRate: 48000,
          bitRate: 128000,
          numberOfChannels: 2,
          isMeteringEnabled: true,
        }}
        onRecordingStart={handleRecordingStart}
        onRecordingStop={handleRecordingStop}
        onRecordingComplete={handleRecordingComplete}
      />

      <Text variant='caption' style={{ marginTop: 12, textAlign: 'center' }}>
        Maximum duration: 2 hours • High quality stereo recording
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  interviewHeader: {
    marginBottom: 16,
    alignItems: 'center',
  },
  interviewTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
  },
  recordingBadge: {
    backgroundColor: '#fef2f2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
  },
  recordingText: {
    color: '#dc2626',
  },
});

```
---

### audio-waveform

A customizable audio waveform visualization component with playback progress and interactive seeking capabilities.

**Installation:**
```bash
npx bna-ui add audio-waveform
```

**Registry Dependencies:** text, view

#### Props Interface

```typescript
export interface AudioWaveformProps {
  data?: number[]; // Audio amplitude data
  isPlaying?: boolean;
  progress?: number; // 0-100
  onSeek?: (position: number) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
  style?: ViewStyle;
  height?: number;
  barCount?: number;
  barWidth?: number;
  barGap?: number;
  activeColor?: string;
  inactiveColor?: string;
  animated?: boolean;
  showProgress?: boolean;
  interactive?: boolean; // New prop to enable seeking
}
```

**Preview:**

![audio-waveform preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 21-16-42_1.MP4)

#### Basic Usage

```tsx
import { Audio-waveform } from '@/components/ui/audio-waveform';

export default function Example() {
  return (
    <Audio-waveform />
  );
}```


#### Advanced Examples

##### audio-waveform-demo

A basic audio waveform with playback controls and progress tracking

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function AudioWaveformDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate audio playback progress
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSeek = (position: number) => {
    setProgress(position);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{ gap: 16 }}>
      <AudioWaveform
        isPlaying={isPlaying}
        progress={progress}
        showProgress={true}
        interactive={true}
        onSeek={handleSeek}
        height={60}
        barCount={40}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Button onPress={togglePlayback} style={{ flex: 0 }}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Text variant='caption'>{Math.round(progress)}% Complete</Text>
      </View>
    </View>
  );
}

```

##### audio-waveform-recording

An animated waveform for recording visualization with real-time audio levels

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function AudioWaveformRecording() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingData, setRecordingData] = useState<number[]>([]);
  const [duration, setDuration] = useState(0);

  // Simulate recording with real-time audio levels
  useEffect(() => {
    let interval: number;
    if (isRecording) {
      interval = setInterval(() => {
        // Generate random audio level (simulating microphone input)
        const newLevel = Math.max(
          0.1,
          Math.random() * 0.9 + Math.sin(Date.now() / 200) * 0.2
        );

        setRecordingData((prev) => {
          const newData = [...prev, newLevel];
          // Keep only the last 50 data points
          return newData.slice(-50);
        });

        setDuration((prev) => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    if (!isRecording) {
      setRecordingData([]);
      setDuration(0);
    }
    setIsRecording(!isRecording);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          backgroundColor: isRecording ? '#FF3B30' : '#34C759',
          padding: 12,
          borderRadius: 12,
          opacity: 0.1,
        }}
      />

      <AudioWaveform
        data={recordingData}
        isPlaying={isRecording}
        animated={true}
        showProgress={false}
        height={60}
        barCount={50}
        activeColor={isRecording ? '#FF3B30' : '#34C759'}
        style={{
          backgroundColor: isRecording
            ? 'rgba(255, 59, 48, 0.05)'
            : 'rgba(52, 199, 89, 0.05)',
          borderRadius: 8,
          paddingHorizontal: 8,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onPress={toggleRecording}
          variant={isRecording ? 'destructive' : 'default'}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
        <Text variant='caption'>{formatDuration(duration)}</Text>
      </View>

      {recordingData.length > 0 && !isRecording && (
        <Text variant='caption' style={{ textAlign: 'center', opacity: 0.6 }}>
          Tap play to preview your recording
        </Text>
      )}
    </View>
  );
}

```

##### audio-waveform-interactive

A waveform with touch-based seeking functionality and custom audio data

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function AudioWaveformInteractive() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  // Sample audio data - more realistic pattern
  const audioData = [
    0.2, 0.4, 0.3, 0.6, 0.8, 0.5, 0.7, 0.9, 0.4, 0.3, 0.5, 0.7, 0.6, 0.8, 0.9,
    0.7, 0.5, 0.3, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.5, 0.3,
    0.4, 0.6, 0.9, 0.8, 0.6, 0.4, 0.2, 0.3, 0.5, 0.7,
  ];

  // Auto-play simulation
  useEffect(() => {
    let interval: number;
    if (isPlaying && !isSeeking) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isSeeking]);

  const handleSeek = (position: number) => {
    setProgress(position);
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (percentage: number) => {
    const totalSeconds = 180; // 3 minutes total
    const currentSeconds = (percentage / 100) * totalSeconds;
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = Math.floor(currentSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ gap: 16 }}>
      <AudioWaveform
        data={audioData}
        isPlaying={isPlaying}
        progress={progress}
        showProgress={true}
        interactive={true}
        onSeek={handleSeek}
        onSeekStart={handleSeekStart}
        onSeekEnd={handleSeekEnd}
        height={80}
        barCount={40}
        barWidth={4}
        barGap={2}
        activeColor='#007AFF'
        inactiveColor='#E5E5E7'
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,
        }}
      >
        <Text variant='caption' style={{ opacity: 0.6 }}>
          {formatTime(progress)}
        </Text>
        <Text variant='caption' style={{ opacity: 0.6 }}>
          3:00
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Button onPress={togglePlayback}>{isPlaying ? 'Pause' : 'Play'}</Button>

        <Button
          variant='outline'
          onPress={() => setProgress(0)}
          disabled={progress === 0}
        >
          Reset
        </Button>

        {isSeeking && (
          <Text variant='caption' style={{ color: '#007AFF' }}>
            Seeking...
          </Text>
        )}
      </View>
    </View>
  );
}

```

##### audio-waveform-styled

Multiple themed waveforms with custom colors, dimensions, and styles

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function AudioWaveformStyled() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [progress1, setProgress1] = useState(35);
  const [progress2, setProgress2] = useState(60);
  const [progress3, setProgress3] = useState(80);

  const musicData = [
    0.1, 0.3, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.6, 0.4, 0.5, 0.7, 0.8, 0.9, 0.7,
    0.5, 0.3, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.5, 0.3, 0.4,
  ];

  const voiceData = [
    0.2, 0.4, 0.3, 0.5, 0.4, 0.6, 0.5, 0.7, 0.4, 0.3, 0.5, 0.4, 0.6, 0.5, 0.4,
    0.3, 0.4, 0.5, 0.6, 0.4, 0.3, 0.5, 0.4, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.3,
  ];

  const podcastData = [
    0.3, 0.5, 0.4, 0.6, 0.5, 0.4, 0.6, 0.7, 0.5, 0.4, 0.6, 0.5, 0.7, 0.6, 0.5,
    0.4, 0.5, 0.6, 0.7, 0.5, 0.4, 0.6, 0.5, 0.4, 0.5, 0.6, 0.5, 0.4, 0.3, 0.4,
  ];

  return (
    <View style={{ gap: 24 }}>
      {/* Music Style - Vibrant gradient colors */}
      <View
        style={{
          padding: 16,
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 16,
          shadowColor: '#667eea',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        }}
      >
        <Text
          variant='body'
          style={{ color: 'white', marginBottom: 12, fontWeight: 'bold' }}
        >
          🎵 Music Track
        </Text>
        <AudioWaveform
          data={musicData}
          isPlaying={isPlaying1}
          progress={progress1}
          showProgress={true}
          interactive={true}
          onSeek={setProgress1}
          height={60}
          barCount={30}
          barWidth={4}
          barGap={3}
          activeColor='#FFD700'
          inactiveColor='rgba(255, 255, 255, 0.3)'
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        >
          <Button
            onPress={() => setIsPlaying1(!isPlaying1)}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            {isPlaying1 ? '⏸️' : '▶️'}
          </Button>
          <Text style={{ color: 'white', opacity: 0.8 }}>2:15 / 3:45</Text>
        </View>
      </View>

      {/* Voice Message Style - Clean and minimal */}
      <View
        style={{
          padding: 16,
          backgroundColor: 'teal',
          borderRadius: 12,
          borderLeftWidth: 4,
          borderLeftColor: '#34C759',
        }}
      >
        <Text variant='body' style={{ marginBottom: 12, fontWeight: '600' }}>
          🎙️ Voice Message
        </Text>
        <AudioWaveform
          data={voiceData}
          isPlaying={isPlaying2}
          progress={progress2}
          showProgress={true}
          interactive={true}
          onSeek={setProgress2}
          height={40}
          barCount={25}
          barWidth={3}
          barGap={2}
          activeColor='#34C759'
          inactiveColor='#E5E5E7'
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Button
            onPress={() => setIsPlaying2(!isPlaying2)}
            variant='outline'
            style={{
              borderColor: '#34C759',
              borderRadius: 20,
              paddingHorizontal: 16,
            }}
          >
            {isPlaying2 ? 'Pause' : 'Play'}
          </Button>
          <Text variant='caption'>0:45</Text>
        </View>
      </View>

      {/* Podcast Style - Professional dark theme */}
      <View
        style={{
          padding: 16,
          backgroundColor: '#1C1C1E',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#2C2C2E',
        }}
      >
        <Text
          variant='body'
          style={{ color: 'white', marginBottom: 12, fontWeight: 'bold' }}
        >
          🎧 Podcast Episode
        </Text>
        <AudioWaveform
          data={podcastData}
          isPlaying={isPlaying3}
          progress={progress3}
          showProgress={true}
          interactive={true}
          onSeek={setProgress3}
          height={70}
          barCount={35}
          barWidth={2}
          barGap={1}
          activeColor='#FF6B6B'
          inactiveColor='#48484A'
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button
              onPress={() => setIsPlaying3(!isPlaying3)}
              style={{
                backgroundColor: '#FF6B6B',
                borderRadius: 8,
                paddingHorizontal: 12,
              }}
            >
              {isPlaying3 ? '⏸️' : '▶️'}
            </Button>
            <Button
              variant='outline'
              style={{
                borderColor: '#48484A',
                borderRadius: 8,
              }}
            >
              1.5x
            </Button>
          </View>
          <Text style={{ color: 'white', opacity: 0.6 }}>45:30 / 58:15</Text>
        </View>
      </View>
    </View>
  );
}

```

##### audio-waveform-realtime

A waveform that updates with real-time audio data and configurable patterns

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function AudioWaveformRealtime() {
  const [isActive, setIsActive] = useState(false);
  const [realtimeData, setRealtimeData] = useState<number[]>([]);
  const [frequency, setFrequency] = useState(1);
  const [amplitude, setAmplitude] = useState(0.5);

  // Simulate real-time audio data with different patterns
  useEffect(() => {
    let interval: number;
    if (isActive) {
      interval = setInterval(() => {
        const time = Date.now() / 1000;

        // Generate different wave patterns based on frequency and amplitude
        let newLevel = 0;

        if (frequency === 1) {
          // Sine wave
          newLevel = Math.abs(Math.sin(time * 2) * amplitude);
        } else if (frequency === 2) {
          // Multiple frequencies combined
          newLevel = Math.abs(
            ((Math.sin(time * 3) +
              Math.sin(time * 1.5) +
              Math.sin(time * 0.8)) /
              3) *
              amplitude
          );
        } else {
          // Random with trend
          newLevel = Math.max(
            0,
            Math.min(1, Math.random() * amplitude + Math.sin(time * 0.5) * 0.3)
          );
        }

        setRealtimeData((prev) => {
          const newData = [...prev, newLevel];
          // Keep only the last 60 data points for smooth animation
          return newData.slice(-60);
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isActive, frequency, amplitude]);

  const resetData = () => {
    setRealtimeData([]);
  };

  const patternButtons = [
    { id: 1, label: 'Sine Wave', color: '#007AFF' },
    { id: 2, label: 'Complex', color: '#34C759' },
    { id: 3, label: 'Random', color: '#FF9500' },
  ];

  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          padding: 16,
          backgroundColor: isActive
            ? 'rgba(0, 122, 255, 0.05)'
            : 'rgba(142, 142, 147, 0.05)',
          borderRadius: 12,
          borderWidth: 2,
          borderColor: isActive ? '#007AFF' : '#E5E5E7',
          borderStyle: isActive ? 'solid' : 'dashed',
        }}
      >
        <Text variant='body' style={{ marginBottom: 12, fontWeight: 'bold' }}>
          Real-time Audio Visualization
        </Text>

        <AudioWaveform
          data={realtimeData}
          isPlaying={isActive}
          animated={true}
          showProgress={false}
          height={80}
          barCount={60}
          barWidth={2}
          barGap={1}
          activeColor={
            frequency === 1
              ? '#007AFF'
              : frequency === 2
              ? '#34C759'
              : '#FF9500'
          }
          inactiveColor='#E5E5E7'
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text variant='caption' style={{ opacity: 0.6 }}>
            {realtimeData.length} data points
          </Text>
          <Text variant='caption' style={{ opacity: 0.6 }}>
            {isActive ? 'Live' : 'Stopped'}
          </Text>
        </View>
      </View>

      {/* Controls */}
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button
            onPress={() => setIsActive(!isActive)}
            style={{
              backgroundColor: isActive ? '#FF3B30' : '#34C759',
              flex: 1,
            }}
          >
            {isActive ? 'Stop Stream' : 'Start Stream'}
          </Button>
          <Button
            onPress={resetData}
            variant='outline'
            disabled={realtimeData.length === 0}
          >
            Clear
          </Button>
        </View>

        {/* Pattern Selection */}
        <View>
          <Text variant='caption' style={{ marginBottom: 8, opacity: 0.7 }}>
            Wave Pattern:
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {patternButtons.map((pattern) => (
              <Button
                key={pattern.id}
                onPress={() => setFrequency(pattern.id)}
                variant={frequency === pattern.id ? 'default' : 'outline'}
                style={{
                  flex: 1,
                  backgroundColor:
                    frequency === pattern.id ? pattern.color : 'transparent',
                  borderColor: pattern.color,
                }}
              >
                <Text
                  style={{
                    color: frequency === pattern.id ? 'white' : pattern.color,
                    fontSize: 12,
                  }}
                >
                  {pattern.label}
                </Text>
              </Button>
            ))}
          </View>
        </View>

        {/* Amplitude Control */}
        <View>
          <Text variant='caption' style={{ marginBottom: 8, opacity: 0.7 }}>
            Amplitude: {Math.round(amplitude * 100)}%
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Button
              size='icon'
              variant='outline'
              onPress={() => setAmplitude(Math.max(0.1, amplitude - 0.1))}
            >
              -
            </Button>
            <View
              style={{
                flex: 1,
                height: 4,
                backgroundColor: '#E5E5E7',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  width: `${amplitude * 100}%`,
                  height: '100%',
                  backgroundColor: '#007AFF',
                }}
              />
            </View>
            <Button
              size='icon'
              variant='outline'
              onPress={() => setAmplitude(Math.min(1, amplitude + 0.1))}
            >
              +
            </Button>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 12,
          backgroundColor: 'rgba(255, 149, 0, 0.05)',
          borderRadius: 8,
        }}
      >
        <Text variant='caption' style={{ textAlign: 'center', opacity: 0.7 }}>
          Simulates real-time audio input with different wave patterns
        </Text>
      </View>
    </View>
  );
}

```

##### audio-waveform-compact

Compact waveforms suitable for chat messages and minimal interfaces

```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function AudioWaveformCompact() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [progress1, setProgress1] = useState(20);
  const [progress2, setProgress2] = useState(45);
  const [progress3, setProgress3] = useState(70);

  // Compact chat message data
  const messageData1 = [
    0.3, 0.5, 0.4, 0.6, 0.3, 0.4, 0.5, 0.3, 0.4, 0.6, 0.5, 0.3, 0.4, 0.5, 0.3,
  ];
  const messageData2 = [
    0.2, 0.4, 0.6, 0.5, 0.3, 0.5, 0.4, 0.6, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.3,
  ];
  const messageData3 = [
    0.4, 0.6, 0.5, 0.7, 0.4, 0.3, 0.5, 0.6, 0.4, 0.5, 0.6, 0.5, 0.4, 0.3, 0.4,
  ];

  const MessageBubble = ({
    data,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    duration,
    sent = false,
  }: {
    data: number[];
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    progress: number;
    setProgress: (progress: number) => void;
    duration: string;
    sent?: boolean;
  }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: sent ? 'flex-end' : 'flex-start',
        backgroundColor: sent ? '#007AFF' : '#F0F0F0',
        borderRadius: 18,
        padding: 8,
        maxWidth: '80%',
        gap: 8,
      }}
    >
      <Button
        onPress={() => setIsPlaying(!isPlaying)}
        variant='ghost'
        size='icon'
      >
        {isPlaying ? '⏸️' : '▶️'}
      </Button>

      <View style={{ flex: 1 }}>
        <AudioWaveform
          data={data}
          isPlaying={isPlaying}
          progress={progress}
          showProgress={true}
          interactive={true}
          onSeek={setProgress}
          height={24}
          barCount={15}
          barWidth={2}
          barGap={1}
          activeColor={sent ? 'white' : '#007AFF'}
          inactiveColor={sent ? 'rgba(255, 255, 255, 0.4)' : '#C7C7CC'}
        />
      </View>

      <Text
        style={{
          color: sent ? 'rgba(255, 255, 255, 0.8)' : '#8E8E93',
          fontSize: 11,
          minWidth: 28,
        }}
      >
        {duration}
      </Text>
    </View>
  );

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 12 }}>
        <MessageBubble
          data={messageData1}
          isPlaying={isPlaying1}
          setIsPlaying={setIsPlaying1}
          progress={progress1}
          setProgress={setProgress1}
          duration='0:12'
          sent={false}
        />

        <MessageBubble
          data={messageData2}
          isPlaying={isPlaying2}
          setIsPlaying={setIsPlaying2}
          progress={progress2}
          setProgress={setProgress2}
          duration='0:08'
          sent={true}
        />

        <MessageBubble
          data={messageData3}
          isPlaying={isPlaying3}
          setIsPlaying={setIsPlaying3}
          progress={progress3}
          setProgress={setProgress3}
          duration='0:15'
          sent={false}
        />
      </View>
    </View>
  );
}

```
---

### avatar

An image element with a fallback for representing the user.

**Installation:**
```bash
npx bna-ui add avatar
```

**External Dependencies:** expo-image

**Registry Dependencies:** text, view, image

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![avatar preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5446.PNG)

#### Basic Usage

```tsx
import { Avatar } from '@/components/ui/avatar';

export default function Example() {
  return (
    <Avatar />
  );
}```


#### Advanced Examples

##### avatar-demo

A basic avatar with image and fallback text

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        source={{ uri: 'https://avatars.githubusercontent.com/u/99088394?v=4' }}
      />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  );
}

```

##### avatar-sizes

Avatars in different sizes

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarSizes() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Avatar size={24}>
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback textStyle={{ fontSize: 10 }}>AB</AvatarFallback>
      </Avatar>

      <Avatar size={32}>
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback textStyle={{ fontSize: 12 }}>AB</AvatarFallback>
      </Avatar>

      <Avatar size={40}>
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar size={56}>
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback textStyle={{ fontSize: 18 }}>AB</AvatarFallback>
      </Avatar>

      <Avatar size={72}>
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback textStyle={{ fontSize: 24 }}>AB</AvatarFallback>
      </Avatar>
    </View>
  );
}

```

##### avatar-fallback

Avatars with fallback text when no image is provided

```tsx
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarFallbackDemo() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
    </View>
  );
}

```

##### avatar-styled

Avatars with custom styling and colors

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarStyled() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Avatar
        size={56}
        style={{
          borderWidth: 3,
          borderColor: '#3b82f6',
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback
          style={{ backgroundColor: '#3b82f6' }}
          textStyle={{ color: 'white', fontWeight: 'bold' }}
        >
          AB
        </AvatarFallback>
      </Avatar>

      <Avatar
        size={56}
        style={{
          borderWidth: 3,
          borderColor: '#10b981',
        }}
      >
        <AvatarFallback
          style={{ backgroundColor: '#10b981' }}
          textStyle={{ color: 'white', fontWeight: 'bold' }}
        >
          BNA
        </AvatarFallback>
      </Avatar>

      <Avatar
        size={56}
        style={{
          borderWidth: 3,
          borderColor: '#f59e0b',
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4',
          }}
        />
        <AvatarFallback
          style={{ backgroundColor: '#f59e0b' }}
          textStyle={{ color: 'white', fontWeight: 'bold' }}
        >
          EX
        </AvatarFallback>
      </Avatar>
    </View>
  );
}

```

##### avatar-group

Multiple avatars arranged in a group layout

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarGroup() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Avatar
        size={48}
        style={{
          borderWidth: 2,
          borderColor: 'white',
          zIndex: 4,
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar
        size={48}
        style={{
          borderWidth: 2,
          borderColor: 'white',
          marginLeft: -12,
          zIndex: 3,
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://reactnative.dev/img/header_logo.svg',
          }}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar
        size={48}
        style={{
          borderWidth: 2,
          borderColor: 'white',
          marginLeft: -12,
          zIndex: 2,
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4',
          }}
        />
        <AvatarFallback>EX</AvatarFallback>
      </Avatar>

      <Avatar
        size={48}
        style={{
          borderWidth: 2,
          borderColor: 'white',
          marginLeft: -12,
          zIndex: 1,
        }}
      >
        <AvatarFallback
          style={{ backgroundColor: '#6b7280' }}
          textStyle={{ color: 'white', fontSize: 12 }}
        >
          +5
        </AvatarFallback>
      </Avatar>
    </View>
  );
}

```

##### avatar-status

Avatars with online/offline status indicators

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarStatus() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
      <View style={{ position: 'relative' }}>
        <Avatar size={56}>
          <AvatarImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
            }}
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#10b981',
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>

      <View style={{ position: 'relative' }}>
        <Avatar size={56}>
          <AvatarFallback>BNA</AvatarFallback>
        </Avatar>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#ef4444',
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>

      <View style={{ position: 'relative' }}>
        <Avatar size={56}>
          <AvatarImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4',
            }}
          />
          <AvatarFallback>EX</AvatarFallback>
        </Avatar>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#f59e0b',
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>
    </View>
  );
}

```

##### avatar-bordered

Avatars with custom borders and shadows

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvatarBordered() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Avatar
        size={64}
        style={{
          borderWidth: 4,
          borderColor: '#3b82f6',
          shadowColor: '#3b82f6',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
          }}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar
        size={64}
        style={{
          borderWidth: 4,
          borderColor: '#10b981',
          shadowColor: '#10b981',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <AvatarFallback>BNA</AvatarFallback>
      </Avatar>

      <Avatar
        size={64}
        style={{
          borderWidth: 4,
          borderColor: '#f59e0b',
          shadowColor: '#f59e0b',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <AvatarImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4',
          }}
        />
        <AvatarFallback>EX</AvatarFallback>
      </Avatar>
    </View>
  );
}

```
---

### avoid-keyboard

A component that automatically adjusts its height to avoid keyboard overlap with smooth animations and cross-platform support.

**Installation:**
```bash
npx bna-ui add avoid-keyboard
```

**External Dependencies:** react-native-reanimated

**Required Hooks:** useKeyboardHeight

**Preview:**

![avoid-keyboard preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-25-2025 14-49-51_1.MP4)

#### Basic Usage

```tsx
import { Avoid-keyboard } from '@/components/ui/avoid-keyboard';

export default function Example() {
  return (
    <Avoid-keyboard />
  );
}```


#### Advanced Examples

##### avoid-keyboard-demo

Simple keyboard avoidance with default settings

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';
import React from 'react';

export function AvoidKeyboardDemo() {
  const { keyboardHeight, isKeyboardVisible, keyboardAnimationDuration } =
    useKeyboardHeight();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant='title' style={{ marginBottom: 20 }}>
        Basic Keyboard Avoidance
      </Text>

      <Text variant='body' style={{ marginBottom: 30, opacity: 0.7 }}>
        Tap the input below to see the keyboard avoidance in action. The content
        will smoothly move up to keep the input visible.
      </Text>

      {/* Spacer to push input toward bottom */}

      <View style={{ flex: 1 }}>
        <Text>Keyboard Height: {keyboardHeight}</Text>
        <Text>Keyboard Visible: {isKeyboardVisible ? 'Yes' : 'No'}</Text>
        <Text>Animation Duration: {keyboardAnimationDuration}ms</Text>
      </View>

      <Input placeholder='Type your message here...' label='Message' />

      {/* This will create space to avoid the keyboard */}
      <AvoidKeyboard />
    </View>
  );
}

```

##### avoid-keyboard-offset

Add extra spacing above the keyboard

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function AvoidKeyboardOffset() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant='title' style={{ marginBottom: 20 }}>
        With Extra Offset
      </Text>

      <Text variant='body' style={{ marginBottom: 30, opacity: 0.7 }}>
        This example adds 40px of extra spacing above the keyboard for better
        visual separation.
      </Text>

      {/* Spacer to push input toward bottom */}
      <View style={{ flex: 1 }} />

      <Input
        placeholder='Notice the extra space above keyboard...'
        label='Message'
      />

      {/* Add 40px extra spacing above keyboard */}
      <AvoidKeyboard offset={40} />
    </View>
  );
}

```

##### avoid-keyboard-duration

Customize animation timing for different effects

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function AvoidKeyboardDuration() {
  const [duration, setDuration] = useState(0);

  const durations = [
    { label: 'Default', value: 0 },
    { label: 'Fast (100ms)', value: 100 },
    { label: 'Slow (500ms)', value: 500 },
    { label: 'Very Slow (1000ms)', value: 1000 },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant='title' style={{ marginBottom: 20 }}>
        Custom Animation Duration
      </Text>

      <Text variant='body' style={{ marginBottom: 20, opacity: 0.7 }}>
        Choose different animation speeds to see how it affects the keyboard
        avoidance:
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 20,
        }}
      >
        {durations.map((item) => (
          <Button
            key={item.value}
            variant={duration === item.value ? 'default' : 'secondary'}
            size='sm'
            onPress={() => setDuration(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </View>

      <Text variant='caption' style={{ marginBottom: 30, opacity: 0.6 }}>
        Current duration: {duration}ms extra
      </Text>

      {/* Spacer to push input toward bottom */}
      <View style={{ flex: 1 }} />

      <Input placeholder='Tap to test animation speed...' label='Test Input' />

      {/* Use custom duration */}
      <AvoidKeyboard duration={duration} />
    </View>
  );
}

```

##### avoid-keyboard-chat

Real-world chat interface example

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Send, SendHorizonal } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AvoidKeyboardChat() {
  const card = useThemeColor({}, 'card');
  const blue = useThemeColor({}, 'blue');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! How are you doing?',
      isUser: false,
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: '2',
      text: "Hi there! I'm doing great, thanks for asking!",
      isUser: true,
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: '3',
      text: "That's wonderful to hear! Any exciting plans for today?",
      isUser: false,
      timestamp: new Date(Date.now() - 180000),
    },
    {
      id: '4',
      text: "Actually yes! I'm working on some new React Native components.",
      isUser: true,
      timestamp: new Date(Date.now() - 120000),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText.trim(),
        isUser: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputText('');

      // Simulate response after a delay
      setTimeout(() => {
        const responses = [
          'That sounds interesting!',
          'Tell me more about that.',
          "Cool! How's it going?",
          'Nice work!',
        ];
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: responses[Math.floor(Math.random() * responses.length)],
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={{
        marginBottom: 12,
        alignItems: item.isUser ? 'flex-end' : 'flex-start',
      }}
    >
      <View
        style={{
          maxWidth: '80%',
          padding: 12,
          borderRadius: 16,
          backgroundColor: item.isUser ? blue : '#F2F2F7',
        }}
      >
        <Text
          style={{
            color: item.isUser ? 'white' : '#000',
            fontSize: 16,
          }}
        >
          {item.text}
        </Text>
        <Text
          style={{
            color: item.isUser ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)',
            fontSize: 12,
            marginTop: 4,
          }}
        >
          {item.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <Text variant='title'>Chat Demo</Text>
        <Text variant='caption' style={{ opacity: 0.6, marginTop: 4 }}>
          Real-time chat with keyboard avoidance
        </Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Area */}
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          gap: 12,
          backgroundColor: card,
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            value={inputText}
            onChangeText={setInputText}
            placeholder='Type a message...'
            variant='outline'
            onSubmitEditing={sendMessage}
            returnKeyType='send'
          />
        </View>
        <Button
          onPress={sendMessage}
          variant={inputText.trim() ? 'success' : 'outline'}
          size='icon'
        >
          <SendHorizonal size={20} color='white' />
        </Button>
      </View>

      {/* Keyboard avoidance with extra space for better UX */}
      <AvoidKeyboard />
    </View>
  );
}

```

##### avoid-keyboard-form

Form with multiple inputs and keyboard avoidance

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Mail, Lock, User, Phone, MessageSquare } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

export function AvoidKeyboardForm() {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    password: '',
    confrim: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.first.trim()) {
      newErrors.first = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        first: '',
        last: '',
        email: '',
        phone: '',
        password: '',
        confrim: '',
        message: '',
      });
      setErrors({});
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ padding: 20 }}>
        <Text variant='title' style={{ marginBottom: 8 }}>
          Registration Form
        </Text>
        <Text variant='body' style={{ opacity: 0.7 }}>
          Fill out the form below. Notice how the keyboard avoidance keeps
          inputs visible.
        </Text>
      </View>

      {/* Form Content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, gap: 16 }}
        keyboardShouldPersistTaps='handled'
      >
        <Input
          label='Frist Name'
          placeholder='Enter your first name'
          icon={User}
          value={formData.first}
          onChangeText={(value) => updateField('first', value)}
          error={errors.first}
        />

        <Input
          label='Last Name'
          placeholder='Enter your last name'
          icon={User}
          value={formData.last}
          onChangeText={(value) => updateField('last', value)}
          error={errors.last}
        />

        <Input
          label='Email'
          placeholder='Enter your email'
          icon={Mail}
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
          error={errors.email}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input
          label='Confirm'
          placeholder='Confirm your email'
          icon={Mail}
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
          error={errors.email}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input
          label='Phone'
          placeholder='Enter your phone number'
          icon={Phone}
          value={formData.phone}
          onChangeText={(value) => updateField('phone', value)}
          error={errors.phone}
          keyboardType='phone-pad'
        />

        <Input
          label='Password'
          placeholder='Create a password'
          icon={Lock}
          value={formData.password}
          onChangeText={(value) => updateField('password', value)}
          error={errors.password}
          secureTextEntry
        />

        <Input
          label='Confirm'
          placeholder='Confirm password'
          icon={Lock}
          value={formData.confrim}
          onChangeText={(value) => updateField('confrim', value)}
          error={errors.confrim}
          secureTextEntry
        />

        <Button onPress={handleSubmit} style={{ marginBottom: 20 }}>
          Create Account
        </Button>

        <Text variant='caption' style={{ textAlign: 'center', opacity: 0.6 }}>
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </Text>
      </ScrollView>

      {/* Keyboard avoidance for the form */}
      <AvoidKeyboard />
    </View>
  );
}

```

##### avoid-keyboard-playground

Playground to test different configurations

```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Settings, Keyboard, Smartphone } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Switch } from 'react-native';

export function AvoidKeyboardPlayground() {
  const [message, setMessage] = useState('');
  const [offset, setOffset] = useState(20);
  const [duration, setDuration] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const card = useThemeColor({}, 'card');

  // Get keyboard stats for debugging
  const { keyboardHeight, isKeyboardVisible, keyboardAnimationDuration } =
    useKeyboardHeight();

  const presetOffsets = [0, 10, 20, 40, 60];
  const presetDurations = [0, 100, 250, 500];

  return (
    <View style={{ flex: 1 }}>
      {/* Controls */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20 }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Header */}
        <View
          style={{
            padding: 20,
          }}
        >
          <Text variant='title' style={{ marginBottom: 8 }}>
            AvoidKeyboard Playground
          </Text>
          <Text variant='body' style={{ opacity: 0.7 }}>
            Test different configurations and see real-time keyboard stats
          </Text>
        </View>

        {/* Debug Stats Toggle */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            padding: 16,
            backgroundColor: card,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Settings size={16} color='#666' />
            <Text variant='body'>Show Keyboard Stats</Text>
          </View>
          <Switch value={showStats} onValueChange={setShowStats} />
        </View>

        {/* Keyboard Stats */}
        {showStats && (
          <View
            style={{
              marginBottom: 20,
              padding: 16,
              backgroundColor: card,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
                gap: 8,
              }}
            >
              <Keyboard
                size={16}
                color={isKeyboardVisible ? '#4CAF50' : '#666'}
              />
              <Text variant='subtitle' style={{ fontWeight: '600' }}>
                Keyboard Status
              </Text>
            </View>
            <Text variant='caption' style={{ marginBottom: 4 }}>
              Visible: {isKeyboardVisible ? '✅ Yes' : '❌ No'}
            </Text>
            <Text variant='caption' style={{ marginBottom: 4 }}>
              Height: {keyboardHeight}px
            </Text>
            <Text variant='caption'>
              Animation Duration: {keyboardAnimationDuration}ms
            </Text>
          </View>
        )}

        {/* Offset Controls */}
        <View style={{ marginBottom: 20 }}>
          <Text
            variant='subtitle'
            style={{ marginBottom: 12, fontWeight: '600' }}
          >
            Offset Configuration
          </Text>
          <Text variant='caption' style={{ marginBottom: 12, opacity: 0.7 }}>
            Extra space above keyboard: {offset}px
          </Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {presetOffsets.map((value) => (
              <Button
                key={value}
                size='sm'
                variant={offset === value ? 'default' : 'secondary'}
                onPress={() => setOffset(value)}
              >
                {`${value}px`}
              </Button>
            ))}
          </View>
        </View>

        {/* Duration Controls */}
        <View style={{ marginBottom: 20 }}>
          <Text
            variant='subtitle'
            style={{ marginBottom: 12, fontWeight: '600' }}
          >
            Animation Duration
          </Text>
          <Text variant='caption' style={{ marginBottom: 12, opacity: 0.7 }}>
            Extra animation time: {duration}ms
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {presetDurations.map((value) => (
              <Button
                key={value}
                variant={duration === value ? 'default' : 'secondary'}
                size='sm'
                onPress={() => setDuration(value)}
              >
                {value === 0 ? 'Default' : `${value}ms`}
              </Button>
            ))}
          </View>
        </View>

        {/* Usage Examples */}
        <View style={{ marginBottom: 20 }}>
          <Text
            variant='subtitle'
            style={{ marginBottom: 12, fontWeight: '600' }}
          >
            Code Example
          </Text>
          <View
            style={{
              padding: 16,
              backgroundColor: card,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontFamily: 'monospace' }}>
              {`<AvoidKeyboard${offset > 0 ? ` offset={${offset}}` : ''}${
                duration > 0 ? ` duration={${duration}}` : ''
              } />`}
            </Text>
          </View>
        </View>

        {/* Spacer to push test input to bottom */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Test Input Area */}
      <View
        style={{
          padding: 20,
          backgroundColor: card,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
            gap: 8,
          }}
        >
          <Smartphone size={16} color='#666' />
          <Text variant='subtitle' style={{ fontWeight: '600' }}>
            Test Input
          </Text>
        </View>

        <Input
          value={message}
          onChangeText={setMessage}
          placeholder='Tap here to test keyboard avoidance...'
          variant='outline'
          type='textarea'
          rows={3}
        />

        <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
          <Button
            variant='secondary'
            size='sm'
            onPress={() => setMessage('')}
            style={{ flex: 1 }}
          >
            Clear
          </Button>
          <Button
            size='sm'
            onPress={() =>
              setMessage(
                'This is a test message to see how the keyboard avoidance works with different configurations!'
              )
            }
            style={{ flex: 1 }}
          >
            Fill Text
          </Button>
        </View>
      </View>

      {/* The actual AvoidKeyboard component */}
      <AvoidKeyboard offset={offset} duration={duration} />
    </View>
  );
}

```
---

### badge

A small status descriptor for UI elements.

**Installation:**
```bash
npx bna-ui add badge
```

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![badge preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5453.PNG)

#### Basic Usage

```tsx
import { Badge } from '@/components/ui/badge';

export default function Example() {
  return (
    <Badge />
  );
}```


#### Advanced Examples

##### badge-demo

Basic badges showing all available variants

```tsx
import { Badge } from '@/components/ui/badge';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeDemo() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Badge>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
    </View>
  );
}

```

##### badge-icons

Badges with icons and custom content

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeIcons() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Badge>★ Featured</Badge>

      <Badge variant='success'>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 12 }}>✓</Text>
          <Text>Verified</Text>
        </View>
      </Badge>

      <Badge variant='destructive'>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 12 }}>⚠</Text>
          <Text>Alert</Text>
        </View>
      </Badge>

      <Badge variant='outline'>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 12 }}>🔔</Text>
          <Text>Notification</Text>
        </View>
      </Badge>
    </View>
  );
}

```

##### badge-notifications

Small notification badges for counters and status

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeNotifications() {
  return (
    <View style={{ gap: 16 }}>
      {/* Small notification counters */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Messages</Text>
          <Badge
            style={{
              minWidth: 20,
              height: 20,
              paddingHorizontal: 6,
              paddingVertical: 2,
            }}
            textStyle={{ fontSize: 12 }}
          >
            3
          </Badge>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Notifications</Text>
          <Badge
            variant='destructive'
            style={{
              width: 20,
              height: 20,
              paddingHorizontal: 0,
              paddingVertical: 0,
              borderRadius: 999,
            }}
            textStyle={{ fontSize: 12 }}
          >
            12
          </Badge>
        </View>
      </View>

      {/* Dot indicators */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Online</Text>
          <Badge
            variant='success'
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              paddingHorizontal: 0,
              paddingVertical: 0,
            }}
          >
            <View />
          </Badge>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Away</Text>
          <Badge
            style={{
              backgroundColor: '#f59e0b',
              width: 8,
              height: 8,
              borderRadius: 4,
              paddingHorizontal: 0,
              paddingVertical: 0,
            }}
          >
            <View />
          </Badge>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Offline</Text>
          <Badge
            variant='outline'
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              paddingHorizontal: 0,
              paddingVertical: 0,
            }}
          >
            <View />
          </Badge>
        </View>
      </View>
    </View>
  );
}

```

##### badge-styled

Badges with custom colors and styling

```tsx
import { Badge } from '@/components/ui/badge';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeStyled() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      {/* Custom colors */}
      <Badge
        style={{
          backgroundColor: '#8b5cf6',
          borderRadius: 16,
        }}
        textStyle={{ color: 'white', fontWeight: '600' }}
      >
        Purple
      </Badge>

      <Badge
        style={{
          backgroundColor: '#06b6d4',
          borderRadius: 4,
        }}
        textStyle={{ color: 'white', fontSize: 13 }}
      >
        Cyan
      </Badge>

      <Badge
        style={{
          backgroundColor: '#f97316',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        textStyle={{ color: 'white', fontWeight: 'bold' }}
      >
        Orange
      </Badge>

      {/* Gradient-like effect with shadow */}
      <Badge
        style={{
          backgroundColor: '#ec4899',
          borderRadius: 12,
          shadowColor: '#ec4899',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
        }}
        textStyle={{ color: 'white', fontWeight: '600' }}
      >
        Pink
      </Badge>

      {/* Bordered with custom style */}
      <Badge
        variant='outline'
        style={{
          borderColor: '#10b981',
          borderWidth: 2,
          borderRadius: 8,
        }}
        textStyle={{ color: '#10b981', fontWeight: '600' }}
      >
        Green
      </Badge>
    </View>
  );
}

```

##### badge-interactive

Badges that can be pressed or dismissed

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function BadgeInteractive() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Expo', 'Mobile']);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Work', 'Personal', 'Important'];

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <View style={{ gap: 20 }}>
      {/* Dismissible tags */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '600' }}>
          Tags (tap to remove):
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {tags.map((tag) => (
            <TouchableOpacity key={tag} onPress={() => removeTag(tag)}>
              <Badge variant='secondary'>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
                >
                  <Text>{tag}</Text>
                  <Text style={{ fontSize: 14 }}>×</Text>
                </View>
              </Badge>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Selectable categories */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '600' }}>Categories:</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
            >
              <Badge
                variant={selectedCategory === category ? 'default' : 'outline'}
                style={{
                  opacity: selectedCategory === category ? 1 : 0.7,
                }}
              >
                {category}
              </Badge>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Toggle badges */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '600' }}>
          Filter Options:
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          <TouchableOpacity>
            <Badge variant='success'>Active</Badge>
          </TouchableOpacity>
          <TouchableOpacity>
            <Badge variant='outline'>Completed</Badge>
          </TouchableOpacity>
          <TouchableOpacity>
            <Badge variant='destructive'>Archived</Badge>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

```

##### badge-sizes

Badges in different sizes

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeSizes() {
  return (
    <View style={{ gap: 16 }}>
      {/* Extra Small */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text style={{ width: 80, fontSize: 14 }}>Extra Small:</Text>
        <Badge
          style={{
            paddingHorizontal: 6,
            paddingVertical: 2,
          }}
          textStyle={{ fontSize: 11 }}
        >
          XS
        </Badge>
        <Badge
          variant='success'
          style={{
            paddingHorizontal: 6,
            paddingVertical: 2,
          }}
          textStyle={{ fontSize: 11 }}
        >
          New
        </Badge>
      </View>

      {/* Small */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text style={{ width: 80, fontSize: 14 }}>Small:</Text>
        <Badge
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
          textStyle={{ fontSize: 12 }}
        >
          Small
        </Badge>
        <Badge
          variant='secondary'
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
          textStyle={{ fontSize: 12 }}
        >
          Beta
        </Badge>
      </View>

      {/* Default */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text style={{ width: 80, fontSize: 14 }}>Default:</Text>
        <Badge>Default</Badge>
        <Badge variant='outline'>Outline</Badge>
      </View>

      {/* Large */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text style={{ width: 80, fontSize: 14 }}>Large:</Text>
        <Badge
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
          textStyle={{ fontSize: 16, fontWeight: '600' }}
        >
          Large
        </Badge>
        <Badge
          variant='destructive'
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
          textStyle={{ fontSize: 16, fontWeight: '600' }}
        >
          Important
        </Badge>
      </View>

      {/* Extra Large */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text style={{ width: 80, fontSize: 14 }}>Extra Large:</Text>
        <Badge
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 12,
          }}
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
        >
          XL Badge
        </Badge>
      </View>
    </View>
  );
}

```

##### badge-status

Badges used as status indicators

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeStatus() {
  const users = [
    { name: 'John Doe', status: 'online' },
    { name: 'Jane Smith', status: 'away' },
    { name: 'Bob Johnson', status: 'offline' },
    { name: 'Alice Brown', status: 'busy' },
  ];

  const orders = [
    { id: '#1234', status: 'pending' },
    { id: '#1235', status: 'processing' },
    { id: '#1236', status: 'shipped' },
    { id: '#1237', status: 'delivered' },
    { id: '#1238', status: 'cancelled' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge variant='success'>Online</Badge>;
      case 'away':
        return (
          <Badge
            style={{ backgroundColor: '#f59e0b' }}
            textStyle={{ color: 'white' }}
          >
            Away
          </Badge>
        );
      case 'busy':
        return <Badge variant='destructive'>Busy</Badge>;
      case 'offline':
        return <Badge variant='outline'>Offline</Badge>;
      case 'pending':
        return (
          <Badge
            style={{ backgroundColor: '#6b7280' }}
            textStyle={{ color: 'white' }}
          >
            Pending
          </Badge>
        );
      case 'processing':
        return (
          <Badge
            style={{ backgroundColor: '#3b82f6' }}
            textStyle={{ color: 'white' }}
          >
            Processing
          </Badge>
        );
      case 'shipped':
        return (
          <Badge
            style={{ backgroundColor: '#8b5cf6' }}
            textStyle={{ color: 'white' }}
          >
            Shipped
          </Badge>
        );
      case 'delivered':
        return <Badge variant='success'>Delivered</Badge>;
      case 'cancelled':
        return <Badge variant='destructive'>Cancelled</Badge>;
      default:
        return <Badge variant='outline'>Unknown</Badge>;
    }
  };

  return (
    <View style={{ gap: 24 }}>
      {/* User Status */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
          User Status
        </Text>
        <View style={{ gap: 8 }}>
          {users.map((user, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 4,
              }}
            >
              <Text style={{ flex: 1 }}>{user.name}</Text>
              {getStatusBadge(user.status)}
            </View>
          ))}
        </View>
      </View>

      {/* Order Status */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
          Order Status
        </Text>
        <View style={{ gap: 8 }}>
          {orders.map((order, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 4,
              }}
            >
              <Text style={{ flex: 1 }}>Order {order.id}</Text>
              {getStatusBadge(order.status)}
            </View>
          ))}
        </View>
      </View>

      {/* Priority Levels */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
          Priority Levels
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          <Badge
            style={{ backgroundColor: '#ef4444' }}
            textStyle={{ color: 'white', fontWeight: '600' }}
          >
            High Priority
          </Badge>
          <Badge
            style={{ backgroundColor: '#f59e0b' }}
            textStyle={{ color: 'white', fontWeight: '600' }}
          >
            Medium Priority
          </Badge>
          <Badge
            style={{ backgroundColor: '#10b981' }}
            textStyle={{ color: 'white', fontWeight: '600' }}
          >
            Low Priority
          </Badge>
        </View>
      </View>
    </View>
  );
}

```
---

### bar-chart

A customizable bar chart component with smooth animations and rounded corners.

**Installation:**
```bash
npx bna-ui add bar-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![bar-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 15-22-22_1.mov)

#### Basic Usage

```tsx
import { Bar-chart } from '@/components/ui/bar-chart';

export default function Example() {
  return (
    <Bar-chart />
  );
}```


#### Advanced Examples

##### bar-chart-demo

A basic bar chart with smooth animations and rounded corners

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BarChart } from '@/components/charts/bar-chart';
import React from 'react';

const sampleData = [
  { label: 'Jan', value: 65, color: '#3b82f6' },
  { label: 'Feb', value: 78, color: '#ef4444' },
  { label: 'Mar', value: 52, color: '#10b981' },
  { label: 'Apr', value: 91, color: '#f59e0b' },
  { label: 'May', value: 73, color: '#8b5cf6' },
  { label: 'Jun', value: 85, color: '#06b6d4' },
];

export function BarChartDemo() {
  return (
    <ChartContainer
      title='Monthly Sales'
      description='Product sales performance by month'
    >
      <BarChart
        data={sampleData}
        config={{
          height: 220,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### bar-chart-sample

A sample bar chart with custom colors

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BarChart } from '@/components/charts/bar-chart';
import React from 'react';

const sampleData = [
  { label: 'Product A', value: 120, color: '#3b82f6' },
  { label: 'Product B', value: 98, color: '#ef4444' },
  { label: 'Product C', value: 86, color: '#10b981' },
  { label: 'Product D', value: 74, color: '#f59e0b' },
  { label: 'Product E', value: 65, color: '#8b5cf6' },
];

export function BarChartSample() {
  return (
    <ChartContainer
      title='Product Performance'
      description='Sales performance by product category'
    >
      <BarChart
        data={sampleData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### bar-chart-minimal

A minimal bar chart without labels

```tsx
import { BarChart } from '@/components/charts/bar-chart';
import React from 'react';

const sampleData = [
  { label: 'A', value: 30 },
  { label: 'B', value: 50 },
  { label: 'C', value: 25 },
  { label: 'D', value: 70 },
  { label: 'E', value: 45 },
  { label: 'F', value: 60 },
];

export function BarChartMinimal() {
  return (
    <BarChart
      data={sampleData}
      config={{
        height: 150,
        showLabels: false,
        animated: true,
        duration: 600,
        padding: 10,
      }}
    />
  );
}

```
---

### bottom-sheet

A modal sheet component that slides up from the bottom with gesture support and snap points.

**Installation:**
```bash
npx bna-ui add bottom-sheet
```

**External Dependencies:** react-native-gesture-handler, react-native-reanimated

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![bottom-sheet preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-29-2025 22-49-58_1.MP4)

#### Basic Usage

```tsx
import { Bottom-sheet } from '@/components/ui/bottom-sheet';

export default function Example() {
  return (
    <Bottom-sheet />
  );
}```


#### Advanced Examples

##### bottom-sheet-demo

A basic bottom sheet with gesture support and snap points

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BottomSheetDemo() {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button onPress={open}>Open Bottom Sheet</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        snapPoints={[0.3, 0.6, 0.9]}
      >
        <View style={{ gap: 16 }}>
          <Text variant='title'>Welcome to Bottom Sheet</Text>
          <Text>
            This is a basic bottom sheet that supports gesture interactions. You
            can drag it up and down to different snap points, or swipe down
            quickly to dismiss it.
          </Text>
          <Button onPress={close}>Close</Button>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-title

Bottom sheet with a title header

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BottomSheetTitle() {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button onPress={open}>Open Sheet with Title</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='Settings'
        snapPoints={[0.4, 0.7]}
      >
        <View style={{ gap: 16 }}>
          <Text>
            This bottom sheet includes a title in the header area. The title is
            centered and uses the theme's title text style.
          </Text>
          <Button variant='secondary' onPress={close}>
            Done
          </Button>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-snap-points

Bottom sheet with custom snap point configurations

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BottomSheetSnapPoints() {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button onPress={open}>Custom Snap Points</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='Custom Heights'
        snapPoints={[0.2, 0.5, 0.8, 0.95]}
      >
        <View style={{ gap: 16 }}>
          <Text variant='title'>Multiple Snap Points</Text>
          <Text>
            This sheet has four different snap points: 20%, 50%, 80%, and 95% of
            screen height. Try dragging to see how it snaps to each position.
          </Text>
          <View style={{ gap: 12 }}>
            <Text variant='body'>Available heights:</Text>
            <Text>• 20% - Peek view</Text>
            <Text>• 50% - Medium height</Text>
            <Text>• 80% - Large view</Text>
            <Text>• 95% - Nearly fullscreen</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-form

Bottom sheet containing form elements and inputs

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function BottomSheetForm() {
  const { isVisible, open, close } = useBottomSheet();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', { name, email });
    close();
  };

  return (
    <View>
      <Button onPress={open}>Edit Profile</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='Edit Profile'
        snapPoints={[0.6, 0.8]}
        enableBackdropDismiss={false}
      >
        <View style={{ gap: 20 }}>
          <View style={{ gap: 12 }}>
            <Text variant='body'>Name</Text>
            <Input
              value={name}
              onChangeText={setName}
              variant='outline'
              placeholder='Enter your name'
            />
          </View>

          <View style={{ gap: 12 }}>
            <Text variant='body'>Email</Text>
            <Input
              value={email}
              onChangeText={setEmail}
              variant='outline'
              placeholder='Enter your email'
              keyboardType='email-address'
            />
          </View>

          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              gap: 12,
              marginTop: 12,
            }}
          >
            <Button variant='outline' onPress={close} style={{ flex: 1 }}>
              Cancel
            </Button>
            <Button onPress={handleSubmit} style={{ flex: 2 }}>
              Save
            </Button>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-list

Bottom sheet with scrollable list content

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

const items = [
  { id: '1', title: 'Photos', subtitle: '1,234 items' },
  { id: '2', title: 'Videos', subtitle: '56 items' },
  { id: '3', title: 'Documents', subtitle: '89 items' },
  { id: '4', title: 'Audio', subtitle: '23 items' },
  { id: '5', title: 'Downloads', subtitle: '12 items' },
  { id: '6', title: 'Archives', subtitle: '4 items' },
];

export function BottomSheetList() {
  const { isVisible, open, close } = useBottomSheet();

  const renderItem = ({ item }: { item: (typeof items)[0] }) => (
    <TouchableOpacity
      style={{
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
      }}
      onPress={() => console.log('Selected:', item.title)}
    >
      <Text variant='body' style={{ fontWeight: '600' }}>
        {item.title}
      </Text>
      <Text variant='caption' style={{ marginTop: 2 }}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Button onPress={open}>Browse Files</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='File Browser'
        snapPoints={[0.5, 0.8]}
      >
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-no-dismiss

Bottom sheet that cannot be dismissed by tapping backdrop

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BottomSheetNoDismiss() {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button onPress={open}>Important Action</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='Confirm Action'
        snapPoints={[0.4]}
        enableBackdropDismiss={false}
      >
        <View style={{ gap: 16 }}>
          <Text>
            This bottom sheet cannot be dismissed by tapping the backdrop. You
            must use one of the action buttons below.
          </Text>
          <Text variant='caption' style={{ fontStyle: 'italic' }}>
            This is useful for critical confirmations or required actions.
          </Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 12 }}>
            <Button variant='outline' onPress={close} style={{ flex: 1 }}>
              Cancel
            </Button>
            <Button variant='destructive' onPress={close} style={{ flex: 1 }}>
              Confirm
            </Button>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-styled

Bottom sheet with custom styling and colors

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export function BottomSheetStyled() {
  const { isVisible, open, close } = useBottomSheet();
  const accentColor = useThemeColor({}, 'blue');

  return (
    <View>
      <Button onPress={open}>Styled Sheet</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title='Custom Styling'
        snapPoints={[0.5, 0.8]}
        style={{
          borderTopWidth: 3,
          borderTopColor: accentColor,
        }}
      >
        <View style={{ gap: 16 }}>
          <View
            style={{
              backgroundColor: accentColor + '20',
              padding: 16,
              borderRadius: 12,
            }}
          >
            <Text variant='title' style={{ color: accentColor }}>
              Premium Feature
            </Text>
            <Text style={{ marginTop: 8 }}>
              This bottom sheet has custom styling including a colored border
              and accent-colored content areas.
            </Text>
          </View>

          <Button variant='success' onPress={close}>
            Get Started
          </Button>
        </View>
      </BottomSheet>
    </View>
  );
}

```

##### bottom-sheet-menu

Bottom sheet used as a menu with action items

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';

const menuItems = [
  { id: 'edit', title: 'Edit', icon: '✏️' },
  { id: 'share', title: 'Share', icon: '📤' },
  { id: 'copy', title: 'Copy Link', icon: '🔗' },
  { id: 'bookmark', title: 'Bookmark', icon: '🔖' },
  { id: 'delete', title: 'Delete', icon: '🗑️', destructive: true },
];

export function BottomSheetMenu() {
  const { isVisible, open, close } = useBottomSheet();

  const textColor = useThemeColor({}, 'text');
  const destructiveColor = useThemeColor({}, 'destructive');

  const handleMenuAction = (action: string) => {
    console.log('Menu action:', action);
    close();
  };

  return (
    <View>
      <Button onPress={open}>Show Menu</Button>

      <BottomSheet isVisible={isVisible} onClose={close} snapPoints={[0.4]}>
        <View>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 16,
                borderBottomWidth: index < menuItems.length - 1 ? 1 : 0,
                borderBottomColor: 'rgba(0,0,0,0.1)',
              }}
              onPress={() => handleMenuAction(item.id)}
            >
              <Text style={{ fontSize: 20, marginRight: 16 }}>{item.icon}</Text>
              <Text
                variant='body'
                style={{
                  flex: 1,
                  color: item.destructive ? destructiveColor : textColor,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </View>
  );
}

```
---

### bubble-chart

A customizable bubble chart component with animations, size mapping, and interactive features.

**Installation:**
```bash
npx bna-ui add bubble-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![bubble-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 15-40-44_1.mov)

#### Basic Usage

```tsx
import { Bubble-chart } from '@/components/ui/bubble-chart';

export default function Example() {
  return (
    <Bubble-chart />
  );
}```


#### Advanced Examples

##### bubble-chart-demo

A basic bubble chart with animated bubbles and grid lines

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BubbleChart } from '@/components/charts/bubble-chart';
import React from 'react';

const sampleData = [
  { x: 10, y: 20, size: 15, label: 'A' },
  { x: 25, y: 30, size: 25, label: 'B' },
  { x: 40, y: 15, size: 30, label: 'C' },
  { x: 35, y: 45, size: 20, label: 'D' },
  { x: 60, y: 25, size: 18, label: 'E' },
  { x: 50, y: 40, size: 22, label: 'F' },
  { x: 15, y: 35, size: 28, label: 'G' },
  { x: 70, y: 50, size: 16, label: 'H' },
];

export function BubbleChartDemo() {
  return (
    <ChartContainer
      title='Performance vs Efficiency'
      description='Team performance metrics with bubble sizes representing team size'
    >
      <BubbleChart
        data={sampleData}
        config={{
          height: 300,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### bubble-chart-sample

A sample bubble chart

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BubbleChart } from '@/components/charts/bubble-chart';
import React from 'react';

const sampleData = [
  { x: 20, y: 30, size: 45, label: 'Sales', color: '#FF6B6B' },
  { x: 35, y: 25, size: 35, label: 'Marketing', color: '#4ECDC4' },
  { x: 50, y: 40, size: 25, label: 'Dev', color: '#45B7D1' },
  { x: 65, y: 35, size: 30, label: 'Support', color: '#96CEB4' },
  { x: 40, y: 50, size: 20, label: 'HR', color: '#FFEAA7' },
  { x: 25, y: 45, size: 15, label: 'Finance', color: '#DDA0DD' },
];

export function BubbleChartSample() {
  return (
    <ChartContainer
      title='Department Analytics'
      description='Bubble chart showing department metrics'
    >
      <BubbleChart
        data={sampleData}
        config={{
          height: 320,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
      />
    </ChartContainer>
  );
}

```

##### bubble-chart-styled

A customized bubble chart with custom styling

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BubbleChart } from '@/components/charts/bubble-chart';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const styledData = [
  { x: 15, y: 25, size: 40, label: 'Q1', color: '#FF6B6B' },
  { x: 30, y: 35, size: 50, label: 'Q2', color: '#4ECDC4' },
  { x: 45, y: 30, size: 35, label: 'Q3', color: '#45B7D1' },
  { x: 60, y: 45, size: 45, label: 'Q4', color: '#96CEB4' },
  { x: 25, y: 50, size: 25, label: 'Bonus', color: '#FFEAA7' },
];

export function BubbleChartStyled() {
  const backgroundColor = useThemeColor({}, 'card');

  return (
    <ChartContainer
      title='Quarterly Revenue'
      description='Styled bubble chart with custom colors and enhanced visuals'
    >
      <BubbleChart
        data={styledData}
        config={{
          height: 280,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1800,
        }}
        style={{
          backgroundColor,
          borderRadius: 12,
          padding: 8,
        }}
      />
    </ChartContainer>
  );
}

```

##### bubble-chart-minimal

A minimal bubble chart without labels or grid

```tsx
import { BubbleChart } from '@/components/charts/bubble-chart';
import React from 'react';

const minimalData = [
  { x: 20, y: 30, size: 25 },
  { x: 40, y: 45, size: 35 },
  { x: 60, y: 25, size: 20 },
  { x: 35, y: 55, size: 30 },
  { x: 70, y: 40, size: 15 },
];

export function BubbleChartMinimal() {
  return (
    <BubbleChart
      data={minimalData}
      config={{
        height: 200,
        showGrid: false,
        showLabels: false,
        animated: true,
        duration: 1000,
        padding: 10,
      }}
    />
  );
}

```
---

### button

A versatile button component with multiple variants, sizes, and interactive animations.

**Installation:**
```bash
npx bna-ui add button
```

**External Dependencies:** expo-haptics, lucide-react-native, react-native-reanimated

**Registry Dependencies:** text, icon, spinner

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  label?: string;
  children?: React.ReactNode;
  animation?: boolean;
  haptic?: boolean;
  icon?: React.ComponentType<LucideProps>;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  loadingVariant?: SpinnerVariant;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
}
```

#### Types

```typescript
export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'success'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'
```

**Preview:**

![button preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 00-44-50_1.MP4)

#### Basic Usage

```tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Input placeholder='Enter your email' keyboardType='email-address' />
        <Button
          variant='success'
          onPress={() => console.log('Button pressed!')}
        >
          Get Started
        </Button>
      </Card>
    </View>
  );
}
```


#### Advanced Examples

##### button-demo

A basic button with default styling

```tsx
import { Button } from '@/components/ui/button';
import React from 'react';

export function ButtonDemo() {
  return (
    <Button onPress={() => console.log('Button pressed!')}>Click me</Button>
  );
}

```

##### button-variants

Buttons with different visual styles

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import React from 'react';

export function ButtonVariants() {
  return (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Button variant='default' onPress={() => {}} style={{ flex: 1 }}>
          Default
        </Button>
        <Button variant='destructive' onPress={() => {}} style={{ flex: 2 }}>
          Destructive
        </Button>
      </View>
      <Button variant='success' onPress={() => {}}>
        Success
      </Button>
      <Button variant='outline' onPress={() => {}}>
        Outline
      </Button>
      <Button variant='secondary' onPress={() => {}}>
        Secondary
      </Button>
      <Button variant='ghost' onPress={() => {}}>
        Ghost
      </Button>
      <Button variant='link' onPress={() => {}}>
        Link
      </Button>
    </View>
  );
}

```

##### button-sizes

Buttons in different sizes

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import React from 'react';

export function ButtonSizes() {
  return (
    <View style={{ gap: 12, alignItems: 'flex-start' }}>
      <Button size='sm' onPress={() => {}}>
        Small
      </Button>
      <Button size='default' onPress={() => {}}>
        Default
      </Button>
      <Button size='lg' onPress={() => {}}>
        Large
      </Button>
    </View>
  );
}

```

##### button-with-icons

Buttons with leading icons

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { Download, Mail, Plus, Search } from 'lucide-react-native';
import React from 'react';

export function ButtonWithIcons() {
  return (
    <View style={{ gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button icon={Download} onPress={() => {}}>
        Download
      </Button>
      <Button icon={Mail} variant='outline' onPress={() => {}}>
        Email
      </Button>
      <Button icon={Plus} variant='success' onPress={() => {}}>
        Add Item
      </Button>
      <Button icon={Search} variant='secondary' onPress={() => {}}>
        Search
      </Button>
    </View>
  );
}

```

##### button-icon-only

Icon-only buttons for compact layouts

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Settings,
  Share,
} from 'lucide-react-native';
import React from 'react';

export function ButtonIconOnly() {
  return (
    <View style={{ gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button size='icon' icon={Settings} />

      <Button size='icon' variant='outline' icon={Heart} />

      <Button size='icon' variant='secondary' icon={Share} />

      <Button size='icon' variant='ghost' icon={MoreHorizontal} />

      <Button size='icon' variant='destructive' icon={MessageCircle} />
    </View>
  );
}

```

##### button-loading

Buttons with loading spinners

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { Save } from 'lucide-react-native';
import React from 'react';

export function ButtonLoading() {
  return (
    <View style={{ gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button loading onPress={() => {}}>
        Loading...
      </Button>
      <Button loading variant='outline' onPress={() => {}}>
        Please wait
      </Button>
      <Button loading variant='destructive' onPress={() => {}}>
        Deleting...
      </Button>
      <Button loading size='icon' onPress={() => {}}>
        <Save size={20} color='white' />
      </Button>
    </View>
  );
}

```

##### button-disabled

Buttons in disabled state

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { Lock } from 'lucide-react-native';
import React from 'react';

export function ButtonDisabled() {
  return (
    <View style={{ gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button disabled onPress={() => {}}>
        Disabled
      </Button>
      <Button disabled variant='outline' onPress={() => {}}>
        Disabled Outline
      </Button>
      <Button disabled variant='destructive' onPress={() => {}}>
        Disabled Destructive
      </Button>
      <Button disabled size='icon' onPress={() => {}} icon={Lock} />
    </View>
  );
}

```

##### button-custom

Buttons with custom colors and styles

```tsx
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { LinearGradient } from 'expo-linear-gradient';
import { Star } from 'lucide-react-native';

export function ButtonCustom() {
  return (
    <View style={{ gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button
        style={{ backgroundColor: '#8B5CF6', borderRadius: 12 }}
        textStyle={{ color: 'white', fontWeight: 'bold' }}
        onPress={() => {}}
      >
        Custom Purple
      </Button>
      <Button
        variant='outline'
        style={{
          borderColor: '#F59E0B',
          borderWidth: 2,
          borderRadius: 20,
        }}
        textStyle={{ color: '#F59E0B', fontWeight: '600' }}
        onPress={() => {}}
      >
        Custom Orange
      </Button>

      <LinearGradient
        colors={['#FF6B6B', '#4ECDC4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          flex: 1,
        }}
      >
        <Button
          icon={Star}
          style={{
            backgroundColor: 'transparent',
          }}
          textStyle={{ color: 'white', fontWeight: 'bold' }}
          onPress={() => {}}
        >
          Gradient Style
        </Button>
      </LinearGradient>
    </View>
  );
}

```

##### button-animation

Buttons with and without animations

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ButtonAnimation() {
  return (
    <View style={{ gap: 16 }}>
      <View>
        <Text style={{ marginBottom: 8, fontSize: 14, color: '#71717a' }}>
          With Animation (default)
        </Text>
        <Button animation={true} onPress={() => {}}>
          Animated Button
        </Button>
      </View>

      <View>
        <Text style={{ marginBottom: 8, fontSize: 14, color: '#71717a' }}>
          Without Animation
        </Text>
        <Button animation={false} onPress={() => {}}>
          Static Button
        </Button>
      </View>
    </View>
  );
}

```

#### Props Examples

```tsx
// Different variants
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
```

```tsx
// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```#### Practical Examples

```tsx
// Form submission button
<Button 
  variant="success" 
  onPress={handleSubmit}
  loading={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit Form'}
</Button>
```

```tsx
// Icon button
<Button 
  variant="outline" 
  size="icon"
  icon={Search}
  onPress={() => setShowSearch(true)}
/>
```

---

### camera

A powerful camera component with advanced features like zoom, timer, torch, and video recording.

**Installation:**
```bash
npx bna-ui add camera
```

**External Dependencies:** expo-camera, lucide-react-native, react-native-gesture-handler

**Registry Dependencies:** button, text, progress

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface CameraProps {
  style?: ViewStyle;
  facing?: CameraType;
  enableTorch?: boolean;
  showControls?: boolean;
  timerOptions?: Array<number>;
  enableVideo?: boolean;
  maxVideoDuration?: number; // in seconds
  onClose?: () => void;
  onCapture?: ({ type, uri, cameraHeight }
```

**Preview:**

![camera preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 01-48-08_1.mov)

#### Basic Usage

```tsx
import { Camera } from '@/components/ui/camera';

export default function Example() {
  return (
    <Camera />
  );
}```


#### Advanced Examples

##### camera-preview-demo

A basic camera preview with capture and save functionality

```tsx
import { CameraPreview } from '@/components/ui/camera-preview';

export function CameraPreviewDemo() {
  return <CameraPreview />;
}

```

##### camera-demo

A basic camera with default settings

```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraDemo() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Picture Captured', `Saved to: ${uri}`);
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Video Recorded', `Saved to: ${uri}`);
  };

  return (
    <Camera
      onCapture={handleCapture}
      onVideoCapture={handleVideoCapture}
      style={{ height: 400 }}
    />
  );
}

```

##### camera-custom-controls

Camera with custom control settings

```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraCustomControls() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Capture Complete', `${type} saved successfully`);
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Recording Complete', `Video saved successfully`);
  };

  return (
    <Camera
      facing='front'
      enableTorch={false}
      timerOptions={[0, 5, 15]}
      maxVideoDuration={30}
      onCapture={handleCapture}
      onVideoCapture={handleVideoCapture}
      style={{ height: 400, borderRadius: 12 }}
    />
  );
}

```

##### camera-picture-only

Camera configured for picture-only mode

```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraPictureOnly() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Photo Captured', 'Picture saved to gallery');
  };

  return (
    <Camera
      enableVideo={false}
      onCapture={handleCapture}
      style={{ height: 400 }}
    />
  );
}

```

##### camera-video

Camera with video recording capabilities

```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraVideo() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert(
      'Picture Taken',
      `Saved: ${uri.substring(uri.lastIndexOf('/') + 1)}`
    );
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Video Recorded', `Duration: ${uri ? 'Success' : 'Failed'}`);
  };

  return (
    <Camera
      maxVideoDuration={120}
      onCapture={handleCapture}
      onVideoCapture={handleVideoCapture}
      style={{ height: 400 }}
    />
  );
}

```

##### camera-timer

Camera with timer functionality

```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraTimer() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Timer Capture', 'Photo captured after countdown!');
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Timer Recording', 'Video started after countdown!');
  };

  return (
    <Camera
      timerOptions={[0, 3, 5, 10, 15]}
      onCapture={handleCapture}
      onVideoCapture={handleVideoCapture}
      style={{ height: 400 }}
    />
  );
}

```

##### camera-zoom

Camera with zoom controls and gestures

```tsx
import { Camera } from '@/components/ui/camera';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';
import { Alert } from 'react-native';

export function CameraZoom() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Zoomed Capture', 'Photo taken with current zoom level');
  };

  return (
    <View style={{ gap: 8 }}>
      <Text variant='body' style={{ textAlign: 'center', opacity: 0.7 }}>
        Pinch to zoom • Double tap for quick zoom • Tap zoom button to cycle
        levels
      </Text>
      <Camera onCapture={handleCapture} style={{ height: 400 }} />
    </View>
  );
}

```

##### camera-settings

Camera with advanced settings panel

```tsx
import { Camera } from '@/components/ui/camera';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';
import { Alert } from 'react-native';

export function CameraSettings() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Settings Demo', 'Captured with current settings applied');
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Settings Demo', 'Recorded with current settings applied');
  };

  return (
    <View style={{ gap: 8 }}>
      <Text variant='body' style={{ textAlign: 'center', opacity: 0.7 }}>
        Tap the settings icon to access grid, sound, aspect ratio, and timer
        controls
      </Text>
      <Camera
        onCapture={handleCapture}
        onVideoCapture={handleVideoCapture}
        style={{ height: 400 }}
      />
    </View>
  );
}

```
---

### camera-preview

A comprehensive camera component with capture, preview, and media management capabilities.

**Installation:**
```bash
npx bna-ui add camera-preview
```

**External Dependencies:** expo-camera, expo-media-library, lucide-react-native, react-native-safe-area-context

**Registry Dependencies:** button, text, view, image, video, camera

**Required Hooks:** useThemeColor

**Preview:**

![camera-preview preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 07-14-10_1.mov)

#### Basic Usage

```tsx
import { Camera-preview } from '@/components/ui/camera-preview';

export default function Example() {
  return (
    <Camera-preview />
  );
}```


#### Advanced Examples

##### camera-preview-demo

A basic camera preview with capture and save functionality

```tsx
import { CameraPreview } from '@/components/ui/camera-preview';

export function CameraPreviewDemo() {
  return <CameraPreview />;
}

```
---

### candlestick-chart

A customizable candlestick chart component with animations for financial data visualization.

**Installation:**
```bash
npx bna-ui add candlestick-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![candlestick-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 15-42-29_1.MP4)

#### Basic Usage

```tsx
import { Candlestick-chart } from '@/components/ui/candlestick-chart';

export default function Example() {
  return (
    <Candlestick-chart />
  );
}```


#### Advanced Examples

##### candlestick-chart-demo

A basic candlestick chart with smooth animations and grid lines

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { CandlestickChart } from '@/components/charts/candlestick-chart';
import React from 'react';

const sampleData = [
  { date: 'Jan 1', open: 100, high: 120, low: 95, close: 110 },
  { date: 'Jan 2', open: 110, high: 125, low: 105, close: 115 },
  { date: 'Jan 3', open: 115, high: 130, low: 110, close: 125 },
  { date: 'Jan 4', open: 125, high: 140, low: 120, close: 135 },
  { date: 'Jan 5', open: 135, high: 145, low: 125, close: 128 },
  { date: 'Jan 6', open: 128, high: 135, low: 118, close: 132 },
  { date: 'Jan 7', open: 132, high: 142, low: 128, close: 138 },
  { date: 'Jan 8', open: 138, high: 148, low: 132, close: 145 },
  { date: 'Jan 9', open: 145, high: 155, low: 140, close: 150 },
  { date: 'Jan 10', open: 150, high: 160, low: 145, close: 155 },
];

export function CandlestickChartDemo() {
  return (
    <ChartContainer
      title='Stock Price Movement'
      description='Daily OHLC data showing price trends over time'
    >
      <CandlestickChart
        data={sampleData}
        config={{
          height: 220,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### candlestick-chart-sample

A sample candlestick chart

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { CandlestickChart } from '@/components/charts/candlestick-chart';
import React from 'react';

const sampleData = [
  { date: 'Week 1', open: 150, high: 165, low: 145, close: 160 },
  { date: 'Week 2', open: 160, high: 175, low: 155, close: 170 },
  { date: 'Week 3', open: 170, high: 185, low: 165, close: 180 },
  { date: 'Week 4', open: 180, high: 195, low: 175, close: 190 },
  { date: 'Week 5', open: 190, high: 205, low: 185, close: 200 },
  { date: 'Week 6', open: 200, high: 215, low: 195, close: 210 },
  { date: 'Week 7', open: 210, high: 225, low: 205, close: 220 },
  { date: 'Week 8', open: 220, high: 235, low: 215, close: 230 },
];

export function CandlestickChartSample() {
  return (
    <ChartContainer
      title='Stock Chart'
      description='Explore weekly price movements'
    >
      <CandlestickChart
        data={sampleData}
        config={{
          height: 250,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
      />
    </ChartContainer>
  );
}

```

##### candlestick-chart-styled

A customized candlestick chart with custom colors

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { CandlestickChart } from '@/components/charts/candlestick-chart';
import React from 'react';

const styledData = [
  { date: 'Q1', open: 250, high: 280, low: 240, close: 275 },
  { date: 'Q2', open: 275, high: 300, low: 260, close: 285 },
  { date: 'Q3', open: 285, high: 320, low: 275, close: 310 },
  { date: 'Q4', open: 310, high: 340, low: 295, close: 325 },
  { date: 'Q1', open: 325, high: 350, low: 315, close: 340 },
  { date: 'Q2', open: 340, high: 365, low: 330, close: 355 },
];

export function CandlestickChartStyled() {
  return (
    <ChartContainer
      title='Quarterly Performance'
      description='Custom styled candlestick chart with quarterly data'
    >
      <CandlestickChart
        data={styledData}
        config={{
          height: 280,
          padding: 30,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 2000,
        }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### candlestick-chart-minimal

A minimal candlestick chart without labels or grid

```tsx
import { CandlestickChart } from '@/components/charts/candlestick-chart';
import React from 'react';

const minimalData = [
  { date: '10', open: 190, high: 205, low: 185, close: 200 },
  { date: '8', open: 170, high: 185, low: 165, close: 180 },
  { date: '9', open: 180, high: 195, low: 175, close: 170 },
  { date: '7', open: 160, high: 175, low: 155, close: 150 },
  { date: '6', open: 150, high: 165, low: 145, close: 160 },
  { date: '4', open: 130, high: 145, low: 125, close: 140 },
  { date: '2', open: 110, high: 125, low: 105, close: 120 },
  { date: '3', open: 120, high: 135, low: 115, close: 130 },
  { date: '5', open: 140, high: 155, low: 135, close: 150 },
  { date: '1', open: 100, high: 115, low: 95, close: 90 },
];

export function CandlestickChartMinimal() {
  return (
    <CandlestickChart
      data={minimalData}
      config={{
        height: 180,
        padding: 15,
        showGrid: false,
        showLabels: false,
        animated: true,
        duration: 1000,
      }}
    />
  );
}

```
---

### card

Displays a card with header, content, and footer.

**Installation:**
```bash
npx bna-ui add card
```

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![card preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5489.PNG)

#### Basic Usage

```tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Input placeholder='Enter your email' keyboardType='email-address' />
        <Button
          variant='success'
          onPress={() => console.log('Button pressed!')}
        >
          Get Started
        </Button>
      </Card>
    </View>
  );
}
```


#### Advanced Examples

##### card-demo

A complete card with header, content, and footer sections

```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import React from 'react';

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description of the card content. It provides additional
          context about what this card contains.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          This is the main content area of the card. You can put any content
          here including text, images, forms, or other components.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Cancel</Button>
        <Button style={{ flex: 1 }}>Confirm</Button>
      </CardFooter>
    </Card>
  );
}

```

##### card-simple

A minimal card with just content

```tsx
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import React from 'react';

export function CardSimple() {
  return (
    <Card>
      <CardContent>
        <Text>
          A simple card with just content. Perfect for displaying basic
          information or messages.
        </Text>
      </CardContent>
    </Card>
  );
}

```

##### card-with-image

Card featuring an image with content below

```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';
import { Image } from 'react-native';

export function CardWithImage() {
  return (
    <Card>
      <View style={{ borderRadius: 26, overflow: 'hidden', marginBottom: 16 }}>
        <Image
          source={{ uri: 'https://picsum.photos/350/200' }}
          style={{ width: '100%', height: 300 }}
          resizeMode='cover'
        />
      </View>
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>
          A stunning view captured in the mountains during golden hour.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          This image showcases the beauty of nature with its vibrant colors and
          serene atmosphere.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Share</Button>
        <Button>Download</Button>
      </CardFooter>
    </Card>
  );
}

```

##### card-with-form

Interactive card containing a login form

```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

export function CardWithForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const borderColor = useThemeColor({}, 'border');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <View style={{ gap: 16 }}>
          <View>
            <Text style={{ marginBottom: 8, fontWeight: '500' }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder='Enter your email'
              style={{
                borderWidth: 1,
                borderColor,
                borderRadius: 999,
                padding: 12,
                backgroundColor,
                color: textColor,
              }}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>
          <View>
            <Text style={{ marginBottom: 8, fontWeight: '500' }}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder='Enter your password'
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor,
                borderRadius: 999,
                padding: 12,
                backgroundColor,
                color: textColor,
              }}
            />
          </View>
        </View>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Cancel</Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  );
}

```

##### card-stats

Grid of cards displaying key metrics and statistics

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function CardStats() {
  const stats = [
    { title: 'Total Users', value: '12,543', change: '+12%' },
    { title: 'Revenue', value: '$45,231', change: '+8%' },
    { title: 'Orders', value: '1,234', change: '+23%' },
    { title: 'Growth', value: '15.3%', change: '+4%' },
  ];

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      {stats.map((stat, index) => (
        <Card key={index} style={{ flex: 1, minWidth: 150 }}>
          <CardHeader>
            <CardTitle style={{ fontSize: 16 }}>{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4 }}>
              {stat.value}
            </Text>
            <Text style={{ color: '#22c55e', fontSize: 14 }}>
              {stat.change} from last month
            </Text>
          </CardContent>
        </Card>
      ))}
    </View>
  );
}

```

##### card-notification

Card designed for displaying notifications with actions

```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Bell } from 'lucide-react-native';
import React from 'react';

export function CardNotification() {
  return (
    <Card style={{ maxWidth: 400 }}>
      <CardHeader>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#3b82f6',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name={Bell} color='white' size={20} />
          </View>
          <View style={{ flex: 1 }}>
            <CardTitle>New Notification</CardTitle>
            <CardDescription>2 minutes ago</CardDescription>
          </View>
        </View>
      </CardHeader>
      <CardContent>
        <Text>
          You have a new message from John Doe. Click to view the full
          conversation and respond.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Dismiss</Button>
        <Button>View Message</Button>
      </CardFooter>
    </Card>
  );
}

```

##### card-pricing

Professional pricing cards with feature lists and CTAs

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Check } from 'lucide-react-native';
import React from 'react';

export function CardPricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Perfect for individuals',
      features: ['1 Project', '5GB Storage', 'Email Support'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Best for small teams',
      features: [
        '10 Projects',
        '100GB Storage',
        // 'Priority Support',
        // 'Advanced Analytics',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'For large organizations',
      features: [
        'Unlimited Projects',
        '1TB Storage',
        // '24/7 Support',
        // 'Custom Integrations',
      ],
      popular: false,
    },
  ];

  return (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      {plans.map((plan, index) => (
        <Card
          key={index}
          style={{
            flex: 1,
            minWidth: 250,
            borderWidth: plan.popular ? 2 : 1,
            borderColor: plan.popular ? '#3b82f6' : undefined,
          }}
        >
          <CardHeader>
            <View style={{ alignItems: 'center' }}>
              {plan.popular && (
                <View
                  style={{
                    backgroundColor: '#3b82f6',
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 12,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{ color: 'white', fontSize: 12, fontWeight: '600' }}
                  >
                    POPULAR
                  </Text>
                </View>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 8 }}>
                {plan.price}
                <Text style={{ fontSize: 16, fontWeight: 'normal' }}>
                  /month
                </Text>
              </Text>
            </View>
          </CardHeader>
          <CardContent>
            <View style={{ gap: 8 }}>
              {plan.features.map((feature, featureIndex) => (
                <View
                  key={featureIndex}
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                >
                  <Icon name={Check} color='#22c55e' size={16} />
                  <Text>{feature}</Text>
                </View>
              ))}
            </View>
          </CardContent>
          {/* <CardFooter>
            <Button
              variant={plan.popular ? 'default' : 'outline'}
              style={{ width: '100%' }}
            >
              Get Started
            </Button>
          </CardFooter> */}
        </Card>
      ))}
    </View>
  );
}

```
---

### carousel

A flexible carousel component with support for auto-play, indicators, arrows, and custom layouts.

**Installation:**
```bash
npx bna-ui add carousel
```

**External Dependencies:** expo-blur, lucide-react-native, react-native-gesture-handler

**Registry Dependencies:** text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![carousel preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-11-52_1.MP4)

#### Basic Usage

```tsx
import { Carousel } from '@/components/ui/carousel';

export default function Example() {
  return (
    <Carousel />
  );
}```


#### Advanced Examples

##### carousel-demo

A basic carousel with auto-play and indicators

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';

export function CarouselDemo() {
  return (
    <Carousel
      showIndicators={true}
      showArrows={true}
      autoPlay={true}
      loop={true}
    >
      {slides.map((slide) => (
        <CarouselItem
          key={slide.id}
          style={{
            minHeight: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text variant='subtitle'>{slide.title}</Text>
          <Text
            style={{
              marginTop: 8,
              opacity: 0.7,
            }}
          >
            {slide.content}
          </Text>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

const slides = [
  {
    id: 1,
    title: 'Full Width Slide 1',
    content: 'This slide takes the full width of the container',
  },
  {
    id: 2,
    title: 'Full Width Slide 2',
    content: 'Perfect for hero sections and main content',
  },
  {
    id: 3,
    title: 'Full Width Slide 3',
    content: 'Uses paging for smooth navigation',
  },
  {
    id: 4,
    title: 'Full Width Slide 4',
    content: 'Default behavior - no spacing needed',
  },
];

```

##### carousel-arrows

Carousel with navigation arrows and indicators

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Award, Heart, Star, Zap } from 'lucide-react-native';

export function CarouselArrows() {
  const slides = [
    {
      icon: Heart,
      title: 'Loved by Users',
      description: 'Thousands of happy customers worldwide trust our products.',
      color: '#fee2e2',
      bg: '#FF6B6B',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with smooth animations.',
      color: '#f3e8ff',
      bg: '#8b5cf6',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Built with the highest standards and attention to detail.',
      color: '#f59e0b',
      bg: '#fef3c7',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in design and functionality.',
      color: '#d1fae5',
      bg: '#4ECDC4',
    },
  ];

  return (
    <Carousel showArrows showIndicators loop>
      {slides.map((slide, index) => {
        const name = slide.icon;
        return (
          <CarouselItem
            key={index}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 220,
              backgroundColor: slide.bg,
              padding: 20,
            }}
          >
            <Icon name={name} size={48} color={slide.color} />
            <Text
              variant='title'
              style={{
                color: slide.color,
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              {slide.title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: slide.color,
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              {slide.description}
            </Text>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

```

##### carousel-custom-width

Carousel with custom item width and spacing

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export function CarouselCustomWidth() {
  const cardColor = useThemeColor({}, 'card');
  const textColor = useThemeColor({}, 'text');

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', rating: '4.8' },
    { id: 2, name: 'Smart Watch', price: '$199.99', rating: '4.9' },
    { id: 3, name: 'Bluetooth Speaker', price: '$79.99', rating: '4.7' },
    { id: 4, name: 'Phone Case', price: '$24.99', rating: '4.6' },
    { id: 5, name: 'Wireless Charger', price: '$39.99', rating: '4.8' },
  ];

  return (
    <View>
      <Carousel
        itemWidth={screenWidth * 0.7}
        spacing={16}
        showIndicators={false}
      >
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            style={{
              backgroundColor: cardColor,
              minHeight: 160,
              padding: 20,
            }}
          >
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View>
                <Text
                  variant='title'
                  style={{
                    color: textColor,
                    fontSize: 18,
                    marginBottom: 8,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    color: textColor,
                    opacity: 0.7,
                    marginBottom: 12,
                  }}
                >
                  ⭐ {product.rating} rating
                </Text>
              </View>
              <Text
                variant='title'
                style={{
                  color: '#10b981',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {product.price}
              </Text>
            </View>
          </CarouselItem>
        ))}
      </Carousel>

      <Text
        variant='caption'
        style={{
          marginTop: 16,
        }}
      >
        Swipe to see more products →
      </Text>
    </View>
  );
}

```

##### carousel-images

Image carousel with auto-play and loop

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { BORDER_RADIUS } from '@/theme/globals';
import { Image } from 'expo-image';
import React from 'react';

export function CarouselImages() {
  const images = [
    {
      uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Mountain Landscape',
      description: 'Breathtaking mountain views',
    },
    {
      uri: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      title: 'Forest Path',
      description: 'Peaceful forest walking trail',
    },
    {
      uri: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=300&fit=crop',
      title: 'Ocean Sunset',
      description: 'Golden hour by the sea',
    },
    {
      uri: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop',
      title: 'Desert Dunes',
      description: 'Vast desert landscape',
    },
  ];

  return (
    <Carousel autoPlay autoPlayInterval={5000} showIndicators showArrows loop>
      {images.map((image, index) => (
        <CarouselItem key={index} style={{ padding: 0 }}>
          <View style={{ position: 'relative' }}>
            <Image
              source={{ uri: image.uri }}
              style={{
                width: '100%',
                height: 240,
                borderRadius: BORDER_RADIUS,
              }}
              contentFit='cover'
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                borderBottomLeftRadius: BORDER_RADIUS,
                borderBottomRightRadius: BORDER_RADIUS,
                padding: 16,
              }}
            >
              <Text
                variant='title'
                style={{
                  color: 'white',
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                {image.title}
              </Text>
              <Text
                style={{
                  color: 'white',
                  opacity: 0.9,
                  fontSize: 14,
                }}
              >
                {image.description}
              </Text>
            </View>
          </View>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

```

##### carousel-cards

Card-based carousel with custom content

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Calendar, MapPin, User } from 'lucide-react-native';
import React from 'react';

export function CarouselCards() {
  const cardColor = useThemeColor({}, 'card');
  const textColor = useThemeColor({}, 'text');
  const primaryColor = useThemeColor({}, 'primary');

  const events = [
    {
      title: 'Tech Summit',
      location: 'New York, NY',
      date: 'Apr 8-10, 2024',
      attendees: 2100,
      category: 'Technology',
      color: '#10b981',
    },
    {
      title: 'Creative Workshop',
      location: 'Los Angeles, CA',
      date: 'May 22-23, 2024',
      attendees: 850,
      category: 'Creative',
      color: '#f59e0b',
    },
    {
      title: 'Design Conference 2024',
      location: 'San Francisco, CA',
      date: 'Mar 15-17, 2024',
      attendees: 1250,
      category: 'Design',
      color: '#3b82f6',
    },
  ];

  return (
    <Carousel showIndicators>
      {events.map((event, index) => (
        <CarouselItem key={index}>
          <View style={{ padding: 20 }}>
            {/* Category Badge */}
            <View
              style={{
                alignSelf: 'flex-start',
                backgroundColor: event.color,
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 12,
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              >
                {event.category}
              </Text>
            </View>

            {/* Event Title */}
            <Text
              variant='title'
              style={{
                color: textColor,
                fontSize: 20,
                marginBottom: 16,
                lineHeight: 28,
              }}
            >
              {event.title}
            </Text>

            {/* Event Details */}
            <View style={{ gap: 12 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <MapPin size={16} color={primaryColor} />
                <Text style={{ color: textColor, flex: 1 }}>
                  {event.location}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Calendar size={16} color={primaryColor} />
                <Text style={{ color: textColor, flex: 1 }}>{event.date}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <User size={16} color={primaryColor} />
                <Text style={{ color: textColor, flex: 1 }}>
                  {event.attendees.toLocaleString()} attendees
                </Text>
              </View>
            </View>

            {/* Action Button */}
            <View
              style={{
                backgroundColor: event.color,
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginTop: 20,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 16,
                }}
              >
                Learn More
              </Text>
            </View>
          </View>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

```

##### carousel-no-indicators

Carousel without indicators, arrows only

```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Minus, TrendingDown, TrendingUp } from 'lucide-react-native';
import React from 'react';

export function CarouselNoIndicators() {
  const textColor = useThemeColor({}, 'text');

  const stats = [
    {
      title: 'Revenue',
      value: '$24,500',
      change: '+12.5%',
      trend: 'up',
      color: '#10b981',
    },
    {
      title: 'Users',
      value: '8,432',
      change: '+5.2%',
      trend: 'up',
      color: '#3b82f6',
    },
    {
      title: 'Orders',
      value: '1,248',
      change: '-2.1%',
      trend: 'down',
      color: '#ef4444',
    },
    {
      title: 'Conversion',
      value: '3.8%',
      change: '0.0%',
      trend: 'neutral',
      color: '#6b7280',
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return TrendingUp;
      case 'down':
        return TrendingDown;
      default:
        return Minus;
    }
  };

  return (
    <Carousel showArrows showIndicators={false} loop>
      {stats.map((stat, index) => {
        const TrendIcon = getTrendIcon(stat.trend);
        return (
          <CarouselItem key={index}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                padding: 24,
              }}
            >
              <Text
                style={{
                  color: textColor,
                  opacity: 0.7,
                  fontSize: 14,
                  marginBottom: 8,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {stat.title}
              </Text>

              <Text
                variant='title'
                style={{
                  color: textColor,
                  fontSize: 32,
                  fontWeight: 'bold',
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                  backgroundColor: `${stat.color}15`,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                }}
              >
                <TrendIcon size={16} color={stat.color} />
                <Text
                  style={{
                    color: stat.color,
                    fontSize: 14,
                    fontWeight: '600',
                  }}
                >
                  {stat.change}
                </Text>
              </View>
            </View>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

```

##### carousel-manual

Manually controlled carousel with external buttons

```tsx
import { Button } from '@/components/ui/button';
import { Carousel, CarouselItem, CarouselRef } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react-native';
import React, { useRef, useState } from 'react';

export function CarouselManual() {
  const totalSlides = 4;
  const carouselRef = useRef<CarouselRef>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const lessons = [
    {
      title: 'Introduction to React Native',
      progress: 0,
      duration: '15 min',
      bg: '#9c27b0',
      color: '#f3e5f5',
    },
    {
      title: 'Component Architecture',
      progress: 45,
      duration: '20 min',
      bg: '#ff5722',
      color: '#fff3e0',
    },
    {
      title: 'State Management',
      progress: 75,
      duration: '25 min',
      bg: '#00bcd4',
      color: '#e0f2f1',
    },
    {
      title: 'Navigation Patterns',
      progress: 100,
      duration: '18 min',
      bg: '#ff4081',
      color: '#fce4ec',
    },
  ];

  const handleGoToSlide = (index: number) => {
    if (carouselRef.current?.goToSlide) {
      carouselRef.current.goToSlide(index);
    }
  };

  const handleGoToPrevious = () => {
    if (currentIndex > 0) {
      if (carouselRef.current?.goToPrevious) {
        carouselRef.current.goToPrevious();
      }
    }
  };

  const handleGoToNext = () => {
    if (currentIndex < totalSlides - 1) {
      if (carouselRef.current?.goToNext) {
        carouselRef.current.goToNext();
      }
    }
  };

  const handleReset = () => {
    if (carouselRef.current?.goToSlide) {
      carouselRef.current.goToSlide(0);
    }
  };

  // Handle index changes from carousel (swipe gestures AND button presses)
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ gap: 16 }}>
      {/* External Controls */}
      <View
        style={{
          paddingHorizontal: 4,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          size='icon'
          variant='outline'
          icon={ChevronLeft}
          onPress={handleGoToPrevious}
          disabled={currentIndex === 0}
        />

        <View style={{ flexDirection: 'row', gap: 8 }}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Button
              key={index}
              size='icon'
              variant={currentIndex === index ? 'default' : 'outline'}
              onPress={() => handleGoToSlide(index)}
              style={{ minWidth: 40 }}
            >
              {`${index + 1}`}
            </Button>
          ))}
        </View>

        <Button
          size='icon'
          variant='outline'
          icon={ChevronRight}
          onPress={handleGoToNext}
          disabled={currentIndex === totalSlides - 1}
        />
      </View>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        showIndicators={false}
        onIndexChange={handleIndexChange}
      >
        {lessons.map((lesson, index) => (
          <CarouselItem
            key={index}
            style={{
              padding: 24,
              minHeight: 200,
              backgroundColor: lesson.bg,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                variant='title'
                style={{
                  color: lesson.color,
                  fontSize: 20,
                  marginBottom: 12,
                }}
              >
                {lesson.title}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Text style={{ color: lesson.color, fontSize: 14 }}>
                  {lesson.duration}
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: lesson.color,
                    opacity: 0.5,
                  }}
                />
                <Text style={{ color: lesson.color, fontSize: 14 }}>
                  {lesson.progress}% complete
                </Text>
              </View>
            </View>

            {/* Progress Bar */}
            <View>
              <View
                style={{
                  height: 16,
                  backgroundColor: 'white',
                  borderRadius: 999,
                  overflow: 'hidden',
                  marginBottom: 16,
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: `${lesson.progress}%`,
                    backgroundColor: 'black',
                    borderRadius: 999,
                  }}
                />
              </View>

              <Text
                style={{
                  color: lesson.color,
                  fontSize: 14,
                  textAlign: 'center',
                  opacity: 0.8,
                }}
              >
                Lesson {index + 1} of {totalSlides}
              </Text>
            </View>
          </CarouselItem>
        ))}
      </Carousel>

      {/* Reset Button */}
      <Button size='sm' variant='ghost' icon={RotateCcw} onPress={handleReset}>
        Reset to Start
      </Button>
    </View>
  );
}

```
---

### chart-container

A container component for wrapping charts with title, description, and consistent styling.

**Installation:**
```bash
npx bna-ui add chart-container
```

**External Dependencies:** expo-image

**Registry Dependencies:** text, view, image

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![chart-container preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 15-47-37_1.MOV)

#### Basic Usage

```tsx
import { Chart-container } from '@/components/ui/chart-container';

export default function Example() {
  return (
    <Chart-container />
  );
}```


#### Advanced Examples

##### chart-container-demo

A basic chart container with title and description

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 100, label: 'January' },
  { x: 'Feb', y: 120, label: 'February' },
  { x: 'Mar', y: 90, label: 'March' },
  { x: 'Apr', y: 140, label: 'April' },
  { x: 'May', y: 110, label: 'May' },
];

export function ChartContainerDemo() {
  return (
    <ChartContainer
      title='Monthly Revenue'
      description='Revenue data for the last 6 months'
    >
      <LineChart
        data={sampleData}
        config={{
          height: 200,
          animated: true,
          showGrid: true,
          showLabels: true,
        }}
      />
    </ChartContainer>
  );
}

```

##### chart-container-styled

Chart container with custom styling

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { x: 'Q1', y: 65, label: 'Quarter 1' },
  { x: 'Q2', y: 80, label: 'Quarter 2' },
  { x: 'Q3', y: 75, label: 'Quarter 3' },
  { x: 'Q4', y: 95, label: 'Quarter 4' },
];

export function ChartContainerStyled() {
  const backgroundColor = useThemeColor({}, 'indigo');

  return (
    <ChartContainer
      title='Quarterly Growth'
      description='Performance metrics by quarter'
      style={{
        borderWidth: 2,
        borderColor: '#e2e8f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: backgroundColor,
      }}
    >
      <LineChart
        data={sampleData}
        config={{
          height: 180,
          animated: true,
          showGrid: true,
          showLabels: true,
        }}
      />
    </ChartContainer>
  );
}

```
---

### checkbox

A control that allows the user to toggle between checked and not checked states.

**Installation:**
```bash
npx bna-ui add checkbox
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![checkbox preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-16-46_1.MP4)

#### Basic Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';

export default function Example() {
  return (
    <Checkbox />
  );
}```


#### Advanced Examples

##### checkbox-demo

A basic checkbox with label

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label='Accept terms and conditions'
    />
  );
}

```

##### checkbox-states

Checkboxes in different states: unchecked, checked, and disabled

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function CheckboxStates() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <View style={{ gap: 16 }}>
      <Text variant='subtitle' style={{ marginBottom: 8 }}>
        Different States
      </Text>

      <Checkbox
        checked={checked1}
        onCheckedChange={setChecked1}
        label='Unchecked'
      />

      <Checkbox
        checked={checked2}
        onCheckedChange={setChecked2}
        label='Checked'
      />

      <Checkbox
        checked={checked3}
        onCheckedChange={setChecked3}
        label='Disabled'
        disabled
      />
    </View>
  );
}

```

##### checkbox-without-label

A checkbox without a label

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';

export function CheckboxWithoutLabel() {
  const [checked, setChecked] = useState(false);

  return <Checkbox checked={checked} onCheckedChange={setChecked} />;
}

```

##### checkbox-with-error

A checkbox with error styling and message

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function CheckboxWithError() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ gap: 8 }}>
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        label='I agree to the terms'
        error='You must accept the terms to continue'
      />
      {!checked && (
        <Text variant='caption' style={{ color: 'red', marginLeft: 28 }}>
          You must accept the terms to continue
        </Text>
      )}
    </View>
  );
}

```

##### checkbox-custom-styling

Checkboxes with custom label styling

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function CheckboxCustomStyling() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <View style={{ gap: 16 }}>
      <Checkbox
        checked={checked1}
        onCheckedChange={setChecked1}
        label='Custom styled checkbox'
        labelStyle={{
          fontSize: 18,
          fontWeight: '600',
          color: '#6366f1',
        }}
      />

      <Checkbox
        checked={checked2}
        onCheckedChange={setChecked2}
        label='Another custom style'
        labelStyle={{
          fontSize: 16,
          fontStyle: 'italic',
          color: '#10b981',
        }}
      />
    </View>
  );
}

```

##### checkbox-group

Multiple checkboxes working together as a group

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function CheckboxGroup() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = [
    { id: 'notifications', label: 'Email notifications' },
    { id: 'marketing', label: 'Marketing emails' },
    { id: 'updates', label: 'Product updates' },
    { id: 'newsletter', label: 'Weekly newsletter' },
  ];

  const handleItemChange = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <Text variant='subtitle'>Subscription Preferences</Text>

      <View style={{ gap: 12 }}>
        {items.map((item) => (
          <Checkbox
            key={item.id}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={(checked) => handleItemChange(item.id, checked)}
            label={item.label}
          />
        ))}
      </View>

      <Text variant='caption' style={{ marginTop: 8 }}>
        Selected: {selectedItems.length} item(s)
      </Text>
    </View>
  );
}

```
---

### collapsible

An interactive component which can be expanded/collapsed to show and hide content.

**Installation:**
```bash
npx bna-ui add collapsible
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** icon, text, view

**Preview:**

![collapsible preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-19-30_1.MP4)

#### Basic Usage

```tsx
import { Collapsible } from '@/components/ui/collapsible';

export default function Example() {
  return (
    <Collapsible />
  );
}```


#### Advanced Examples

##### collapsible-demo

A basic collapsible component with title and content

```tsx
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import React from 'react';

export function CollapsibleDemo() {
  return (
    <Collapsible title='What is React Native?'>
      <Text variant='body'>
        React Native is an open-source UI software framework created by Meta. It
        is used to develop applications for Android, iOS, macOS, tvOS, Web,
        Windows and UWP by enabling developers to use React's framework along
        with native platform capabilities.
      </Text>
    </Collapsible>
  );
}

```

##### collapsible-multiple

Multiple collapsible components working independently

```tsx
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function CollapsibleMultiple() {
  return (
    <View style={{ gap: 16 }}>
      <Collapsible title='Getting Started'>
        <Text variant='body'>
          To get started with React Native, you'll need to set up your
          development environment. This includes installing Node.js, React
          Native CLI, and either Android Studio or Xcode.
        </Text>
      </Collapsible>

      <Collapsible title='Components'>
        <Text variant='body'>
          React Native provides many built-in components like View, Text,
          ScrollView, TextInput, and more. You can also create custom components
          to build your app's interface.
        </Text>
      </Collapsible>

      <Collapsible title='Navigation'>
        <Text variant='body'>
          For navigation between screens, React Navigation is the most popular
          solution. It provides stack, tab, and drawer navigation patterns that
          work seamlessly with React Native.
        </Text>
      </Collapsible>
    </View>
  );
}

```

##### collapsible-nested

Collapsible components nested within each other

```tsx
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function CollapsibleNested() {
  return (
    <Collapsible title='Mobile Development'>
      <Text variant='body' style={{ marginBottom: 16 }}>
        Mobile development encompasses various platforms and technologies:
      </Text>

      <View style={{ gap: 12 }}>
        <Collapsible title='iOS Development'>
          <Text variant='body'>
            iOS development primarily uses Swift or Objective-C with Xcode as
            the main development environment. Apps are distributed through the
            Apple App Store.
          </Text>
        </Collapsible>

        <Collapsible title='Android Development'>
          <Text variant='body'>
            Android development can be done with Java, Kotlin, or cross-platform
            frameworks. Android Studio is the official IDE, and apps are
            distributed through Google Play Store.
          </Text>
        </Collapsible>

        <Collapsible title='Cross-Platform'>
          <Text variant='body'>
            Cross-platform frameworks like React Native, Flutter, and Xamarin
            allow you to write code once and deploy to multiple platforms.
          </Text>
        </Collapsible>
      </View>
    </Collapsible>
  );
}

```

##### collapsible-with-content

Collapsible containing interactive elements like checkboxes

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function CollapsibleWithContent() {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
    analytics: false,
  });

  return (
    <View style={{ gap: 16 }}>
      <Collapsible title='App Settings'>
        <View style={{ gap: 12 }}>
          <Checkbox
            checked={preferences.darkMode}
            onCheckedChange={(checked) =>
              setPreferences((prev) => ({ ...prev, darkMode: checked }))
            }
            label='Enable dark mode'
          />

          <Checkbox
            checked={preferences.notifications}
            onCheckedChange={(checked) =>
              setPreferences((prev) => ({ ...prev, notifications: checked }))
            }
            label='Push notifications'
          />

          <Checkbox
            checked={preferences.analytics}
            onCheckedChange={(checked) =>
              setPreferences((prev) => ({ ...prev, analytics: checked }))
            }
            label='Analytics tracking'
          />
        </View>
      </Collapsible>

      <Collapsible title='Account Information'>
        <View style={{ gap: 8 }}>
          <Text variant='body'>Email: user@example.com</Text>
          <Text variant='body'>Member since: January 2024</Text>
          <Text variant='body'>Subscription: Premium</Text>
        </View>
      </Collapsible>
    </View>
  );
}

```

##### collapsible-faq

Collapsible components styled as frequently asked questions

```tsx
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function CollapsibleFAQ() {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. Enter your email address and we'll send you instructions to reset your password.",
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes, you can cancel your subscription at any time from your account settings. Your subscription will remain active until the end of your current billing period.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'We take data security seriously. All data is encrypted in transit and at rest. We follow industry best practices and comply with relevant data protection regulations.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can reach our support team through the in-app chat, email us at support@example.com, or call our toll-free number during business hours.',
    },
  ];

  return (
    <View style={{ gap: 16 }}>
      <Text variant='subtitle' style={{ marginBottom: 8 }}>
        Frequently Asked Questions
      </Text>

      <View style={{ gap: 12 }}>
        {faqs.map((faq, index) => (
          <Collapsible key={index} title={faq.question}>
            <Text variant='body'>{faq.answer}</Text>
          </Collapsible>
        ))}
      </View>
    </View>
  );
}

```
---

### color-picker

A color picker component with HSV color space selection and swatch display.

**Installation:**
```bash
npx bna-ui add color-picker
```

**External Dependencies:** expo-linear-gradient, react-native-gesture-handler, react-native-reanimated, react-native-svg

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![color-picker preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-21-55_1.MP4)

#### Basic Usage

```tsx
import { Color-picker } from '@/components/ui/color-picker';

export default function Example() {
  return (
    <Color-picker />
  );
}```


#### Advanced Examples

##### color-picker-demo

A basic color picker with swatch and modal selection

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import React, { useState } from 'react';

export function ColorPickerDemo() {
  const [color, setColor] = useState('#ff0000');

  return (
    <ColorPicker
      value={color}
      onColorChange={setColor}
      onColorSelect={(selectedColor) => {
        console.log('Color selected:', selectedColor);
        setColor(selectedColor);
      }}
    />
  );
}

```

##### color-picker-sizes

Color pickers with different swatch sizes

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ColorPickerSizes() {
  const [smallColor, setSmallColor] = useState('#ff6b6b');
  const [mediumColor, setMediumColor] = useState('#4ecdc4');
  const [largeColor, setLargeColor] = useState('#45b7d1');
  const [xlColor, setXlColor] = useState('#f9ca24');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <ColorPicker
        value={smallColor}
        onColorChange={setSmallColor}
        onColorSelect={setSmallColor}
        swatchSize={24}
      />
      <ColorPicker
        value={mediumColor}
        onColorChange={setMediumColor}
        onColorSelect={setMediumColor}
        swatchSize={32}
      />
      <ColorPicker
        value={largeColor}
        onColorChange={setLargeColor}
        onColorSelect={setLargeColor}
        swatchSize={48}
      />
      <ColorPicker
        value={xlColor}
        onColorChange={setXlColor}
        onColorSelect={setXlColor}
        swatchSize={64}
      />
    </View>
  );
}

```

##### color-picker-colors

Color pickers with different initial colors

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ColorPickerColors() {
  const [redColor, setRedColor] = useState('#e74c3c');
  const [greenColor, setGreenColor] = useState('#2ecc71');
  const [blueColor, setBlueColor] = useState('#3498db');
  const [purpleColor, setPurpleColor] = useState('#9b59b6');
  const [orangeColor, setOrangeColor] = useState('#f39c12');

  const colorData = [
    { name: 'Red', color: redColor, setter: setRedColor },
    { name: 'Green', color: greenColor, setter: setGreenColor },
    { name: 'Blue', color: blueColor, setter: setBlueColor },
    { name: 'Purple', color: purpleColor, setter: setPurpleColor },
    { name: 'Orange', color: orangeColor, setter: setOrangeColor },
  ];

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      {colorData.map(({ name, color, setter }) => (
        <View key={name} style={{ alignItems: 'center', gap: 8 }}>
          <ColorPicker
            value={color}
            onColorChange={setter}
            onColorSelect={setter}
            swatchSize={40}
          />
          <Text variant='caption'>{name}</Text>
        </View>
      ))}
    </View>
  );
}

```

##### color-picker-disabled

Disabled color picker that cannot be opened

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ColorPickerDisabled() {
  return (
    <View style={{ alignItems: 'center', gap: 12 }}>
      <ColorPicker value='#6c757d' disabled={true} swatchSize={48} />
      <Text variant='caption' style={{ opacity: 0.6 }}>
        Disabled Color Picker
      </Text>
    </View>
  );
}

```

##### color-picker-styled

Color pickers with custom styling and layouts

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ColorPickerStyled() {
  const [primaryColor, setPrimaryColor] = useState('#007AFF');
  const [accentColor, setAccentColor] = useState('#FF3B30');

  return (
    <View style={{ gap: 20 }}>
      {/* Rounded Square Style */}
      <View style={{ alignItems: 'center', gap: 8 }}>
        <ColorPicker
          value={primaryColor}
          onColorChange={setPrimaryColor}
          onColorSelect={setPrimaryColor}
          swatchSize={50}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        />
        <Text variant='caption'>Primary Color</Text>
      </View>

      {/* With Custom Border */}
      <View style={{ alignItems: 'center', gap: 8 }}>
        <View
          style={{
            padding: 4,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: '#ddd',
            backgroundColor: '#fff',
          }}
        >
          <ColorPicker
            value={accentColor}
            onColorChange={setAccentColor}
            onColorSelect={setAccentColor}
            swatchSize={40}
          />
        </View>
        <Text variant='caption'>Accent Color</Text>
      </View>
    </View>
  );
}

```

##### color-picker-palette

Multiple color pickers arranged as a color palette

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function ColorPickerPalette() {
  const cardColor = useThemeColor({}, 'card');

  const [colors, setColors] = useState([
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#F9CA24',
    '#6C5CE7',
    '#A29BFE',
    '#FD79A8',
    '#00B894',
  ]);

  const updateColor = (index: number, newColor: string) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: cardColor,
        borderRadius: 12,
      }}
    >
      {colors.map((color, index) => (
        <View key={index} style={{ alignItems: 'center', gap: 4 }}>
          <ColorPicker
            value={color}
            onColorChange={(newColor) => updateColor(index, newColor)}
            onColorSelect={(newColor) => updateColor(index, newColor)}
            swatchSize={36}
          />
          <Text variant='caption' style={{ fontSize: 10 }}>
            {color.toUpperCase()}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### color-picker-labeled

color-picker-labeled

```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ColorPickerLabeled() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#333333');
  const [borderColor, setBorderColor] = useState('#e1e5e9');

  return (
    <View style={{ gap: 20 }}>
      {/* Background Color */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <ColorPicker
          value={backgroundColor}
          onColorChange={setBackgroundColor}
          onColorSelect={setBackgroundColor}
          swatchSize={40}
        />
        <View style={{ flex: 1 }}>
          <Text variant='body' style={{ fontWeight: '600' }}>
            Background Color
          </Text>
          <Text variant='caption' style={{ opacity: 0.7 }}>
            {backgroundColor.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* Text Color */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <ColorPicker
          value={textColor}
          onColorChange={setTextColor}
          onColorSelect={setTextColor}
          swatchSize={40}
        />
        <View style={{ flex: 1 }}>
          <Text variant='body' style={{ fontWeight: '600' }}>
            Text Color
          </Text>
          <Text variant='caption' style={{ opacity: 0.7 }}>
            {textColor.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* Border Color */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <ColorPicker
          value={borderColor}
          onColorChange={setBorderColor}
          onColorSelect={setBorderColor}
          swatchSize={40}
        />
        <View style={{ flex: 1 }}>
          <Text variant='body' style={{ fontWeight: '600' }}>
            Border Color
          </Text>
          <Text variant='caption' style={{ opacity: 0.7 }}>
            {borderColor.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* Preview */}
      <View
        style={{
          padding: 16,
          backgroundColor: backgroundColor,
          borderWidth: 2,
          borderColor: borderColor,
          borderRadius: 8,
          marginTop: 8,
        }}
      >
        <Text style={{ color: textColor, textAlign: 'center' }}>
          Preview with selected colors
        </Text>
      </View>
    </View>
  );
}

```
---

### column-chart

A customizable horizontal bar chart component with smooth animations and flexible styling.

**Installation:**
```bash
npx bna-ui add column-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![column-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 19 5.46.51 PM.MOV)

#### Basic Usage

```tsx
import { Column-chart } from '@/components/ui/column-chart';

export default function Example() {
  return (
    <Column-chart />
  );
}```


#### Advanced Examples

##### column-chart-demo

A horizontal bar chart with smooth animations

```tsx
import { ColumnChart } from '@/components/charts/column-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function ColumnChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <ColumnChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### column-chart-sample

An sample column chart

```tsx
import { ColumnChart } from '@/components/charts/column-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const sampleData = [
  { label: 'Q1 2024', value: 850 },
  { label: 'Q2 2024', value: 920 },
  { label: 'Q3 2024', value: 1100 },
  { label: 'Q4 2024', value: 1250 },
];

export function ColumnChartSample() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const primaryColor = useThemeColor({}, 'primary');
  const mutedColor = useThemeColor({}, 'muted');

  const enhancedData = sampleData.map((item, index) => ({
    ...item,
    color: selectedIndex === index ? primaryColor : mutedColor,
  }));

  return (
    <ChartContainer
      title='Interactive Revenue Chart'
      description='Tap on quarters to highlight them'
    >
      <ColumnChart
        data={enhancedData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 600,
        }}
      />
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        {sampleData.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              setSelectedIndex(selectedIndex === index ? null : index)
            }
            style={{
              padding: 8,
              backgroundColor:
                selectedIndex === index ? primaryColor : mutedColor,
              borderRadius: 6,
              minWidth: 60,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: selectedIndex === index ? 'white' : 'gray',
                fontSize: 12,
                fontWeight: '500',
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </ChartContainer>
  );
}

```

##### column-chart-styled

A customized column chart with custom colors and styling

```tsx
import { ColumnChart } from '@/components/charts/column-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { label: 'Mobile', value: 45, color: '#3b82f6' },
  { label: 'Desktop', value: 35, color: '#10b981' },
  { label: 'Tablet', value: 15, color: '#f59e0b' },
  { label: 'Smart TV', value: 8, color: '#ef4444' },
  { label: 'Wearable', value: 3, color: '#8b5cf6' },
];

export function ColumnChartStyled() {
  return (
    <ChartContainer
      title='Device Usage Statistics'
      description='User engagement by device type with custom colors'
    >
      <ColumnChart
        data={sampleData}
        config={{
          height: 280,
          padding: 24,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### column-chart-large

A column chart with large dataset

```tsx
import { ColumnChart } from '@/components/charts/column-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeSampleData = [
  { label: 'E-commerce', value: 2840, color: '#ff0066' },
  { label: 'AI', value: 2440, color: '#ff9900' },
  { label: 'Healthcare', value: 2150, color: '#00e6cc' },
  { label: 'Education', value: 1920, color: '#0099ff' },
  { label: 'Finance', value: 1780, color: '#ffcc00' },
  { label: 'Real Estate', value: 1650, color: '#9933ff' },
  { label: 'Travel', value: 1420, color: '#ff0080' },
  { label: 'Food & Dining', value: 1380, color: '#00cc66' },
  { label: 'Entertainment', value: 1250, color: '#ff6600' },
  { label: 'Sports', value: 1180, color: '#3399ff' },
  { label: 'Technology', value: 1050, color: '#cc66ff' },
  { label: 'Fashion', value: 980, color: '#ff3030' },
  { label: 'Automotive', value: 875, color: '#ff9900' },
  { label: 'Home & Garden', value: 720, color: '#0066ff' },
  { label: 'Beauty', value: 650, color: '#ff3366' },
  { label: 'Pets', value: 580, color: '#00ffcc' },
];

export function ColumnChartLarge() {
  return (
    <ChartContainer
      title='Industry Revenue Analysis'
      description='Annual revenue by industry sector (in millions)'
    >
      <ColumnChart
        data={largeSampleData}
        config={{
          height: 500,
          padding: 20,
          showLabels: true,
          animated: true,
          duration: 4000,
        }}
      />
    </ChartContainer>
  );
}

```
---

### combobox

A searchable dropdown component that combines an input with a list of options.

**Installation:**
```bash
npx bna-ui add combobox
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![combobox preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-30-31_1.MP4)

#### Basic Usage

```tsx
import { Combobox } from '@/components/ui/combobox';

export default function Example() {
  return (
    <Combobox />
  );
}```

---

### combobox-demo

A basic combobox with search functionality

**Installation:**
```bash
npx bna-ui add combobox-demo
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-demo preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-30-31_1.MP4)

#### Basic Usage

```tsx
import { Combobox-demo } from '@/components/ui/combobox-demo';

export default function Example() {
  return (
    <Combobox-demo />
  );
}```

---

### combobox-disabled

Disabled combobox component

**Installation:**
```bash
npx bna-ui add combobox-disabled
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-disabled preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-31-48_1.MP4)

#### Basic Usage

```tsx
import { Combobox-disabled } from '@/components/ui/combobox-disabled';

export default function Example() {
  return (
    <Combobox-disabled />
  );
}```

---

### combobox-form

Combobox integrated with form validation

**Installation:**
```bash
npx bna-ui add combobox-form
```

**Registry Dependencies:** combobox, text, view

**Preview:**

![combobox-form preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-32-52_1.MP4)

#### Basic Usage

```tsx
import { Combobox-form } from '@/components/ui/combobox-form';

export default function Example() {
  return (
    <Combobox-form />
  );
}```

---

### combobox-groups

Combobox with grouped options

**Installation:**
```bash
npx bna-ui add combobox-groups
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-groups preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-31-00_1.MP4)

#### Basic Usage

```tsx
import { Combobox-groups } from '@/components/ui/combobox-groups';

export default function Example() {
  return (
    <Combobox-groups />
  );
}```

---

### combobox-large

Combobox handling large datasets efficiently

**Installation:**
```bash
npx bna-ui add combobox-large
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-large preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-33-14_1.MP4)

#### Basic Usage

```tsx
import { Combobox-large } from '@/components/ui/combobox-large';

export default function Example() {
  return (
    <Combobox-large />
  );
}```

---

### combobox-multiple

Combobox that allows selecting multiple values

**Installation:**
```bash
npx bna-ui add combobox-multiple
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-multiple preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-31-21_1.MP4)

#### Basic Usage

```tsx
import { Combobox-multiple } from '@/components/ui/combobox-multiple';

export default function Example() {
  return (
    <Combobox-multiple />
  );
}```

---

### combobox-search

Combobox with custom search behavior

**Installation:**
```bash
npx bna-ui add combobox-search
```

**Registry Dependencies:** combobox

**Preview:**

![combobox-search preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_06-30-2025 23-32-02_1.MP4)

#### Basic Usage

```tsx
import { Combobox-search } from '@/components/ui/combobox-search';

export default function Example() {
  return (
    <Combobox-search />
  );
}```

---

### date-picker

A customizable date and time picker component with bottom sheet UI.

**Installation:**
```bash
npx bna-ui add date-picker
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** bottom-sheet, button, icon, scroll-view, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![date-picker preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 01-08-59_1.MP4)

#### Basic Usage

```tsx
import { Date-picker } from '@/components/ui/date-picker';

export default function Example() {
  return (
    <Date-picker />
  );
}```


#### Advanced Examples

##### date-picker-demo

A basic date picker with calendar view

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import React, { useState } from 'react';

export function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <DatePicker
      label='Select Date'
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder='Choose a date'
    />
  );
}

```

##### date-picker-time

A time picker with hour and minute selection

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function DatePickerTime() {
  const [time24, setTime24] = useState<Date | undefined>();
  const [time12, setTime12] = useState<Date | undefined>();

  return (
    <View style={{ gap: 16 }}>
      <DatePicker
        label='24-Hour Time'
        mode='time'
        value={time24}
        onChange={setTime24}
        placeholder='Select time'
        timeFormat='24'
      />

      <DatePicker
        label='12-Hour Time'
        mode='time'
        value={time12}
        onChange={setTime12}
        placeholder='Select time'
        timeFormat='12'
      />
    </View>
  );
}

```

##### date-picker-datetime

A combined date and time picker

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import React, { useState } from 'react';

export function DatePickerDateTime() {
  const [dateTime, setDateTime] = useState<Date | undefined>();

  return (
    <DatePicker
      label='Date & Time'
      mode='datetime'
      value={dateTime}
      onChange={setDateTime}
      placeholder='Select date and time'
      timeFormat='12'
    />
  );
}

```

##### date-picker-range

A date range picker

```tsx
import { DatePicker, DateRange } from '@/components/ui/date-picker';
import React, { useState } from 'react';

export function DatePickerRange() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  return (
    <DatePicker
      mode='range'
      label='Select Date'
      value={selectedRange}
      onChange={setSelectedRange}
      placeholder='Choose a range'
    />
  );
}

```

##### date-picker-constraints

Date picker with minimum and maximum date limits

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function DatePickerConstraints() {
  const [pastDate, setPastDate] = useState<Date | undefined>();
  const [futureDate, setFutureDate] = useState<Date | undefined>();
  const [rangeDate, setRangeDate] = useState<Date | undefined>();

  const today = new Date();
  const maxPastDate = new Date();
  maxPastDate.setDate(today.getDate() - 1); // Yesterday

  const minFutureDate = new Date();
  minFutureDate.setDate(today.getDate() + 1); // Tomorrow

  const minRangeDate = new Date();
  minRangeDate.setMonth(today.getMonth() - 1); // Last month

  const maxRangeDate = new Date();
  maxRangeDate.setMonth(today.getMonth() + 1); // Next month

  return (
    <View style={{ gap: 16 }}>
      <DatePicker
        label='Past Dates Only'
        value={pastDate}
        onChange={setPastDate}
        placeholder='Select past date'
        maximumDate={maxPastDate}
      />

      <DatePicker
        label='Future Dates Only'
        value={futureDate}
        onChange={setFutureDate}
        placeholder='Select future date'
        minimumDate={minFutureDate}
      />

      <DatePicker
        label='Date Range'
        value={rangeDate}
        onChange={setRangeDate}
        placeholder='Select date in range'
        minimumDate={minRangeDate}
        maximumDate={maxRangeDate}
      />
    </View>
  );
}

```

##### date-picker-variants

Date pickers with different styling variants

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function DatePickerVariants() {
  const [filledDate, setFilledDate] = useState<Date | undefined>();
  const [outlineDate, setOutlineDate] = useState<Date | undefined>();
  const [groupDate, setGroupDate] = useState<Date | undefined>();

  return (
    <View style={{ gap: 16 }}>
      <DatePicker
        label='Filled Variant'
        variant='filled'
        value={filledDate}
        onChange={setFilledDate}
        placeholder='Select date'
      />

      <DatePicker
        label='Outline Variant'
        variant='outline'
        value={outlineDate}
        onChange={setOutlineDate}
        placeholder='Select date'
      />

      <DatePicker
        label='Group Variant'
        variant='group'
        value={groupDate}
        onChange={setGroupDate}
        placeholder='Select date'
      />
    </View>
  );
}

```

##### date-picker-formats

Time picker with 12-hour and 24-hour formats

```tsx
import { DatePicker } from '@/components/ui/date-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function DatePickerFormats() {
  const [datetime24, setDateTime24] = useState<Date | undefined>();
  const [datetime12, setDateTime12] = useState<Date | undefined>();

  return (
    <View style={{ gap: 16 }}>
      <View>
        <Text variant='caption' style={{ marginBottom: 8 }}>
          24-Hour Format
        </Text>
        <DatePicker
          mode='datetime'
          value={datetime24}
          onChange={setDateTime24}
          placeholder='Select date and time'
          timeFormat='24'
        />
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 8 }}>
          12-Hour Format with AM/PM
        </Text>
        <DatePicker
          mode='datetime'
          value={datetime12}
          onChange={setDateTime12}
          placeholder='Select date and time'
          timeFormat='12'
        />
      </View>
    </View>
  );
}

```

##### date-picker-form

Date picker integrated within a form with validation

```tsx
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export function DatePickerForm() {
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>();
  const [errors, setErrors] = useState<{
    birthDate?: string;
    appointmentDate?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!birthDate) {
      newErrors.birthDate = 'Birth date is required';
    } else {
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.birthDate = 'Must be 18 years or older';
      }
    }

    if (!appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (appointmentDate < today) {
        newErrors.appointmentDate = 'Appointment must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form submitted successfully!');
    }
  };

  const maxBirthDate = new Date();
  maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18);

  const minAppointmentDate = new Date();
  minAppointmentDate.setDate(minAppointmentDate.getDate() + 1);

  return (
    <View style={{ gap: 16 }}>
      <Text variant='title' style={{ marginBottom: 8 }}>
        Registration Form
      </Text>

      <DatePicker
        label='Date of Birth'
        value={birthDate}
        onChange={(date) => {
          setBirthDate(date);
          if (errors.birthDate) {
            setErrors((prev) => ({ ...prev, birthDate: undefined }));
          }
        }}
        placeholder='Select your birth date'
        maximumDate={maxBirthDate}
        error={errors.birthDate}
      />

      <DatePicker
        label='Appointment'
        mode='datetime'
        value={appointmentDate}
        onChange={(date) => {
          setAppointmentDate(date);
          if (errors.appointmentDate) {
            setErrors((prev) => ({ ...prev, appointmentDate: undefined }));
          }
        }}
        placeholder='Select appointment date and time'
        minimumDate={minAppointmentDate}
        timeFormat='12'
        error={errors.appointmentDate}
      />

      <Button onPress={handleSubmit} style={{ marginTop: 8 }}>
        Submit Registration
      </Button>
    </View>
  );
}

```
---

### doughnut-chart

A customizable doughnut chart component with smooth animations, interactive legends, and flexible styling.

**Installation:**
```bash
npx bna-ui add doughnut-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Registry Dependencies:** text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![doughnut-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 56.MOV)

#### Basic Usage

```tsx
import { Doughnut-chart } from '@/components/ui/doughnut-chart';

export default function Example() {
  return (
    <Doughnut-chart />
  );
}```


#### Advanced Examples

##### doughnut-chart-demo

A doughnut chart with smooth animations and percentage labels

```tsx
import { DoughnutChart } from '@/components/charts/doughnut-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function DoughnutChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <DoughnutChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
          innerRadius: 0.6,
        }}
      />
    </ChartContainer>
  );
}

```

##### doughnut-chart-sample

A sample doughnut chart with custom theme colors

```tsx
import { DoughnutChart } from '@/components/charts/doughnut-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { label: 'Revenue', value: 45000 },
  { label: 'Expenses', value: 32000 },
  { label: 'Profit', value: 13000 },
];

export function DoughnutChartSample() {
  const primaryColor = useThemeColor({}, 'primary');
  const greenColor = useThemeColor({}, 'green');
  const orangeColor = useThemeColor({}, 'orange');

  const dataWithColors = [
    { ...sampleData[0], color: primaryColor },
    { ...sampleData[1], color: orangeColor },
    { ...sampleData[2], color: greenColor },
  ];

  return (
    <ChartContainer
      title='Financial Overview'
      description='Q4 2024 financial breakdown'
    >
      <DoughnutChart
        data={dataWithColors}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 1500,
          innerRadius: 0.5,
        }}
      />
    </ChartContainer>
  );
}

```

##### doughnut-chart-styled

A customized doughnut chart with custom colors and styling

```tsx
import { DoughnutChart } from '@/components/charts/doughnut-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const customData = [
  { label: 'Mobile', value: 65, color: '#FF6B6B' },
  { label: 'Desktop', value: 25, color: '#4ECDC4' },
  { label: 'Tablet', value: 8, color: '#45B7D1' },
  { label: 'Other', value: 2, color: '#96CEB4' },
];

export function DoughnutChartStyled() {
  return (
    <ChartContainer
      title='Device Usage'
      description='Traffic distribution by device type'
    >
      <DoughnutChart
        data={customData}
        config={{
          height: 280,
          showLabels: true,
          animated: true,
          duration: 800,
          innerRadius: 0.7,
        }}
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### doughnut-chart-large

A doughnut chart with large dataset and legend-only labels

```tsx
import { DoughnutChart } from '@/components/charts/doughnut-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeDataset = [
  { label: 'E-commerce', value: 285, color: '#FF6B6B' },
  { label: 'Social Media', value: 245, color: '#4ECDC4' },
  { label: 'Search Engine', value: 198, color: '#45B7D1' },
  { label: 'Email Marketing', value: 156, color: '#96CEB4' },
  { label: 'Direct Traffic', value: 134, color: '#FFEAA7' },
  { label: 'Referral', value: 89, color: '#DDA0DD' },
  { label: 'Display Ads', value: 67, color: '#98D8C8' },
  { label: 'Video Ads', value: 45, color: '#F7DC6F' },
  { label: 'Affiliate', value: 23, color: '#BB8FCE' },
  { label: 'Other', value: 18, color: '#AED6F1' },
];

export function DoughnutChartLarge() {
  return (
    <ChartContainer
      title='Traffic Sources'
      description='Website traffic breakdown by source (last 30 days)'
    >
      <DoughnutChart
        data={largeDataset}
        config={{
          height: 320,
          showLabels: false, // Disable labels for large datasets
          animated: true,
          duration: 1200,
          innerRadius: 0.4,
        }}
      />
    </ChartContainer>
  );
}

```
---

### file-picker

A customizable file picker component with validation, preview, and multiple file support.

**Installation:**
```bash
npx bna-ui add file-picker
```

**External Dependencies:** lucide-react-native, expo-document-picker

**Registry Dependencies:** button, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface FilePickerProps {
  // Core functionality
  onFilesSelected: (files: SelectedFile[]) => void;
  onError?: (error: string) => void;

  // Configuration
  fileType?: FileType;
  multiple?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
  allowedExtensions?: string[];

  // UI customization
  placeholder?: string;
  disabled?: boolean;
  style?: ViewStyle;
  showPreview?: boolean;
  showFileInfo?: boolean;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;

  variant?: ButtonVariant;
}
```

**Preview:**

![file-picker preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 01-15-34_1.MP4)

#### Basic Usage

```tsx
import { File-picker } from '@/components/ui/file-picker';

export default function Example() {
  return (
    <File-picker />
  );
}```


#### Advanced Examples

##### file-picker-demo

A basic file picker with validation and preview

```tsx
import { FilePicker } from '@/components/ui/file-picker';
import React from 'react';

export function FilePickerDemo() {
  return (
    <FilePicker
      onFilesSelected={(files) => console.log('Selected files:', files)}
      onError={(error) => console.error('Error:', error)}
      fileType='all'
      multiple={true}
      maxFiles={5}
      placeholder='Select your files'
      showFileInfo={true}
    />
  );
}

```

##### file-picker-images

File picker configured for images only

```tsx
import { FilePicker, SelectedFile } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function FilePickerImages() {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);

  return (
    <View style={{ gap: 12 }}>
      <FilePicker
        onFilesSelected={setSelectedFiles}
        onError={(error) => console.error('Error:', error)}
        fileType='image'
        multiple={true}
        maxFiles={3}
        maxSizeBytes={5 * 1024 * 1024} // 5MB
        allowedExtensions={['jpg', 'jpeg', 'png', 'gif', 'webp']}
        placeholder='Select images (max 3)'
        showFileInfo={true}
      />
      {selectedFiles.length > 0 && (
        <Text style={{ fontSize: 14, opacity: 0.7 }}>
          {selectedFiles.length} image{selectedFiles.length > 1 ? 's' : ''}{' '}
          selected
        </Text>
      )}
    </View>
  );
}

```

##### file-picker-single

File picker for selecting a single file

```tsx
import { FilePicker, SelectedFile } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function FilePickerSingle() {
  const [selectedFile, setSelectedFile] = useState<SelectedFile[]>([]);

  return (
    <View style={{ gap: 12 }}>
      <FilePicker
        onFilesSelected={setSelectedFile}
        onError={(error) => console.error('Error:', error)}
        fileType='document'
        multiple={false}
        maxFiles={1}
        maxSizeBytes={2 * 1024 * 1024} // 2MB
        placeholder='Select a document'
        showFileInfo={true}
      />

      {selectedFile.length > 0 && (
        <View style={{ padding: 12, borderRadius: 8 }}>
          <Text style={{ fontWeight: '500' }}>Selected File:</Text>
          <Text style={{ fontSize: 14 }}>{selectedFile[0].name}</Text>
          {selectedFile[0].size && (
            <Text style={{ fontSize: 12, opacity: 0.7 }}>
              {(selectedFile[0].size / 1024).toFixed(1)} KB
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

```

##### file-picker-validation

File picker with size limits and extension validation

```tsx
import { FilePicker, SelectedFile } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function FilePickerValidation() {
  const [error, setError] = useState('');
  const [files, setFiles] = useState<SelectedFile[]>([]);

  return (
    <View style={{ gap: 12 }}>
      <FilePicker
        onFilesSelected={(files) => {
          setFiles(files);
          setError('');
        }}
        onError={setError}
        fileType='all'
        multiple={true}
        maxFiles={2}
        maxSizeBytes={1 * 1024 * 1024} // 1MB limit
        allowedExtensions={['pdf', 'doc', 'docx', 'txt']}
        placeholder='Select (PDF, DOC, DOCX, TXT only)'
        showFileInfo={true}
      />

      {error && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#ffeaea',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ffcaca',
          }}
        >
          <Text style={{ color: '#d32f2f', fontSize: 14 }}>{error}</Text>
        </View>
      )}

      {files.length > 0 && !error && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#e8f5e8',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#c8e6c9',
          }}
        >
          <Text style={{ color: '#2e7d32', fontSize: 14, fontWeight: '500' }}>
            ✓ Files validated successfully
          </Text>
          <Text style={{ color: '#2e7d32', fontSize: 12, marginTop: 4 }}>
            {files.length} file{files.length > 1 ? 's' : ''} ready for upload
          </Text>
        </View>
      )}
    </View>
  );
}

```

##### file-picker-styled

File picker with custom styling and colors

```tsx
import { FilePicker } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function FilePickerStyled() {
  return (
    <View style={{ gap: 16 }}>
      {/* Primary Style */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '500' }}>
          Primary Style
        </Text>

        <FilePicker
          variant='ghost'
          onFilesSelected={(files) => console.log('Primary files:', files)}
          onError={(error) => console.error('Error:', error)}
          fileType='all'
          multiple={true}
          maxFiles={3}
          placeholder='Upload files'
          style={{
            borderWidth: 2,
            borderColor: '#007AFF',
            borderRadius: 12,
            // backgroundColor: '#f0f8ff',
          }}
        />
      </View>

      {/* Minimal Style */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '500' }}>
          Minimal Style
        </Text>
        <FilePicker
          variant='ghost'
          onFilesSelected={(files) => console.log('Minimal files:', files)}
          onError={(error) => console.error('Error:', error)}
          fileType='image'
          multiple={false}
          maxFiles={1}
          placeholder='Choose image'
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#ccc',
            borderRadius: 8,
            backgroundColor: 'transparent',
          }}
        />
      </View>

      {/* Success Style */}
      <View>
        <Text style={{ marginBottom: 8, fontWeight: '500' }}>
          Success Style
        </Text>
        <FilePicker
          variant='ghost'
          onFilesSelected={(files) => console.log('Success files:', files)}
          onError={(error) => console.error('Error:', error)}
          fileType='document'
          multiple={true}
          maxFiles={5}
          placeholder='Select documents'
          style={{
            borderWidth: 2,
            borderColor: '#34C759',
            borderRadius: 16,
            // backgroundColor: '#f0fff4',
          }}
        />
      </View>
    </View>
  );
}

```

##### file-picker-controlled

Controlled file picker using the useFilePicker hook

```tsx
import { Button } from '@/components/ui/button';
import { useFilePicker } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function FilePickerControlled() {
  const {
    files,
    addFiles,
    removeFile,
    clearFiles,
    totalSize,
    isValid,
    errors,
  } = useFilePicker({
    maxFiles: 3,
    maxSizeBytes: 2 * 1024 * 1024, // 2MB
    allowedExtensions: ['pdf', 'jpg', 'png', 'doc'],
    onError: (error) => console.error('Validation error:', error),
  });

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Simulate adding files (in real app, this would come from file picker)
  const simulateAddFiles = () => {
    const mockFiles = [
      { uri: 'file://test1.pdf', name: 'test1.pdf', size: 150000 },
      { uri: 'file://test2.jpg', name: 'test2.jpg', size: 250000 },
    ];
    addFiles(mockFiles);
  };

  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Button
          onPress={simulateAddFiles}
          style={{ flex: 1 }}
          variant='outline'
        >
          <Text>Add Mock Files</Text>
        </Button>
        <Button
          onPress={clearFiles}
          style={{ flex: 1 }}
          variant='outline'
          disabled={files.length === 0}
        >
          <Text>Clear All</Text>
        </Button>
      </View>

      {/* Status Info */}
      <View
        style={{
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: '500' }}>Status</Text>
        <Text style={{ fontSize: 14 }}>Files: {files.length}/3</Text>
        <Text style={{ fontSize: 14 }}>
          Total Size: {formatSize(totalSize)}
        </Text>
        <Text style={{ fontSize: 14 }}>Valid: {isValid ? '✓' : '✗'}</Text>
      </View>

      {/* Errors */}
      {errors.length > 0 && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#ffeaea',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#d32f2f', fontWeight: '500' }}>Errors:</Text>
          {errors.map((error, index) => (
            <Text key={index} style={{ color: '#d32f2f', fontSize: 14 }}>
              • {error}
            </Text>
          ))}
        </View>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <View>
          <Text style={{ fontWeight: '500', marginBottom: 8 }}>
            Selected Files:
          </Text>
          {files.map((file, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8,
                borderRadius: 6,
                marginBottom: 4,
                borderWidth: 1,
                borderColor: '#e0e0e0',
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '500' }}>
                  {file.name}
                </Text>
                {file.size && (
                  <Text style={{ fontSize: 12, opacity: 0.7 }}>
                    {formatSize(file.size)}
                  </Text>
                )}
              </View>
              <Button
                onPress={() => removeFile(index)}
                variant='ghost'
                style={{ padding: 4 }}
              >
                <Text style={{ color: '#d32f2f' }}>Remove</Text>
              </Button>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

```

##### file-picker-info

File picker displaying detailed file information

```tsx
import { FilePicker, SelectedFile } from '@/components/ui/file-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function FilePickerInfo() {
  const card = useThemeColor({}, 'card');
  const [files, setFiles] = useState<SelectedFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<any>({});

  const handleFilesSelected = (selectedFiles: SelectedFile[]) => {
    setFiles(selectedFiles);
    // Simulate upload progress
    selectedFiles.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setUploadProgress((prev: any) => ({
          ...prev,
          [index]: Math.min(progress, 100),
        }));
      }, 200);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileTypeIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase() || '';

    const typeMap: Record<string, string> = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      txt: '📄',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
      gif: '🖼️',
      zip: '📦',
      rar: '📦',
      mp4: '🎥',
      mp3: '🎵',
    };

    return typeMap[ext] || '📎';
  };

  return (
    <View style={{ gap: 16 }}>
      <FilePicker
        onFilesSelected={handleFilesSelected}
        onError={(error) => console.error('Error:', error)}
        fileType='all'
        multiple={true}
        maxFiles={4}
        maxSizeBytes={5 * 1024 * 1024} // 5MB
        placeholder='Select files for detailed preview'
        showFileInfo={true}
      />

      {files.length > 0 && (
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
            File Details
          </Text>

          {files.map((file, index) => (
            <View
              key={index}
              style={{
                padding: 16,
                backgroundColor: card,
                borderRadius: 12,
                marginBottom: 12,

                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                <Text style={{ fontSize: 24 }}>
                  {getFileTypeIcon(file.name)}
                </Text>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}
                  >
                    {file.name}
                  </Text>

                  <View style={{ gap: 2 }}>
                    {file.size && (
                      <Text variant='caption' style={{ fontSize: 14 }}>
                        Size: {formatFileSize(file.size)}
                      </Text>
                    )}

                    {file.mimeType && (
                      <Text variant='caption' style={{ fontSize: 14 }}>
                        Type: {file.mimeType}
                      </Text>
                    )}

                    <Text variant='caption' style={{ fontSize: 14 }}>
                      Status:{' '}
                      {uploadProgress[index] >= 100
                        ? 'Uploaded'
                        : 'Uploading...'}
                    </Text>
                  </View>

                  {/* Progress Bar */}
                  {uploadProgress[index] !== undefined && (
                    <View style={{ marginTop: 8 }}>
                      <View
                        style={{
                          height: 4,
                          backgroundColor: '#e0e0e0',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <View
                          style={{
                            height: '100%',
                            width: `${uploadProgress[index] || 0}%`,
                            backgroundColor:
                              uploadProgress[index] >= 100
                                ? '#4CAF50'
                                : '#2196F3',
                            borderRadius: 2,
                          }}
                        />
                      </View>
                      <Text
                        variant='caption'
                        style={{ fontSize: 12, marginTop: 4 }}
                      >
                        {Math.round(uploadProgress[index] || 0)}%
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* Summary */}
          <View
            style={{
              padding: 12,
              backgroundColor: '#f0f8ff',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#e3f2fd',
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#1976d2' }}>
              Summary
            </Text>
            <Text style={{ fontSize: 14, color: '#1976d2' }}>
              {files.length} file{files.length > 1 ? 's' : ''} • Total size:{' '}
              {formatFileSize(
                files.reduce((sum, file) => sum + (file.size || 0), 0)
              )}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

```

#### Props Examples

```tsx
// Different variants
<File-picker variant="default">Default</File-picker>
<File-picker variant="outline">Outline</File-picker>
```---

### gallery

A responsive image gallery component with fullscreen viewing, zoom, and gesture support.

**Installation:**
```bash
npx bna-ui add gallery
```

**External Dependencies:** expo-image, lucide-react-native, react-native-gesture-handler, react-native-reanimated

**Registry Dependencies:** button, text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![gallery preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 02-26-55_1.MP4)

#### Basic Usage

```tsx
import { Gallery } from '@/components/ui/gallery';

export default function Example() {
  return (
    <Gallery />
  );
}```


#### Advanced Examples

##### gallery-demo

A basic image gallery with grid layout and fullscreen viewing

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import React from 'react';

const sampleImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryDemo() {
  return (
    <Gallery
      items={sampleImages}
      columns={2}
      spacing={8}
      borderRadius={12}
      enableFullscreen={true}
      enableZoom={true}
    />
  );
}

```

##### gallery-grid

Gallery with custom columns, spacing, and aspect ratio

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

const gridImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryGrid() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        gap: 16,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          4 Columns, No Spacing
        </Text>
        <Gallery
          items={gridImages}
          columns={4}
          spacing={0}
          borderRadius={0}
          aspectRatio={1}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          3 Columns with Spacing
        </Text>

        <Gallery
          items={gridImages.slice(0, 6)}
          columns={3}
          spacing={12}
          borderRadius={8}
          aspectRatio={1.2}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          2 Columns, Large Spacing
        </Text>
        <Gallery
          items={gridImages.slice(0, 4)}
          columns={2}
          spacing={20}
          borderRadius={16}
          aspectRatio={0.8}
        />
      </View>
    </ScrollView>
  );
}

```

##### gallery-info

Gallery displaying image titles and descriptions

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import React from 'react';

const infoImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryInfo() {
  return (
    <Gallery
      items={infoImages}
      columns={2}
      spacing={16}
      borderRadius={12}
      aspectRatio={1}
      showTitles={true}
      showDescriptions={true}
      showPages={true}
      enableFullscreen={true}
      enableZoom={true}
    />
  );
}

```

##### gallery-layouts

Various gallery layouts and configurations

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

const layoutImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryLayouts() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        gap: 16,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          Single Column (Feed Style)
        </Text>
        <Gallery
          items={layoutImages.slice(0, 3)}
          columns={1}
          spacing={16}
          borderRadius={12}
          aspectRatio={1.2}
          showTitles={true}
        />
      </View>

      <View>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          Square Grid
        </Text>
        <Gallery
          items={layoutImages}
          columns={3}
          spacing={4}
          borderRadius={8}
          aspectRatio={1}
        />
      </View>

      <View>
        <Text variant='subtitle' style={{ marginBottom: 12 }}>
          Wide Thumbnails
        </Text>
        <Gallery
          items={layoutImages.slice(0, 4)}
          columns={2}
          spacing={8}
          borderRadius={16}
          aspectRatio={1.5}
        />
      </View>
    </ScrollView>
  );
}

```

##### gallery-controls

Images with controls

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import React from 'react';
import { Alert } from 'react-native';

const controlImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryControls() {
  const handleDownload = (item: GalleryItem) => {
    Alert.alert('Download', `Downloading: ${item.title || 'Image'}`, [
      { text: 'OK' },
    ]);
  };

  const handleShare = (item: GalleryItem) => {
    Alert.alert('Share', `Sharing: ${item.title || 'Image'}`, [{ text: 'OK' }]);
  };

  return (
    <Gallery
      items={controlImages}
      columns={2}
      spacing={12}
      borderRadius={12}
      aspectRatio={1}
      showTitles={true}
      showDescriptions={true}
      showPages={true}
      enableFullscreen={true}
      enableZoom={true}
      enableDownload={true}
      enableShare={true}
      onDownload={handleDownload}
      onShare={handleShare}
    />
  );
}

```

##### gallery-overlay

Images with overlay

```tsx
import { Gallery, GalleryItem } from '@/components/ui/gallery';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

const sampleImages: GalleryItem[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'City Skyline',
    description: 'Modern architecture at sunset',
    thumbnail:
      'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Winter Wonderland',
    description: 'Snow-covered peaks and pristine wilderness',
    thumbnail:
      'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ocean Waves',
    description: 'Peaceful ocean scene with rolling waves',
    thumbnail:
      'https://images.unsplash.com/photo-1717732596477-04f8c5d53387?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Forest Path',
    description: 'A winding path through ancient trees',
    thumbnail:
      'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon',
    thumbnail:
      'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and valleys',
    thumbnail:
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function GalleryOverlay() {
  return (
    <Gallery
      items={sampleImages}
      columns={2}
      aspectRatio={1}
      renderCustomOverlay={(item) => (
        <View
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
        >
          <Text
            variant='caption'
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {item.title}
          </Text>
        </View>
      )}
    />
  );
}

```
---

### heatmap-chart

A customizable heatmap chart component with smooth animations and flexible color scaling for visualizing matrix data.

**Installation:**
```bash
npx bna-ui add heatmap-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![heatmap-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 52.MOV)

#### Basic Usage

```tsx
import { Heatmap-chart } from '@/components/ui/heatmap-chart';

export default function Example() {
  return (
    <Heatmap-chart />
  );
}```


#### Advanced Examples

##### heatmap-chart-demo

A heatmap chart with smooth animations and color scaling

```tsx
import { HeatmapChart } from '@/components/charts/heatmap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { row: 'Mon', col: 'Morning', value: 45 },
  { row: 'Mon', col: 'Afternoon', value: 62 },
  { row: 'Mon', col: 'Evening', value: 38 },
  { row: 'Tue', col: 'Morning', value: 52 },
  { row: 'Tue', col: 'Afternoon', value: 71 },
  { row: 'Tue', col: 'Evening', value: 43 },
  { row: 'Wed', col: 'Morning', value: 39 },
  { row: 'Wed', col: 'Afternoon', value: 85 },
  { row: 'Wed', col: 'Evening', value: 57 },
  { row: 'Thu', col: 'Morning', value: 68 },
  { row: 'Thu', col: 'Afternoon', value: 92 },
  { row: 'Thu', col: 'Evening', value: 61 },
  { row: 'Fri', col: 'Morning', value: 73 },
  { row: 'Fri', col: 'Afternoon', value: 88 },
  { row: 'Fri', col: 'Evening', value: 79 },
];

export function HeatmapChartDemo() {
  return (
    <ChartContainer
      title='Weekly Activity Heatmap'
      description='Activity levels throughout the week by time of day'
    >
      <HeatmapChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
          colorScale: ['#e0f2fe', '#0369a1', '#1e3a8a'],
        }}
      />
    </ChartContainer>
  );
}

```

##### heatmap-chart-sample

A sample heatmap chart with different data

```tsx
import { HeatmapChart } from '@/components/charts/heatmap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { row: 'Q1', col: 'Sales', value: 85 },
  { row: 'Q1', col: 'Marketing', value: 72 },
  { row: 'Q1', col: 'Support', value: 90 },
  { row: 'Q1', col: 'Development', value: 78 },
  { row: 'Q2', col: 'Sales', value: 92 },
  { row: 'Q2', col: 'Marketing', value: 65 },
  { row: 'Q2', col: 'Support', value: 88 },
  { row: 'Q2', col: 'Development', value: 95 },
  { row: 'Q3', col: 'Sales', value: 78 },
  { row: 'Q3', col: 'Marketing', value: 83 },
  { row: 'Q3', col: 'Support', value: 91 },
  { row: 'Q3', col: 'Development', value: 87 },
  { row: 'Q4', col: 'Sales', value: 96 },
  { row: 'Q4', col: 'Marketing', value: 89 },
  { row: 'Q4', col: 'Support', value: 94 },
  { row: 'Q4', col: 'Development', value: 92 },
];

export function HeatmapChartSample() {
  return (
    <ChartContainer
      title='Quarterly Performance Matrix'
      description='Performance scores by department and quarter'
    >
      <HeatmapChart
        data={sampleData}
        config={{
          height: 280,
          showLabels: true,
          animated: true,
          duration: 800,
          colorScale: ['#fef3c7', '#f59e0b', '#d97706'],
        }}
      />
    </ChartContainer>
  );
}

```

##### heatmap-chart-styled

A customized heatmap chart with custom colors and styling

```tsx
import { HeatmapChart } from '@/components/charts/heatmap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { row: 'Low', col: 'Low', value: 10 },
  { row: 'Low', col: 'Medium', value: 25 },
  { row: 'Low', col: 'High', value: 40 },
  { row: 'Medium', col: 'Low', value: 30 },
  { row: 'Medium', col: 'Medium', value: 55 },
  { row: 'Medium', col: 'High', value: 70 },
  { row: 'High', col: 'Low', value: 50 },
  { row: 'High', col: 'Medium', value: 75 },
  { row: 'High', col: 'High', value: 95 },
];

export function HeatmapChartStyled() {
  const isDark = useThemeColor({}, 'background') === '#000000';

  const colorScale = isDark
    ? ['#0f172a', '#1e293b', '#334155', '#64748b', '#94a3b8']
    : ['#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b'];

  return (
    <ChartContainer
      title='Risk Assessment Matrix'
      description='Risk levels across different probability and impact combinations'
    >
      <HeatmapChart
        data={sampleData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 1200,
          colorScale,
          padding: 30,
        }}
      />
    </ChartContainer>
  );
}

```

##### heatmap-chart-large

A heatmap chart with large dataset

```tsx
import { HeatmapChart } from '@/components/charts/heatmap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

// Generate large dataset
const generateLargeDataset = () => {
  const data = [];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  );

  for (const month of months) {
    for (const hour of hours) {
      // Generate realistic activity data (higher during work hours)
      const isWorkHour = parseInt(hour) >= 8 && parseInt(hour) <= 18;
      const baseValue = isWorkHour ? 40 : 10;
      const randomVariation = Math.random() * 30;
      const value = Math.round(baseValue + randomVariation);

      data.push({
        row: month,
        col: `${hour}:00`,
        value,
      });
    }
  }

  return data;
};

const largeDataset = generateLargeDataset();

export function HeatmapChartLarge() {
  return (
    <ChartContainer
      title='Annual Activity Heatmap'
      description='User activity patterns throughout the year by hour of day'
    >
      <HeatmapChart
        data={largeDataset}
        config={{
          height: 400,
          showLabels: false, // Disabled for large datasets
          animated: true,
          duration: 1500,
          colorScale: ['#ecfdf5', '#10b981', '#065f46'],
          padding: 40,
        }}
      />
    </ChartContainer>
  );
}

```
---

### hello-wave

An animated waving hand emoji component with smooth rotation animation.

**Installation:**
```bash
npx bna-ui add hello-wave
```

**External Dependencies:** react-native-reanimated

**Registry Dependencies:** text, view

**Preview:**

![hello-wave preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 07-12-54_1.mov)

#### Basic Usage

```tsx
import { Hello-wave } from '@/components/ui/hello-wave';

export default function Example() {
  return (
    <Hello-wave />
  );
}```


#### Advanced Examples

##### hello-wave-demo

An animated waving hand emoji

```tsx
import { HelloWave } from '@/components/ui/hello-wave';
import React from 'react';

export function HellowWaveDemo() {
  return <HelloWave>👋</HelloWave>;
}

```
---

### icon

A themed icon component with support for Lucide React Native icons.

**Installation:**
```bash
npx bna-ui add icon
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Preview:**

![icon preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5566.PNG)

#### Basic Usage

```tsx
import { Icon } from '@/components/ui/icon';

export default function Example() {
  return (
    <Icon />
  );
}```


#### Advanced Examples

##### icon-demo

A basic icon with default styling

```tsx
import { Icon } from '@/components/ui/icon';
import { Heart } from 'lucide-react-native';
import React from 'react';

export function IconDemo() {
  return <Icon name={Heart} size={24} />;
}

```

##### icon-sizes

Icons in different sizes

```tsx
import { Icon } from '@/components/ui/icon';
import { View } from '@/components/ui/view';
import { Star } from 'lucide-react-native';
import React from 'react';

export function IconSizes() {
  const sizes = [16, 20, 24, 32, 40, 48];

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      {sizes.map((size) => (
        <Icon key={size} name={Star} size={size} color='#FFD700' />
      ))}
    </View>
  );
}

```

##### icon-colors

Icons with custom colors and themed colors

```tsx
import { Icon } from '@/components/ui/icon';
import { View } from '@/components/ui/view';
import { Circle } from 'lucide-react-native';
import React from 'react';

export function IconColors() {
  const colors = [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FECA57', // Yellow
    '#FF9FF3', // Pink
    '#54A0FF', // Light Blue
    '#5F27CD', // Purple
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      {colors.map((color, index) => (
        <Icon
          key={index}
          name={Circle}
          size={24}
          color={color}
          fill={color}
          fillOpacity={0.2}
        />
      ))}
    </View>
  );
}

```

##### icon-stroke

Icons with different stroke weights

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Zap } from 'lucide-react-native';
import React from 'react';

export function IconStroke() {
  const strokeWeights = [
    { weight: 1, label: 'Light' },
    { weight: 1.5, label: 'Regular' },
    { weight: 2, label: 'Medium' },
    { weight: 2.5, label: 'Bold' },
  ];

  return (
    <View style={{ gap: 16 }}>
      {strokeWeights.map(({ weight, label }) => (
        <View
          key={weight}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Icon name={Zap} size={24} strokeWidth={weight} color='#F39C12' />
          <Text variant='body' style={{ minWidth: 60 }}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### icon-interactive

Icons with press and hover interactions

```tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { View } from '@/components/ui/view';
import { Bookmark, Heart, Share, ThumbsUp } from 'lucide-react-native';
import React, { useState } from 'react';

export function IconInteractive() {
  const [liked, setLiked] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const iconButtons = [
    {
      icon: Heart,
      active: liked,
      onPress: () => setLiked(!liked),
      activeColor: '#FF6B6B',
      inactiveColor: '#888',
    },
    {
      icon: ThumbsUp,
      active: thumbsUp,
      onPress: () => setThumbsUp(!thumbsUp),
      activeColor: '#4ECDC4',
      inactiveColor: '#888',
    },
    {
      icon: Bookmark,
      active: bookmarked,
      onPress: () => setBookmarked(!bookmarked),
      activeColor: '#FECA57',
      inactiveColor: '#888',
    },
    {
      icon: Share,
      active: false,
      onPress: () => {},
      activeColor: '#45B7D1',
      inactiveColor: '#888',
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
      }}
    >
      {iconButtons.map(
        ({ icon, active, onPress, activeColor, inactiveColor }, index) => (
          <Button key={index} variant='ghost' size='icon' onPress={onPress}>
            <Icon
              name={icon}
              size={24}
              color={active ? activeColor : inactiveColor}
              fill={active ? activeColor : 'transparent'}
              fillOpacity={active ? 0.2 : 0}
            />
          </Button>
        )
      )}
    </View>
  );
}

```

##### icon-grid

A grid of commonly used icons

```tsx
import { Icon } from '@/components/ui/icon';
import { View } from '@/components/ui/view';
import {
  Bell,
  Calendar,
  Camera,
  Download,
  Edit,
  Heart,
  Home,
  Mail,
  Minus,
  Plus,
  Search,
  Settings,
  Star,
  Trash,
  Upload,
  User,
} from 'lucide-react-native';
import React from 'react';

export function IconGrid() {
  const icons = [
    Home,
    Search,
    Bell,
    User,
    Settings,
    Heart,
    Star,
    Mail,
    Calendar,
    Camera,
    Download,
    Upload,
    Edit,
    Trash,
    Plus,
    Minus,
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      {icons.map((IconComponent, index) => (
        <View
          key={index}
          style={{
            padding: 12,
            backgroundColor: '#f8f9fa',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
          }}
        >
          <Icon name={IconComponent} size={20} color='#495057' />
        </View>
      ))}
    </View>
  );
}

```

##### icon-themed

Icons that adapt to light and dark themes

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Monitor, Moon, Palette, Sun } from 'lucide-react-native';
import React from 'react';

export function IconThemed() {
  const themedIcons = [
    {
      icon: Sun,
      label: 'Light Theme',
      lightColor: '#FFA500',
      darkColor: '#FFD700',
    },
    {
      icon: Moon,
      label: 'Dark Theme',
      lightColor: '#4A5568',
      darkColor: '#E2E8F0',
    },
    {
      icon: Monitor,
      label: 'System',
      lightColor: '#2D3748',
      darkColor: '#F7FAFC',
    },
    {
      icon: Palette,
      label: 'Custom',
      lightColor: '#E53E3E',
      darkColor: '#FC8181',
    },
  ];

  return (
    <View style={{ gap: 16 }}>
      {themedIcons.map(({ icon, label, lightColor, darkColor }, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Icon
            name={icon}
            size={24}
            lightColor={lightColor}
            darkColor={darkColor}
          />
          <Text variant='body'>{label}</Text>
        </View>
      ))}
    </View>
  );
}

```
---

### image

A responsive image component with loading states, error handling, and flexible styling options.

**Installation:**
```bash
npx bna-ui add image
```

**External Dependencies:** expo-image

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface ImageProps extends Omit<ExpoImageProps, 'style'> {
  variant?: 'rounded' | 'circle' | 'default';
  source: ImageSource;
  style?: ExpoImageProps['style'];
  containerStyle?: any;
  showLoadingIndicator?: boolean;
  showErrorFallback?: boolean;
  errorFallbackText?: string;
  loadingIndicatorSize?: 'small' | 'large';
  loadingIndicatorColor?: string;
  aspectRatio?: number;
  width?: number | string;
  height?: number | string;
}
```

**Preview:**

![image preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5575.PNG)

#### Basic Usage

```tsx
import { Image } from '@/components/ui/image';

export default function Example() {
  return (
    <Image />
  );
}```


#### Advanced Examples

##### image-demo

A basic image with loading indicator and error fallback

```tsx
import { Image } from '@/components/ui/image';

export function ImageDemo() {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      aspectRatio={1}
    />
  );
}

```

##### image-variants

Images with different border radius variants

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageVariants() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          variant='rounded'
          width={200}
          aspectRatio={1}
        />
        <Text variant='caption'>Rounded</Text>
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          width={200}
          height={200}
          variant='circle'
        />
        <Text variant='caption'>Circle</Text>
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          width={200}
          height={200}
          variant='default'
        />
        <Text variant='caption'>Default</Text>
      </View>
    </View>
  );
}

```

##### image-sizes

Images in different sizes and aspect ratios

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageSizes() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://picsum.photos/150/150' }}
          width={50}
          height={50}
        />
        <Image
          source={{ uri: 'https://picsum.photos/151/151' }}
          width={75}
          height={75}
        />
        <Image
          source={{ uri: 'https://picsum.photos/152/152' }}
          width={100}
          height={100}
        />
        <Image
          source={{ uri: 'https://picsum.photos/153/153' }}
          width={125}
          height={125}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Aspect Ratio Examples</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Image
            source={{ uri: 'https://picsum.photos/400/300' }}
            width={120}
            aspectRatio={4 / 3}
          />
          <Image
            source={{ uri: 'https://picsum.photos/300/400' }}
            width={120}
            aspectRatio={3 / 4}
          />
          <Image
            source={{ uri: 'https://picsum.photos/500/300' }}
            width={120}
            aspectRatio={16 / 9}
          />
        </View>
      </View>
    </View>
  );
}

```

##### image-loading

Images with different loading indicator configurations

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageLoading() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text variant='caption'>Small Loading Indicator</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/300?random=1' }}
          width={200}
          height={150}
          loadingIndicatorSize='small'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Large Loading Indicator</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/300?random=2' }}
          width={200}
          height={150}
          loadingIndicatorSize='large'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Custom Loading Color</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/300?random=3' }}
          width={200}
          height={150}
          loadingIndicatorColor='#FF6B6B'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>No Loading Indicator</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/300?random=4' }}
          width={200}
          height={150}
          showLoadingIndicator={false}
        />
      </View>
    </View>
  );
}

```

##### image-error

Images with custom error fallback messages

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageError() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text variant='caption'>Default Error Fallback</Text>
        <Image
          source={{ uri: 'https://invalid-url-that-will-fail.com/image.jpg' }}
          width={200}
          height={150}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Custom Error Message</Text>
        <Image
          source={{ uri: 'https://another-invalid-url.com/image.jpg' }}
          width={200}
          height={150}
          errorFallbackText='Oops! Image not found'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>No Error Fallback</Text>
        <Image
          source={{ uri: 'https://yet-another-invalid-url.com/image.jpg' }}
          width={200}
          height={150}
          showErrorFallback={false}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Circle Variant with Error</Text>
        <Image
          source={{ uri: 'https://broken-image-url.com/avatar.jpg' }}
          width={100}
          height={100}
          variant='circle'
          errorFallbackText='No Avatar'
        />
      </View>
    </View>
  );
}

```

##### image-gallery

Multiple images arranged in a gallery layout

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';
import { ScrollView } from 'react-native';

export function ImageGallery() {
  const images = [
    'https://picsum.photos/300/200?random=10',
    'https://picsum.photos/300/200?random=11',
    'https://picsum.photos/300/200?random=12',
    'https://picsum.photos/300/200?random=13',
    'https://picsum.photos/300/200?random=14',
    'https://picsum.photos/300/200?random=15',
  ];

  return (
    <View style={{ gap: 16 }}>
      <Text variant='caption'>Grid Gallery</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'space-between',
        }}
      >
        {images.slice(0, 4).map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            width={90}
            height={90}
            style={{ borderRadius: 8 }}
          />
        ))}
      </View>

      <Text variant='caption'>Horizontal Scroll Gallery</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            width={150}
            height={100}
            style={{ borderRadius: 8 }}
          />
        ))}
      </ScrollView>

      <Text variant='caption'>Featured Image</Text>
      <Image
        source={{ uri: 'https://picsum.photos/800/400?random=99' }}
        width='100%'
        aspectRatio={2}
        style={{ borderRadius: 12 }}
      />
    </View>
  );
}

```

##### image-responsive

Responsive images that adapt to container size

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageResponsive() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text variant='caption'>Full Width (Container Responsive)</Text>

        <Image
          source={{ uri: 'https://picsum.photos/800/300?random=20' }}
          aspectRatio={8 / 3}
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Percentage Width</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Image
            source={{ uri: 'https://picsum.photos/400/300?random=21' }}
            width='48%'
            aspectRatio={4 / 3}
          />
          <Image
            source={{ uri: 'https://picsum.photos/400/300?random=22' }}
            width='48%'
            aspectRatio={4 / 3}
          />
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Flex Layout</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={{ uri: 'https://picsum.photos/600/400?random=23' }}
              aspectRatio={3 / 2}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: 'https://picsum.photos/300/400?random=24' }}
              aspectRatio={3 / 4}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

```

##### image-content-fit

Images with different content fit modes

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ImageContentFit() {
  const imageUri = 'https://picsum.photos/600/400?random=30';

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text variant='caption'>Cover (Default)</Text>

        <Image
          source={{ uri: imageUri }}
          width={150}
          height={100}
          contentFit='cover'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Contain</Text>

        <Image
          source={{ uri: imageUri }}
          width={150}
          height={100}
          contentFit='contain'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Fill</Text>

        <Image
          source={{ uri: imageUri }}
          width={150}
          height={100}
          contentFit='fill'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>Scale Down</Text>

        <Image
          source={{ uri: 'https://picsum.photos/100/80?random=31' }}
          width={150}
          height={100}
          contentFit='scale-down'
        />
      </View>

      <View style={{ gap: 8 }}>
        <Text variant='caption'>None</Text>

        <Image
          source={{ uri: 'https://picsum.photos/100/60?random=32' }}
          width={150}
          height={100}
          contentFit='none'
        />
      </View>
    </View>
  );
}

```

#### Props Examples

```tsx
// Different variants
<Image variant="default">Default</Image>
<Image variant="outline">Outline</Image>
```---

### input

A styled text input component with label, validation, icons, and grouped layouts.

**Installation:**
```bash
npx bna-ui add input
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, icon, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  icon?: React.ComponentType<LucideProps>;
  rightComponent?: React.ReactNode | (() => React.ReactNode);
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  variant?: 'filled' | 'outline';
  disabled?: boolean;
  type?: 'input' | 'textarea';
  placeholder?: string;
  rows?: number; // Only used when type="textarea"
}
```

**Preview:**

![input preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 06-25-09_1.MP4)

#### Basic Usage

```tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Input placeholder='Enter your email' keyboardType='email-address' />
        <Button
          variant='success'
          onPress={() => console.log('Button pressed!')}
        >
          Get Started
        </Button>
      </Card>
    </View>
  );
}
```


#### Advanced Examples

##### input-otp-demo

A basic OTP input with 6 digits

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import React, { useState } from 'react';

export function InputOTPDemo() {
  const [otp, setOtp] = useState('');

  return (
    <InputOTP
      length={6}
      value={otp}
      onChangeText={setOtp}
      onComplete={(value) => {
        console.log('OTP Complete:', value);
      }}
    />
  );
}

```

##### input-otp-lengths

OTP inputs with different digit lengths

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPLengths() {
  const [otp4, setOtp4] = useState('');
  const [otp6, setOtp6] = useState('');

  return (
    <View style={{ gap: 20 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>4 Digits</Text>
        <InputOTP length={4} value={otp4} onChangeText={setOtp4} />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          6 Digits (Default)
        </Text>
        <InputOTP length={6} value={otp6} onChangeText={setOtp6} />
      </View>
    </View>
  );
}

```

##### input-otp-separator

OTP input with dash separators between digits

```tsx
import { InputOTP, InputOTPWithSeparator } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function InputOTPSeparator() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');

  const muted = useThemeColor({}, 'textMuted');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Dash Separator
        </Text>
        <InputOTPWithSeparator length={6} value={otp1} onChangeText={setOtp1} />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Dot Separator
        </Text>
        <InputOTP
          length={6}
          value={otp2}
          onChangeText={setOtp2}
          separator={
            <Text style={{ fontSize: 16, color: muted, fontWeight: 'bold' }}>
              •
            </Text>
          }
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Custom Separator
        </Text>
        <InputOTP
          length={4}
          value={otp3}
          onChangeText={setOtp3}
          separator={
            <View
              style={{
                width: 8,
                height: 2,
                backgroundColor: muted,
                marginHorizontal: 4,
              }}
            />
          }
        />
      </View>
    </View>
  );
}

```

##### input-otp-masked

OTP input that masks digits with dots for security

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPMasked() {
  const [normalOtp, setNormalOtp] = useState('');
  const [maskedOtp, setMaskedOtp] = useState('');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Normal (Visible Digits)
        </Text>
        <InputOTP length={6} value={normalOtp} onChangeText={setNormalOtp} />
        {normalOtp && (
          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            Current value: {normalOtp}
          </Text>
        )}
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Masked (Hidden Digits)
        </Text>
        <InputOTP
          length={6}
          value={maskedOtp}
          onChangeText={setMaskedOtp}
          masked={true}
        />
        {maskedOtp && (
          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            Current value: {maskedOtp}
          </Text>
        )}
      </View>
    </View>
  );
}

```

##### input-otp-error

OTP input showing error state with validation message

```tsx
import { Button } from '@/components/ui/button';
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPError() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const validateOtp = (value: string) => {
    if (value.length === 6) {
      // Simulate validation - reject if all digits are the same
      if (value === '111111' || value === '000000') {
        setError('Invalid verification code. Please try again.');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    validateOtp(value);
  };

  const simulateError = () => {
    setError('Verification code has expired. Please request a new one.');
  };

  const clearError = () => {
    setError('');
    setOtp('');
  };

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Enter Verification Code
        </Text>
        <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
          Try entering "111111" or "000000" to see error state
        </Text>
      </View>

      <InputOTP
        length={6}
        value={otp}
        onChangeText={handleOtpChange}
        error={error}
        onComplete={(value) => {
          if (!error) {
            console.log('Valid OTP:', value);
          }
        }}
      />

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Button variant='outline' size='sm' onPress={simulateError}>
          Simulate Error
        </Button>
        <Button variant='outline' size='sm' onPress={clearError}>
          Clear
        </Button>
      </View>
    </View>
  );
}

```

##### input-otp-disabled

OTP input in disabled state

```tsx
import { Button } from '@/components/ui/button';
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPDisabled() {
  const [otp, setOtp] = useState('123');
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Disabled State</Text>
        <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
          Toggle the button below to enable/disable the input
        </Text>
      </View>

      <InputOTP
        length={6}
        value={otp}
        onChangeText={setOtp}
        disabled={disabled}
      />

      <Button
        variant={disabled ? 'default' : 'outline'}
        size='sm'
        onPress={() => setDisabled(!disabled)}
      >
        {disabled ? 'Enable Input' : 'Disable Input'}
      </Button>

      {!disabled && (
        <Text style={{ fontSize: 12, opacity: 0.7 }}>Current value: {otp}</Text>
      )}
    </View>
  );
}

```

##### input-otp-styled

OTP input with custom colors and styling

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function InputOTPStyled() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');

  const primary = useThemeColor({}, 'primary');
  const success = '#10B981';
  const purple = '#8B5CF6';

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Rounded Style</Text>
        <InputOTP
          length={6}
          value={otp1}
          onChangeText={setOtp1}
          slotStyle={{
            borderRadius: 25,
            borderWidth: 2,
            borderColor: primary,
          }}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Success Theme</Text>
        <InputOTP
          length={4}
          value={otp2}
          onChangeText={setOtp2}
          slotStyle={{
            borderColor: success,
            backgroundColor: success + '10',
            borderRadius: 8,
          }}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Large & Purple</Text>
        <InputOTP
          length={4}
          value={otp3}
          onChangeText={setOtp3}
          slotStyle={{
            width: 70,
            height: 70,
            borderColor: purple,
            borderWidth: 2,
            borderRadius: 12,
            backgroundColor: purple + '05',
          }}
          containerStyle={{
            gap: 12,
          }}
        />
      </View>
    </View>
  );
}

```

##### input-otp-no-cursor

OTP input without the blinking cursor indicator

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPNoCursor() {
  const [otpWithCursor, setOtpWithCursor] = useState('');
  const [otpWithoutCursor, setOtpWithoutCursor] = useState('');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Cursor (Default)
        </Text>
        <InputOTP
          length={6}
          value={otpWithCursor}
          onChangeText={setOtpWithCursor}
          showCursor={true}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Without Cursor</Text>
        <InputOTP
          length={6}
          value={otpWithoutCursor}
          onChangeText={setOtpWithoutCursor}
          showCursor={false}
        />
      </View>

      <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
        Tap on the inputs above to see the difference in cursor behavior
      </Text>
    </View>
  );
}

```

##### input-demo

A basic input with label and placeholder

```tsx
import { Input } from '@/components/ui/input';
import { User } from 'lucide-react-native';
import React from 'react';

export function InputDemo() {
  return (
    <Input label='Username' placeholder='Enter your username' icon={User} />
  );
}

```

##### input-icons

Inputs with left-side icons

```tsx
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';
import { Lock, Mail, Phone, Search } from 'lucide-react-native';
import React from 'react';

export function InputIcons() {
  return (
    <View style={{ gap: 16 }}>
      <Input
        label='Email'
        placeholder='john@example.com'
        icon={Mail}
        keyboardType='email-address'
      />
      <Input
        label='Password'
        placeholder='Enter password'
        icon={Lock}
        secureTextEntry
      />
      <Input label='Search' placeholder='Search anything...' icon={Search} />
      <Input
        label='Phone'
        placeholder='+1 (555) 123-4567'
        icon={Phone}
        keyboardType='phone-pad'
      />
    </View>
  );
}

```

##### input-variants

Different input variants - filled and outline

```tsx
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';
import { Mail, User } from 'lucide-react-native';
import React from 'react';

export function InputVariants() {
  return (
    <View style={{ gap: 16 }}>
      <Input
        variant='filled'
        label='Username'
        placeholder='Filled variant'
        icon={User}
      />
      <Input
        variant='outline'
        label='Email'
        placeholder='Outline variant'
        icon={Mail}
      />
    </View>
  );
}

```

##### input-validation

Inputs with error states and validation messages

```tsx
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';
import { Lock, Mail } from 'lucide-react-native';
import React, { useState } from 'react';

export function InputValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailError =
    email && !email.includes('@') ? 'Please enter a valid email address' : '';
  const passwordError =
    password && password.length < 6
      ? 'Password must be at least 6 characters'
      : '';

  return (
    <View style={{ gap: 16 }}>
      <Input
        label='Email'
        placeholder='Enter your email'
        icon={Mail}
        value={email}
        onChangeText={setEmail}
        error={emailError}
        keyboardType='email-address'
      />
      <Input
        label='Password'
        placeholder='Enter password'
        icon={Lock}
        value={password}
        onChangeText={setPassword}
        error={passwordError}
        secureTextEntry
      />
    </View>
  );
}

```

##### input-right-components

Inputs with buttons, icons, or custom components on the right

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Copy, Eye, EyeOff, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

export function InputRightComponents() {
  const muted = useThemeColor({}, 'mutedForeground');

  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={{ gap: 16 }}>
      <Input
        label='Search'
        placeholder='Search with button...'
        icon={Search}
        rightComponent={
          <Button size='icon' variant='secondary'>
            <Text variant='caption'>Go</Text>
          </Button>
        }
      />

      <Input
        label='Password'
        placeholder='Toggle visibility'
        secureTextEntry={!showPassword}
        rightComponent={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={22} color={muted} />
            ) : (
              <Eye size={22} color={muted} />
            )}
          </Pressable>
        }
      />

      <Input
        label='API Key'
        placeholder='sk-1234567890abcdef'
        rightComponent={
          <Pressable onPress={handleCopy}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <Copy size={18} color={muted} />
              <Text variant='caption'>{copied ? 'Copied!' : 'Copy'}</Text>
            </View>
          </Pressable>
        }
      />
    </View>
  );
}

```

##### input-disabled

Disabled inputs with reduced opacity

```tsx
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';
import { Mail, User } from 'lucide-react-native';
import React from 'react';

export function InputDisabled() {
  return (
    <View style={{ gap: 16 }}>
      <Input
        label='Username'
        placeholder='This input is disabled'
        icon={User}
        disabled
      />
      <Input label='Email' value='john@example.com' icon={Mail} disabled />
    </View>
  );
}

```

##### input-grouped

Multiple inputs grouped together in a card-like container

```tsx
import { GroupedInput, GroupedInputItem } from '@/components/ui/input';
import { Mail, MapPin, Phone, User } from 'lucide-react-native';
import React from 'react';

export function InputGrouped() {
  return (
    <GroupedInput title='Personal Information'>
      <GroupedInputItem label='Name' placeholder='John Doe' icon={User} />
      <GroupedInputItem
        label='Email'
        placeholder='john@example.com'
        icon={Mail}
        keyboardType='email-address'
      />
      <GroupedInputItem
        label='Phone'
        placeholder='+1 (555) 123-4567'
        icon={Phone}
        keyboardType='phone-pad'
      />
      <GroupedInputItem
        label='Address'
        placeholder='123 Main St'
        icon={MapPin}
      />
    </GroupedInput>
  );
}

```

##### input-form

Complete form example with various input types

```tsx
import { Button } from '@/components/ui/button';
import { GroupedInput, GroupedInputItem, Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';
import {
  Calendar,
  CreditCard,
  Lock,
  Mail,
  Phone,
  User,
} from 'lucide-react-native';
import React, { useState } from 'react';

export function InputForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!formData.email.includes('@'))
      newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <View style={{ gap: 24 }}>
      <GroupedInput title='Account Information'>
        <GroupedInputItem
          label='First Name'
          placeholder='John'
          icon={User}
          value={formData.firstName}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, firstName: text }))
          }
          error={errors.firstName}
        />
        <GroupedInputItem
          label='Last Name'
          placeholder='Doe'
          icon={User}
          value={formData.lastName}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, lastName: text }))
          }
        />
        <GroupedInputItem
          label='Email'
          placeholder='john@example.com'
          icon={Mail}
          value={formData.email}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, email: text }))
          }
          error={errors.email}
          keyboardType='email-address'
        />
        <GroupedInputItem
          label='Phone'
          placeholder='+1 (555) 123-4567'
          icon={Phone}
          value={formData.phone}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, phone: text }))
          }
          keyboardType='phone-pad'
        />
      </GroupedInput>

      <View style={{ gap: 16 }}>
        <Input
          label='Password'
          placeholder='Create password'
          icon={Lock}
          value={formData.password}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, password: text }))
          }
          error={errors.password}
          secureTextEntry
          variant='outline'
        />
        <Input
          label='Confirm Password'
          placeholder='Confirm password'
          icon={Lock}
          value={formData.confirmPassword}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, confirmPassword: text }))
          }
          error={errors.confirmPassword}
          secureTextEntry
          variant='outline'
        />
      </View>

      <GroupedInput title='Payment Information'>
        <GroupedInputItem
          label='Card Number'
          placeholder='1234 5678 9012 3456'
          icon={CreditCard}
          value={formData.cardNumber}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, cardNumber: text }))
          }
          keyboardType='numeric'
        />
        <GroupedInputItem
          label='Expiry Date'
          placeholder='MM/YY'
          icon={Calendar}
          value={formData.expiryDate}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, expiryDate: text }))
          }
          keyboardType='numeric'
        />
        <GroupedInputItem
          label='CVV'
          placeholder='123'
          value={formData.cvv}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, cvv: text }))
          }
          keyboardType='numeric'
        />
      </GroupedInput>

      <Button onPress={handleSubmit}>Submit Form</Button>
    </View>
  );
}

```

#### Props Examples

```tsx
// Different variants
<Input variant="default">Default</Input>
<Input variant="outline">Outline</Input>
```#### Practical Examples

```tsx
// Email input with validation
<Input
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  value={email}
  onChangeText={setEmail}
  error={emailError}
/>
```

```tsx
// Password input
<Input
  placeholder="Password"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>
```

---

### input-otp

A secure input component for one-time passwords and verification codes.

**Installation:**
```bash
npx bna-ui add input-otp
```

**Registry Dependencies:** text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface InputOTPProps
  extends Omit<TextInputProps, 'style' | 'value' | 'onChangeText'> {
  /** Number of OTP digits */
  length?: number;
  /** Current OTP value */
  value?: string;
  /** Called when OTP value changes */
  onChangeText?: (value: string) => void;
  /** Called when OTP is complete */
  onComplete?: (value: string) => void;
  /** Error message to display */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Container style */
  containerStyle?: ViewStyle;
  /** Individual slot style */
  slotStyle?: ViewStyle;
  /** Error style */
  errorStyle?: TextStyle;
  /** Whether to mask the input (show dots instead of numbers) */
  masked?: boolean;
  /** Separator component between slots */
  separator?: React.ReactNode;
  /** Whether to show cursor in active slot */
  showCursor?: boolean;
}
```

**Preview:**

![input-otp preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 06-34-14_1.MP4)

#### Basic Usage

```tsx
import { Input-otp } from '@/components/ui/input-otp';

export default function Example() {
  return (
    <Input-otp />
  );
}```


#### Advanced Examples

##### input-otp-demo

A basic OTP input with 6 digits

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import React, { useState } from 'react';

export function InputOTPDemo() {
  const [otp, setOtp] = useState('');

  return (
    <InputOTP
      length={6}
      value={otp}
      onChangeText={setOtp}
      onComplete={(value) => {
        console.log('OTP Complete:', value);
      }}
    />
  );
}

```

##### input-otp-lengths

OTP inputs with different digit lengths

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPLengths() {
  const [otp4, setOtp4] = useState('');
  const [otp6, setOtp6] = useState('');

  return (
    <View style={{ gap: 20 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>4 Digits</Text>
        <InputOTP length={4} value={otp4} onChangeText={setOtp4} />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          6 Digits (Default)
        </Text>
        <InputOTP length={6} value={otp6} onChangeText={setOtp6} />
      </View>
    </View>
  );
}

```

##### input-otp-separator

OTP input with dash separators between digits

```tsx
import { InputOTP, InputOTPWithSeparator } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function InputOTPSeparator() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');

  const muted = useThemeColor({}, 'textMuted');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Dash Separator
        </Text>
        <InputOTPWithSeparator length={6} value={otp1} onChangeText={setOtp1} />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Dot Separator
        </Text>
        <InputOTP
          length={6}
          value={otp2}
          onChangeText={setOtp2}
          separator={
            <Text style={{ fontSize: 16, color: muted, fontWeight: 'bold' }}>
              •
            </Text>
          }
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Custom Separator
        </Text>
        <InputOTP
          length={4}
          value={otp3}
          onChangeText={setOtp3}
          separator={
            <View
              style={{
                width: 8,
                height: 2,
                backgroundColor: muted,
                marginHorizontal: 4,
              }}
            />
          }
        />
      </View>
    </View>
  );
}

```

##### input-otp-masked

OTP input that masks digits with dots for security

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPMasked() {
  const [normalOtp, setNormalOtp] = useState('');
  const [maskedOtp, setMaskedOtp] = useState('');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Normal (Visible Digits)
        </Text>
        <InputOTP length={6} value={normalOtp} onChangeText={setNormalOtp} />
        {normalOtp && (
          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            Current value: {normalOtp}
          </Text>
        )}
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Masked (Hidden Digits)
        </Text>
        <InputOTP
          length={6}
          value={maskedOtp}
          onChangeText={setMaskedOtp}
          masked={true}
        />
        {maskedOtp && (
          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            Current value: {maskedOtp}
          </Text>
        )}
      </View>
    </View>
  );
}

```

##### input-otp-error

OTP input showing error state with validation message

```tsx
import { Button } from '@/components/ui/button';
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPError() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const validateOtp = (value: string) => {
    if (value.length === 6) {
      // Simulate validation - reject if all digits are the same
      if (value === '111111' || value === '000000') {
        setError('Invalid verification code. Please try again.');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    validateOtp(value);
  };

  const simulateError = () => {
    setError('Verification code has expired. Please request a new one.');
  };

  const clearError = () => {
    setError('');
    setOtp('');
  };

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Enter Verification Code
        </Text>
        <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
          Try entering "111111" or "000000" to see error state
        </Text>
      </View>

      <InputOTP
        length={6}
        value={otp}
        onChangeText={handleOtpChange}
        error={error}
        onComplete={(value) => {
          if (!error) {
            console.log('Valid OTP:', value);
          }
        }}
      />

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Button variant='outline' size='sm' onPress={simulateError}>
          Simulate Error
        </Button>
        <Button variant='outline' size='sm' onPress={clearError}>
          Clear
        </Button>
      </View>
    </View>
  );
}

```

##### input-otp-disabled

OTP input in disabled state

```tsx
import { Button } from '@/components/ui/button';
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPDisabled() {
  const [otp, setOtp] = useState('123');
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Disabled State</Text>
        <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
          Toggle the button below to enable/disable the input
        </Text>
      </View>

      <InputOTP
        length={6}
        value={otp}
        onChangeText={setOtp}
        disabled={disabled}
      />

      <Button
        variant={disabled ? 'default' : 'outline'}
        size='sm'
        onPress={() => setDisabled(!disabled)}
      >
        {disabled ? 'Enable Input' : 'Disable Input'}
      </Button>

      {!disabled && (
        <Text style={{ fontSize: 12, opacity: 0.7 }}>Current value: {otp}</Text>
      )}
    </View>
  );
}

```

##### input-otp-styled

OTP input with custom colors and styling

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function InputOTPStyled() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');

  const primary = useThemeColor({}, 'primary');
  const success = '#10B981';
  const purple = '#8B5CF6';

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Rounded Style</Text>
        <InputOTP
          length={6}
          value={otp1}
          onChangeText={setOtp1}
          slotStyle={{
            borderRadius: 25,
            borderWidth: 2,
            borderColor: primary,
          }}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Success Theme</Text>
        <InputOTP
          length={4}
          value={otp2}
          onChangeText={setOtp2}
          slotStyle={{
            borderColor: success,
            backgroundColor: success + '10',
            borderRadius: 8,
          }}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Large & Purple</Text>
        <InputOTP
          length={4}
          value={otp3}
          onChangeText={setOtp3}
          slotStyle={{
            width: 70,
            height: 70,
            borderColor: purple,
            borderWidth: 2,
            borderRadius: 12,
            backgroundColor: purple + '05',
          }}
          containerStyle={{
            gap: 12,
          }}
        />
      </View>
    </View>
  );
}

```

##### input-otp-no-cursor

OTP input without the blinking cursor indicator

```tsx
import { InputOTP } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function InputOTPNoCursor() {
  const [otpWithCursor, setOtpWithCursor] = useState('');
  const [otpWithoutCursor, setOtpWithoutCursor] = useState('');

  return (
    <View style={{ gap: 24 }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          With Cursor (Default)
        </Text>
        <InputOTP
          length={6}
          value={otpWithCursor}
          onChangeText={setOtpWithCursor}
          showCursor={true}
        />
      </View>

      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Without Cursor</Text>
        <InputOTP
          length={6}
          value={otpWithoutCursor}
          onChangeText={setOtpWithoutCursor}
          showCursor={false}
        />
      </View>

      <Text style={{ fontSize: 12, opacity: 0.7, textAlign: 'center' }}>
        Tap on the inputs above to see the difference in cursor behavior
      </Text>
    </View>
  );
}

```
---

### line-chart

A customizable line chart component with animations, interactions, and gradient fills.

**Installation:**
```bash
npx bna-ui add line-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![line-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 58.MOV)

#### Basic Usage

```tsx
import { Line-chart } from '@/components/ui/line-chart';

export default function Example() {
  return (
    <Line-chart />
  );
}```


#### Advanced Examples

##### line-chart-demo

A basic line chart with smooth animations and grid lines

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 1, y: 10, label: 'Jan' },
  { x: 2, y: 25, label: 'Feb' },
  { x: 3, y: 15, label: 'Mar' },
  { x: 4, y: 40, label: 'Apr' },
  { x: 5, y: 30, label: 'May' },
  { x: 6, y: 55, label: 'Jun' },
  { x: 7, y: 45, label: 'Jul' },
];

export function LineChartDemo() {
  return (
    <ChartContainer
      title='Revenue Trend'
      description='Monthly revenue growth over time'
    >
      <LineChart
        data={sampleData}
        config={{
          height: 220,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
          interactive: true,
        }}
      />
    </ChartContainer>
  );
}

```

##### line-chart-interactive

An interactive line chart with touch gestures

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 'Q1', y: 45, label: 'Q1 2024' },
  { x: 'Q2', y: 67, label: 'Q2 2024' },
  { x: 'Q3', y: 52, label: 'Q3 2024' },
  { x: 'Q4', y: 89, label: 'Q4 2024' },
  { x: 'Q1', y: 95, label: 'Q1 2025' },
  { x: 'Q2', y: 110, label: 'Q2 2025' },
];

export function LineChartInteractive() {
  return (
    <ChartContainer
      title='Interactive Revenue Chart'
      description='Touch and drag to explore data points'
    >
      <LineChart
        data={sampleData}
        config={{
          height: 240,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
          interactive: true,
          showYLabels: true,
          yLabelCount: 6,
        }}
      />
    </ChartContainer>
  );
}

```

##### line-chart-styled

A customized line chart with custom styling

```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { x: 'Mon', y: 23, label: 'Monday' },
  { x: 'Tue', y: 45, label: 'Tuesday' },
  { x: 'Wed', y: 67, label: 'Wednesday' },
  { x: 'Thu', y: 34, label: 'Thursday' },
  { x: 'Fri', y: 89, label: 'Friday' },
  { x: 'Sat', y: 56, label: 'Saturday' },
  { x: 'Sun', y: 78, label: 'Sunday' },
];

export function LineChartStyled() {
  const borderColor = useThemeColor({}, 'border');
  const backgroundColor = useThemeColor({}, 'card');

  return (
    <ChartContainer
      title='Weekly Performance'
      description='Styled chart with custom appearance'
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      <LineChart
        data={sampleData}
        config={{
          height: 200,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 2000,
          showYLabels: true,
          yLabelCount: 4,
          padding: 24,
        }}
      />
    </ChartContainer>
  );
}

```

##### line-chart-minimal

A minimal line chart without labels or grid

```tsx
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 1, y: 20 },
  { x: 2, y: 45 },
  { x: 3, y: 28 },
  { x: 4, y: 67 },
  { x: 5, y: 89 },
  { x: 6, y: 34 },
];

export function LineChartMinimal() {
  return (
    <LineChart
      data={sampleData}
      config={{
        height: 160,
        showGrid: false,
        showLabels: false,
        animated: true,
        duration: 800,
        showYLabels: false,
        padding: 16,
      }}
    />
  );
}

```
---

### link

A navigation component that handles both internal and external links with customizable browser behavior.

**Installation:**
```bash
npx bna-ui add link
```

**External Dependencies:** expo-router, expo-web-browser

**Registry Dependencies:** text

**Preview:**

![link preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 06-40-41_1.MP4)

#### Basic Usage

```tsx
import { Link } from '@/components/ui/link';

export default function Example() {
  return (
    <Link />
  );
}```


#### Advanced Examples

##### link-demo

Basic internal navigation links

```tsx
import { Link } from '@/components/ui/link';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkDemo() {
  return (
    <View style={{ gap: 12 }}>
      <Link href='/'>Go to Profile</Link>
      <Link href='/'>Settings</Link>
      <Link href={{ pathname: '/', params: { id: '123' } }}>User Details</Link>
    </View>
  );
}

```

##### link-external

Links that open external URLs

```tsx
import { Link } from '@/components/ui/link';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkExternal() {
  return (
    <View style={{ gap: 12 }}>
      <Link href='https://github.com'>Visit GitHub</Link>
      <Link href='https://expo.dev'>Expo Documentation</Link>
      <Link href='https://reactnative.dev'>React Native Docs</Link>
    </View>
  );
}

```

##### link-browser

Links with different browser opening behaviors

```tsx
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkBrowser() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          In-App Browser (Default)
        </Text>
        <View style={{ gap: 6 }}>
          <Link href='https://github.com' browser='in-app'>
            Open GitHub in-app
          </Link>
          <Link href='https://expo.dev'>Open Expo docs in-app</Link>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          External Browser
        </Text>
        <View style={{ gap: 6 }}>
          <Link href='https://github.com' browser='external'>
            Open GitHub externally
          </Link>
          <Link href='https://expo.dev' browser='external'>
            Open Expo docs externally
          </Link>
        </View>
      </View>
    </View>
  );
}

```

##### link-custom

Links with custom child components instead of text

```tsx
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { ExternalLink, HomeIcon, Mail } from 'lucide-react-native';
import React from 'react';

export function LinkCustom() {
  return (
    <View style={{ gap: 16 }}>
      <Link href='/' asChild>
        <Button icon={HomeIcon}>Welcome</Button>
      </Link>

      <Link href='https://github.com'>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: 12,
            backgroundColor: 'red',
            borderRadius: 8,
          }}
        >
          <ExternalLink size={16} color='#fff' />
          <Text style={{ color: '#fff', textAlign: 'center' }}>
            External Link
          </Text>
        </View>
      </Link>

      <Link href='mailto:contact@example.com' asChild>
        <Button variant='success' icon={Mail}>
          Send Email
        </Button>
      </Link>
    </View>
  );
}

```

##### link-types

Various types of links including mailto and tel

```tsx
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkTypes() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Internal Navigation
        </Text>
        <View style={{ gap: 6 }}>
          <Link href='/'>Home Page</Link>
          <Link href='/'>About Us</Link>
          <Link href={{ pathname: '/', params: { id: '123' } }}>
            Product Details
          </Link>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>External URLs</Text>
        <View style={{ gap: 6 }}>
          <Link href='https://google.com'>Google</Link>
          <Link href='http://example.com'>Example Site</Link>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Communication Links
        </Text>
        <View style={{ gap: 6 }}>
          <Link href='mailto:hello@example.com'>Send Email</Link>
          <Link href='tel:+1234567890'>Call Phone</Link>
          <Link href='mailto:support@company.com?subject=Help Request'>
            Email with Subject
          </Link>
          <Link href='sms:+1234567890'>Send SMS</Link>
        </View>
      </View>
    </View>
  );
}

```

##### link-styled

Links with custom styling and variants

```tsx
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkStyled() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Default Styled</Text>
        <View style={{ gap: 6 }}>
          <Link href='/'>Default Link Style</Link>
          <Link href='https://example.com'>External Link</Link>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Custom Text Styling
        </Text>
        <View style={{ gap: 6 }}>
          <Link href='/'>
            <Text
              style={{
                color: '#dc2626',
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}
            >
              Red Bold Link
            </Text>
          </Link>

          <Link href='/'>
            <Text
              style={{
                color: '#059669',
                fontSize: 18,
                fontStyle: 'italic',
              }}
            >
              Green Italic Link
            </Text>
          </Link>

          <Link href='https://github.com'>
            <Text
              style={{
                color: '#7c3aed',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Purple Uppercase
            </Text>
          </Link>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Inline Links</Text>
        <Text>
          This is a paragraph with an <Link href='/'>inline link</Link> that
          flows naturally with the text. You can also have{' '}
          <Link href='https://example.com'>external inline links</Link> in your
          content.
        </Text>
      </View>
    </View>
  );
}

```

##### link-buttons

Links styled as buttons for navigation

```tsx
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { View } from '@/components/ui/view';
import { ExternalLink, Settings, User } from 'lucide-react-native';
import React from 'react';

export function LinkButtons() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 12 }}>
        <Link href='/' asChild>
          <Button variant='default' icon={User}>
            View Profile
          </Button>
        </Link>

        <Link href='/' asChild>
          <Button variant='outline' icon={Settings}>
            Open Settings
          </Button>
        </Link>

        <Link href='https://github.com' browser='external' asChild>
          <Button variant='secondary' icon={ExternalLink}>
            Visit GitHub
          </Button>
        </Link>
      </View>

      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
        <Link href='/' asChild>
          <Button variant='default' size='sm'>
            Dashboard
          </Button>
        </Link>

        <Link href='/' asChild>
          <Button variant='ghost' size='sm'>
            Help
          </Button>
        </Link>
      </View>

      <View style={{ gap: 8 }}>
        <Link href='/' asChild>
          <Button variant='destructive' size='lg'>
            Danger Zone
          </Button>
        </Link>

        <Link href='/' asChild>
          <Button variant='success' size='lg'>
            Success Action
          </Button>
        </Link>
      </View>

      <Link href='mailto:support@example.com' asChild>
        <Button variant='link' size='sm'>
          Contact
        </Button>
      </Link>
    </View>
  );
}

```
---

### media-picker

A versatile component for selecting images and videos from device gallery or camera with preview capabilities.

**Installation:**
```bash
npx bna-ui add media-picker
```

**External Dependencies:** expo-image, expo-image-picker, expo-media-library, lucide-react-native

**Registry Dependencies:** button, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface MediaPickerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ComponentType<LucideProps>;
  disabled?: boolean;
  mediaType?: MediaType;
  multiple?: boolean;
  maxSelection?: number;
  quality?: MediaQuality;
  buttonText?: string;
  placeholder?: string;
  gallery?: boolean;
  showPreview?: boolean;
  previewSize?: number;
  selectedAssets?: MediaAsset[];
  onSelectionChange?: (assets: MediaAsset[]) => void;
  onError?: (error: string) => void;
}
```

**Preview:**

![media-picker preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 07-03-09_1.MP4)

#### Basic Usage

```tsx
import { Media-picker } from '@/components/ui/media-picker';

export default function Example() {
  return (
    <Media-picker />
  );
}```


#### Advanced Examples

##### media-picker-demo

A basic media picker with image and video selection

```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import React from 'react';

export function MediaPickerDemo() {
  return (
    <MediaPicker
      mediaType='all'
      onSelectionChange={(assets) => {
        console.log('Selected assets:', assets);
      }}
      onError={(error) => {
        console.error('Media picker error:', error);
      }}
    />
  );
}

```

##### media-picker-images

Media picker configured for images only

```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import { Image } from 'lucide-react-native';
import React from 'react';

export function MediaPickerImages() {
  return (
    <MediaPicker
      mediaType='image'
      buttonText='Select Images'
      icon={Image}
      variant='outline'
      onSelectionChange={(assets) => {
        console.log('Selected images:', assets);
      }}
    />
  );
}

```

##### media-picker-videos

Media picker configured for videos only

```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import { Video } from 'lucide-react-native';
import React from 'react';

export function MediaPickerVideos() {
  return (
    <MediaPicker
      mediaType='video'
      buttonText='Select Videos'
      icon={Video}
      variant='secondary'
      onSelectionChange={(assets) => {
        console.log('Selected videos:', assets);
      }}
    />
  );
}

```

##### media-picker-multiple

Media picker with multiple selection enabled

```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Plus } from 'lucide-react-native';
import React, { useState } from 'react';

export function MediaPickerMultiple() {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <View style={{ gap: 12 }}>
      <MediaPicker
        mediaType='all'
        multiple={true}
        maxSelection={5}
        buttonText={`Select Media (${selectedCount}/5)`}
        icon={Plus}
        onSelectionChange={(assets) => {
          setSelectedCount(assets.length);
          console.log('Selected assets:', assets);
        }}
      />

      {selectedCount > 0 && (
        <Text variant='caption'>
          {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
        </Text>
      )}
    </View>
  );
}

```

##### media-picker-gallery

Media picker with custom gallery modal

```tsx
import { MediaAsset, MediaPicker } from '@/components/ui/media-picker';
import { Folder } from 'lucide-react-native';
import React, { useState } from 'react';

export function MediaPickerGallery() {
  const [selected, setSelected] = useState<MediaAsset[]>([]);

  return (
    <MediaPicker
      mediaType='all'
      gallery={true}
      multiple={true}
      maxSelection={8}
      buttonText='Open Gallery'
      icon={Folder}
      variant='outline'
      selectedAssets={selected}
      onSelectionChange={setSelected}
    />
  );
}

```

##### media-picker-preview

Media picker showing selected media previews

```tsx
import { MediaAsset, MediaPicker } from '@/components/ui/media-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { ImageIcon } from 'lucide-react-native';
import React, { useState } from 'react';

export function MediaPickerPreview() {
  const [assets, setAssets] = useState<MediaAsset[]>([]);

  return (
    <View style={{ gap: 16 }}>
      <MediaPicker
        mediaType='all'
        multiple={true}
        maxSelection={6}
        showPreview={true}
        previewSize={100}
        buttonText='Add Media'
        icon={ImageIcon}
        selectedAssets={assets}
        onSelectionChange={(newAssets) => {
          setAssets(newAssets);
          console.log('Assets with preview:', newAssets);
        }}
      />

      {assets.length > 0 && (
        <View>
          <Text variant='caption'>
            {assets.length} item{assets.length !== 1 ? 's' : ''} selected
          </Text>
          <Text variant='caption'>
            Types: {assets.map((a) => a.type).join(', ')}
          </Text>
        </View>
      )}
    </View>
  );
}

```

##### media-picker-quality

Media picker with different quality settings

```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Settings } from 'lucide-react-native';
import React from 'react';

export function MediaPickerQuality() {
  return (
    <View style={{ gap: 16 }}>
      <View>
        <Text variant='title' style={{ marginBottom: 8 }}>
          High Quality
        </Text>
        <MediaPicker
          mediaType='image'
          quality='high'
          buttonText='High Quality Images'
          icon={Settings}
          variant='outline'
          size='sm'
          onSelectionChange={(assets) => {
            console.log('High quality assets:', assets);
          }}
        />
      </View>

      <View>
        <Text variant='title' style={{ marginBottom: 8 }}>
          Medium Quality
        </Text>
        <MediaPicker
          mediaType='image'
          quality='medium'
          buttonText='Medium Quality Images'
          icon={Settings}
          variant='secondary'
          size='sm'
          onSelectionChange={(assets) => {
            console.log('Medium quality assets:', assets);
          }}
        />
      </View>

      <View>
        <Text variant='title' style={{ marginBottom: 8 }}>
          Low Quality
        </Text>
        <MediaPicker
          mediaType='image'
          quality='low'
          buttonText='Low Quality Images'
          icon={Settings}
          variant='ghost'
          size='sm'
          onSelectionChange={(assets) => {
            console.log('Low quality assets:', assets);
          }}
        />
      </View>
    </View>
  );
}

```

#### Props Examples

```tsx
// Different variants
<Media-picker variant="default">Default</Media-picker>
<Media-picker variant="outline">Outline</Media-picker>
```

```tsx
// Different sizes
<Media-picker size="sm">Small</Media-picker>
<Media-picker size="lg">Large</Media-picker>
```---

### mode-toggle

An animated button component for switching between light and dark themes.

**Installation:**
```bash
npx bna-ui add mode-toggle
```

**External Dependencies:** lucide-react-native, react-native-reanimated

**Registry Dependencies:** button, icon

**Required Hooks:** useModeToggle

**Preview:**

![mode-toggle preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 07-11-16_1.MP4)

#### Basic Usage

```tsx
import { Mode-toggle } from '@/components/ui/mode-toggle';

export default function Example() {
  return (
    <Mode-toggle />
  );
}```


#### Advanced Examples

##### mode-toggle-demo

Animated theme toggle button

```tsx
import { ModeToggle } from '@/components/ui/mode-toggle';
import React from 'react';

export function ModeToggleDemo() {
  return <ModeToggle />;
}

```
---

### onboarding

A customizable multi-step onboarding flow with smooth animations and gesture support.

**Installation:**
```bash
npx bna-ui add onboarding
```

**External Dependencies:** react-native-gesture-handler, react-native-reanimated

**Registry Dependencies:** button, text

**Required Hooks:** useThemeColor

#### Props Interface

```typescript
export interface OnboardingProps {
  steps: OnboardingStep[];
  onComplete: () => void;
  onSkip?: () => void;
  showSkip?: boolean;
  showProgress?: boolean;
  swipeEnabled?: boolean;
  primaryButtonText?: string;
  skipButtonText?: string;
  nextButtonText?: string;
  backButtonText?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}
```

**Preview:**

![onboarding preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 07-20-37_1.MP4)

#### Basic Usage

```tsx
import { Onboarding } from '@/components/ui/onboarding';

export default function Example() {
  return (
    <Onboarding />
  );
}```


#### Advanced Examples

##### onboarding-demo

A basic onboarding flow with multiple steps

```tsx
import { Onboarding, useOnboarding } from '@/components/ui/onboarding';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';

export const OnboardingPresets = {
  welcome: [
    {
      id: 'welcome',
      title: 'Welcome to Our App',
      description:
        'Discover amazing features and get started with your journey.',
      icon: <Text style={{ fontSize: 80 }}>👋</Text>,
    },
    {
      id: 'features',
      title: 'Powerful Features',
      description:
        'Experience cutting-edge functionality designed to make your life easier.',
      icon: <Text style={{ fontSize: 80 }}>⚡</Text>,
    },
    {
      id: 'personalize',
      title: 'Personalize Your Experience',
      description: 'Customize the app to match your preferences and workflow.',
      icon: <Text style={{ fontSize: 80 }}>🎨</Text>,
    },
    {
      id: 'ready',
      title: "You're All Set!",
      description:
        "Everything is ready. Let's start exploring what you can achieve.",
      icon: <Text style={{ fontSize: 80 }}>🚀</Text>,
    },
  ],

  features: [
    {
      id: 'organize',
      title: 'Stay Organized',
      description: 'Keep all your important information in one secure place.',
      icon: <Text style={{ fontSize: 80 }}>📋</Text>,
    },
    {
      id: 'collaborate',
      title: 'Collaborate Seamlessly',
      description: 'Work together with your team in real-time, anywhere.',
      icon: <Text style={{ fontSize: 80 }}>🤝</Text>,
    },
    {
      id: 'automate',
      title: 'Automate Your Workflow',
      description: 'Set up smart automations to save time and reduce errors.',
      icon: <Text style={{ fontSize: 80 }}>🤖</Text>,
    },
  ],

  security: [
    {
      id: 'secure',
      title: 'Your Data is Secure',
      description:
        'We use end-to-end encryption to keep your information safe.',
      icon: <Text style={{ fontSize: 80 }}>🔒</Text>,
    },
    {
      id: 'privacy',
      title: 'Privacy First',
      description: 'We never share your personal data with third parties.',
      icon: <Text style={{ fontSize: 80 }}>🛡️</Text>,
    },
    {
      id: 'control',
      title: "You're in Control",
      description: 'Manage your privacy settings and data preferences anytime.',
      icon: <Text style={{ fontSize: 80 }}>⚙️</Text>,
    },
  ],
};

export function OnboardingDemo() {
  const { hasCompletedOnboarding, completeOnboarding, skipOnboarding } =
    useOnboarding();

  if (hasCompletedOnboarding) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        <Text variant='title'>Welcome Back!</Text>
        <Text variant='body'>You've already completed the onboarding.</Text>
      </View>
    );
  }

  return (
    <Onboarding
      steps={OnboardingPresets.welcome}
      onComplete={completeOnboarding}
      onSkip={skipOnboarding}
      showSkip={true}
      showProgress={true}
      swipeEnabled={true}
      primaryButtonText='Get Started'
      skipButtonText='Skip'
      nextButtonText='Next'
      backButtonText='Back'
    />
  );
}

```

##### onboarding-images

Onboarding flow with custom images for each step

```tsx
import { Image } from '@/components/ui/image';
import { Onboarding, OnboardingStep } from '@/components/ui/onboarding';
import React from 'react';

const WelcomeImage = () => (
  <Image
    source={{
      uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }}
    width={300}
    aspectRatio={1}
    variant='circle'
  />
);

const FeaturesImage = () => (
  <Image
    source={{
      uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }}
    width={300}
    aspectRatio={1}
  />
);

const StartImage = () => (
  <Image
    source={{
      uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }}
    width={420}
    aspectRatio={9 / 14}
  />
);

export function OnboardingImages() {
  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: 'Welcome to the Team',
      description:
        'Join thousands of users who have already discovered the power of our platform.',
      image: <WelcomeImage />,
    },
    {
      id: '2',
      title: 'Powerful Features',
      description:
        'Access advanced tools and features that will help you achieve your goals faster.',
      image: <FeaturesImage />,
    },
    {
      id: '3',
      title: 'Ready to Launch',
      description:
        "Everything is set up and ready. Let's start building something amazing together!",
      image: <StartImage />,
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={() => console.log('Onboarding with images completed!')}
      onSkip={() => console.log('Onboarding with images skipped!')}
      primaryButtonText="Let's Go"
      nextButtonText='Continue'
    />
  );
}

```

##### onboarding-styled

Onboarding with custom colors and styling

```tsx
import { Onboarding, OnboardingStep } from '@/components/ui/onboarding';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const GradientIcon = ({
  iconName,
  colors,
}: {
  iconName: string;
  colors: [string, string];
}) => (
  <LinearGradient
    colors={colors}
    style={{
      padding: 24,
      borderRadius: 70,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
    }}
  >
    <Feather name={iconName as any} size={64} color='white' />
  </LinearGradient>
);

export function OnboardingStyled() {
  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: 'Secure & Private',
      description:
        'Your data is protected with end-to-end encryption. We prioritize your privacy above all else.',
      icon: <GradientIcon iconName='shield' colors={['#667eea', '#764ba2']} />,
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: '2',
      title: 'Lightning Fast',
      description:
        'Experience blazing fast performance with our optimized infrastructure and smart caching.',
      icon: <GradientIcon iconName='zap' colors={['#f093fb', '#f5576c']} />,
      backgroundColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: '3',
      title: 'Always Connected',
      description:
        'Stay connected with real-time sync across all your devices. Never miss an important update.',
      icon: <GradientIcon iconName='wifi' colors={['#4facfe', '#00f2fe']} />,
      backgroundColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={() => console.log('Styled onboarding completed!')}
      onSkip={() => console.log('Styled onboarding skipped!')}
      primaryButtonText='Start Now'
      nextButtonText='Next Step'
      skipButtonText='Skip Intro'
      style={{ backgroundColor: '#1a1a2e' }}
    />
  );
}

```

##### onboarding-no-skip

Onboarding flow without skip functionality

```tsx
import { Onboarding, OnboardingStep } from '@/components/ui/onboarding';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const InfoIcon = ({ name, color }: { name: string; color: string }) => (
  <View
    style={{
      padding: 20,
      backgroundColor: `${color}20`,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: color,
    }}
  >
    <Feather name={name as any} size={60} color={color} />
  </View>
);

export function OnboardingNoSkip() {
  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: 'Setup Your Profile',
      description:
        "Let's start by setting up your profile. This helps us personalize your experience.",
      icon: <InfoIcon name='user' color='#8b5cf6' />,
    },
    {
      id: '2',
      title: 'Choose Preferences',
      description:
        'Select your preferences to customize the app according to your needs and workflow.',
      icon: <InfoIcon name='settings' color='#06b6d4' />,
    },
    {
      id: '3',
      title: 'Enable Notifications',
      description:
        'Stay updated with important notifications. You can always change these settings later.',
      icon: <InfoIcon name='bell' color='#f59e0b' />,
    },
    {
      id: '4',
      title: 'All Set!',
      description:
        "Congratulations! Your account is now ready. Let's dive in and explore the features.",
      icon: <InfoIcon name='check-circle' color='#10b981' />,
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={() => console.log('Required onboarding completed!')}
      showSkip={false}
      primaryButtonText='Complete Setup'
      nextButtonText='Continue'
      backButtonText='Previous'
    />
  );
}

```

##### onboarding-no-swipe

Onboarding with swipe gestures disabled

```tsx
import { Onboarding, OnboardingStep } from '@/components/ui/onboarding';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const StepIcon = ({
  name,
  bgColor,
  iconColor,
}: {
  name: string;
  bgColor: string;
  iconColor: string;
}) => (
  <View
    style={{
      padding: 18,
      backgroundColor: bgColor,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    }}
  >
    <Feather name={name as any} size={56} color={iconColor} />
  </View>
);

export function OnboardingNoSwipe() {
  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: 'Tutorial Mode',
      description:
        'Follow along with our step-by-step tutorial. Use the buttons below to navigate at your own pace.',
      icon: <StepIcon name='book-open' bgColor='#ede9fe' iconColor='#7c3aed' />,
    },
    {
      id: '2',
      title: 'Learn the Basics',
      description:
        'Master the fundamental features that will help you get the most out of our platform.',
      icon: <StepIcon name='layers' bgColor='#dcfce7' iconColor='#16a34a' />,
    },
    {
      id: '3',
      title: 'Practice Makes Perfect',
      description:
        'Try out the features yourself in a safe environment before working with real data.',
      icon: <StepIcon name='target' bgColor='#fef3c7' iconColor='#d97706' />,
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={() => console.log('Tutorial completed!')}
      onSkip={() => console.log('Tutorial skipped!')}
      swipeEnabled={false}
      showProgress={true}
      primaryButtonText='Start Using App'
      nextButtonText='Next Lesson'
      skipButtonText='Skip Tutorial'
    />
  );
}

```

##### onboarding-custom-buttons

Onboarding with custom button text

```tsx
import { Onboarding, OnboardingStep } from '@/components/ui/onboarding';
import { Heart, Rocket, Target } from 'lucide-react-native';
import React from 'react';

export function OnboardingCustomButtons() {
  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: '🎉 Welcome Aboard!',
      description:
        "We're thrilled to have you join our community of innovators and creators.",
      icon: <Heart color='#ee5a52' size={100} />,
    },
    {
      id: '2',
      title: '🚀 Boost Your Productivity',
      description:
        'Discover powerful tools that will transform the way you work and collaborate.',
      icon: <Rocket color='#4ecdc4' size={100} />,
    },
    {
      id: '3',
      title: '🎯 Achieve Your Goals',
      description:
        'Set ambitious targets and track your progress with our advanced analytics.',
      icon: <Target color='#45b7d1' size={100} />,
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={() => console.log('Custom buttons onboarding completed!')}
      onSkip={() => console.log('Custom buttons onboarding skipped!')}
      primaryButtonText='🚀 Launch App'
      nextButtonText='👉 Continue'
      backButtonText='👈 Back'
      skipButtonText='⏭️ Skip for Now'
    />
  );
}

```

##### onboarding-hook

Media picker showing selected media previews

```tsx
import { Button } from '@/components/ui/button';
import {
  Onboarding,
  OnboardingStep,
  useOnboarding,
} from '@/components/ui/onboarding';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

function MainApp() {
  const { resetOnboarding } = useOnboarding();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8fafc',
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        {/* <Text>{}</Text> */}
        <Text variant='heading' style={{ marginTop: 20, textAlign: 'center' }}>
          Welcome to the App!
        </Text>
        <Text
          variant='body'
          style={{
            marginTop: 12,
            textAlign: 'center',
            color: '#64748b',
            lineHeight: 22,
          }}
        >
          You've successfully completed the onboarding process. You can restart
          it anytime using the button below.
        </Text>
      </View>

      <Button
        onPress={resetOnboarding}
        variant='outline'
        style={{ paddingHorizontal: 24 }}
      >
        🔄 Restart Onboarding
      </Button>
    </View>
  );
}

function OnboardingFlow() {
  const { completeOnboarding, skipOnboarding } = useOnboarding();

  const steps: OnboardingStep[] = [
    {
      id: '1',
      title: 'Hook-based State',
      description:
        'This onboarding uses the useOnboarding hook to manage state across your entire app.',
      // icon: '🪝',
    },
    {
      id: '2',
      title: 'Persistent State',
      description:
        'The hook remembers your progress and can be used to control onboarding flow throughout your app.',
      // icon: '📱',
    },
    {
      id: '3',
      title: 'Easy Integration',
      description:
        'Integrate onboarding state with your existing app navigation and user management.',
      // icon: '🚀',
    },
  ];

  return (
    <Onboarding
      steps={steps}
      onComplete={completeOnboarding}
      onSkip={skipOnboarding}
      primaryButtonText='Complete & Continue'
      nextButtonText='Next Step'
      skipButtonText='Skip Demo'
    />
  );
}

export function OnboardingHook() {
  const { hasCompletedOnboarding } = useOnboarding();

  return hasCompletedOnboarding ? <MainApp /> : <OnboardingFlow />;
}

```
---

### parallax-scrollview

A scroll view with parallax header effect that transforms as the user scrolls.

**Installation:**
```bash
npx bna-ui add parallax-scrollview
```

**External Dependencies:** react-native-reanimated

**Registry Dependencies:** view

**Required Hooks:** useBottomTabOverflow, useThemeColor

**Preview:**

![parallax-scrollview preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 08-33-25_1.MP4)

#### Basic Usage

```tsx
import { Parallax-scrollview } from '@/components/ui/parallax-scrollview';

export default function Example() {
  return (
    <Parallax-scrollview />
  );
}```


#### Advanced Examples

##### parallax-scrollview-demo

A basic parallax scroll view with header image

```tsx
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import React from 'react';

export function ParallaxScrollViewDemo() {
  return (
    <ParallaxScrollView
      headerHeight={460}
      headerImage={
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: '100%', height: '100%' }}
          contentFit='cover'
        />
      }
    >
      <View style={{ gap: 16 }}>
        <Text variant='heading'>Parallax Scroll View</Text>
        <Text>
          This is a basic example of a parallax scroll view. The header image
          moves at a different speed than the content as you scroll, creating a
          beautiful parallax effect.
        </Text>
        <Text>
          Scroll up and down to see the parallax animation in action. The header
          will transform and scale based on your scroll position.
        </Text>
        <Text>
          You can also try pulling down (over-scrolling) to see the header scale
          up beyond its normal size.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

```

##### parallax-scrollview-custom-height

Parallax scroll view with custom header height

```tsx
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import React from 'react';

export function ParallaxScrollViewCustomHeight() {
  return (
    <ParallaxScrollView
      headerHeight={500}
      headerImage={
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1644190022446-04b99df7259a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: '100%', height: '100%' }}
          contentFit='cover'
        />
      }
    >
      <View style={{ gap: 16 }}>
        <Text variant='heading'>Custom Header Height</Text>
        <Text>
          This example demonstrates a taller header (500px) that provides more
          visual impact and space for the parallax effect.
        </Text>
        <Text>
          Larger headers work great for hero sections, profile pages, or any
          screen where you want to make a strong visual impression.
        </Text>
        <Text>
          The parallax animation remains smooth regardless of the header size,
          automatically adjusting the transformation values based on the
          specified height.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

```

##### parallax-scrollview-gradient

Parallax scroll view with gradient overlay header

```tsx
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export function ParallaxScrollViewGradient() {
  return (
    <ParallaxScrollView
      headerHeight={300}
      headerImage={
        <View style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1575737698350-52e966f924d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />
          <LinearGradient
            colors={['transparent', 'black']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              right: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
            >
              Scenic Mountain View
            </Text>
          </View>
        </View>
      }
    >
      <View style={{ gap: 16 }}>
        <Text variant='heading'>Gradient Overlay Header</Text>
        <Text>
          This example shows how to add a gradient overlay to your header image,
          which is perfect for ensuring text readability over images.
        </Text>
        <Text>
          The gradient creates a smooth transition from the image to a darker
          overlay at the bottom, where you can place text or other UI elements.
        </Text>
        <Text>
          This technique is commonly used in hero sections, article headers, and
          profile screens where you need to overlay content on images.
        </Text>

        <Text>
          The parallax effect works seamlessly with gradient overlays and
          maintains smooth performance even with multiple layers.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

```

##### parallax-scrollview-profile

Complete profile screen using parallax scroll view

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export function ParallaxScrollViewProfile() {
  return (
    <ParallaxScrollView
      headerHeight={320}
      headerImage={
        <View style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />
          <LinearGradient
            colors={['transparent', 'black']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80%',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
              alignItems: 'center',
              gap: 12,
            }}
          >
            <Avatar size={90}>
              <AvatarImage
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/99088394?v=4',
                }}
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  textShadowColor: 'rgba(0,0,0,0.5)',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                John Doe
              </Text>
              <Text
                style={{
                  color: '#e0e0e0',
                  fontSize: 16,
                  textShadowColor: 'rgba(0,0,0,0.5)',
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Software Engineer
              </Text>
            </View>
          </View>
        </View>
      }
    >
      <View style={{ gap: 20 }}>
        <View style={{ gap: 8 }}>
          <Text variant='title'>About</Text>
          <Text>
            Passionate software engineer with 5+ years of experience in mobile
            and web development. Specialized in React Native, TypeScript, and
            modern UI frameworks.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Skills</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {[
              'React Native',
              'TypeScript',
              'Node.js',
              'GraphQL',
              'MongoDB',
            ].map((skill) => (
              <Badge variant='success' key={skill}>
                {skill}
              </Badge>
            ))}
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Experience</Text>
          <View style={{ gap: 12 }}>
            <View>
              <Text variant='subtitle'>Senior Mobile Developer</Text>
              <Text variant='caption'>Tech Corp • 2022 - Present</Text>
              <Text style={{ marginTop: 4 }}>
                Leading mobile development team and architecting scalable React
                Native applications.
              </Text>
            </View>
            <View>
              <Text variant='subtitle'>Frontend Developer</Text>
              <Text variant='caption'>StartupXYZ • 2020 - 2022</Text>
              <Text style={{ marginTop: 4 }}>
                Built responsive web applications using React and modern
                frontend technologies.
              </Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Contact</Text>
          <Text>📧 john.doe@example.com</Text>
          <Text>🌐 johndoe.dev</Text>
          <Text>📱 LinkedIn: @johndoe</Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

```

##### parallax-scrollview-article

Article layout with parallax hero image

```tsx
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export function ParallaxScrollViewArticle() {
  return (
    <ParallaxScrollView
      headerHeight={280}
      headerImage={
        <View style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
            }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              right: 20,
            }}
          >
            <View
              style={{
                backgroundColor: 'green',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                alignSelf: 'flex-start',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
                TECHNOLOGY
              </Text>
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 32,
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
            >
              The Future of Mobile Development
            </Text>
            <Text
              style={{
                color: '#e0e0e0',
                fontSize: 14,
                marginTop: 8,
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
            >
              Published on March 15, 2024 • 8 min read
            </Text>
          </View>
        </View>
      }
    >
      <View style={{ gap: 16 }}>
        <Text variant='caption' style={{ fontSize: 18, lineHeight: 28 }}>
          Mobile development has evolved dramatically over the past decade, with
          new frameworks, tools, and paradigms emerging to meet the ever-growing
          demands of users and businesses alike.
        </Text>

        <Text variant='caption'>
          React Native has established itself as a leading cross-platform
          solution, enabling developers to write once and deploy everywhere. The
          framework's component-based architecture and hot reloading
          capabilities have revolutionized the development experience.
        </Text>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Key Trends in 2024</Text>
          <Text variant='caption'>
            • AI-powered development tools and code generation
          </Text>
          <Text variant='caption'>
            • Enhanced performance optimization techniques
          </Text>
          <Text variant='caption'>
            • Better cross-platform native module integration
          </Text>
          <Text variant='caption'>
            • Improved debugging and testing frameworks
          </Text>
        </View>

        <View
          style={{
            padding: 16,
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#3b82f6',
          }}
        >
          <Text style={{ fontSize: 16, lineHeight: 24, fontStyle: 'italic' }}>
            "The best mobile apps are those that feel native to each platform
            while maintaining a consistent user experience across devices."
          </Text>
        </View>

        <Text variant='caption'>
          Performance optimization remains a critical consideration. Modern apps
          need to handle complex animations, large datasets, and real-time
          updates while maintaining smooth 60fps interactions.
        </Text>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Looking Ahead</Text>
          <Text variant='caption'>
            The future of mobile development is bright, with emerging
            technologies like AR/VR integration, improved offline capabilities,
            and seamless cloud integration opening new possibilities for
            developers and users alike.
          </Text>
        </View>

        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: '#e5e7eb',
            paddingTop: 16,
            marginTop: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#3b82f6',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>JD</Text>
            </View>
            <View>
              <Text style={{ fontWeight: '600' }}>John Developer</Text>
              <Text style={{ color: '#6b7280', fontSize: 14 }}>
                Senior Mobile Engineer
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

```

##### parallax-scrollview-product

Product detail screen with parallax image gallery

```tsx
import { Button } from '@/components/ui/button';
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import React from 'react';

export function ParallaxScrollViewProduct() {
  return (
    <ParallaxScrollView
      headerHeight={350}
      headerImage={
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
          }}
          style={{ width: '100%', height: '100%' }}
          contentFit='cover'
        />
      }
    >
      <View style={{ gap: 20 }}>
        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <View style={{ flex: 1 }}>
              <Text variant='heading'>Running Shoes</Text>
              <Text variant='caption' style={{ marginTop: 4 }}>
                Nike Air Zoom Series
              </Text>
            </View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#dc2626',
              }}
            >
              $159.99
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 2 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Text key={star} style={{ color: '#fbbf24', fontSize: 16 }}>
                  ★
                </Text>
              ))}
            </View>
            <Text variant='caption'>4.8 (2.1k reviews)</Text>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Description</Text>
          <Text variant='caption' style={{ fontSize: 16, lineHeight: 24 }}>
            Experience ultimate comfort and performance with these premium
            running shoes. Featuring advanced cushioning technology and
            breathable mesh construction for all-day comfort.
          </Text>
        </View>

        <View style={{ gap: 12 }}>
          <Text variant='title'>Available Sizes</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'].map(
              (size) => (
                <View
                  key={size}
                  style={{
                    borderWidth: 1,
                    borderColor: '#d1d5db',
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 8,
                    minWidth: 50,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontWeight: '500' }}>US {size}</Text>
                </View>
              )
            )}
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Text variant='title'>Color Options</Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#1f2937',
                borderWidth: 2,
                borderColor: '#3b82f6',
              }}
            />
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#d1d5db',
              }}
            />
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#dc2626',
              }}
            />
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#2563eb',
              }}
            />
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='title'>Features</Text>
          <View style={{ gap: 8 }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <Text style={{ color: '#10b981' }}>✓</Text>
              <Text variant='caption'>Lightweight design for all-day wear</Text>
            </View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <Text style={{ color: '#10b981' }}>✓</Text>
              <Text variant='caption'>Enhanced arch support</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 8,
            gap: 12,
          }}
        >
          <Text variant='title'>Shipping & Returns</Text>
          <Text style={{ fontSize: 14 }}>
            • Free shipping on orders over $100
          </Text>
          <Text style={{ fontSize: 14 }}>• 30-day return policy</Text>
          <Text style={{ fontSize: 14 }}>• 1-year manufacturer warranty</Text>
        </View>

        <View style={{ gap: 12, marginTop: 8 }}>
          <Button variant='success'>Add to Cart</Button>

          <Button variant='destructive'>Add to Wishlist</Button>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

```
---

### picker

A customizable dropdown picker component with search, sections, and multiple selection support.

**Installation:**
```bash
npx bna-ui add picker
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** icon, scroll-view, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![picker preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 09-07-27_1.MP4)

#### Basic Usage

```tsx
import { Picker } from '@/components/ui/picker';

export default function Example() {
  return (
    <Picker />
  );
}```


#### Advanced Examples

##### picker-demo

A basic picker with simple options

```tsx
import { Picker } from '@/components/ui/picker';
import React, { useState } from 'react';

export function PickerDemo() {
  const [value, setValue] = useState<string>('');

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
  ];

  return (
    <Picker
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder='Select a fruit...'
    />
  );
}

```

##### picker-sections

Picker with grouped options in sections

```tsx
import { Picker } from '@/components/ui/picker';
import React, { useState } from 'react';

export function PickerSections() {
  const [value, setValue] = useState<string>('');

  const sections = [
    {
      title: 'Fruits',
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ],
    },
    {
      title: 'Vegetables',
      options: [
        { label: 'Carrot', value: 'carrot' },
        { label: 'Broccoli', value: 'broccoli' },
        { label: 'Spinach', value: 'spinach' },
      ],
    },
  ];

  return (
    <Picker
      sections={sections}
      value={value}
      onValueChange={setValue}
      placeholder='Select an item...'
      modalTitle='Choose Food'
    />
  );
}

```

##### picker-multiple

Picker allowing multiple selections

```tsx
import { Picker } from '@/components/ui/picker';
import React, { useState } from 'react';

export function PickerMultiple() {
  const [values, setValues] = useState<string[]>([]);

  const options = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'Python', value: 'py' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'Rust', value: 'rust' },
  ];

  return (
    <Picker
      options={options}
      values={values}
      onValuesChange={setValues}
      placeholder='Select languages...'
      multiple
      modalTitle='Programming Languages'
    />
  );
}

```

##### picker-searchable

Picker with search functionality

```tsx
import { Picker } from '@/components/ui/picker';
import React, { useState } from 'react';

export function PickerSearchable() {
  const [value, setValue] = useState<string>('');

  const options = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' },
    { label: 'India', value: 'in' },
    { label: 'China', value: 'cn' },
  ];

  return (
    <Picker
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder='Select a country...'
      searchable
      searchPlaceholder='Search countries...'
      modalTitle='Countries'
    />
  );
}

```

##### picker-variants

Different picker variants: outline, filled, and group

```tsx
import { Picker } from '@/components/ui/picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function PickerVariants() {
  const [outlineValue, setOutlineValue] = useState<string>('');
  const [filledValue, setFilledValue] = useState<string>('');
  const [groupValue, setGroupValue] = useState<string>('');

  const options = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
  ];

  return (
    <View style={{ gap: 20 }}>
      <View>
        <Text variant='caption' style={{ marginBottom: 8 }}>
          Outline Variant
        </Text>
        <Picker
          options={options}
          value={outlineValue}
          onValueChange={setOutlineValue}
          placeholder='Select size...'
          variant='outline'
        />
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 8 }}>
          Filled Variant
        </Text>
        <Picker
          options={options}
          value={filledValue}
          onValueChange={setFilledValue}
          placeholder='Select size...'
          variant='filled'
        />
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 8 }}>
          Group Variant
        </Text>
        <Picker
          options={options}
          value={groupValue}
          onValueChange={setGroupValue}
          placeholder='Select size...'
          variant='group'
        />
      </View>
    </View>
  );
}

```

##### picker-styled

Picker with custom styling, icons, and labels

```tsx
import { Picker } from '@/components/ui/picker';
import { MapPin, Settings, User } from 'lucide-react-native';
import React, { useState } from 'react';

export function PickerStyled() {
  const [location, setLocation] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [setting, setSetting] = useState<string>('');

  const locations = [
    { label: 'New York', value: 'ny' },
    { label: 'Los Angeles', value: 'la' },
    { label: 'Chicago', value: 'chi' },
  ];

  const users = [
    { label: 'John Doe', value: 'john' },
    { label: 'Jane Smith', value: 'jane' },
    { label: 'Bob Johnson', value: 'bob' },
  ];

  const settings = [
    { label: 'Notifications', value: 'notifications' },
    { label: 'Privacy', value: 'privacy' },
    { label: 'Account', value: 'account' },
  ];

  return (
    <>
      <Picker
        options={locations}
        value={location}
        onValueChange={setLocation}
        placeholder='Select location...'
        icon={MapPin}
        label='Location'
        variant='outline'
      />

      <Picker
        options={users}
        value={user}
        onValueChange={setUser}
        placeholder='Select user...'
        icon={User}
        label='User'
        variant='filled'
        style={{ marginTop: 16 }}
      />

      <Picker
        options={settings}
        value={setting}
        onValueChange={setSetting}
        placeholder='Select setting...'
        icon={Settings}
        label='Settings'
        variant='group'
        style={{ marginTop: 16 }}
      />
    </>
  );
}

```

##### picker-form

Picker integrated with form validation and error handling

```tsx
import { Button } from '@/components/ui/button';
import { Picker } from '@/components/ui/picker';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function PickerForm() {
  const [category, setCategory] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [errors, setErrors] = useState<{
    category?: string;
    priority?: string;
  }>({});

  const categories = [
    { label: 'Bug Report', value: 'bug' },
    { label: 'Feature Request', value: 'feature' },
    { label: 'General Inquiry', value: 'general' },
  ];

  const priorities = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ];

  const handleSubmit = () => {
    const newErrors: { category?: string; priority?: string } = {};

    if (!category) {
      newErrors.category = 'Please select a category';
    }

    if (!priority) {
      newErrors.priority = 'Please select a priority';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Form submitted:', { category, priority });
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <Picker
        options={categories}
        value={category}
        onValueChange={(value) => {
          setCategory(value);
          if (errors.category) {
            setErrors((prev) => ({ ...prev, category: undefined }));
          }
        }}
        placeholder='Select category...'
        label='Category'
        error={errors.category}
        variant='outline'
      />

      <Picker
        options={priorities}
        value={priority}
        onValueChange={(value) => {
          setPriority(value);
          if (errors.priority) {
            setErrors((prev) => ({ ...prev, priority: undefined }));
          }
        }}
        placeholder='Select priority...'
        label='Priority'
        error={errors.priority}
        variant='outline'
      />

      <Button onPress={handleSubmit}>Submit Ticket</Button>
    </View>
  );
}

```

##### picker-advanced

Picker with descriptions, disabled options, and custom modal title

```tsx
import { Picker } from '@/components/ui/picker';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function PickerAdvanced() {
  const [plan, setPlan] = useState<string>('');

  const sections = [
    {
      title: 'Individual Plans',
      options: [
        {
          label: 'Basic',
          value: 'basic',
          description: '$9/month - Perfect for individuals',
        },
        {
          label: 'Pro',
          value: 'pro',
          description: '$19/month - Advanced features included',
        },
      ],
    },
    {
      title: 'Team Plans',
      options: [
        {
          label: 'Team',
          value: 'team',
          description: '$39/month - Collaboration tools',
        },
        {
          label: 'Enterprise',
          value: 'enterprise',
          description: '$99/month - Full enterprise features',
        },
        {
          label: 'Custom',
          value: 'custom',
          description: 'Contact us for pricing',
          disabled: true,
        },
      ],
    },
  ];

  return (
    <View style={{ gap: 16 }}>
      <Picker
        sections={sections}
        value={plan}
        onValueChange={setPlan}
        placeholder='Select a plan...'
        modalTitle='Subscription Plans'
        searchable
        searchPlaceholder='Search plans...'
        variant='outline'
      />

      {plan && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#f0f9ff',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#0284c7',
          }}
        >
          <Text style={{ color: '#0284c7', fontWeight: '500' }}>
            Selected:{' '}
            {
              sections.flatMap((s) => s.options).find((o) => o.value === plan)
                ?.label
            }
          </Text>
        </View>
      )}
    </View>
  );
}

```
---

### pie-chart

A customizable pie chart component with smooth animations and flexible styling.

**Installation:**
```bash
npx bna-ui add pie-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![pie-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 44.MOV)

#### Basic Usage

```tsx
import { Pie-chart } from '@/components/ui/pie-chart';

export default function Example() {
  return (
    <Pie-chart />
  );
}```


#### Advanced Examples

##### pie-chart-demo

A pie chart with smooth animations

```tsx
import { PieChart } from '@/components/charts/pie-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function PieChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <PieChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### pie-chart-sample

A sample pie chart

```tsx
import { PieChart } from '@/components/charts/pie-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Mobile', value: 45 },
  { label: 'Desktop', value: 35 },
  { label: 'Tablet', value: 15 },
  { label: 'Other', value: 5 },
];

export function PieChartSample() {
  return (
    <ChartContainer
      title='Traffic Sources'
      description='Website traffic distribution by device type'
    >
      <PieChart
        data={sampleData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 800,
        }}
      />
    </ChartContainer>
  );
}

```

##### pie-chart-styled

A customized pie chart with custom colors and styling

```tsx
import { PieChart } from '@/components/charts/pie-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export function PieChartStyled() {
  const primaryColor = useThemeColor({}, 'primary');
  const successColor = useThemeColor({}, 'green');
  const warningColor = useThemeColor({}, 'orange');
  const errorColor = useThemeColor({}, 'red');

  const styledData = [
    { label: 'Completed', value: 65, color: successColor },
    { label: 'In Progress', value: 20, color: primaryColor },
    { label: 'Pending', value: 10, color: warningColor },
    { label: 'Failed', value: 5, color: errorColor },
  ];

  return (
    <ChartContainer
      title='Project Status'
      description='Current project completion status overview'
    >
      <PieChart
        data={styledData}
        config={{
          height: 280,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### pie-chart-large

A pie chart with large dataset

```tsx
import { PieChart } from '@/components/charts/pie-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeData = [
  { label: 'North America', value: 35 },
  { label: 'Europe', value: 28 },
  { label: 'Asia Pacific', value: 22 },
  { label: 'Latin America', value: 8 },
  { label: 'Middle East', value: 4 },
  { label: 'Africa', value: 3 },
];

export function PieChartLarge() {
  return (
    <ChartContainer
      title='Global Revenue Distribution'
      description='Revenue breakdown by geographical regions'
    >
      <PieChart
        data={largeData}
        config={{
          height: 350,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
      />
    </ChartContainer>
  );
}

```
---

### polar-area-chart

A customizable polar area chart component with smooth animations and flexible styling for displaying radial data.

**Installation:**
```bash
npx bna-ui add polar-area-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![polar-area-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 40.MOV)

#### Basic Usage

```tsx
import { Polar-area-chart } from '@/components/ui/polar-area-chart';

export default function Example() {
  return (
    <Polar-area-chart />
  );
}```


#### Advanced Examples

##### polar-area-chart-demo

A polar area chart with smooth animations

```tsx
import { PolarAreaChart } from '@/components/charts/polar-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function PolarAreaChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <PolarAreaChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### polar-area-chart-sample

A sample polar area chart

```tsx
import { PolarAreaChart } from '@/components/charts/polar-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const skillsData = [
  { label: 'JavaScript', value: 95 },
  { label: 'React', value: 88 },
  { label: 'TypeScript', value: 82 },
  { label: 'Node.js', value: 78 },
  { label: 'Python', value: 65 },
];

export function PolarAreaChartSample() {
  const primaryColor = useThemeColor({}, 'primary');
  const blueColor = useThemeColor({}, 'blue');
  const greenColor = useThemeColor({}, 'green');
  const orangeColor = useThemeColor({}, 'orange');
  const purpleColor = useThemeColor({}, 'purple');

  const dataWithColors = skillsData.map((item, index) => ({
    ...item,
    color: [primaryColor, blueColor, greenColor, orangeColor, purpleColor][
      index
    ],
  }));

  return (
    <ChartContainer
      title='Skills Assessment'
      description='Technical skills proficiency levels'
    >
      <PolarAreaChart
        data={dataWithColors}
        config={{
          height: 280,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### polar-area-chart-styled

A customized polar area chart with custom colors and styling

```tsx
import { PolarAreaChart } from '@/components/charts/polar-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const marketData = [
  { label: 'Mobile Apps', value: 45, color: '#FF6B6B' },
  { label: 'Web Apps', value: 38, color: '#4ECDC4' },
  { label: 'Desktop', value: 25, color: '#45B7D1' },
  { label: 'IoT', value: 18, color: '#96CEB4' },
  { label: 'AI/ML', value: 32, color: '#FFEAA7' },
  { label: 'Blockchain', value: 15, color: '#DDA0DD' },
];

export function PolarAreaChartStyled() {
  return (
    <ChartContainer
      title='Market Share Analysis'
      description='Technology sector market distribution'
    >
      <PolarAreaChart
        data={marketData}
        config={{
          height: 320,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### polar-area-chart-large

A polar area chart with large dataset

```tsx
import { PolarAreaChart } from '@/components/charts/polar-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeDataset = [
  { label: 'Q1 Sales', value: 185 },
  { label: 'Q2 Sales', value: 220 },
  { label: 'Q3 Sales', value: 195 },
  { label: 'Q4 Sales', value: 240 },
  { label: 'Marketing', value: 156 },
  { label: 'Support', value: 134 },
  { label: 'Development', value: 189 },
  { label: 'Design', value: 123 },
  { label: 'HR', value: 98 },
  { label: 'Finance', value: 145 },
  { label: 'Operations', value: 167 },
  { label: 'Research', value: 112 },
];

export function PolarAreaChartLarge() {
  return (
    <ChartContainer
      title='Annual Performance Overview'
      description='Comprehensive performance metrics across all departments and quarters'
    >
      <PolarAreaChart
        data={largeDataset}
        config={{
          height: 400,
          showLabels: true,
          animated: true,
          duration: 2000,
        }}
      />
    </ChartContainer>
  );
}

```
---

### popover

A contextual overlay that displays rich content triggered by user interaction.

**Installation:**
```bash
npx bna-ui add popover
```

**External Dependencies:** react-native-reanimated

**Registry Dependencies:** button

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![popover preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 09-14-01_1.MP4)

#### Basic Usage

```tsx
import { Popover } from '@/components/ui/popover';

export default function Example() {
  return (
    <Popover />
  );
}```


#### Advanced Examples

##### popover-demo

A basic popover with trigger button and content

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import React from 'react';

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <Text variant='title'>Popover Title</Text>
        </PopoverHeader>
        <PopoverBody>
          <Text>
            This is the popover content. You can put any content here.
          </Text>
        </PopoverBody>
        <PopoverFooter>
          <PopoverClose>
            <Button variant='outline' size='sm'>
              Close
            </Button>
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

```

##### popover-positioning

Popovers positioned on different sides of the trigger

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function PopoverPositioning() {
  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button style={{ width: 200 }}>Top</Button>
        </PopoverTrigger>
        <PopoverContent side='top'>
          <PopoverBody>
            <Text>Popover content positioned on top</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Popover>
          <PopoverTrigger asChild>
            <Button style={{ flex: 1 }}>Left</Button>
          </PopoverTrigger>
          <PopoverContent side='left'>
            <PopoverBody>
              <Text>Left positioned</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button style={{ flex: 1 }}>Right</Button>
          </PopoverTrigger>
          <PopoverContent side='right'>
            <PopoverBody>
              <Text>Right positioned</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </View>

      <Popover>
        <PopoverTrigger asChild>
          <Button style={{ width: 200 }}>Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side='bottom'>
          <PopoverBody>
            <Text>Popover content positioned on bottom</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </View>
  );
}

```

##### popover-alignment

Popovers with different alignment options

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function PopoverAlignment() {
  return (
    <View style={{ gap: 24, alignItems: 'center' }}>
      <View style={{ gap: 16 }}>
        <Text variant='title'>Bottom Side Alignment</Text>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Start</Button>
            </PopoverTrigger>
            <PopoverContent side='bottom' align='start'>
              <PopoverBody>
                <Text>Aligned to start (left)</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>Center</Button>
            </PopoverTrigger>
            <PopoverContent side='bottom' align='center'>
              <PopoverBody>
                <Text>Aligned to center</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>End</Button>
            </PopoverTrigger>
            <PopoverContent side='bottom' align='end'>
              <PopoverBody>
                <Text>Aligned to end (right)</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </View>
      </View>

      <View style={{ gap: 16 }}>
        <Text variant='title'>Right Side Alignment</Text>
        <View style={{ gap: 16 }}>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Start</Button>
            </PopoverTrigger>
            <PopoverContent side='right' align='start'>
              <PopoverBody>
                <Text>Aligned to start (top)</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>Center</Button>
            </PopoverTrigger>
            <PopoverContent side='right' align='center'>
              <PopoverBody>
                <Text>Aligned to center</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>End</Button>
            </PopoverTrigger>
            <PopoverContent side='right' align='end'>
              <PopoverBody>
                <Text>Aligned to end (bottom)</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </View>
      </View>
    </View>
  );
}

```

##### popover-controlled

A controlled popover with external state management

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function PopoverControlled() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Button
          variant={isOpen ? 'default' : 'outline'}
          onPress={() => setIsOpen(true)}
        >
          Open
        </Button>
        <Button
          variant={!isOpen ? 'default' : 'outline'}
          onPress={() => setIsOpen(false)}
        >
          Close
        </Button>
      </View>

      <Text>Status: {isOpen ? 'Open' : 'Closed'}</Text>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button>Controlled Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <Text variant='title'>Controlled Popover</Text>
          </PopoverHeader>
          <PopoverBody>
            <Text>
              This popover's state is controlled externally. You can open and
              close it using the buttons above or by clicking the trigger.
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </View>
  );
}

```

##### popover-custom

Popovers with custom content and styling

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export function PopoverCustom() {
  const primaryColor = useThemeColor({}, 'primary');
  const mutedColor = useThemeColor({}, 'muted');

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Custom Styled</Button>
        </PopoverTrigger>
        <PopoverContent
          style={{
            backgroundColor: primaryColor,
            borderRadius: 16,
            maxWidth: 250,
          }}
        >
          <PopoverBody style={{ padding: 20 }}>
            <Text style={{ color: 'black', textAlign: 'center' }}>
              This popover has custom styling with primary color background
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Large Content</Button>
        </PopoverTrigger>
        <PopoverContent
          maxWidth={400}
          maxHeight={300}
          style={{
            backgroundColor: mutedColor,
          }}
        >
          <PopoverBody style={{ padding: 24 }}>
            <Text variant='title' style={{ marginBottom: 12 }}>
              Large Popover Content
            </Text>
            <Text style={{ lineHeight: 20 }}>
              This popover has custom dimensions and can hold more content. It
              demonstrates how you can customize the appearance and size of
              popover components to fit your design needs.
            </Text>
            <Text style={{ marginTop: 12, fontStyle: 'italic' }}>
              The content area is scrollable if it exceeds the maximum height.
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button size='icon'>?</Button>
        </PopoverTrigger>
        <PopoverContent side='top' align='center'>
          <PopoverBody>
            <Text style={{ textAlign: 'center' }}>
              This is a help tooltip using a custom circular trigger button
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </View>
  );
}

```

##### popover-form

A popover containing form elements

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function PopoverForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', { name, email });
    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Contact</Button>
      </PopoverTrigger>
      <PopoverContent maxWidth={320}>
        <PopoverHeader>
          <Text variant='title'>Add New Contact</Text>
        </PopoverHeader>
        <PopoverBody>
          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ marginBottom: 8, fontWeight: '500' }}>Name</Text>
              <Input
                placeholder='Enter full name'
                value={name}
                onChangeText={setName}
              />
            </View>
            <View>
              <Text style={{ marginBottom: 8, fontWeight: '500' }}>Email</Text>
              <Input
                placeholder='Enter email address'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              />
            </View>
          </View>
        </PopoverBody>
        <PopoverFooter>
          <PopoverClose asChild>
            <Button variant='outline' size='sm'>
              Cancel
            </Button>
          </PopoverClose>
          <PopoverClose asChild>
            <Button
              size='sm'
              onPress={handleSubmit}
              disabled={!name.trim() || !email.trim()}
            >
              Add Contact
            </Button>
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

```

##### popover-menu

A popover styled as a dropdown menu

```tsx
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface MenuItemProps {
  icon: string;
  label: string;
  onPress: () => void;
  destructive?: boolean;
}

function MenuItem({
  icon,
  label,
  onPress,
  destructive = false,
}: MenuItemProps) {
  const textColor = useThemeColor(
    {},
    destructive ? 'destructive' : 'foreground'
  );
  const mutedColor = useThemeColor({}, 'muted');

  return (
    <PopoverClose asChild>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
          borderRadius: 6,
        }}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text
          style={{
            fontSize: 16,
            marginRight: 12,
            width: 20,
            textAlign: 'center',
          }}
        >
          {icon}
        </Text>
        <Text style={{ color: textColor, fontSize: 14 }}>{label}</Text>
      </TouchableOpacity>
    </PopoverClose>
  );
}

export function PopoverMenu() {
  const borderColor = useThemeColor({}, 'border');

  const handleMenuAction = (action: string) => {
    console.log(`Menu action: ${action}`);
  };

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>⚙️ Options</Button>
        </PopoverTrigger>
        <PopoverContent
          align='end'
          style={{
            padding: 8,
            minWidth: 180,
          }}
        >
          <MenuItem
            icon='👤'
            label='View Profile'
            onPress={() => handleMenuAction('profile')}
          />
          <MenuItem
            icon='⚙️'
            label='Settings'
            onPress={() => handleMenuAction('settings')}
          />
          <MenuItem
            icon='📄'
            label='Export Data'
            onPress={() => handleMenuAction('export')}
          />
          <View
            style={{
              height: 1,
              backgroundColor: borderColor,
              marginVertical: 4,
            }}
          />
          <MenuItem
            icon='🚪'
            label='Sign Out'
            onPress={() => handleMenuAction('signout')}
          />
          <MenuItem
            icon='🗑️'
            label='Delete Account'
            onPress={() => handleMenuAction('delete')}
            destructive
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button>✏️ Actions</Button>
        </PopoverTrigger>
        <PopoverContent side='bottom' align='start' style={{ padding: 8 }}>
          <MenuItem
            icon='📝'
            label='Edit'
            onPress={() => handleMenuAction('edit')}
          />
          <MenuItem
            icon='📋'
            label='Copy'
            onPress={() => handleMenuAction('copy')}
          />
          <MenuItem
            icon='📤'
            label='Share'
            onPress={() => handleMenuAction('share')}
          />
          <MenuItem
            icon='⭐'
            label='Add to Favorites'
            onPress={() => handleMenuAction('favorite')}
          />
        </PopoverContent>
      </Popover>
    </View>
  );
}

```
---

### progress

A progress bar component to show completion status with optional interactivity.

**Installation:**
```bash
npx bna-ui add progress
```

**External Dependencies:** react-native-gesture-handler, react-native-reanimated

**Registry Dependencies:** view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![progress preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5657.PNG)

#### Basic Usage

```tsx
import { Progress } from '@/components/ui/progress';

export default function Example() {
  return (
    <Progress />
  );
}```


#### Advanced Examples

##### progress-demo

A basic progress bar showing completion status

```tsx
import { Progress } from '@/components/ui/progress';
import React from 'react';

export function ProgressDemo() {
  return <Progress value={65} />;
}

```

##### progress-interactive

An interactive progress bar that can be dragged or tapped

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ProgressInteractive() {
  const [value, setValue] = useState(45);
  const [isSeking, setIsSeeking] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <Text variant='body' style={{ color: '#666' }}>
        {isSeking ? 'Seeking...' : `Progress: ${Math.round(value)}%`}
      </Text>
      <Progress
        value={value}
        interactive
        height={18}
        onValueChange={setValue}
        onSeekStart={() => setIsSeeking(true)}
        onSeekEnd={() => setIsSeeking(false)}
      />
      <Text variant='caption' style={{ color: '#999' }}>
        Tap or drag to adjust the progress
      </Text>
    </View>
  );
}

```

##### progress-heights

Progress bars with different heights

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ProgressHeights() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <Text variant='caption'>Small (2px)</Text>
        <Progress value={75} height={2} />
      </View>

      <View style={{ gap: 6 }}>
        <Text variant='caption'>Default (4px)</Text>
        <Progress value={60} />
      </View>

      <View style={{ gap: 6 }}>
        <Text variant='caption'>Medium (8px)</Text>
        <Progress value={45} height={8} />
      </View>

      <View style={{ gap: 6 }}>
        <Text variant='caption'>Large (12px)</Text>
        <Progress value={30} height={12} />
      </View>

      <View style={{ gap: 6 }}>
        <Text variant='caption'>Extra Large (20px)</Text>
        <Progress value={85} height={20} />
      </View>
    </View>
  );
}

```

##### progress-labels

Progress bars with percentage labels and descriptions

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ProgressLabels() {
  const tasks = [
    { label: 'Installing dependencies', progress: 100 },
    { label: 'Building application', progress: 75 },
    { label: 'Running tests', progress: 45 },
    { label: 'Deploying to production', progress: 0 },
  ];

  return (
    <View style={{ gap: 20 }}>
      {tasks.map((task, index) => (
        <View key={index} style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text variant='body' style={{ fontWeight: '500' }}>
              {task.label}
            </Text>
            <Text variant='caption' style={{ color: '#666' }}>
              {task.progress}%
            </Text>
          </View>
          <Progress value={task.progress} height={6} />
        </View>
      ))}

      <View style={{ gap: 8, marginTop: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text variant='title' style={{ fontWeight: '600' }}>
            Overall Progress
          </Text>
          <Text variant='body' style={{ fontWeight: '500' }}>
            55%
          </Text>
        </View>
        <Progress value={55} height={10} />
        <Text variant='caption' style={{ color: '#666' }}>
          2 of 4 tasks completed
        </Text>
      </View>
    </View>
  );
}

```

##### progress-animated

Progress bars with smooth animations and transitions

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function ProgressAnimated() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    // Animate first progress bar
    const timer1 = setTimeout(() => setProgress1(75), 500);

    // Animate second progress bar
    const timer2 = setTimeout(() => setProgress2(60), 1000);

    // Animate third progress bar
    const timer3 = setTimeout(() => setProgress3(85), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const [cycleProgress, setCycleProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleProgress((prev) => {
        const newValue = prev + 10;
        return newValue > 100 ? 0 : newValue;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ gap: 20 }}>
      <View style={{ gap: 12 }}>
        <Text variant='title'>Staggered Animation</Text>

        <View style={{ gap: 8 }}>
          <Text variant='caption'>File Upload: {progress1}%</Text>
          <Progress value={progress1} height={6} />
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='caption'>Processing: {progress2}%</Text>
          <Progress value={progress2} height={6} />
        </View>

        <View style={{ gap: 8 }}>
          <Text variant='caption'>Optimization: {progress3}%</Text>
          <Progress value={progress3} height={6} />
        </View>
      </View>

      <View style={{ gap: 12 }}>
        <Text variant='title'>Continuous Animation</Text>
        <View style={{ gap: 8 }}>
          <Text variant='caption'>Loading: {cycleProgress}%</Text>
          <Progress value={cycleProgress} height={8} />
        </View>
      </View>
    </View>
  );
}

```

##### progress-media

Progress bars styled for media player controls

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function ProgressMedia() {
  const [progress, setProgress] = useState(35);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const formatTime = (percent: number) => {
    const totalSeconds = Math.floor((percent / 100) * 180); // 3 minute song
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ gap: 20 }}>
      {/* Media Player */}
      <View
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: 12,
          padding: 16,
          gap: 12,
        }}
      >
        <View style={{ gap: 8 }}>
          <Text variant='body' style={{ color: '#fff', fontWeight: '600' }}>
            Song Title
          </Text>
          <Text variant='caption' style={{ color: '#999' }}>
            Artist Name
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <Progress
            value={progress}
            interactive
            height={4}
            onValueChange={setProgress}
            style={{ backgroundColor: '#333' }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text variant='caption' style={{ color: '#999' }}>
              {formatTime(progress)}
            </Text>
            <Text variant='caption' style={{ color: '#999' }}>
              3:00
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: '#007AFF',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>
              {isPlaying ? '⏸️' : '▶️'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Volume Control */}
      <View
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: 8,
          padding: 12,
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Text>🔊</Text>
          <View style={{ flex: 1 }}>
            <Progress
              value={volume}
              interactive
              height={6}
              onValueChange={setVolume}
            />
          </View>
          <Text variant='caption' style={{ color: '#666' }}>
            {Math.round(volume)}%
          </Text>
        </View>
      </View>
    </View>
  );
}

```

##### progress-steps

Multi-step progress indicators

```tsx
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = ['Account Setup', 'Personal Info', 'Verification', 'Complete'];

  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <View style={{ gap: 20 }}>
      {/* Step Progress */}
      <View style={{ gap: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text variant='title'>Setup Progress</Text>
          <Text variant='caption' style={{ color: '#666' }}>
            Step {currentStep + 1} of {steps.length}
          </Text>
        </View>

        <Progress value={progress} height={8} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}
        >
          {steps.map((step, index) => (
            <View
              key={index}
              style={{
                alignItems: 'center',
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: index <= currentStep ? '#007AFF' : '#e5e7eb',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <Text
                  variant='caption'
                  style={{
                    color: index <= currentStep ? '#fff' : '#666',
                    fontWeight: '600',
                  }}
                >
                  {index < currentStep ? '✓' : index + 1}
                </Text>
              </View>
              <Text
                variant='caption'
                style={{
                  color: index <= currentStep ? '#000' : '#999',
                  fontWeight: index === currentStep ? '600' : '400',
                  textAlign: 'center',
                }}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Controls */}
      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: currentStep > 0 ? '#007AFF' : '#e5e7eb',
            borderRadius: 6,
          }}
          onPress={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          <Text
            style={{
              color: currentStep > 0 ? '#fff' : '#999',
              fontWeight: '500',
            }}
          >
            Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor:
              currentStep < steps.length - 1 ? '#007AFF' : '#e5e7eb',
            borderRadius: 6,
          }}
          onPress={() =>
            setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === steps.length - 1}
        >
          <Text
            style={{
              color: currentStep < steps.length - 1 ? '#fff' : '#999',
              fontWeight: '500',
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

```

##### progress-ring-chart-demo

A circular progress ring with smooth animations

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartDemo() {
  return (
    <ChartContainer
      title='Goal Progress'
      description='Track your progress towards your goals'
    >
      <ProgressRingChart
        progress={75}
        size={120}
        strokeWidth={8}
        config={{
          animated: true,
          duration: 1000,
          gradient: false,
        }}
        showLabel={true}
        label='Completion Rate'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-sample

A sample progress ring chart

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartSample() {
  return (
    <ChartContainer
      title='Daily Steps'
      description='Track your daily step count'
    >
      <ProgressRingChart
        progress={68}
        size={140}
        strokeWidth={10}
        config={{
          animated: true,
          duration: 1500,
          gradient: false,
        }}
        showLabel={true}
        label='Daily Goal'
        centerText='6,800'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-styled

A customized progress ring with gradient and custom styling

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartStyled() {
  return (
    <ChartContainer
      title='Project Progress'
      description='Development milestone completion with gradient styling'
    >
      <ProgressRingChart
        progress={92}
        size={160}
        strokeWidth={12}
        config={{
          animated: true,
          duration: 2000,
          gradient: true,
        }}
        showLabel={true}
        label='Sprint Progress'
        centerText='92%'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-large

A large progress ring with center text

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartLarge() {
  return (
    <ChartContainer
      title='Annual Revenue Target'
      description='Track progress towards annual revenue goals'
    >
      <ProgressRingChart
        progress={87}
        size={200}
        strokeWidth={16}
        config={{
          animated: true,
          duration: 2500,
          gradient: true,
        }}
        showLabel={true}
        label='Revenue Target'
        centerText='$2.6M'
      />
    </ChartContainer>
  );
}

```
---

### progress-ring-chart

A customizable circular progress ring component with smooth animations and flexible styling.

**Installation:**
```bash
npx bna-ui add progress-ring-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![progress-ring-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 36.MOV)

#### Basic Usage

```tsx
import { Progress-ring-chart } from '@/components/ui/progress-ring-chart';

export default function Example() {
  return (
    <Progress-ring-chart />
  );
}```


#### Advanced Examples

##### progress-ring-chart-demo

A circular progress ring with smooth animations

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartDemo() {
  return (
    <ChartContainer
      title='Goal Progress'
      description='Track your progress towards your goals'
    >
      <ProgressRingChart
        progress={75}
        size={120}
        strokeWidth={8}
        config={{
          animated: true,
          duration: 1000,
          gradient: false,
        }}
        showLabel={true}
        label='Completion Rate'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-sample

A sample progress ring chart

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartSample() {
  return (
    <ChartContainer
      title='Daily Steps'
      description='Track your daily step count'
    >
      <ProgressRingChart
        progress={68}
        size={140}
        strokeWidth={10}
        config={{
          animated: true,
          duration: 1500,
          gradient: false,
        }}
        showLabel={true}
        label='Daily Goal'
        centerText='6,800'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-styled

A customized progress ring with gradient and custom styling

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartStyled() {
  return (
    <ChartContainer
      title='Project Progress'
      description='Development milestone completion with gradient styling'
    >
      <ProgressRingChart
        progress={92}
        size={160}
        strokeWidth={12}
        config={{
          animated: true,
          duration: 2000,
          gradient: true,
        }}
        showLabel={true}
        label='Sprint Progress'
        centerText='92%'
      />
    </ChartContainer>
  );
}

```

##### progress-ring-chart-large

A large progress ring with center text

```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartLarge() {
  return (
    <ChartContainer
      title='Annual Revenue Target'
      description='Track progress towards annual revenue goals'
    >
      <ProgressRingChart
        progress={87}
        size={200}
        strokeWidth={16}
        config={{
          animated: true,
          duration: 2500,
          gradient: true,
        }}
        showLabel={true}
        label='Revenue Target'
        centerText='$2.6M'
      />
    </ChartContainer>
  );
}

```
---

### radar-chart

A customizable radar chart component with smooth animations and flexible styling for displaying multi-dimensional data.

**Installation:**
```bash
npx bna-ui add radar-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![radar-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 32.MOV)

#### Basic Usage

```tsx
import { Radar-chart } from '@/components/ui/radar-chart';

export default function Example() {
  return (
    <Radar-chart />
  );
}```


#### Advanced Examples

##### radar-chart-demo

A radar chart with smooth animations

```tsx
import { RadarChart } from '@/components/charts/radar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Speed', value: 80 },
  { label: 'Reliability', value: 92 },
  { label: 'Comfort', value: 75 },
  { label: 'Safety', value: 88 },
  { label: 'Efficiency', value: 85 },
  { label: 'Style', value: 70 },
];

export function RadarChartDemo() {
  return (
    <ChartContainer
      title='Product Performance'
      description='Multi-dimensional performance analysis across key metrics'
    >
      <RadarChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### radar-chart-sample

A sample radar chart

```tsx
import { RadarChart } from '@/components/charts/radar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const skillsData = [
  { label: 'Frontend', value: 95 },
  { label: 'Backend', value: 82 },
  { label: 'Mobile', value: 78 },
  { label: 'DevOps', value: 65 },
  { label: 'Design', value: 70 },
];

export function RadarChartSample() {
  return (
    <ChartContainer
      title='Skills Assessment'
      description='Developer competency across different technology areas'
    >
      <RadarChart
        data={skillsData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 1200,
          maxValue: 100,
        }}
      />
    </ChartContainer>
  );
}

```

##### radar-chart-styled

A customized radar chart with custom colors and styling

```tsx
import { RadarChart } from '@/components/charts/radar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const performanceData = [
  { label: 'Innovation', value: 88 },
  { label: 'Quality', value: 92 },
  { label: 'Delivery', value: 85 },
  { label: 'Customer Satisfaction', value: 90 },
  { label: 'Cost Efficiency', value: 78 },
  { label: 'Team Collaboration', value: 95 },
  { label: 'Process Improvement', value: 82 },
];

export function RadarChartStyled() {
  const accentColor = useThemeColor({}, 'accent');

  return (
    <ChartContainer
      title='Team Performance Matrix'
      description='Comprehensive evaluation across key performance indicators'
    >
      <RadarChart
        data={performanceData}
        config={{
          height: 350,
          showLabels: true,
          animated: true,
          duration: 1500,
          maxValue: 100,
        }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### radar-chart-large

A radar chart with large dataset

```tsx
import { RadarChart } from '@/components/charts/radar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const comprehensiveData = [
  { label: 'Leadership', value: 85 },
  { label: 'Communication', value: 90 },
  { label: 'Technical Skills', value: 88 },
  { label: 'Problem Solving', value: 92 },
  { label: 'Creativity', value: 78 },
  { label: 'Adaptability', value: 86 },
  { label: 'Time Management', value: 82 },
  { label: 'Teamwork', value: 94 },
  { label: 'Strategic Thinking', value: 80 },
  { label: 'Customer Focus', value: 87 },
];

export function RadarChartLarge() {
  return (
    <ChartContainer
      title='360° Skills Assessment'
      description='Comprehensive evaluation across multiple competency areas'
    >
      <RadarChart
        data={comprehensiveData}
        config={{
          height: 400,
          showLabels: true,
          animated: true,
          duration: 2000,
          maxValue: 100,
        }}
      />
    </ChartContainer>
  );
}

```
---

### radial-bar-chart

A customizable radial bar chart component with smooth animations, gradient support, and center value display.

**Installation:**
```bash
npx bna-ui add radial-bar-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![radial-bar-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 61.MOV)

#### Basic Usage

```tsx
import { Radial-bar-chart } from '@/components/ui/radial-bar-chart';

export default function Example() {
  return (
    <Radial-bar-chart />
  );
}```


#### Advanced Examples

##### radial-bar-chart-demo

A radial bar chart with smooth animations and center totals

```tsx
import { RadialBarChart } from '@/components/charts/radial-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
];

export function RadialBarChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <RadialBarChart
        data={sampleData}
        config={{
          animated: true,
          duration: 1000,
          gradient: false,
        }}
      />
    </ChartContainer>
  );
}

```

##### radial-bar-chart-sample

A sample radial bar chart with custom data

```tsx
import { RadialBarChart } from '@/components/charts/radial-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { label: 'Mobile', value: 45 },
  { label: 'Desktop', value: 38 },
  { label: 'Tablet', value: 17 },
];

export function RadialBarChartSample() {
  const blue = useThemeColor({}, 'blue');
  const green = useThemeColor({}, 'green');
  const orange = useThemeColor({}, 'orange');

  const dataWithColors = sampleData.map((item, index) => ({
    ...item,
    color: [blue, green, orange][index],
  }));

  return (
    <ChartContainer
      title='Device Usage'
      description='User engagement by device type'
    >
      <RadialBarChart
        data={dataWithColors}
        config={{
          animated: true,
          duration: 1200,
          padding: 25,
        }}
      />
    </ChartContainer>
  );
}

```

##### radial-bar-chart-gradient

A radial bar chart with gradient effects

```tsx
import { RadialBarChart } from '@/components/charts/radial-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { label: 'Q1 Revenue', value: 85 },
  { label: 'Q2 Revenue', value: 92 },
  { label: 'Q3 Revenue', value: 78 },
  { label: 'Q4 Revenue', value: 96 },
];

export function RadialBarChartGradient() {
  const purple = useThemeColor({}, 'purple');
  const pink = useThemeColor({}, 'pink');
  const blue = useThemeColor({}, 'blue');
  const green = useThemeColor({}, 'green');

  const dataWithColors = sampleData.map((item, index) => ({
    ...item,
    color: [purple, pink, blue, green][index],
  }));

  return (
    <ChartContainer
      title='Quarterly Revenue'
      description='Revenue performance with gradient effects'
    >
      <RadialBarChart
        data={dataWithColors}
        config={{
          animated: true,
          duration: 1500,
          gradient: true,
          padding: 30,
        }}
      />
    </ChartContainer>
  );
}

```

##### radial-bar-chart-large

A radial bar chart with large dataset

```tsx
import { RadialBarChart } from '@/components/charts/radial-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeDataset = [
  { label: 'Product A', value: 156 },
  { label: 'Product B', value: 142 },
  { label: 'Product C', value: 98 },
  { label: 'Product D', value: 124 },
  { label: 'Product E', value: 89 },
  { label: 'Product F', value: 167 },
  { label: 'Product G', value: 78 },
  { label: 'Product H', value: 134 },
];

export function RadialBarChartLarge() {
  return (
    <ChartContainer
      title='Product Performance'
      description='Sales performance across all product lines'
    >
      <RadialBarChart
        data={largeDataset}
        config={{
          animated: true,
          duration: 2000,
          padding: 15,
        }}
      />
    </ChartContainer>
  );
}

```
---

### radio

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

**Installation:**
```bash
npx bna-ui add radio
```

**External Dependencies:** react-native

**Registry Dependencies:** text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![radio preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 09-42-48_1.MP4)

#### Basic Usage

```tsx
import { Radio } from '@/components/ui/radio';

export default function Example() {
  return (
    <Radio />
  );
}```


#### Advanced Examples

##### radio-demo

A basic radio group with multiple options

```tsx
import { RadioGroup } from '@/components/ui/radio';
import React, { useState } from 'react';

export function RadioDemo() {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup
      options={[
        { label: 'Default', value: 'option1' },
        { label: 'Comfortable', value: 'option2' },
        { label: 'Compact', value: 'option3' },
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}

```

##### radio-horizontal

Radio buttons arranged horizontally

```tsx
import { RadioGroup } from '@/components/ui/radio';
import React, { useState } from 'react';

export function RadioHorizontal() {
  const [value, setValue] = useState('small');

  return (
    <RadioGroup
      orientation='horizontal'
      options={[
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}

```

##### radio-disabled

Radio group with some disabled options

```tsx
import { RadioGroup } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function RadioDisabled() {
  const [value1, setValue1] = useState('option1');
  const [value2, setValue2] = useState('option2');

  return (
    <View style={{ gap: 24 }}>
      {/* Some disabled options */}
      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500' }}>
          With disabled options
        </Text>
        <RadioGroup
          options={[
            { label: 'Available', value: 'option1' },
            { label: 'Disabled', value: 'option2', disabled: true },
            { label: 'Available', value: 'option3' },
            { label: 'Disabled', value: 'option4', disabled: true },
          ]}
          value={value1}
          onValueChange={setValue1}
        />
      </View>

      {/* Entire group disabled */}
      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500' }}>
          Entire group disabled
        </Text>
        <RadioGroup
          disabled
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={value2}
          onValueChange={setValue2}
        />
      </View>
    </View>
  );
}

```

##### radio-styled

Radio buttons with custom colors and styling

```tsx
import { RadioGroup } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';

export function RadioStyled() {
  const green = useThemeColor({}, 'green');
  const card = useThemeColor({}, 'card');

  const [value1, setValue1] = useState('red');
  const [value2, setValue2] = useState('plan1');

  return (
    <View style={{ gap: 24 }}>
      {/* Custom colors */}
      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500' }}>
          Card-like options
        </Text>
        <RadioGroup
          options={[
            { label: 'Red Theme', value: 'red' },
            { label: 'Blue Theme', value: 'blue' },
            { label: 'Green Theme', value: 'green' },
          ]}
          value={value1}
          onValueChange={setValue1}
          optionStyle={{
            paddingVertical: 12,
            paddingHorizontal: 12,
            backgroundColor: card,
            borderRadius: 8,
            marginBottom: 4,
          }}
          labelStyle={{
            fontSize: 16,
            fontWeight: '500',
          }}
        />
      </View>

      {/* Card-like styling */}
      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500' }}>
          Custom styling
        </Text>
        <RadioGroup
          options={[
            { label: 'Basic Plan - $9/month', value: 'plan1' },
            { label: 'Pro Plan - $19/month', value: 'plan2' },
            { label: 'Enterprise - $49/month', value: 'plan3' },
          ]}
          value={value2}
          onValueChange={setValue2}
          optionStyle={{
            paddingVertical: 16,
            paddingHorizontal: 16,
            backgroundColor: green,
            borderRadius: 12,
            marginBottom: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
          labelStyle={{
            fontSize: 15,
            fontWeight: '500',
            color: '#1f2937',
          }}
        />
      </View>
    </View>
  );
}

```

##### radio-form

Radio group integrated with form validation

```tsx
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export function RadioForm() {
  const [experience, setExperience] = useState('');
  const [notification, setNotification] = useState('email');
  const [theme, setTheme] = useState('system');

  const handleSubmit = () => {
    if (!experience) {
      Alert.alert('Error', 'Please select your experience level');
      return;
    }

    Alert.alert(
      'Form Submitted',
      `Experience: ${experience}\nNotifications: ${notification}\nTheme: ${theme}`
    );
  };

  return (
    <View style={{ paddingVertical: 16, gap: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>User Preferences</Text>

      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500', fontSize: 16 }}>
          Experience Level *
        </Text>
        <RadioGroup
          options={[
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' },
            { label: 'Expert', value: 'expert' },
          ]}
          value={experience}
          onValueChange={setExperience}
        />
      </View>

      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500', fontSize: 16 }}>
          Notification Preference
        </Text>
        <RadioGroup
          options={[
            { label: 'Email notifications', value: 'email' },
            { label: 'Push notifications', value: 'push' },
            { label: 'SMS notifications', value: 'sms' },
            { label: 'No notifications', value: 'none' },
          ]}
          value={notification}
          onValueChange={setNotification}
        />
      </View>

      <View>
        <Text style={{ marginBottom: 12, fontWeight: '500', fontSize: 16 }}>
          Theme Preference
        </Text>
        <RadioGroup
          orientation='horizontal'
          options={[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' },
          ]}
          value={theme}
          onValueChange={setTheme}
        />
      </View>

      <Button onPress={handleSubmit} style={{ marginTop: 8 }}>
        Save Preferences
      </Button>
    </View>
  );
}

```

##### radio-large

Radio buttons with larger size and spacing

```tsx
import { RadioGroup } from '@/components/ui/radio';
import React, { useState } from 'react';

export function RadioLarge() {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup
      options={[
        { label: 'Large Option One', value: 'option1' },
        { label: 'Large Option Two', value: 'option2' },
        { label: 'Large Option Three', value: 'option3' },
      ]}
      value={value}
      onValueChange={setValue}
      style={{ gap: 12 }}
      optionStyle={{
        paddingVertical: 12,
      }}
      labelStyle={{
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 28,
      }}
    />
  );
}

```

##### radio-single

Individual radio button component usage

```tsx
import { RadioButton } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function RadioSingle() {
  const [selectedValue, setSelectedValue] = useState('option2');

  const options = [
    { label: 'First Option', value: 'option1' },
    { label: 'Second Option', value: 'option2' },
    { label: 'Third Option', value: 'option3' },
    { label: 'Disabled Option', value: 'option4', disabled: true },
  ];

  return (
    <View style={{ gap: 16 }}>
      <Text style={{ fontWeight: '500', fontSize: 16 }}>
        Individual Radio Buttons
      </Text>

      <View style={{ gap: 8 }}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            option={option}
            selected={selectedValue === option.value}
            onPress={() => setSelectedValue(option.value)}
          />
        ))}
      </View>

      <Text variant='caption'>Selected: {selectedValue}</Text>
    </View>
  );
}

```
---

### scatter-chart

A customizable scatter plot component with smooth animations and flexible styling for visualizing data relationships.

**Installation:**
```bash
npx bna-ui add scatter-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![scatter-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 48.MOV)

#### Basic Usage

```tsx
import { Scatter-chart } from '@/components/ui/scatter-chart';

export default function Example() {
  return (
    <Scatter-chart />
  );
}```


#### Advanced Examples

##### scatter-chart-demo

A scatter plot with smooth animations

```tsx
import { ScatterPlot } from '@/components/charts/scatter-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 10, y: 20, label: 'Point A' },
  { x: 25, y: 35, label: 'Point B' },
  { x: 40, y: 15, label: 'Point C' },
  { x: 55, y: 45, label: 'Point D' },
  { x: 70, y: 30, label: 'Point E' },
  { x: 85, y: 55, label: 'Point F' },
  { x: 30, y: 50, label: 'Point G' },
  { x: 65, y: 25, label: 'Point H' },
];

export function ScatterChartDemo() {
  return (
    <ChartContainer
      title='Performance vs Experience'
      description='Scatter plot showing the relationship between years of experience and performance scores'
    >
      <ScatterPlot
        data={sampleData}
        config={{
          height: 300,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### scatter-chart-sample

A sample scatter chart with various data points

```tsx
import { ScatterPlot } from '@/components/charts/scatter-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 5, y: 12, label: 'Alpha' },
  { x: 15, y: 28, label: 'Beta' },
  { x: 35, y: 42, label: 'Gamma' },
  { x: 45, y: 18, label: 'Delta' },
  { x: 25, y: 65, label: 'Epsilon' },
  { x: 55, y: 38, label: 'Zeta' },
  { x: 75, y: 52, label: 'Eta' },
  { x: 65, y: 78, label: 'Theta' },
  { x: 85, y: 25, label: 'Iota' },
  { x: 95, y: 88, label: 'Kappa' },
];

export function ScatterChartSample() {
  return (
    <ChartContainer
      title='Sample Data Distribution'
      description='Sample scatter plot with random data points'
    >
      <ScatterPlot
        data={sampleData}
        config={{
          height: 250,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 800,
        }}
      />
    </ChartContainer>
  );
}

```

##### scatter-chart-styled

A customized scatter chart with custom colors and styling

```tsx
import { ScatterPlot } from '@/components/charts/scatter-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const sampleData = [
  { x: 20, y: 80, label: 'High Performance' },
  { x: 35, y: 65, label: 'Good Performance' },
  { x: 50, y: 70, label: 'Average Performance' },
  { x: 65, y: 45, label: 'Below Average' },
  { x: 80, y: 55, label: 'Improving' },
  { x: 25, y: 90, label: 'Excellent' },
  { x: 75, y: 35, label: 'Needs Work' },
  { x: 60, y: 85, label: 'Outstanding' },
];

export function ScatterChartStyled() {
  return (
    <ChartContainer
      title='Styled Performance Analysis'
      description='Customized scatter plot with enhanced styling'
    >
      <ScatterPlot
        data={sampleData}
        config={{
          height: 320,
          padding: 30,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
    </ChartContainer>
  );
}

```

##### scatter-chart-large

A scatter chart with large dataset

```tsx
import { ScatterPlot } from '@/components/charts/scatter-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

// Generate a larger dataset for demonstration
const generateLargeDataset = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      label: `Point ${i + 1}`,
    });
  }
  return data;
};

const largeDataset = generateLargeDataset();

export function ScatterChartLarge() {
  return (
    <ChartContainer
      title='Large Dataset Visualization'
      description='Scatter plot with 30 data points showing distribution patterns'
    >
      <ScatterPlot
        data={largeDataset}
        config={{
          height: 400,
          padding: 25,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
      />
    </ChartContainer>
  );
}

```
---

### scroll-view

A scrollable view component that allows content to be scrolled when it exceeds the container size.

**Installation:**
```bash
npx bna-ui add scroll-view
```

**Registry Dependencies:** view

**Preview:**

![scroll-view preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 09-49-52_1.MP4)

#### Basic Usage

```tsx
import { Scroll-view } from '@/components/ui/scroll-view';

export default function Example() {
  return (
    <Scroll-view />
  );
}```


#### Advanced Examples

##### scroll-view-demo

A basic scrollable view with content

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewDemo() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        height: 200,
        borderWidth: 1,
        borderColor: card,
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView style={{ padding: 16 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <Text
            key={i}
            style={{
              marginBottom: 8,
              padding: 12,
              backgroundColor: card,
              borderRadius: 6,
            }}
          >
            Scrollable item {i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-vertical

Vertical scrolling with multiple items

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewVertical() {
  const colors = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
  ];

  return (
    <View
      style={{
        height: 300,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16, gap: 12 }}
        showsVerticalScrollIndicator={true}
      >
        {Array.from({ length: 15 }, (_, i) => (
          <View
            key={i}
            style={{
              height: 80,
              backgroundColor: colors[i % colors.length],
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              Card {i + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-horizontal

Horizontal scrolling with cards

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewHorizontal() {
  const gradients = [
    ['#ff9a9e', '#fecfef'],
    ['#a18cd1', '#fbc2eb'],
    ['#fad0c4', '#ffd1ff'],
    ['#ffecd2', '#fcb69f'],
    ['#a8edea', '#fed6e3'],
    ['#d299c2', '#fef9d7'],
    ['#89f7fe', '#66a6ff'],
  ];

  return (
    <View
      style={{
        height: 150,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ padding: 16, gap: 16, alignItems: 'center' }}
        showsHorizontalScrollIndicator={true}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <View
            key={i}
            style={{
              width: 120,
              height: 100,
              backgroundColor: gradients[i % gradients.length][0],
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
              Item {i + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-nested

ScrollViews nested within each other

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewNested() {
  return (
    <View
      style={{
        height: 300,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
          Vertical Scroll
        </Text>

        {Array.from({ length: 3 }, (_, sectionIndex) => (
          <View key={sectionIndex} style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
              Section {sectionIndex + 1}
            </Text>

            <View
              style={{
                height: 120,
                borderWidth: 1,
                borderColor: '#d1d5db',
                borderRadius: BORDER_RADIUS,
              }}
            >
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  padding: 12,
                  gap: 12,
                  alignItems: 'center',
                }}
                showsHorizontalScrollIndicator={true}
              >
                {Array.from({ length: 8 }, (_, itemIndex) => (
                  <View
                    key={itemIndex}
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: '#3b82f6',
                      borderRadius: BORDER_RADIUS,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      {sectionIndex + 1}.{itemIndex + 1}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ))}

        <Text
          style={{
            padding: 16,
            borderRadius: BORDER_RADIUS,
            textAlign: 'center',
          }}
        >
          End of scrollable content
        </Text>
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-refresh

ScrollView with pull-to-refresh functionality

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React, { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';

export function ScrollViewRefresh() {
  const card = useThemeColor({}, 'card');
  const green = useThemeColor({}, 'green');

  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(
    new Date().toLocaleTimeString()
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastRefresh(new Date().toLocaleTimeString());
    }, 2000);
  }, []);

  return (
    <View
      style={{
        height: 300,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            padding: 16,
            backgroundColor: green,
            borderRadius: BORDER_RADIUS,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: 'bold', color: '#000', marginBottom: 4 }}>
            Pull to Refresh
          </Text>
          <Text style={{ color: '#047857' }}>
            Last refreshed: {lastRefresh}
          </Text>
        </View>

        {Array.from({ length: 15 }, (_, i) => (
          <View
            key={i}
            style={{
              padding: 16,
              backgroundColor: card,
              borderRadius: BORDER_RADIUS,
              marginBottom: 8,
              borderLeftWidth: 4,
              borderLeftColor: '#3b82f6',
            }}
          >
            <Text style={{ fontWeight: '600', marginBottom: 4 }}>
              News Item {i + 1}
            </Text>
            <Text style={{ color: '#6b7280' }}>
              This is a sample news item that demonstrates the pull-to-refresh
              functionality.
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-styled

ScrollView with custom styling and padding

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function ScrollViewStyled() {
  return (
    <View style={{ height: 300, borderRadius: 16, overflow: 'hidden' }}>
      <ScrollView
        style={{
          backgroundColor: '#1f2937',
          borderRadius: 16,
        }}
        contentContainerStyle={{
          padding: 20,
          gap: 16,
        }}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: '#374151',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#4b5563',
          }}
        >
          <Text
            style={{
              color: '#f9fafb',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 8,
            }}
          >
            🌙 Dark Theme ScrollView
          </Text>
          <Text style={{ color: '#d1d5db' }}>
            This ScrollView uses custom dark styling with rounded corners and
            shadows.
          </Text>
        </View>

        {Array.from({ length: 12 }, (_, i) => (
          <View
            key={i}
            style={{
              padding: 16,
              backgroundColor: i % 2 === 0 ? '#6366f1' : '#8b5cf6',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              Card {i + 1}
            </Text>
            <Text style={{ color: '#e5e7eb', opacity: 0.9 }}>
              Beautiful custom styled card with gradient-like colors and
              shadows.
            </Text>
          </View>
        ))}

        <View
          style={{
            padding: 20,
            backgroundColor: '#059669',
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            ✨ End of styled content
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

```

##### scroll-view-indicators

ScrollView with custom scroll indicators

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewIndicators() {
  const card = useThemeColor({}, 'card');

  return (
    <View style={{ gap: 16 }}>
      {/* Vertical with indicators */}
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          With Scroll Indicators
        </Text>
        <View
          style={{
            height: 200,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: BORDER_RADIUS,
          }}
        >
          <ScrollView
            contentContainerStyle={{ padding: 16, gap: 8 }}
            showsVerticalScrollIndicator={true}
            indicatorStyle='white'
          >
            {Array.from({ length: 12 }, (_, i) => (
              <Text
                key={i}
                style={{
                  padding: 12,
                  backgroundColor: card,
                  borderRadius: BORDER_RADIUS,
                }}
              >
                Item {i + 1} - Scroll indicators visible
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Horizontal without indicators */}
      <View style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          Without Scroll Indicators
        </Text>
        <View
          style={{
            height: 150,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: BORDER_RADIUS,
          }}
        >
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              padding: 16,
              gap: 12,
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <View
                key={i}
                style={{
                  width: 80,
                  height: 60,
                  backgroundColor: '#fbbf24',
                  borderRadius: BORDER_RADIUS,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  {i + 1}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

```

##### scroll-view-inset

ScrollView with content inset adjustments

```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewInset() {
  const card = useThemeColor({}, 'card');

  return (
    <View style={{ gap: 16 }}>
      {/* Standard ScrollView */}
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          Standard Content
        </Text>
        <View
          style={{
            height: 150,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: BORDER_RADIUS,
          }}
        >
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            {Array.from({ length: 8 }, (_, i) => (
              <Text
                key={i}
                style={{
                  padding: 12,
                  marginBottom: 8,
                  backgroundColor: card,
                  borderRadius: BORDER_RADIUS,
                }}
              >
                Standard item {i + 1}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* ScrollView with content inset */}
      <View>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          With Content Inset Adjustments
        </Text>
        <View
          style={{
            height: 150,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: BORDER_RADIUS,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              paddingTop: 32,
              paddingBottom: 32,
              paddingHorizontal: 24,
            }}
            contentInset={{ top: 20, bottom: 20 }}
            contentInsetAdjustmentBehavior='automatic'
          >
            <View
              style={{
                padding: 16,
                backgroundColor: '#ddd6fe',
                borderRadius: BORDER_RADIUS,
                marginBottom: 16,
                borderWidth: 2,
                borderColor: '#8b5cf6',
              }}
            >
              <Text style={{ fontWeight: 'bold', color: '#5b21b6' }}>
                Header with Inset
              </Text>
            </View>

            {Array.from({ length: 6 }, (_, i) => (
              <Text
                key={i}
                style={{
                  padding: 12,
                  marginBottom: 8,
                  backgroundColor: '#fef3c7',
                  borderRadius: BORDER_RADIUS,
                  borderLeftWidth: 3,
                  borderLeftColor: '#f59e0b',
                }}
              >
                Inset adjusted item {i + 1}
              </Text>
            ))}

            <View
              style={{
                padding: 16,
                backgroundColor: '#dcfce7',
                borderRadius: BORDER_RADIUS,
                marginTop: 8,
                borderWidth: 2,
                borderColor: '#22c55e',
              }}
            >
              <Text style={{ fontWeight: 'bold', color: '#15803d' }}>
                Footer with Inset
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

```
---

### searchbar

A customizable search input with debouncing, loading states, and suggestions.

**Installation:**
```bash
npx bna-ui add searchbar
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** icon, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![searchbar preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 10-22-37_1.MP4)

#### Basic Usage

```tsx
import { Searchbar } from '@/components/ui/searchbar';

export default function Example() {
  return (
    <Searchbar />
  );
}```


#### Advanced Examples

##### searchbar-demo

A basic search bar with search functionality

```tsx
import { SearchBar } from '@/components/ui/searchbar';
import React, { useState } from 'react';

export function SearchBarDemo() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <SearchBar
      placeholder='Search for anything...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSearch={handleSearch}
    />
  );
}

```

##### searchbar-loading

Search bar with loading indicator

```tsx
import { SearchBar } from '@/components/ui/searchbar';
import React, { useState } from 'react';

export function SearchBarLoading() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        console.log('Search completed for:', query);
      }, 2000);
    }
  };

  return (
    <SearchBar
      placeholder='Search with loading state...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}

```

##### searchbar-icons

Search bar with custom left and right icons

```tsx
import { Icon } from '@/components/ui/icon';
import { SearchBar } from '@/components/ui/searchbar';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Filter, MapPin, User } from 'lucide-react-native';
import React, { useState } from 'react';

export function SearchBarIcons() {
  const [locationQuery, setLocationQuery] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const icon = useThemeColor({}, 'icon');

  return (
    <View style={{ gap: 16 }}>
      {/* Location search with map pin icon */}
      <SearchBar
        placeholder='Search locations...'
        value={locationQuery}
        onChangeText={setLocationQuery}
        leftIcon={<Icon name={MapPin} size={16} color={icon} />}
        onSearch={(query) => console.log('Location search:', query)}
      />

      {/* User search with custom icons */}
      <SearchBar
        placeholder='Search users...'
        value={userQuery}
        onChangeText={setUserQuery}
        leftIcon={<Icon name={User} size={16} color={icon} />}
        rightIcon={<Icon name={Filter} size={16} color={icon} />}
        showClearButton={false}
        onSearch={(query) => console.log('User search:', query)}
      />
    </View>
  );
}

```

##### searchbar-suggestions

Search bar with dropdown suggestions

```tsx
import { SearchBarWithSuggestions } from '@/components/ui/searchbar';
import React, { useState } from 'react';

export function SearchBarSuggestions() {
  const [searchQuery, setSearchQuery] = useState('');

  const suggestions = [
    'React Native',
    'React Navigation',
    'React Hook Form',
    'Redux Toolkit',
    'Expo Router',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleSuggestionPress = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  return (
    <SearchBarWithSuggestions
      placeholder='Type to see suggestions...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSearch={handleSearch}
      suggestions={suggestions}
      onSuggestionPress={handleSuggestionPress}
      maxSuggestions={8}
    />
  );
}

```

##### searchbar-styled

Search bar with custom styling and colors

```tsx
import { SearchBar } from '@/components/ui/searchbar';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SearchBarStyled() {
  const [query1, setQuery1] = useState('');
  const [query2, setQuery2] = useState('');
  const [query3, setQuery3] = useState('');

  return (
    <View style={{ gap: 16 }}>
      {/* Rounded with gradient-like background */}
      <SearchBar
        placeholder='Rounded search...'
        value={query1}
        onChangeText={setQuery1}
        containerStyle={{
          borderRadius: 25,
          borderWidth: 1.5,
          borderColor: 'green',
        }}
        inputStyle={{
          color: 'green',
          fontWeight: '500',
        }}
      />

      {/* Minimal flat design */}
      <SearchBar
        placeholder='Minimal search...'
        value={query2}
        onChangeText={setQuery2}
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 1,
          borderBottomColor: '#374151',
          borderRadius: 0,
          paddingHorizontal: 0,
        }}
        inputStyle={{
          fontSize: 16,
          fontWeight: '400',
        }}
      />

      {/* Dark theme with custom height */}
      <SearchBar
        placeholder='Custom dark search...'
        value={query3}
        onChangeText={setQuery3}
        containerStyle={{
          backgroundColor: '#1f2937',
          borderRadius: 12,
          height: 56,
          borderWidth: 1,
          borderColor: '#374151',
        }}
        inputStyle={{
          color: '#f9fafb',
          fontSize: 16,
        }}
      />
    </View>
  );
}

```

##### searchbar-no-clear

Search bar without the clear button

```tsx
import { SearchBar } from '@/components/ui/searchbar';
import React, { useState } from 'react';

export function SearchBarNoClear() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Searching without clear button:', query);
  };

  return (
    <SearchBar
      placeholder='Search without clear button...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSearch={handleSearch}
      showClearButton={false}
    />
  );
}

```

##### searchbar-instant

Search bar with no debounce for instant search

```tsx
import { SearchBar } from '@/components/ui/searchbar';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SearchBarInstant() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const mockData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
  ];

  const handleInstantSearch = (query: string) => {
    if (query.trim()) {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <SearchBar
        placeholder='Instant search (no debounce)...'
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSearch={handleInstantSearch}
        debounceMs={0} // No debounce for instant search
      />

      {searchResults.length > 0 && (
        <View style={{ gap: 8 }}>
          <Text variant='caption' style={{ opacity: 0.7 }}>
            Found {searchResults.length} results:
          </Text>
          {searchResults.map((result, index) => (
            <Text key={index} style={{ paddingLeft: 16 }}>
              • {result}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

```
---

### separator

Visually or semantically separates content.

**Installation:**
```bash
npx bna-ui add separator
```

**Registry Dependencies:** view

**Required Hooks:** useThemeColor

**Preview:**

![separator preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5781.PNG)

#### Basic Usage

```tsx
import { Separator } from '@/components/ui/separator';

export default function Example() {
  return (
    <Separator />
  );
}```


#### Advanced Examples

##### separator-demo

A basic horizontal separator

```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorDemo() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='body'>Above separator</Text>
      <Separator style={{ marginVertical: 16 }} />
      <Text variant='body'>Below separator</Text>
    </View>
  );
}

```

##### separator-vertical

A vertical separator for inline content

```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorVertical() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        height: 60,
      }}
    >
      <Text variant='body'>Left content</Text>
      <Separator orientation='vertical' style={{ marginHorizontal: 16 }} />
      <Text variant='body'>Right content</Text>
    </View>
  );
}

```

##### separator-thickness

Separators with different thickness values

```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorThickness() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='caption' style={{ marginBottom: 8 }}>
        Thin (1px)
      </Text>
      <Separator style={{ height: 1, marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Medium (2px)
      </Text>
      <Separator style={{ height: 2, marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Thick (4px)
      </Text>
      <Separator style={{ height: 4, marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Extra thick (8px)
      </Text>
      <Separator style={{ height: 8 }} />
    </View>
  );
}

```

##### separator-colors

Separators with custom colors and opacity

```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorColors() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='caption' style={{ marginBottom: 8 }}>
        Default
      </Text>
      <Separator style={{ marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Red
      </Text>
      <Separator style={{ backgroundColor: '#ef4444', marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Blue
      </Text>
      <Separator style={{ backgroundColor: '#3b82f6', marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Green
      </Text>
      <Separator style={{ backgroundColor: '#10b981', marginBottom: 16 }} />

      <Text variant='caption' style={{ marginBottom: 8 }}>
        Semi-transparent
      </Text>
      <Separator style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
    </View>
  );
}

```

##### separator-spacing

Separators with different margin and padding

```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorSpacing() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='body'>Tight spacing</Text>
      <Separator style={{ marginVertical: 4 }} />
      <Text variant='body'>Content with minimal spacing</Text>

      <Separator style={{ marginVertical: 12 }} />

      <Text variant='body'>Normal spacing</Text>
      <Separator style={{ marginVertical: 16 }} />
      <Text variant='body'>Standard content spacing</Text>

      <Separator style={{ marginVertical: 12 }} />

      <Text variant='body'>Loose spacing</Text>
      <Separator style={{ marginVertical: 24 }} />
      <Text variant='body'>Generous content spacing</Text>
    </View>
  );
}

```
---

### share

A button component for sharing content across platforms with native share functionality.

**Installation:**
```bash
npx bna-ui add share
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** button, text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![share preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 10-26-52_1.MP4)

#### Basic Usage

```tsx
import { Share } from '@/components/ui/share';

export default function Example() {
  return (
    <Share />
  );
}```


#### Advanced Examples

##### share-demo

A basic share button with text and URL sharing

```tsx
import { ShareButton } from '@/components/ui/share';
import React from 'react';

export function ShareDemo() {
  return (
    <ShareButton
      content={{
        message: 'Check out this amazing app!',
        url: 'https://example.com',
        title: 'Amazing App',
      }}
      onShareSuccess={(activityType) => {
        console.log('Shared successfully:', activityType);
      }}
      onShareError={(error) => {
        console.error('Share failed:', error);
      }}
    >
      Share
    </ShareButton>
  );
}

```

##### share-variants

Share buttons with different visual variants

```tsx
import { ShareButton } from '@/components/ui/share';
import { View } from '@/components/ui/view';
import React from 'react';

export function ShareVariants() {
  const shareContent = {
    message: 'Check out this amazing content!',
    url: 'https://example.com',
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <ShareButton content={shareContent} variant='default'>
        Default
      </ShareButton>

      <ShareButton content={shareContent} variant='secondary'>
        Secondary
      </ShareButton>

      <ShareButton content={shareContent} variant='outline'>
        Outline
      </ShareButton>

      <ShareButton content={shareContent} variant='ghost'>
        Ghost
      </ShareButton>

      <ShareButton content={shareContent} variant='link'>
        Link
      </ShareButton>

      <ShareButton content={shareContent} variant='destructive'>
        Destructive
      </ShareButton>
    </View>
  );
}

```

##### share-sizes

Share buttons in different sizes

```tsx
import { ShareButton } from '@/components/ui/share';
import { View } from '@/components/ui/view';
import React from 'react';

export function ShareSizes() {
  const shareContent = {
    message: 'Check out this amazing content!',
    url: 'https://example.com',
  };

  return (
    <View style={{ gap: 12, alignItems: 'center' }}>
      <ShareButton content={shareContent} size='sm'>
        Small
      </ShareButton>

      <ShareButton content={shareContent} size='default'>
        Default
      </ShareButton>

      <ShareButton content={shareContent} size='lg'>
        Large
      </ShareButton>

      <ShareButton content={shareContent} size='icon' iconSize={20} />
    </View>
  );
}

```

##### share-url-only

Share button for sharing URLs without additional text

```tsx
import { ShareButton } from '@/components/ui/share';
import { View } from '@/components/ui/view';
import React from 'react';

export function ShareUrlOnly() {
  return (
    <View style={{ gap: 12 }}>
      <ShareButton content={{ url: 'https://github.com' }} variant='outline'>
        Share GitHub
      </ShareButton>

      <ShareButton
        content={{ url: 'https://reactnative.dev' }}
        variant='secondary'
      >
        Share React Native Docs
      </ShareButton>

      <ShareButton content={{ url: 'https://expo.dev' }} variant='ghost'>
        Share Expo
      </ShareButton>
    </View>
  );
}

```

##### share-custom-content

Share button with custom title, subject, and content

```tsx
import { ShareButton } from '@/components/ui/share';
import { View } from '@/components/ui/view';
import React from 'react';

export function ShareCustomContent() {
  return (
    <View style={{ gap: 12 }}>
      {/* Rich content with title and subject */}
      <ShareButton
        content={{
          message:
            'I found this amazing article about React Native development. You should definitely check it out!',
          url: 'https://reactnative.dev/blog',
          title: 'React Native Blog',
          subject: 'Great React Native Article',
        }}
        options={{
          dialogTitle: 'Share this article',
        }}
      >
        Share Article
      </ShareButton>

      {/* App promotion */}
      <ShareButton
        content={{
          message:
            '🚀 Just discovered this incredible mobile app! The UI is amazing and it works perfectly on both iOS and Android. Download it now!',
          url: 'https://apps.apple.com/app/example',
          title: 'Amazing Mobile App',
          subject: 'You need to try this app!',
        }}
        variant='secondary'
      >
        Share App
      </ShareButton>

      {/* Event invitation */}
      <ShareButton
        content={{
          message:
            "🎉 You're invited to our tech meetup! Join us for an evening of networking, learning, and great discussions about mobile development.",
          url: 'https://meetup.com/event/123',
          title: 'Tech Meetup Invitation',
          subject: 'Join us at the Tech Meetup!',
        }}
        variant='outline'
      >
        Share Event
      </ShareButton>
    </View>
  );
}

```

##### share-icon-only

Compact share button with icon only

```tsx
import { ShareButton } from '@/components/ui/share';
import { View } from '@/components/ui/view';
import React from 'react';

export function ShareIconOnly() {
  const shareContent = {
    message: 'Check out this amazing content!',
    url: 'https://example.com',
  };

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <ShareButton
        content={shareContent}
        size='icon'
        variant='default'
        iconSize={18}
      />

      <ShareButton
        content={shareContent}
        size='icon'
        variant='secondary'
        iconSize={18}
      />

      <ShareButton
        content={shareContent}
        size='icon'
        variant='outline'
        iconSize={18}
      />

      <ShareButton
        content={shareContent}
        size='icon'
        variant='ghost'
        iconSize={20}
      />
    </View>
  );
}

```

##### share-callbacks

Share button with success, error, and dismiss callbacks

```tsx
import { ShareButton } from '@/components/ui/share';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ShareCallbacks() {
  const [status, setStatus] = useState<string>('Ready to share');
  const [isLoading, setIsLoading] = useState(false);

  const handleShareStart = () => {
    setStatus('Starting share...');
    setIsLoading(true);
  };

  const handleShareSuccess = (activityType?: string | null) => {
    setStatus(
      `Shared successfully${activityType ? ` via ${activityType}` : ''}!`
    );
    setIsLoading(false);

    // Reset status after 3 seconds
    setTimeout(() => setStatus('Ready to share'), 3000);
  };

  const handleShareError = (error: Error) => {
    setStatus(`Share failed: ${error.message}`);
    setIsLoading(false);

    // Reset status after 3 seconds
    setTimeout(() => setStatus('Ready to share'), 3000);
  };

  const handleShareDismiss = () => {
    setStatus('Share cancelled');
    setIsLoading(false);

    // Reset status after 2 seconds
    setTimeout(() => setStatus('Ready to share'), 2000);
  };

  return (
    <View style={{ gap: 16 }}>
      <Text style={{ fontWeight: '500' }}>Status: {status}</Text>

      <ShareButton
        content={{
          message: 'Check out this awesome React Native component library!',
          url: 'https://github.com/example/ui-library',
          title: 'UI Component Library',
        }}
        loading={isLoading}
        onShareStart={handleShareStart}
        onShareSuccess={handleShareSuccess}
        onShareError={handleShareError}
        onShareDismiss={handleShareDismiss}
      >
        Share with Callbacks
      </ShareButton>
    </View>
  );
}

```

##### share-hook

Using the useShare hook for programmatic sharing

```tsx
import { Button } from '@/components/ui/button';
import { useShare } from '@/components/ui/share';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ShareHook() {
  const { shareText, shareUrl, shareContent } = useShare();
  const [status, setStatus] = useState<string>('Choose a sharing method');

  const handleShareText = async () => {
    try {
      setStatus('Sharing text...');
      await shareText(
        'Hello from the useShare hook! This is just a plain text message.'
      );
      setStatus('Text shared successfully!');
    } catch (error) {
      setStatus(`Failed to share text: ${(error as Error).message}`);
    }
  };

  const handleShareUrl = async () => {
    try {
      setStatus('Sharing URL...');
      await shareUrl(
        'https://reactnative.dev',
        'Check out the official React Native documentation!'
      );
      setStatus('URL shared successfully!');
    } catch (error) {
      setStatus(`Failed to share URL: ${(error as Error).message}`);
    }
  };

  const handleShareContent = async () => {
    try {
      setStatus('Sharing content...');
      await shareContent({
        message:
          '🚀 Just built an amazing React Native app with this component library!',
        url: 'https://github.com/example/ui-library',
        title: 'Amazing UI Library',
        subject: 'Check out this UI library',
      });
      setStatus('Content shared successfully!');
    } catch (error) {
      setStatus(`Failed to share content: ${(error as Error).message}`);
    }
  };

  return (
    <View style={{ gap: 16 }}>
      <Text style={{ fontWeight: '500', textAlign: 'center' }}>{status}</Text>

      <View style={{ gap: 8 }}>
        <Button onPress={handleShareText} variant='outline'>
          Share Text Only
        </Button>

        <Button onPress={handleShareUrl} variant='secondary'>
          Share URL with Message
        </Button>

        <Button onPress={handleShareContent} variant='default'>
          Share Rich Content
        </Button>
      </View>
    </View>
  );
}

```
---

### sheet

A modal component that slides in from the side of the screen, commonly used for navigation menus, filters, and detail views.

**Installation:**
```bash
npx bna-ui add sheet
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** button, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![sheet preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 10-31-38_1.MP4)

#### Basic Usage

```tsx
import { Sheet } from '@/components/ui/sheet';

export default function Example() {
  return (
    <Sheet />
  );
}```


#### Advanced Examples

##### sheet-demo

A basic sheet that slides in from the right side

```tsx
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to the Sheet</SheetTitle>
          <SheetDescription>
            This is a basic sheet component that slides in from the right side
            of the screen.
          </SheetDescription>
        </SheetHeader>
        <View style={{ padding: 24, gap: 16 }}>
          <Text>
            This sheet can contain any content you need. It's perfect for
            navigation menus, forms, settings, or detailed information.
          </Text>
          <Button onPress={() => setOpen(false)}>Close Sheet</Button>
        </View>
      </SheetContent>
    </Sheet>
  );
}

```

##### sheet-left

A sheet that slides in from the left side

```tsx
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SheetLeft() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} side='left'>
      <SheetTrigger>
        <Button>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Left Side Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left side of the screen.
          </SheetDescription>
        </SheetHeader>
        <View style={{ padding: 24, gap: 16 }}>
          <Text>
            Left-side sheets are commonly used for navigation menus and primary
            actions that need to be easily accessible.
          </Text>
          <Button onPress={() => setOpen(false)}>Close Sheet</Button>
        </View>
      </SheetContent>
    </Sheet>
  );
}

```

##### sheet-navigation

A sheet that slides in from the navigation side

```tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Bell, Home, Mail, Search, Settings, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function SheetNavigation() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const textColor = useThemeColor({}, 'text');
  const mutedColor = useThemeColor({}, 'textMuted');
  const borderColor = useThemeColor({}, 'border');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemPress = (itemId: string) => {
    setActiveItem(itemId);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} side='left'>
      <SheetTrigger>
        <Button>Open Navigation</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate to different sections of the app.
          </SheetDescription>
        </SheetHeader>
        <View style={styles.navigationContainer}>
          {navigationItems.map((item) => {
            const name = item.icon;
            const isActive = activeItem === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.navigationItem,
                  {
                    backgroundColor: isActive
                      ? `${textColor}10`
                      : 'transparent',
                    borderColor,
                  },
                ]}
                onPress={() => handleItemPress(item.id)}
              >
                <Icon
                  name={name}
                  size={20}
                  color={isActive ? textColor : mutedColor}
                />
                <Text
                  style={[
                    styles.navigationText,
                    { color: isActive ? textColor : mutedColor },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SheetContent>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    padding: 16,
    gap: 8,
  },
  navigationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  navigationText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

```

##### sheet-form

A sheet that slides in from the form side

```tsx
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';

export function SheetForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const mutedColor = useThemeColor({}, 'textMuted');

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Success', 'Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
    setOpen(false);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button>Open Contact Form</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Us</SheetTitle>
          <SheetDescription>
            Fill out the form below and we'll get back to you soon.
          </SheetDescription>
        </SheetHeader>
        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={[styles.label, { color: textColor }]}>Name</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor,
                  backgroundColor,
                  color: textColor,
                },
              ]}
              value={formData.name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, name: text }))
              }
              placeholder='Enter your name'
              placeholderTextColor={mutedColor}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={[styles.label, { color: textColor }]}>Email</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor,
                  backgroundColor,
                  color: textColor,
                },
              ]}
              value={formData.email}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, email: text }))
              }
              placeholder='Enter your email'
              placeholderTextColor={mutedColor}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={[styles.label, { color: textColor }]}>Message</Text>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                {
                  borderColor,
                  backgroundColor,
                  color: textColor,
                },
              ]}
              value={formData.message}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, message: text }))
              }
              placeholder='Enter your message'
              placeholderTextColor={mutedColor}
              multiline
              numberOfLines={4}
              textAlignVertical='top'
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleSubmit}>
              Submit
            </Button>
            <Button
              variant='outline'
              style={styles.button}
              onPress={handleReset}
            >
              Reset
            </Button>
          </View>
        </View>
      </SheetContent>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 24,
    gap: 20,
  },
  fieldContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  button: {
    flex: 1,
  },
});

```

##### sheet-filter

A sheet that slides in from the filter side

```tsx
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Filter } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function SheetFilter() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    rating: 'all',
    brand: 'all',
  });

  const textColor = useThemeColor({}, 'text');
  const mutedColor = useThemeColor({}, 'textMuted');
  const borderColor = useThemeColor({}, 'border');

  const filterOptions = {
    category: [
      { value: 'all', label: 'All Categories' },
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'books', label: 'Books' },
      { value: 'home', label: 'Home & Garden' },
    ],
    price: [
      { value: 'all', label: 'Any Price' },
      { value: 'under-25', label: 'Under $25' },
      { value: '25-50', label: '$25 - $50' },
      { value: '50-100', label: '$50 - $100' },
      { value: 'over-100', label: 'Over $100' },
    ],
    rating: [
      { value: 'all', label: 'Any Rating' },
      { value: '4-plus', label: '4+ Stars' },
      { value: '3-plus', label: '3+ Stars' },
      { value: '2-plus', label: '2+ Stars' },
    ],
    brand: [
      { value: 'all', label: 'All Brands' },
      { value: 'apple', label: 'Apple' },
      { value: 'samsung', label: 'Samsung' },
      { value: 'nike', label: 'Nike' },
      { value: 'adidas', label: 'Adidas' },
    ],
  };

  const handleFilterChange = (
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleApplyFilters = () => {
    // Apply filters logic here
    console.log('Applied filters:', filters);
    setOpen(false);
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      price: 'all',
      rating: 'all',
      brand: 'all',
    });
  };

  const renderFilterSection = (
    title: string,
    filterType: keyof typeof filters,
    options: { value: string; label: string }[]
  ) => (
    <View style={styles.filterSection}>
      <Text style={[styles.sectionTitle, { color: textColor }]}>{title}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              {
                borderColor,
                backgroundColor:
                  filters[filterType] === option.value
                    ? `${textColor}10`
                    : 'transparent',
              },
            ]}
            onPress={() => handleFilterChange(filterType, option.value)}
          >
            <Text
              style={[
                styles.optionText,
                {
                  color:
                    filters[filterType] === option.value
                      ? textColor
                      : mutedColor,
                },
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button icon={Filter}>Filter</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>
            Refine your search results using the filters below.
          </SheetDescription>
        </SheetHeader>
        <View style={styles.filterContainer}>
          {renderFilterSection('Category', 'category', filterOptions.category)}
          {renderFilterSection('Price Range', 'price', filterOptions.price)}
          {renderFilterSection('Rating', 'rating', filterOptions.rating)}
          {renderFilterSection('Brand', 'brand', filterOptions.brand)}

          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleApplyFilters}>
              Apply Filters
            </Button>
            <Button
              variant='outline'
              style={styles.button}
              onPress={handleClearFilters}
            >
              Clear All
            </Button>
          </View>
        </View>
      </SheetContent>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    padding: 16,
    gap: 24,
  },
  filterSection: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  button: {
    flex: 1,
  },
});

```
---

### skeleton

A placeholder component to show a loading state while content is being fetched.

**Installation:**
```bash
npx bna-ui add skeleton
```

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![skeleton preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 10-39-47_1.MP4)

#### Basic Usage

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function Example() {
  return (
    <Skeleton />
  );
}```


#### Advanced Examples

##### skeleton-demo

A basic skeleton loader with pulsing animation

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export function SkeletonDemo() {
  return <Skeleton width={200} height={20} />;
}

```

##### skeleton-sizes

Skeletons in various sizes and dimensions

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/ui/view';
import React from 'react';

export function SkeletonSizes() {
  return (
    <View style={{ gap: 12 }}>
      <Skeleton width={100} height={16} />
      <Skeleton width={200} height={20} />
      <Skeleton width={300} height={24} />
      <Skeleton width='100%' height={32} />
    </View>
  );
}

```

##### skeleton-card

Skeleton placeholders arranged in a card layout

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function SkeletonCard() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        padding: 16,
        borderRadius: BORDER_RADIUS,
        backgroundColor: card,
        gap: 12,
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Skeleton width={40} height={40} style={{ borderRadius: 20 }} />
        <View style={{ flex: 1, gap: 4 }}>
          <Skeleton width='60%' height={16} />
          <Skeleton width='40%' height={12} />
        </View>
      </View>

      {/* Content */}
      <Skeleton width='100%' height={200} variant='rounded' />

      {/* Footer */}
      <View style={{ gap: 8 }}>
        <Skeleton width='100%' height={16} />
        <Skeleton width='80%' height={16} />
        <Skeleton width='60%' height={16} />
      </View>
    </View>
  );
}

```

##### skeleton-profile

Skeleton layout mimicking a user profile

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function SkeletonProfile() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        alignItems: 'center',
        gap: 16,
        padding: 16,
        borderRadius: BORDER_RADIUS,
        backgroundColor: card,
      }}
    >
      {/* Profile Picture */}
      <Skeleton width={80} height={80} style={{ borderRadius: 40 }} />

      {/* Name and Title */}
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Skeleton width={150} height={20} />
        <Skeleton width={100} height={16} />
      </View>

      {/* Stats */}
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Skeleton width={30} height={18} />
          <Skeleton width={50} height={14} />
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Skeleton width={30} height={18} />
          <Skeleton width={50} height={14} />
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Skeleton width={30} height={18} />
          <Skeleton width={50} height={14} />
        </View>
      </View>

      {/* Bio */}
      <View style={{ gap: 8, width: '100%' }}>
        <Skeleton width='100%' height={16} />
        <Skeleton width='90%' height={16} />
        <Skeleton width='70%' height={16} />
      </View>
    </View>
  );
}

```

##### skeleton-list

Multiple skeleton items arranged in a list

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function SkeletonList() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        gap: 16,
        padding: 16,
        borderRadius: BORDER_RADIUS,
        backgroundColor: card,
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <View
          key={i}
          style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}
        >
          <Skeleton width={50} height={50} style={{ borderRadius: 25 }} />
          <View style={{ flex: 1, gap: 6 }}>
            <Skeleton width='70%' height={16} />
            <Skeleton width='50%' height={14} />
            <Skeleton width='30%' height={12} />
          </View>
        </View>
      ))}
    </View>
  );
}

```

##### skeleton-shapes

Skeletons with custom shapes and styling

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function SkeletonShapes() {
  const card = useThemeColor({}, 'card');

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        padding: 16,
        borderRadius: BORDER_RADIUS,
        backgroundColor: card,
      }}
    >
      {/* Circle */}
      <Skeleton width={60} height={60} style={{ borderRadius: 30 }} />

      {/* Square */}
      <Skeleton width={60} height={60} style={{ borderRadius: 4 }} />

      {/* Rounded Rectangle */}
      <Skeleton width={120} height={60} style={{ borderRadius: 12 }} />

      {/* Pill */}
      <Skeleton width={100} height={30} style={{ borderRadius: 15 }} />

      {/* Custom styled */}
      <Skeleton
        width={80}
        height={80}
        style={{
          borderRadius: 20,
          transform: [{ rotate: '45deg' }],
        }}
      />
    </View>
  );
}

```
---

### spinner

A loading indicator component with multiple variants and customization options.

**Installation:**
```bash
npx bna-ui add spinner
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Types

```typescript
export type SpinnerVariant = 'default' | 'cirlce' | 'dots' | 'pulse' | 'bars'
```

**Preview:**

![spinner preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 10-46-27_1.MP4)

#### Basic Usage

```tsx
import { Spinner } from '@/components/ui/spinner';

export default function Example() {
  return (
    <Spinner />
  );
}```


#### Advanced Examples

##### spinner-demo

A basic spinner with default styling

```tsx
import { Spinner } from '@/components/ui/spinner';
import React from 'react';

export function SpinnerDemo() {
  return <Spinner size='default' variant='default' />;
}

```

##### spinner-variants

Different spinner variants: default, circle, dots, pulse, and bars

```tsx
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerVariants() {
  const variants = [
    { variant: 'default' as const, label: 'Default' },
    { variant: 'cirlce' as const, label: 'Circle' },
    { variant: 'dots' as const, label: 'Dots' },
    { variant: 'pulse' as const, label: 'Pulse' },
    { variant: 'bars' as const, label: 'Bars' },
  ];

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 24 }}>
      {variants.map(({ variant, label }) => (
        <View key={variant} style={{ alignItems: 'center', gap: 8 }}>
          <Spinner variant={variant} size='default' />
          <Text variant='caption' style={{ textAlign: 'center' }}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### spinner-sizes

Spinners in different sizes: sm, default, lg, and icon

```tsx
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerSizes() {
  const sizes = [
    { size: 'sm' as const, label: 'Small' },
    { size: 'default' as const, label: 'Default' },
    { size: 'lg' as const, label: 'Large' },
    { size: 'icon' as const, label: 'Icon' },
  ];

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
      {sizes.map(({ size, label }) => (
        <View key={size} style={{ alignItems: 'center', gap: 8 }}>
          <Spinner size={size} variant='cirlce' />
          <Text variant='caption' style={{ textAlign: 'center' }}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### spinner-labels

Spinners with custom loading labels

```tsx
import { Spinner } from '@/components/ui/spinner';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerLabels() {
  return (
    <View style={{ gap: 24 }}>
      <Spinner size='default' variant='default' showLabel />
      <Spinner size='default' variant='dots' label='Processing...' />
      <Spinner size='default' variant='pulse' label='Uploading files...' />
      <Spinner size='lg' variant='cirlce' label='Please wait' />
    </View>
  );
}

```

##### spinner-speeds

Spinners with different animation speeds: slow, normal, and fast

```tsx
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerSpeeds() {
  const speeds = [
    { speed: 'slow' as const, label: 'Slow' },
    { speed: 'normal' as const, label: 'Normal' },
    { speed: 'fast' as const, label: 'Fast' },
  ];

  return (
    <View style={{ flexDirection: 'row', gap: 32 }}>
      {speeds.map(({ speed, label }) => (
        <View key={speed} style={{ alignItems: 'center', gap: 8 }}>
          <Spinner variant='cirlce' size='default' speed={speed} />
          <Text variant='caption' style={{ textAlign: 'center' }}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### spinner-colors

Spinners with custom colors and styling

```tsx
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerColors() {
  const colors = [
    { color: '#3b82f6', label: 'Blue', variant: 'default' as const },
    { color: '#10b981', label: 'Green', variant: 'dots' as const },
    { color: '#f59e0b', label: 'Orange', variant: 'pulse' as const },
    { color: '#ef4444', label: 'Red', variant: 'bars' as const },
    { color: '#8b5cf6', label: 'Purple', variant: 'cirlce' as const },
  ];

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 24 }}>
      {colors.map(({ color, label, variant }) => (
        <View key={color} style={{ alignItems: 'center', gap: 8 }}>
          <Spinner variant={variant} size='default' color={color} />
          <Text variant='caption' style={{ textAlign: 'center' }}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

```

##### spinner-overlay

Full-screen loading overlay with backdrop

```tsx
import { Button } from '@/components/ui/button';
import { LoadingOverlay } from '@/components/ui/spinner';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SpinnerOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverlay = () => {
    setShowOverlay(true);
    // Auto hide after 3 seconds for demo
    setTimeout(() => setShowOverlay(false), 3000);
  };

  return (
    <View style={{ gap: 16 }}>
      <Button onPress={handleShowOverlay} disabled={showOverlay}>
        Show Loading Overlay
      </Button>

      <LoadingOverlay
        visible={showOverlay}
        size='lg'
        variant='cirlce'
        label='Loading content...'
        backdrop={true}
        backdropOpacity={0.7}
      />
    </View>
  );
}

```

##### spinner-inline

Small spinners for inline usage in buttons or text

```tsx
import { InlineLoader } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SpinnerInline() {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text>Loading data</Text>
        <InlineLoader size='sm' variant='default' />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text>Processing</Text>
        <InlineLoader size='sm' variant='dots' />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <InlineLoader size='sm' variant='pulse' color='#10b981' />
        <Text>Syncing...</Text>
      </View>
    </View>
  );
}

```
---

### stacked-area-chart

A customizable stacked area chart component with smooth animations and gradient fills for visualizing multiple data series over time.

**Installation:**
```bash
npx bna-ui add stacked-area-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![stacked-area-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 20.MOV)

#### Basic Usage

```tsx
import { Stacked-area-chart } from '@/components/ui/stacked-area-chart';

export default function Example() {
  return (
    <Stacked-area-chart />
  );
}```


#### Advanced Examples

##### stacked-area-chart-demo

A stacked area chart with smooth animations and gradient fills

```tsx
import { StackedAreaChart } from '@/components/charts/stacked-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 1, y: [20, 30, 25], label: 'Jan' },
  { x: 2, y: [25, 35, 30], label: 'Feb' },
  { x: 3, y: [30, 40, 35], label: 'Mar' },
  { x: 4, y: [35, 45, 40], label: 'Apr' },
  { x: 5, y: [40, 50, 45], label: 'May' },
  { x: 6, y: [45, 55, 50], label: 'Jun' },
];

const categories = ['Product A', 'Product B', 'Product C'];

export function StackedAreaChartDemo() {
  return (
    <ChartContainer
      title='Monthly Revenue by Product'
      description='Revenue breakdown showing contribution of each product line'
    >
      <StackedAreaChart
        data={sampleData}
        categories={categories}
        config={{
          height: 300,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-area-chart-sample

A sample stacked area chart with revenue data

```tsx
import { StackedAreaChart } from '@/components/charts/stacked-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 1, y: [45, 55, 35, 25], label: 'Q1' },
  { x: 2, y: [50, 60, 40, 30], label: 'Q2' },
  { x: 3, y: [55, 65, 45, 35], label: 'Q3' },
  { x: 4, y: [60, 70, 50, 40], label: 'Q4' },
  { x: 5, y: [65, 75, 55, 45], label: 'Q1' },
  { x: 6, y: [70, 80, 60, 50], label: 'Q2' },
];

const categories = ['Direct Sales', 'Online', 'Retail', 'Partner'];

export function StackedAreaChartSample() {
  return (
    <ChartContainer
      title='Sales Channel Performance'
      description='Quarterly performance across different sales channels'
    >
      <StackedAreaChart
        data={sampleData}
        categories={categories}
        colors={['#8884d8', '#82ca9d', '#ffc658', '#ff7300']}
        config={{
          height: 280,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-area-chart-styled

A customized stacked area chart with custom colors and styling

```tsx
import { StackedAreaChart } from '@/components/charts/stacked-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 1, y: [120, 80, 60], label: 'Week 1' },
  { x: 2, y: [140, 90, 70], label: 'Week 2' },
  { x: 3, y: [160, 100, 80], label: 'Week 3' },
  { x: 4, y: [180, 110, 90], label: 'Week 4' },
  { x: 5, y: [200, 120, 100], label: 'Week 5' },
  { x: 6, y: [220, 130, 110], label: 'Week 6' },
  { x: 7, y: [240, 140, 120], label: 'Week 7' },
  { x: 8, y: [260, 150, 130], label: 'Week 8' },
];

const categories = ['Premium', 'Standard', 'Basic'];

export function StackedAreaChartStyled() {
  return (
    <ChartContainer
      title='Subscription Tiers Growth'
      description='Weekly growth in subscription tiers with custom styling'
    >
      <StackedAreaChart
        data={sampleData}
        categories={categories}
        colors={['#6366f1', '#8b5cf6', '#ec4899']}
        config={{
          height: 320,
          padding: 30,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1500,
        }}
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: 12,
          padding: 16,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-area-chart-large

A stacked area chart with large dataset

```tsx
import { StackedAreaChart } from '@/components/charts/stacked-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const generateLargeDataset = () => {
  const data = [];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  for (let i = 0; i < 12; i++) {
    data.push({
      x: i + 1,
      y: [
        Math.floor(Math.random() * 50) + 100, // Desktop
        Math.floor(Math.random() * 80) + 120, // Mobile
        Math.floor(Math.random() * 40) + 60, // Tablet
        Math.floor(Math.random() * 30) + 40, // TV
        Math.floor(Math.random() * 20) + 20, // Watch
      ],
      label: months[i],
    });
  }

  return data;
};

const sampleData = generateLargeDataset();
const categories = ['Desktop', 'Mobile', 'Tablet', 'TV', 'Watch'];

export function StackedAreaChartLarge() {
  return (
    <ChartContainer
      title='Device Usage Analytics'
      description='Monthly active users across different device types'
    >
      <StackedAreaChart
        data={sampleData}
        categories={categories}
        colors={['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']}
        config={{
          height: 350,
          padding: 25,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 2000,
        }}
      />
    </ChartContainer>
  );
}

```
---

### stacked-bar-chart

A customizable stacked bar chart component with smooth animations, support for both horizontal and vertical layouts, and flexible styling.

**Installation:**
```bash
npx bna-ui add stacked-bar-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![stacked-bar-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-12-2025 28.MOV)

#### Basic Usage

```tsx
import { Stacked-bar-chart } from '@/components/ui/stacked-bar-chart';

export default function Example() {
  return (
    <Stacked-bar-chart />
  );
}```


#### Advanced Examples

##### stacked-bar-chart-demo

A stacked bar chart with smooth animations

```tsx
import { StackedBarChart } from '@/components/charts/stacked-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Q1', values: [120, 98, 86] },
  { label: 'Q2', values: [140, 110, 95] },
  { label: 'Q3', values: [160, 130, 105] },
  { label: 'Q4', values: [180, 150, 115] },
];

const categories = ['Sales', 'Marketing', 'Support'];

export function StackedBarChartDemo() {
  return (
    <ChartContainer
      title='Quarterly Performance'
      description='Revenue breakdown by department across quarters'
    >
      <StackedBarChart
        data={sampleData}
        categories={categories}
        config={{
          height: 300,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-bar-chart-horizontal

A horizontal stacked bar chart

```tsx
import { StackedBarChart } from '@/components/charts/stacked-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Product A', values: [45, 30, 25] },
  { label: 'Product B', values: [60, 40, 35] },
  { label: 'Product C', values: [55, 35, 30] },
  { label: 'Product D', values: [70, 45, 40] },
  { label: 'Product E', values: [50, 32, 28] },
];

const categories = ['Direct Sales', 'Online', 'Retail'];

export function StackedBarChartHorizontal() {
  return (
    <ChartContainer
      title='Product Sales by Channel'
      description='Sales distribution across different channels'
    >
      <StackedBarChart
        data={sampleData}
        categories={categories}
        horizontal={true}
        config={{
          height: 350,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-bar-chart-styled

A customized stacked bar chart with custom colors and styling

```tsx
import { StackedBarChart } from '@/components/charts/stacked-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Mobile', values: [85, 45, 30, 20] },
  { label: 'Desktop', values: [120, 80, 50, 35] },
  { label: 'Tablet', values: [65, 35, 25, 15] },
  { label: 'Smart TV', values: [40, 20, 15, 10] },
];

const categories = ['Chrome', 'Safari', 'Firefox', 'Edge'];

// Custom colors for different browsers
const customColors = [
  '#4285F4', // Chrome blue
  '#FF9500', // Safari orange
  '#FF6611', // Firefox orange
  '#0078D4', // Edge blue
];

export function StackedBarChartStyled() {
  return (
    <ChartContainer
      title='Browser Usage by Device'
      description='Browser market share across different device types'
    >
      <StackedBarChart
        data={sampleData}
        categories={categories}
        colors={customColors}
        config={{
          height: 320,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1500,
          padding: 30,
        }}
      />
    </ChartContainer>
  );
}

```

##### stacked-bar-chart-large

A stacked bar chart with large dataset

```tsx
import { StackedBarChart } from '@/components/charts/stacked-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Jan', values: [220, 180, 140, 100, 80] },
  { label: 'Feb', values: [240, 190, 150, 110, 85] },
  { label: 'Mar', values: [260, 200, 160, 120, 90] },
  { label: 'Apr', values: [280, 210, 170, 130, 95] },
  { label: 'May', values: [300, 220, 180, 140, 100] },
  { label: 'Jun', values: [320, 230, 190, 150, 105] },
  { label: 'Jul', values: [340, 240, 200, 160, 110] },
  { label: 'Aug', values: [360, 250, 210, 170, 115] },
  { label: 'Sep', values: [380, 260, 220, 180, 120] },
  { label: 'Oct', values: [400, 270, 230, 190, 125] },
  { label: 'Nov', values: [420, 280, 240, 200, 130] },
  { label: 'Dec', values: [440, 290, 250, 210, 135] },
];

const categories = ['Enterprise', 'Professional', 'Standard', 'Basic', 'Free'];

export function StackedBarChartLarge() {
  return (
    <ChartContainer
      title='Annual Subscription Revenue'
      description='Monthly recurring revenue breakdown by subscription tier'
    >
      <StackedBarChart
        data={sampleData}
        categories={categories}
        config={{
          height: 400,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 2000,
          padding: 25,
        }}
      />
    </ChartContainer>
  );
}

```
---

### switch

A control that allows the user to toggle between checked and not checked states.

**Installation:**
```bash
npx bna-ui add switch
```

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Preview:**

![switch preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 11-02-14_1.MP4)

#### Basic Usage

```tsx
import { Switch } from '@/components/ui/switch';

export default function Example() {
  return (
    <Switch />
  );
}```


#### Advanced Examples

##### switch-demo

A basic switch with label

```tsx
import { Switch } from '@/components/ui/switch';
import React, { useState } from 'react';

export function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      label='Enable notifications'
      value={isEnabled}
      onValueChange={setIsEnabled}
    />
  );
}

```

##### switch-simple

A switch without label text

```tsx
import { Switch } from '@/components/ui/switch';
import React, { useState } from 'react';

export function SwitchSimple() {
  const [isEnabled, setIsEnabled] = useState(false);

  return <Switch value={isEnabled} onValueChange={setIsEnabled} />;
}

```

##### switch-error

Switch with error message and styling

```tsx
import { Switch } from '@/components/ui/switch';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SwitchError() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={{ gap: 46 }}>
      <Switch
        label='Terms and conditions'
        value={isEnabled}
        onValueChange={setIsEnabled}
      />

      <Switch
        label='Privacy policy'
        value={false}
        onValueChange={() => {}}
        error='You must accept the privacy policy'
      />
    </View>
  );
}

```

##### switch-disabled

Switches in disabled state

```tsx
import { Switch } from '@/components/ui/switch';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SwitchDisabled() {
  const [value, setValue] = useState(false);

  return (
    <View style={{ gap: 12 }}>
      <Switch value={value} label='Disabled (Off)' onValueChange={setValue} />

      <Switch
        label='Disabled (On)'
        value={true}
        onValueChange={() => {}}
        disabled={true}
      />
    </View>
  );
}

```

##### switch-settings

Multiple switches arranged in a settings list

```tsx
import { Switch } from '@/components/ui/switch';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React, { useState } from 'react';

export function SwitchSettings() {
  const card = useThemeColor({}, 'card');

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <View
      style={{
        backgroundColor: card,
        borderRadius: BORDER_RADIUS,
        padding: 16,
        gap: 16,
      }}
    >
      <Switch
        label='Push notifications'
        value={notifications}
        onValueChange={setNotifications}
      />
      <Switch label='Dark mode' value={darkMode} onValueChange={setDarkMode} />
      <Switch
        label='Location services'
        value={location}
        onValueChange={setLocation}
      />
      <Switch
        label='Analytics & performance'
        value={analytics}
        onValueChange={setAnalytics}
      />
    </View>
  );
}

```

##### switch-colors

Switches with custom colors and styling

```tsx
import { Switch } from '@/components/ui/switch';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SwitchColors() {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  return (
    <View style={{ gap: 12 }}>
      <Switch
        label='Default green'
        value={switch1}
        onValueChange={setSwitch1}
      />
      <Switch
        label='Custom blue'
        value={switch2}
        onValueChange={setSwitch2}
        trackColor={{ false: '#e0e0e0', true: '#2196F3' }}
        thumbColor={switch2 ? '#ffffff' : '#f4f3f4'}
      />
      <Switch
        label='Custom purple'
        value={switch3}
        onValueChange={setSwitch3}
        trackColor={{ false: '#e0e0e0', true: '#9C27B0' }}
        thumbColor={switch3 ? '#ffffff' : '#f4f3f4'}
      />
    </View>
  );
}

```
---

### table

A flexible data table component with sorting, filtering, pagination, and search functionality.

**Installation:**
```bash
npx bna-ui add table
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** button, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

#### Props Interface

```typescript
export interface TableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  pagination?: boolean;
  pageSize?: number;
  searchable?: boolean;
  searchPlaceholder?: string;
  loading?: boolean;
  emptyMessage?: string;
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  rowStyle?: ViewStyle;
  cellStyle?: ViewStyle;
  onRowPress?: (row: T, index: number) => void;
  sortable?: boolean;
  filterable?: boolean;
}
```

**Preview:**

![table preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-01-2025 11-10-10_1.MP4)

#### Basic Usage

```tsx
import { Table } from '@/components/ui/table';

export default function Example() {
  return (
    <Table />
  );
}```


#### Advanced Examples

##### table-demo

A basic data table with sample data

```tsx
import { Table, TableColumn } from '@/components/ui/table';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const sampleData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Manager',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Admin',
    status: 'Active',
  },
];

const columns: TableColumn<User>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    sortable: true,
    filterable: true,
  },
  {
    id: 'email',
    header: 'Email',
    accessorKey: 'email',
    sortable: true,
    filterable: true,
  },
  {
    id: 'role',
    header: 'Role',
    accessorKey: 'role',
    sortable: true,
    filterable: true,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    sortable: true,
    filterable: true,
  },
];

export function TableDemo() {
  return (
    <Table
      data={sampleData}
      columns={columns}
      pageSize={5}
      searchPlaceholder='Search users...'
    />
  );
}

```

##### table-sortable

Table with sortable columns

```tsx
import { Table, TableColumn } from '@/components/ui/table';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Coffee Mug',
    price: 12.99,
    category: 'Kitchen',
    inStock: false,
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Desk Chair',
    price: 199.99,
    category: 'Furniture',
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Notebook',
    price: 5.99,
    category: 'Office',
    inStock: true,
    rating: 3.8,
  },
  {
    id: 6,
    name: 'Smartphone',
    price: 699.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
  },
];

const columns: TableColumn<Product>[] = [
  {
    id: 'name',
    header: 'Product Name',
    accessorKey: 'name',
    sortable: true,
    filterable: true,
    minWidth: 150,
  },
  {
    id: 'price',
    header: 'Price',
    accessorKey: 'price',
    sortable: true,
    align: 'right',
    cell: (value) => `$${value.toFixed(2)}`,
    minWidth: 100,
  },
  {
    id: 'category',
    header: 'Category',
    accessorKey: 'category',
    sortable: true,
    filterable: true,
    minWidth: 120,
  },
  {
    id: 'inStock',
    header: 'In Stock',
    accessorKey: 'inStock',
    sortable: true,
    align: 'center',
    cell: (value) => (value ? '✅' : '❌'),
    minWidth: 100,
  },
  {
    id: 'rating',
    header: 'Rating',
    accessorKey: 'rating',
    sortable: true,
    align: 'center',
    cell: (value) => `⭐ ${value}`,
    minWidth: 100,
  },
];

export function TableSortable() {
  return (
    <Table
      data={products}
      columns={columns}
      pageSize={4}
      searchPlaceholder='Search products...'
    />
  );
}

```

##### table-custom-cells

Table with custom cell renderers and formatting

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Table, TableColumn } from '@/components/ui/table';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  avatar?: string;
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Terminated';
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    department: 'Engineering',
    salary: 95000,
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    joinDate: '2022-01-15',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.c@company.com',
    department: 'Design',
    salary: 78000,
    joinDate: '2023-03-20',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Emma Davis',
    email: 'emma.d@company.com',
    department: 'Marketing',
    salary: 65000,
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
    joinDate: '2021-11-08',
    status: 'On Leave',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.w@company.com',
    department: 'Sales',
    salary: 72000,
    joinDate: '2020-09-12',
    status: 'Terminated',
  },
];

const columns: TableColumn<Employee>[] = [
  {
    id: 'employee',
    header: 'Employee',
    accessorKey: 'name',
    sortable: true,
    filterable: true,
    minWidth: 200,
    cell: (value, row) => (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar size={32}>
          {row.avatar && <AvatarImage source={{ uri: row.avatar }} />}
          <AvatarFallback>
            {row.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <View>
          <Text variant='body' style={{ fontWeight: '600' }}>
            {row.name}
          </Text>
          <Text variant='caption' style={{ opacity: 0.7 }}>
            {row.email}
          </Text>
        </View>
      </View>
    ),
  },
  {
    id: 'department',
    header: 'Department',
    accessorKey: 'department',
    sortable: true,
    filterable: true,
    minWidth: 120,
  },
  {
    id: 'salary',
    header: 'Salary',
    accessorKey: 'salary',
    sortable: true,
    align: 'right',
    minWidth: 120,
    cell: (value) => (
      <Text variant='body' style={{ fontWeight: '600' }}>
        ${value.toLocaleString()}
      </Text>
    ),
  },
  {
    id: 'joinDate',
    header: 'Join Date',
    accessorKey: 'joinDate',
    sortable: true,
    align: 'center',
    minWidth: 120,
    cell: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    sortable: true,
    filterable: true,
    align: 'center',
    minWidth: 120,
    cell: (value) => (
      <Badge
        variant={
          value === 'Active'
            ? 'default'
            : value === 'On Leave'
            ? 'secondary'
            : 'destructive'
        }
      >
        {value}
      </Badge>
    ),
  },
];

export function TableCustomCells() {
  return (
    <Table
      data={employees}
      columns={columns}
      pageSize={3}
      searchPlaceholder='Search employees...'
    />
  );
}

```

##### table-pagination

Table with pagination controls

```tsx
import { Table, TableColumn } from '@/components/ui/table';
import React from 'react';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  date: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
}

// Generate sample data
const generateOrders = (count: number): Order[] => {
  const customers = [
    'John Doe',
    'Jane Smith',
    'Bob Johnson',
    'Alice Brown',
    'Charlie Wilson',
    'Diana Ross',
    'Frank Miller',
    'Grace Lee',
  ];
  const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Headphones',
    'Webcam',
    'Tablet',
    'Phone',
  ];
  const statuses: Order['status'][] = ['Pending', 'Completed', 'Cancelled'];

  return Array.from({ length: count }, (_, i) => ({
    id: `ORD-${String(i + 1).padStart(4, '0')}`,
    customer: customers[i % customers.length],
    product: products[i % products.length],
    amount: Math.floor(Math.random() * 1000) + 50,
    date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

const orders = generateOrders(50);

const columns: TableColumn<Order>[] = [
  {
    id: 'id',
    header: 'Order ID',
    accessorKey: 'id',
    sortable: true,
    filterable: true,
    minWidth: 120,
  },
  {
    id: 'customer',
    header: 'Customer',
    accessorKey: 'customer',
    sortable: true,
    filterable: true,
    minWidth: 150,
  },
  {
    id: 'product',
    header: 'Product',
    accessorKey: 'product',
    sortable: true,
    filterable: true,
    minWidth: 120,
  },
  {
    id: 'amount',
    header: 'Amount',
    accessorKey: 'amount',
    sortable: true,
    align: 'right',
    minWidth: 100,
    cell: (value) => `$${value.toFixed(2)}`,
  },
  {
    id: 'date',
    header: 'Date',
    accessorKey: 'date',
    sortable: true,
    align: 'center',
    minWidth: 120,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    sortable: true,
    filterable: true,
    align: 'center',
    minWidth: 120,
  },
];

export function TablePagination() {
  return (
    <Table
      data={orders}
      columns={columns}
      pageSize={8}
      searchPlaceholder='Search orders...'
      pagination={true}
    />
  );
}

```

##### table-search

Table with search functionality

```tsx
import { Table, TableColumn } from '@/components/ui/table';
import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  isbn: string;
  pages: number;
}

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    year: 1925,
    isbn: '978-0-7432-7356-5',
    pages: 180,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    year: 1960,
    isbn: '978-0-06-112008-4',
    pages: 281,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    year: 1949,
    isbn: '978-0-452-28423-4',
    pages: 328,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    year: 1813,
    isbn: '978-0-14-143951-8',
    pages: 432,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    year: 1951,
    isbn: '978-0-316-76948-0',
    pages: 277,
  },
  {
    id: 6,
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: 'Fiction',
    year: 1954,
    isbn: '978-0-571-05686-2',
    pages: 224,
  },
  {
    id: 7,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    year: 1937,
    isbn: '978-0-547-92822-7',
    pages: 366,
  },
  {
    id: 8,
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    year: 1997,
    isbn: '978-0-439-70818-8',
    pages: 309,
  },
  {
    id: 9,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Mystery',
    year: 2003,
    isbn: '978-0-307-47427-5',
    pages: 689,
  },
  {
    id: 10,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Science Fiction',
    year: 1932,
    isbn: '978-0-06-085052-4',
    pages: 268,
  },
];

const columns: TableColumn<Book>[] = [
  {
    id: 'title',
    header: 'Title',
    accessorKey: 'title',
    sortable: true,
    filterable: true,
    minWidth: 200,
  },
  {
    id: 'author',
    header: 'Author',
    accessorKey: 'author',
    sortable: true,
    filterable: true,
    minWidth: 150,
  },
  {
    id: 'genre',
    header: 'Genre',
    accessorKey: 'genre',
    sortable: true,
    filterable: true,
    minWidth: 120,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
    sortable: true,
    align: 'center',
    minWidth: 80,
  },
  {
    id: 'isbn',
    header: 'ISBN',
    accessorKey: 'isbn',
    filterable: true,
    minWidth: 150,
  },
  {
    id: 'pages',
    header: 'Pages',
    accessorKey: 'pages',
    sortable: true,
    align: 'right',
    minWidth: 80,
  },
];

export function TableSearch() {
  return (
    <Table
      data={books}
      columns={columns}
      pageSize={6}
      searchPlaceholder='Search books by title, author, genre, or ISBN...'
      searchable={true}
      filterable={true}
    />
  );
}

```

##### table-loading

Table showing loading state

```tsx
import { Button } from '@/components/ui/button';
import { Table, TableColumn } from '@/components/ui/table';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

interface ApiData {
  id: number;
  name: string;
  value: number;
  category: string;
}

const mockData: ApiData[] = [
  { id: 1, name: 'Item A', value: 100, category: 'Type 1' },
  { id: 2, name: 'Item B', value: 250, category: 'Type 2' },
  { id: 3, name: 'Item C', value: 175, category: 'Type 1' },
  { id: 4, name: 'Item D', value: 320, category: 'Type 3' },
];

const columns: TableColumn<ApiData>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    sortable: true,
    filterable: true,
  },
  {
    id: 'value',
    header: 'Value',
    accessorKey: 'value',
    sortable: true,
    align: 'right',
  },
  {
    id: 'category',
    header: 'Category',
    accessorKey: 'category',
    sortable: true,
    filterable: true,
  },
];

export function TableLoading() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiData[]>([]);

  const simulateLoading = () => {
    setLoading(true);
    setData([]);

    // Simulate API call
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 2000);
  };

  const clearData = () => {
    setData([]);
    setLoading(false);
  };

  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Button onPress={simulateLoading} disabled={loading}>
          Load Data
        </Button>
        <Button variant='outline' onPress={clearData} disabled={loading}>
          Clear Data
        </Button>
      </View>

      <Table
        data={data}
        columns={columns}
        loading={loading}
        emptyMessage="Click 'Load Data' to fetch some data"
        pageSize={5}
      />
    </View>
  );
}

```
---

### tabs

A foundational View component with transparent background and ref forwarding support.

**Installation:**
```bash
npx bna-ui add tabs
```

**External Dependencies:** react-native-gesture-handler, react-native-reanimated

**Registry Dependencies:** text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![tabs preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-02-2025 06-18-46_1.MP4)

#### Basic Usage

```tsx
import { Tabs } from '@/components/ui/tabs';

export default function Example() {
  return (
    <Tabs />
  );
}```


#### Advanced Examples

##### tabs-demo

Basic tabs container with content

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TabsDemo() {
  return (
    <Tabs defaultValue='account' style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='followers'>Followers</TabsTrigger>
        <TabsTrigger value='following'>Following</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='more'>More</TabsTrigger>
      </TabsList>

      <TabsContent value='account'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Account Settings
          </Text>
          <Text variant='body'>
            Manage your account information and preferences here.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='followers'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Followers
          </Text>
          <Text variant='body'>
            Manage your followers information and preferences here.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='following'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Following
          </Text>
          <Text variant='body'>
            Manage your following information and preferences here.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='password'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Password Settings
          </Text>
          <Text variant='body'>
            Change your password and security settings preferences here.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='settings'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            General Settings
          </Text>
          <Text variant='body'>
            Configure your application preferences and options.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='more'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            More
          </Text>
          <Text variant='body'>
            Configure your application preferences and options.
          </Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}

```

##### tabs-vertical

Tabs arranged in vertical orientation

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TabsVertical() {
  return (
    <Tabs defaultValue='profile' orientation='vertical'>
      <TabsList>
        <TabsTrigger value='profile'>🧑‍💼</TabsTrigger>
        <TabsTrigger value='security'>🫆</TabsTrigger>
        <TabsTrigger value='notifications'>🔔</TabsTrigger>
        <TabsTrigger value='billing'>💰</TabsTrigger>
      </TabsList>

      <TabsContent value='profile' style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Profile Information
          </Text>
          <Text variant='body'>
            Update your personal information and profile picture.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='security' style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Security Settings
          </Text>
          <Text variant='body'>
            Manage two-factor authentication and login security.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='notifications' style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Notification Preferences
          </Text>
          <Text variant='body'>
            Configure how and when you receive notifications.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='billing' style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Billing & Subscription
          </Text>
          <Text variant='body'>
            Manage your subscription and payment methods.
          </Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}

```

##### tabs-disabled

Tabs with disabled states

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TabsDisabled() {
  return (
    <Tabs defaultValue='available' style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value='available'>Available</TabsTrigger>
        <TabsTrigger value='pending'>Pending</TabsTrigger>
        <TabsTrigger value='premium' disabled>
          Premium
        </TabsTrigger>
        <TabsTrigger value='enterprise' disabled>
          Enterprise
        </TabsTrigger>
      </TabsList>

      <TabsContent value='available'>
        <View style={{ padding: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Available Features
          </Text>
          <Text variant='body'>
            These features are currently available to you.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='pending'>
        <View style={{ padding: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Pending Features
          </Text>
          <Text variant='body'>
            These features are being processed and will be available soon.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='premium'>
        <View style={{ padding: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Premium Features
          </Text>
          <Text variant='body'>Upgrade to access premium features.</Text>
        </View>
      </TabsContent>

      <TabsContent value='enterprise'>
        <View style={{ padding: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Enterprise Features
          </Text>
          <Text variant='body'>Contact sales for enterprise features.</Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}

```

##### tabs-styled

Tabs with custom colors and styling

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useState } from 'react';

export function TabsStyled() {
  const [value, setValue] = useState('design');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList
        style={{
          backgroundColor:
            value === 'design'
              ? '#3b82f6'
              : value === 'development'
              ? '#10b981'
              : '#f59e0b',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          borderRadius: 8,
        }}
      >
        <TabsTrigger
          value='design'
          style={{ borderRadius: 8 }}
          textStyle={{ fontWeight: '600', color: '#3b82f6' }}
        >
          Design
        </TabsTrigger>
        <TabsTrigger
          value='development'
          style={{ borderRadius: 8 }}
          textStyle={{ fontWeight: '600', color: '#10b981' }}
        >
          Development
        </TabsTrigger>
        <TabsTrigger
          value='testing'
          style={{ borderRadius: 8 }}
          textStyle={{ fontWeight: '600', color: '#f59e0b' }}
        >
          Testing
        </TabsTrigger>
      </TabsList>

      <TabsContent value='design'>
        <View
          style={{
            padding: 20,
            backgroundColor: '#eff6ff',
            borderRadius: 12,
            marginTop: 8,
          }}
        >
          <Text variant='title' style={{ color: '#1e40af', marginBottom: 8 }}>
            Design Phase
          </Text>
          <Text variant='body' style={{ color: '#1e40af' }}>
            Create wireframes, mockups, and design systems for your project.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='development'>
        <View
          style={{
            padding: 20,
            backgroundColor: '#ecfdf5',
            borderRadius: 12,
            marginTop: 8,
          }}
        >
          <Text variant='title' style={{ color: '#047857', marginBottom: 8 }}>
            Development Phase
          </Text>
          <Text variant='body' style={{ color: '#047857' }}>
            Build and implement the features based on the design specifications.
          </Text>
        </View>
      </TabsContent>

      <TabsContent value='testing'>
        <View
          style={{
            padding: 20,
            backgroundColor: '#fffbeb',
            borderRadius: 12,
            marginTop: 8,
          }}
        >
          <Text variant='title' style={{ color: '#92400e', marginBottom: 8 }}>
            Testing Phase
          </Text>
          <Text variant='body' style={{ color: '#92400e' }}>
            Perform quality assurance and user acceptance testing.
          </Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}

```
---

### text

A foundational View component with transparent background and ref forwarding support.

**Installation:**
```bash
npx bna-ui add text
```

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![text preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5741.PNG)

#### Basic Usage

```tsx
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <Text />
  );
}```


#### Advanced Examples

##### text-demo

Basic text component showing different variants

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TextDemo() {
  return (
    <View style={{ gap: 16 }}>
      <Text variant='heading'>Heading Text</Text>
      <Text variant='title'>Title Text</Text>
      <Text variant='subtitle'>Subtitle Text</Text>
      <Text variant='body'>
        This is body text that demonstrates the default styling for regular
        content.
      </Text>
      <Text variant='caption'>Caption text for additional information</Text>
      <Text variant='link'>Link text with underline</Text>
    </View>
  );
}

```

##### text-variants

All text variants showing the typography hierarchy

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TextVariants() {
  return (
    <View style={{ gap: 20 }}>
      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          HEADING (28px, weight 700)
        </Text>
        <Text variant='heading'>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          TITLE (24px, weight 700)
        </Text>
        <Text variant='title'>The quick brown fox jumps over the lazy dog</Text>
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          SUBTITLE (19px, weight 600)
        </Text>
        <Text variant='subtitle'>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          BODY (16px, weight 400)
        </Text>
        <Text variant='body'>
          The quick brown fox jumps over the lazy dog. This is the default text
          variant used for body content and regular paragraphs.
        </Text>
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          CAPTION (16px, weight 400, muted)
        </Text>
        <Text variant='caption'>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View>
        <Text variant='caption' style={{ marginBottom: 4 }}>
          LINK (16px, weight 500, underlined)
        </Text>
        <Text variant='link'>The quick brown fox jumps over the lazy dog</Text>
      </View>
    </View>
  );
}

```

##### text-colors

Text with custom light and dark mode colors

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TextColors() {
  return (
    <View style={{ gap: 16 }}>
      <Text variant='subtitle' style={{ marginBottom: 8 }}>
        Custom Color Examples
      </Text>

      <Text variant='body' lightColor='#3b82f6' darkColor='#60a5fa'>
        This text uses custom blue colors for light and dark themes
      </Text>

      <Text variant='body' lightColor='#10b981' darkColor='#34d399'>
        This text uses custom green colors for light and dark themes
      </Text>

      <Text variant='body' lightColor='#f59e0b' darkColor='#fbbf24'>
        This text uses custom amber colors for light and dark themes
      </Text>

      <Text variant='body' lightColor='#ef4444' darkColor='#f87171'>
        This text uses custom red colors for light and dark themes
      </Text>

      <Text variant='body' lightColor='#8b5cf6' darkColor='#a78bfa'>
        This text uses custom purple colors for light and dark themes
      </Text>

      <View style={{ marginTop: 16 }}>
        <Text variant='caption'>
          Note: These colors automatically adapt based on the current theme
          (light/dark mode)
        </Text>
      </View>
    </View>
  );
}

```
---

### toast

A succinct message that is displayed temporarily with Dynamic Island animation inspired by iOS.

**Installation:**
```bash
npx bna-ui add toast
```

**External Dependencies:** react-native-gesture-handler, react-native-reanimated, lucide-react-native

**Registry Dependencies:** text

#### Types

```typescript
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'
```

**Preview:**

![toast preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-02-2025 06-24-28_1.MP4)

#### Basic Usage

```tsx
import { Toast } from '@/components/ui/toast';

export default function Example() {
  return (
    <Toast />
  );
}```


#### Advanced Examples

##### toast-demo

A basic toast notification with title and description

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import React from 'react';

export function ToastDemo() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: 'Toast Notification',
      description:
        'This is a basic toast notification with title and description.',
      variant: 'default',
    });
  };

  return <Button onPress={showToast}>Show Toast</Button>;
}

```

##### toast-variants

Toast notifications with different variants (success, error, warning, info)

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { View } from '@/components/ui/view';
import React from 'react';

export function ToastVariants() {
  const { success, error, warning, info } = useToast();

  return (
    <View style={{ gap: 12 }}>
      <Button
        onPress={() =>
          success('Success!', 'Your action was completed successfully.')
        }
        variant='success'
      >
        Success
      </Button>

      <Button
        onPress={() =>
          error('Error!', 'Something went wrong. Please try again.')
        }
        variant='destructive'
      >
        Error
      </Button>

      <Button
        onPress={() =>
          warning('Warning!', 'Please review your input before continuing.')
        }
        variant='secondary'
      >
        Warning
      </Button>

      <Button
        onPress={() => info('Info', "Here's some helpful information for you.")}
      >
        Info
      </Button>
    </View>
  );
}

```

##### toast-actions

Toast notifications with action buttons

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { View } from '@/components/ui/view';
import React from 'react';

export function ToastActions() {
  const { toast } = useToast();

  const showToastWithAction = () => {
    toast({
      title: 'New message received',
      description: 'You have a new message from John Doe.',
      variant: 'info',
      action: {
        label: 'View',
        onPress: () => {
          console.log('View action pressed');
          // Navigate to message or perform action
        },
      },
    });
  };

  const showUndoToast = () => {
    toast({
      title: 'Item deleted',
      description: 'The item has been removed from your list.',
      variant: 'warning',
      duration: 8000, // Longer duration for undo action
      action: {
        label: 'Undo',
        onPress: () => {
          console.log('Undo action pressed');
          // Restore the deleted item
        },
      },
    });
  };

  return (
    <View style={{ gap: 12 }}>
      <Button onPress={showToastWithAction} variant='outline'>
        Show with Action
      </Button>

      <Button onPress={showUndoToast} variant='outline'>
        Show Undo Toast
      </Button>
    </View>
  );
}

```

##### toast-duration

Toast notifications with custom durations

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { View } from '@/components/ui/view';
import React from 'react';

export function ToastDuration() {
  const { toast } = useToast();

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Button
        onPress={() =>
          toast({
            title: 'Quick toast',
            description: 'This disappears in 2 seconds',
            duration: 2000,
            variant: 'info',
          })
        }
        variant='outline'
      >
        2 seconds
      </Button>

      <Button
        onPress={() =>
          toast({
            title: 'Standard toast',
            description: 'This disappears in 4 seconds',
            duration: 4000,
            variant: 'default',
          })
        }
        variant='outline'
      >
        4 seconds (default)
      </Button>

      <Button
        onPress={() =>
          toast({
            title: 'Long toast',
            description: 'This disappears in 8 seconds',
            duration: 8000,
            variant: 'warning',
          })
        }
        variant='outline'
      >
        8 seconds
      </Button>

      <Button
        onPress={() =>
          toast({
            title: 'Persistent toast',
            description: "This won't disappear automatically",
            duration: 0, // No auto-dismiss
            variant: 'error',
          })
        }
        variant='outline'
      >
        Persistent
      </Button>
    </View>
  );
}

```

##### toast-multiple

Multiple toast notifications stacked vertically

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { View } from '@/components/ui/view';
import React from 'react';

export function ToastMultiple() {
  const { toast, dismissAll } = useToast();

  const showMultipleToasts = () => {
    const variants = ['success', 'warning', 'error', 'info'] as const;
    const messages = [
      { title: 'Success!', description: 'Operation completed successfully' },
      { title: 'Warning', description: 'Please check your input' },
      { title: 'Error', description: 'Something went wrong' },
      { title: 'Info', description: "Here's some information" },
    ];

    variants.forEach((variant, index) => {
      setTimeout(() => {
        toast({
          ...messages[index],
          variant,
          duration: 6000,
        });
      }, index * 500); // Stagger the toasts
    });
  };

  const showBatchToasts = () => {
    // Show multiple toasts at once
    toast({
      title: 'First toast',
      description: 'This is the first toast',
      variant: 'success',
    });

    toast({
      title: 'Second toast',
      description: 'This is the second toast',
      variant: 'info',
    });

    toast({
      title: 'Third toast',
      description: 'This is the third toast',
      variant: 'warning',
    });
  };

  return (
    <View style={{ gap: 12 }}>
      <Button onPress={showMultipleToasts} variant='outline'>
        Show Staggered Toasts
      </Button>

      <Button onPress={showBatchToasts} variant='outline'>
        Show Batch Toasts
      </Button>

      <Button onPress={dismissAll} variant='destructive'>
        Dismiss All Toasts
      </Button>
    </View>
  );
}

```

##### toast-compact

Compact toast notifications without title or description

```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { View } from '@/components/ui/view';
import React from 'react';

export function ToastCompact() {
  const { toast } = useToast();

  return (
    <View style={{ gap: 12 }}>
      <Button
        onPress={() =>
          toast({
            variant: 'success',
          })
        }
        variant='success'
      >
        Success Icon Only
      </Button>

      <Button
        onPress={() =>
          toast({
            variant: 'error',
          })
        }
        variant='destructive'
      >
        Error Icon Only
      </Button>

      <Button
        onPress={() =>
          toast({
            variant: 'warning',
          })
        }
        variant='secondary'
      >
        Warning Icon Only
      </Button>

      <Button
        onPress={() =>
          toast({
            variant: 'info',
          })
        }
        variant='outline'
      >
        Info Icon Only
      </Button>

      <Button
        onPress={() =>
          toast({
            title: 'Title only',
          })
        }
      >
        Title Only
      </Button>
    </View>
  );
}

```
---

### toggle

A two-state button that can be either on or off.

**Installation:**
```bash
npx bna-ui add toggle
```

**External Dependencies:** lucide-react-native

**Registry Dependencies:** text, view, icon

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![toggle preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-02-2025 06-32-48_1.MP4)

#### Basic Usage

```tsx
import { Toggle } from '@/components/ui/toggle';

export default function Example() {
  return (
    <Toggle />
  );
}```


#### Advanced Examples

##### toggle-demo

A basic toggle button with icon

```tsx
import { Toggle } from '@/components/ui/toggle';
import { Bold } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleDemo() {
  const [pressed, setPressed] = useState(false);

  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      <Bold size={16} />
    </Toggle>
  );
}

```

##### toggle-variants

Toggle buttons in different variants

```tsx
import { Toggle } from '@/components/ui/toggle';
import { View } from '@/components/ui/view';
import { Bold, Italic } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleVariants() {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(true);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(true);

  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Toggle
        pressed={pressed1}
        onPressedChange={setPressed1}
        variant='default'
      >
        <Bold size={16} />
      </Toggle>
      <Toggle
        pressed={pressed2}
        onPressedChange={setPressed2}
        variant='default'
      >
        <Italic size={16} />
      </Toggle>
      <Toggle
        pressed={pressed3}
        onPressedChange={setPressed3}
        variant='outline'
      >
        <Bold size={16} />
      </Toggle>
      <Toggle
        pressed={pressed4}
        onPressedChange={setPressed4}
        variant='outline'
      >
        <Italic size={16} />
      </Toggle>
    </View>
  );
}

```

##### toggle-sizes

Toggle buttons in different sizes

```tsx
import { Toggle } from '@/components/ui/toggle';
import { View } from '@/components/ui/view';
import { Bold } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleSizes() {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(true);

  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Toggle pressed={pressed1} onPressedChange={setPressed1} size='icon'>
        <Bold size={16} />
      </Toggle>
      <Toggle pressed={pressed2} onPressedChange={setPressed2} size='default'>
        Bold
      </Toggle>
    </View>
  );
}

```

##### toggle-text

Toggle buttons with text labels

```tsx
import { Toggle } from '@/components/ui/toggle';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ToggleText() {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(true);
  const [pressed3, setPressed3] = useState(false);

  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Toggle pressed={pressed1} onPressedChange={setPressed1} size='default'>
        Bold
      </Toggle>
      <Toggle
        pressed={pressed2}
        onPressedChange={setPressed2}
        size='default'
        variant='outline'
      >
        Italic
      </Toggle>
      <Toggle pressed={pressed3} onPressedChange={setPressed3} size='default'>
        Underline
      </Toggle>
    </View>
  );
}

```

##### toggle-disabled

Disabled toggle buttons

```tsx
import { Toggle } from '@/components/ui/toggle';
import { View } from '@/components/ui/view';
import { Bold, Italic } from 'lucide-react-native';
import React from 'react';

export function ToggleDisabled() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Toggle pressed={false} disabled>
        <Bold size={16} />
      </Toggle>
      <Toggle pressed={true} disabled>
        <Italic size={16} />
      </Toggle>
      <Toggle pressed={false} disabled variant='outline'>
        <Bold size={16} />
      </Toggle>
      <Toggle pressed={true} disabled variant='outline'>
        <Italic size={16} />
      </Toggle>
    </View>
  );
}

```

##### toggle-group-single

Single selection toggle group

```tsx
import { ToggleGroupSingle } from '@/components/ui/toggle';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleGroupSingleDemo() {
  const [value, setValue] = useState('left');

  const items = [
    { value: 'left', label: 'Left', icon: AlignLeft },
    { value: 'center', label: 'Center', icon: AlignCenter },
    { value: 'right', label: 'Right', icon: AlignRight },
  ];

  return (
    <ToggleGroupSingle
      value={value}
      onValueChange={setValue}
      items={items}
      size='icon'
    />
  );
}

```

##### toggle-group-multiple

Multiple selection toggle group

```tsx
import { ToggleGroupMultiple } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleGroupMultipleDemo() {
  const [value, setValue] = useState(['bold']);

  const items = [
    { value: 'bold', label: 'Bold', icon: Bold },
    { value: 'italic', label: 'Italic', icon: Italic },
    { value: 'underline', label: 'Underline', icon: Underline },
  ];

  return (
    <ToggleGroupMultiple
      value={value}
      onValueChange={setValue}
      items={items}
      size='icon'
    />
  );
}

```

##### toggle-group-vertical

Vertical toggle group layout

```tsx
import { ToggleGroupSingle } from '@/components/ui/toggle';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleGroupVertical() {
  const [value, setValue] = useState('left');

  const items = [
    { value: 'left', label: 'Left Align', icon: AlignLeft },
    { value: 'center', label: 'Center Align', icon: AlignCenter },
    { value: 'right', label: 'Right Align', icon: AlignRight },
  ];

  return (
    <ToggleGroupSingle
      value={value}
      onValueChange={setValue}
      items={items}
      orientation='vertical'
      size='default'
    />
  );
}

```

##### toggle-group-outline

Toggle group with outline variant

```tsx
import { ToggleGroupSingle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleGroupOutline() {
  const [value, setValue] = useState('bold');

  const items = [
    { value: 'bold', label: 'Bold', icon: Bold },
    { value: 'italic', label: 'Italic', icon: Italic },
    { value: 'underline', label: 'Underline', icon: Underline },
  ];

  return (
    <ToggleGroupSingle
      value={value}
      onValueChange={setValue}
      items={items}
      variant='outline'
      size='default'
    />
  );
}

```
---

### treemap-chart

A customizable treemap chart component with hierarchical data visualization, smooth animations, and flexible styling using the squarified treemap algorithm.

**Installation:**
```bash
npx bna-ui add treemap-chart
```

**External Dependencies:** react-native-svg, react-native-reanimated, react-native-gesture-handler

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![treemap-chart preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/treemap-demo.MP4)

#### Basic Usage

```tsx
import { Treemap-chart } from '@/components/ui/treemap-chart';

export default function Example() {
  return (
    <Treemap-chart />
  );
}```


#### Advanced Examples

##### treemap-chart-demo

A treemap chart with smooth animations

```tsx
import { TreeMapChart } from '@/components/charts/treemap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function TreeMapChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <TreeMapChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
        }}
      />
    </ChartContainer>
  );
}

```

##### treemap-chart-sample

A sample treemap chart with various data sizes

```tsx
import { TreeMapChart } from '@/components/charts/treemap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Product A', value: 250 },
  { label: 'Product B', value: 180 },
  { label: 'Product C', value: 320 },
  { label: 'Product D', value: 90 },
  { label: 'Product E', value: 150 },
  { label: 'Product F', value: 45 },
  { label: 'Product G', value: 210 },
  { label: 'Product H', value: 75 },
];

export function TreeMapChartSample() {
  return (
    <ChartContainer
      title='Product Sales Distribution'
      description='Revenue breakdown by product category'
    >
      <TreeMapChart
        data={sampleData}
        config={{
          height: 250,
          showLabels: true,
          animated: true,
          duration: 800,
        }}
      />
    </ChartContainer>
  );
}

```

##### treemap-chart-styled

A customized treemap chart with custom colors and styling

```tsx
import { TreeMapChart } from '@/components/charts/treemap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const styledData = [
  { label: 'Mobile', value: 450, color: '#FF6B6B' },
  { label: 'Desktop', value: 320, color: '#4ECDC4' },
  { label: 'Tablet', value: 180, color: '#45B7D1' },
  { label: 'Watch', value: 90, color: '#FFA07A' },
  { label: 'TV', value: 150, color: '#98D8C8' },
  { label: 'Other', value: 60, color: '#F7DC6F' },
];

export function TreeMapChartStyled() {
  return (
    <ChartContainer
      title='Device Usage Analytics'
      description='User engagement across different device types'
    >
      <TreeMapChart
        data={styledData}
        config={{
          height: 350,
          padding: 15,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
      />
    </ChartContainer>
  );
}

```

##### treemap-chart-large

A treemap chart with large dataset

```tsx
import { TreeMapChart } from '@/components/charts/treemap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const largeData = [
  { label: 'North America', value: 1250 },
  { label: 'Europe', value: 980 },
  { label: 'Asia Pacific', value: 1450 },
  { label: 'South America', value: 320 },
  { label: 'Africa', value: 180 },
  { label: 'Middle East', value: 240 },
  { label: 'Oceania', value: 95 },
  { label: 'Central Asia', value: 150 },
  { label: 'Caribbean', value: 85 },
  { label: 'Eastern Europe', value: 420 },
  { label: 'Nordic', value: 280 },
  { label: 'Southeast Asia', value: 650 },
  { label: 'East Africa', value: 120 },
  { label: 'West Africa', value: 200 },
  { label: 'Central America', value: 110 },
];

export function TreeMapChartLarge() {
  return (
    <ChartContainer
      title='Global Revenue Distribution'
      description='Revenue breakdown across global regions'
    >
      <TreeMapChart
        data={largeData}
        config={{
          height: 400,
          padding: 12,
          showLabels: true,
          animated: true,
          duration: 1500,
        }}
      />
    </ChartContainer>
  );
}

```
---

### video

A video player component with custom controls, gestures, and subtitle support.

**Installation:**
```bash
npx bna-ui add video
```

**External Dependencies:** expo-video, lucide-react-native

**Registry Dependencies:** progress, text, view

**Required Hooks:** useThemeColor

**Theme Dependencies:** globals

**Preview:**

![video preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/ScreenRecording_07-02-2025 06-41-52_1.MP4)

#### Basic Usage

```tsx
import { Video } from '@/components/ui/video';

export default function Example() {
  return (
    <Video />
  );
}```


#### Advanced Examples

##### video-demo

A basic video player with custom controls

```tsx
import { Video } from '@/components/ui/video';

export function VideoDemo() {
  return (
    <Video
      source={{
        uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
      }}
      style={{
        width: '100%',
        height: 200,
        borderRadius: 8,
      }}
      autoPlay={false}
      loop={false}
      muted={false}
      showControls={true}
    />
  );
}

```

##### video-native-controls

Video player using native system controls

```tsx
import { Video } from '@/components/ui/video';
import React from 'react';

export function VideoNativeControls() {
  return (
    <Video
      source={{
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      }}
      style={{
        width: '100%',
        height: 200,
        borderRadius: 8,
      }}
      nativeControls={true}
      autoPlay={false}
      loop={false}
    />
  );
}

```

##### video-custom-controls

Video player with custom control interface

```tsx
import { Video } from '@/components/ui/video';
import React from 'react';

export function VideoCustomControls() {
  return (
    <Video
      source={{
        uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
      }}
      style={{
        width: '100%',
        height: 250,
        borderRadius: 12,
      }}
      nativeControls={false}
      showControls={true}
      autoPlay={false}
      loop={true}
      seekBy={5}
      onPlaybackStatusUpdate={(status) => {
        console.log('Playback status:', status);
      }}
      onLoad={() => {
        console.log('Video loaded successfully');
      }}
    />
  );
}

```

##### video-subtitles

Video player with subtitle support

```tsx
import { Video } from '@/components/ui/video';
import React from 'react';

export function VideoSubtitles() {
  const subtitles = [
    { start: 0, end: 3, text: 'Welcome to our video demo' },
    { start: 3, end: 6, text: 'This video shows subtitle support' },
    { start: 6, end: 9, text: 'Subtitles appear at the bottom' },
    { start: 9, end: 12, text: 'They automatically sync with playback' },
    { start: 12, end: 15, text: 'Perfect for accessibility!' },
  ];

  return (
    <Video
      source={{
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      }}
      style={{
        width: '100%',
        height: 200,
        borderRadius: 8,
      }}
      subtitles={subtitles}
      autoPlay={true}
      loop={true}
      showControls={true}
    />
  );
}

```

##### video-autoplay-loop

Video that automatically plays and loops

```tsx
import { Video } from '@/components/ui/video';
import React from 'react';

export function VideoAutoplayLoop() {
  return (
    <Video
      source={{
        uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
      }}
      style={{
        width: '100%',
        height: 180,
        borderRadius: 8,
      }}
      autoPlay={true}
      loop={true}
      muted={true}
      showControls={true}
      contentFit='cover'
    />
  );
}

```

##### video-sources

Video players with different source types

```tsx
import { Text } from '@/components/ui/text';
import { Video } from '@/components/ui/video';
import { View } from '@/components/ui/view';
import React from 'react';

export function VideoSources() {
  const videoSources = [
    {
      title: 'MP4 Source',
      uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
    },
    {
      title: 'Alternative MP4',
      uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
  ];

  return (
    <View style={{ gap: 16 }}>
      {videoSources.map((source, index) => (
        <View key={index} style={{ gap: 8 }}>
          <Text variant='body' style={{ fontWeight: '600' }}>
            {source.title}
          </Text>
          <Video
            source={{ uri: source.uri }}
            style={{
              width: '100%',
              height: 160,
              borderRadius: 8,
            }}
            autoPlay={false}
            showControls={true}
          />
        </View>
      ))}
    </View>
  );
}

```

##### video-gestures

Video player with tap-to-play and seek gestures

```tsx
import { Text } from '@/components/ui/text';
import { Video } from '@/components/ui/video';
import { View } from '@/components/ui/view';
import React from 'react';

export function VideoGestures() {
  return (
    <View style={{ gap: 12 }}>
      <Text variant='body' style={{ fontSize: 14, opacity: 0.8 }}>
        Tap center to play/pause • Tap left to seek back • Tap right to seek
        forward
      </Text>
      <Video
        source={{
          uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
        }}
        style={{
          width: '100%',
          height: 220,
          borderRadius: 12,
        }}
        seekBy={10}
        autoPlay={false}
        showControls={true}
        onPlaybackStatusUpdate={(status) => {
          // Handle playback updates
        }}
      />
      <Text variant='caption' style={{ textAlign: 'center', opacity: 0.6 }}>
        Try the gesture controls! This video seeks by 10 seconds.
      </Text>
    </View>
  );
}

```

##### video-content-fit

Videos with different content fitting options

```tsx
import { Text } from '@/components/ui/text';
import { Video } from '@/components/ui/video';
import { View } from '@/components/ui/view';
import React from 'react';

export function VideoContentFit() {
  const contentFitOptions: Array<{
    mode: 'contain' | 'cover' | 'fill';
    description: string;
  }> = [
    { mode: 'contain', description: 'Fit entirely within bounds' },
    { mode: 'cover', description: 'Fill bounds, may crop' },
    { mode: 'fill', description: 'Stretch to fill bounds' },
  ];

  return (
    <View style={{ gap: 16 }}>
      {contentFitOptions.map((option, index) => (
        <View key={index} style={{ gap: 8 }}>
          <View>
            <Text variant='body' style={{ fontWeight: '600' }}>
              {option.mode.charAt(0).toUpperCase() + option.mode.slice(1)}
            </Text>
            <Text variant='caption' style={{ opacity: 0.7 }}>
              {option.description}
            </Text>
          </View>
          <Video
            source={{
              uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            }}
            style={{
              width: '100%',
              height: 120,
              borderRadius: 8,
              backgroundColor: '#f0f0f0',
            }}
            contentFit={option.mode}
            autoPlay={false}
            showControls={true}
            muted={true}
          />
        </View>
      ))}
    </View>
  );
}

```
---

### view

A foundational View component with transparent background and ref forwarding support.

**Installation:**
```bash
npx bna-ui add view
```

**Preview:**

![view preview](https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/IMG_5760.PNG)

#### Basic Usage

```tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { View } from '@/components/ui/view';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Input placeholder='Enter your email' keyboardType='email-address' />
        <Button
          variant='success'
          onPress={() => console.log('Button pressed!')}
        >
          Get Started
        </Button>
      </Card>
    </View>
  );
}
```


#### Advanced Examples

##### view-demo

Basic view container with content

```tsx
import { View } from '@/components/ui/view';
import { BORDER_RADIUS } from '@/theme/globals';

export function ViewDemo() {
  return (
    <View
      style={{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 200,
        borderRadius: BORDER_RADIUS,
      }}
    />
  );
}

```
---


*Documentation generated on 2025-08-16T06:52:48.198Z*
