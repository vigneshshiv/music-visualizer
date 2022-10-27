/**
 * Application Footer
 */

const Footer = (): JSX.Element => {
  return (
    <footer className='font-telex text-center text-gray-700 dark:text-gray-50 pin-b p-6 text-md lg:text-lg'>
      © {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}
      <span className='font-bold hover:underline'>Vignesh Shiv</span>
    </footer>
  );
};

export default Footer;
