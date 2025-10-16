import * as React from 'react';

declare module '@heroui/react' {
  export const Form: React.FC<React.ComponentPropsWithRef<'form'> & {
    className?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  }>;
}