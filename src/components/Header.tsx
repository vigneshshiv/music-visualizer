/**
 * Application Header
 */

import * as React from 'react';
import Link from 'next/link';
// Application
import { ToggleTheme } from 'components/theme/ToggleTheme';

const Header = (): JSX.Element => {
  return (
    <>
      <ul className='sm:flex pointer-events-auto items-center antialised font-medium text-xs tracking-widest'>
        <header
          className='top-0 w-screen fixed flex flex-row justify-between items-center tracking-widest
             h-16 md:h-20 px-12 bg-white dark:bg-gray-800 text-black dark:text-white z-50'
        >
          <Link href='/' className='flex items-center justify-center'>
            <span title='sparkle-emoji' className='text-2xl lg:text-4xl font-bold mr-2 hover:animate-ping'>
              🎙️
            </span>
            <h1 className='text-2xl lg:text-4xl font-bold mr-4 lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-500'>
              MUSICALLY
            </h1>
          </Link>
          <div className='ml-4 sm:block'>
            <ToggleTheme />
          </div>
        </header>
      </ul>
    </>
  );
};

export default Header;
