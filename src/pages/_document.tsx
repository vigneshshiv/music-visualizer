/**
 * Document Head section holds title and meta tags
 */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
// Application
import TitleAndMetaTags from 'components/TitleAndMetaTags';

// TODO: Style component handle at client side (getInitialProps)
// Reference: https://nextjs.org/docs/advanced-features/custom-document

const _Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <TitleAndMetaTags />
      </Head>
      <body className='dark:bg-gray-800'>
        <Script
          id='musically-theme'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              JSON.parse(localStorage.getItem('darkMode'))
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark');
              `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _Document;