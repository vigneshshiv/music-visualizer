/**
 * Application Home Page
 */
import dynamic from 'next/dynamic';
import cn from 'classnames';
// Application
import Container from 'components/Container';
import RobotoSlabFont from 'components/config/RobotoFont';
import { H1, P } from '../components/Heading';

const Circle = dynamic(() => import('../components/circle/Circle'), {
  ssr: false
});

const Home = (): JSX.Element => {
  return (
    <Container>
       <div className='m-4'>
         <H1 className='w-full text-3xl lg:text-4xl text-gray tracking-wide rounded-lg bg-linear-gradient(to right, #f6d365 0%, #fda085 100%)'>
           Code Art
         </H1>
         <Circle />
         <div className='p-2'/>
       </div> 
        {/*         
        <div className={cn('flex min-h-screen items-center place-content-center uppercase text-7xl sm:text-9xl font-bold', 
            RobotoSlabFont.className)}>
          <span className='text-stroke'>Lets</span>
          <span className='text-indigo-400 dark:text-green-400'>Talk</span>
        </div>
        */}
    </Container>
  );
};

export default Home;
