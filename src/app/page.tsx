/**
 * Application Home Page
 */
import Container from 'components/Container';

const Home = (): JSX.Element => {
  return (
    <Container>
      <div className='flex min-h-screen place-content-center items-center uppercase text-7xl bg-transparent text-indigo-400 dark:text-green-400'>
        <div className='flex w-32 h-1 bg-gray-700'></div>
        <p>Next.js 13</p>
      </div>
    </Container>
  );
};

export default Home;
