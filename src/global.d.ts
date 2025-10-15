// src/types/heroui.d.ts

import * as React from 'react';

// Це розширює типізацію модуля '@heroui/react'
declare module '@heroui/react' {
  // Розширюємо властивості компонента Form
  export const Form: React.FC<React.ComponentPropsWithRef<'form'> & {
    // Тут додайте будь-які інші специфічні пропси HeroUI, якщо вони відомі
    className?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  }>;

  // Ви можете також перевизначити onSubmit, щоб він приймав Promise<void>
  // Це має вирішити й іншу вашу проблему (async)
}