declare module 'react-lifecycles-compat' {
  import { ComponentType } from 'react';
  
  export function polyfill(Component: ComponentType<any>): ComponentType<any>;
}