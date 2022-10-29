// React
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
// Application
import Layout from 'components/Layout';
import { MotionParticles } from 'components/particle/MotionParticles';
// CSS
import '../styles/globals.css';

function Classroom({ Component, pageProps}: AppProps) {
  return (
    <>
      <LayoutGroup id="crossfade">
        <AnimatePresence initial={false}>
          <ThemeProvider attribute='class'>
            {/* <Suspense fallback={<Loader />}> */}
            <Layout>
              <MotionParticles />
              <Component {...pageProps} />
            </Layout>
            {/* </Suspense> */}
          </ThemeProvider>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default Classroom;
