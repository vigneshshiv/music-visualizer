/**
 * Application Layout
 */
'use client';

import { ReactNode, Suspense } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
// Application
import { MotionParticles } from 'components/particle/MotionParticles';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import Loader from './loading';
// CSS
import '../styles/globals.css';


const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang='en'>
      <TitleAndMetaTags />
      <LayoutGroup id="crossfade">
        <AnimatePresence initial={false}>
          <ThemeProvider attribute='class'>
            <body className='dark:bg-gray-800'>
              <Suspense fallback={<Loader />}>
                <Layout>
                  <MotionParticles />
                  {children}
                </Layout>
              </Suspense>
            </body>
          </ThemeProvider>
        </AnimatePresence>
      </LayoutGroup>
    </html>
  );
};

export default RootLayout;
