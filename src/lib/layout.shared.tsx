import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <div className='flex flex-row gap-2 items-center'>
        <img src='https://cdn.bte-germany.de/general/logos/Logo.png' alt='BTE Germany Logo' className='h-6 w-6' />
        <p>BTE Germany Docs</p>
      </div>,
      transparentMode: 'top',
    },
  };
}
