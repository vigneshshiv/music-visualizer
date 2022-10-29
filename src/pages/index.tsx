/**
 * Application Home Page
 */
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
// Application
import Container from 'components/Container';
import Loader from 'components/Loader';

const Circle = dynamic(() => import('../components/circle/Circle'), {
  ssr: false
});

const Home = (): JSX.Element => {
  return (
    <Container>
      <div className='m-4'>
        <Suspense fallback={<Loader />}>
        <Circle />
        </Suspense>
        <div className='p-2' />
      </div>
    </Container>
  );
};

export default Home;
