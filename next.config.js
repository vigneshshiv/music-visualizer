/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ 
      loader: '@next/font/google',
      options: { 
        subsets: ['latin'] 
      }
    }],
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
