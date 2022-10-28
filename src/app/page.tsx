/**
 * Application Home Page
 */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import cn from 'classnames';
// Application
import Container from 'components/Container';
import RobotoSlabFont from './config/RobotoFont';
import { H1, P } from '../components/Heading';
import { GmailIcon } from 'components/icons/GmailIcon';
import { LinkedInIcon } from 'components/icons/LinkedinIcon';
import { InstagramIcon } from 'components/icons/InstagramIcon';
import { SiteLinkIcon } from 'components/icons/SiteLinkIcon';
import { CallIcon } from 'components/icons/CallIcon';

const Circle = dynamic(() => import('../components/circle/Circle'), {
  ssr: false
});

const Home = (): JSX.Element => {
  return (
    <Container>
      {/* Due to Next.js 13 beta version, Code Art fails to do..
      <div className='m-4'>
        <H1 className='w-full text-3xl lg:text-4xl text-gray tracking-wide rounded-lg bg-linear-gradient(to right, #f6d365 0%, #fda085 100%)'>
          Code Art
        </H1>
        <Circle />
        <div className='p-2'/>
      </div> 
      */}
      <div className='grid grid-cols-2'>
        <div className={cn('flex min-h-screen items-center justify-center uppercase lg:text-9xl md:text-7xl sm:text-8xl font-bold cursor-pointer', 
              RobotoSlabFont.className)}>
          <span className='text-stroke'>Lets</span>
          <span className='text-indigo-400 dark:text-green-400'>Talk</span>
        </div>
        <div className='flex items-center justify-center text-white'>
          <div className='relative digitalcard z-50'>
            {/* <Image 
              src='/images/glitchtexture.png'
              alt='digital-card'
              fill={true}
              className='rounded-lg'
            /> */}
            <div className='grid place-content-center'>
              {/* Card Header */}
              <div className='absolute w-full top-4'>
                <P className='uppercase font-bold text-2xl text-center'>Vignesh Shiv</P>
                <P className='uppercase font-medium text-sm tracking-widest leading-snug text-center'>UI/UX Designer, Full Stack Developer</P>
              </div>
              {/* Social Media */}
              <div className='absolute flex flex-col bottom-4 left-4 space-y-2 md:space-y-4'>
                {/* Gmail */}
                <div className='inline-flex space-x-2.5 items-center justify-start'>
                  <GmailIcon />
                  <a
                    href='mailto:vichuviky@gmail.com?subject=Hi%20I%20saw%20your%20Github&body=Got%20something%20?'
                    className='text-base leading-none'
                  >
                    vichuviky@gmail.com
                  </a>
                </div>
                <div className='inline-flex space-x-2.5 items-center justify-start'>
                  <LinkedInIcon />
                  <a
                    href='https://linkedin.com/in/vigneshshiv'
                    className='text-base leading-none'
                  >
                    vigneshshiv
                  </a>
                </div>
                <div className='inline-flex space-x-2.5 items-center justify-start'>
                  <InstagramIcon />
                  <a
                    href='https://instagram.com/vigneshshiv'
                    className='text-base leading-none'
                  >
                    vigneshshiv
                  </a>
                </div>
                <div className='inline-flex space-x-2.5 items-center justify-start'>
                  <SiteLinkIcon />
                  <a
                    href='https://github.com/vigneshshiv'
                    className='text-base leading-none'
                  >
                    https://github.com/vigneshshiv
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className='absolute bottom-4 right-2 translate-x-full origin-bottom-left transform -rotate-90'>
                <div className='inline-flex space-x-2.5 items-center justify-start'>
                  <CallIcon />
                  <a href='tel:+919677554422' className='text-base leading-none'>
                    +91 9677554422
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
