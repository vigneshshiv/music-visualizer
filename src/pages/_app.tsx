// React
import type { AppProps } from 'next/app';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
// Application
import Layout from 'components/Layout';
import { MotionParticles } from 'components/particle/MotionParticles';
// CSS
import '../styles/globals.css';

function MusicVisualizer({ Component, pageProps}: AppProps) {
  return (
    <>
      <LayoutGroup id="crossfade">
        <AnimatePresence initial={false}>
          <Layout>
            <MotionParticles />
              <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default MusicVisualizer;
