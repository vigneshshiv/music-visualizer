/**
 * Initiate Page with a Container component
 */
import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <main className='container mx-auto px-12 sm:px-0'>
        {children}
      </main>
    </>
  );
};

export default Container;
