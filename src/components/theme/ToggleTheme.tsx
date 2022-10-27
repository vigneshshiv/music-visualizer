/**
 * Dark Mode theme
 */
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkTheme } from 'components/icons/DarkTheme';
import { LiteTheme } from 'components/icons/LiteTheme';

export const ToggleTheme = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label='Toggle Theme'
      type='button'
      className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'
      onClick={() => setTheme(Object.is(resolvedTheme, 'dark') ? 'light' : 'dark')}
    >
      {mounted && (
        Object.is(resolvedTheme, 'dark') 
          ? <DarkTheme size='lg' /> 
          : <LiteTheme size='lg' />
      )}
    </button>
  );
};
