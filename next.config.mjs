// next.config.mjs
const nextConfig = {
    reactStrictMode: true,

    experimental: {
      // This tells Next.js to not statically generate these pages during build
      unstable_excludeFiles: ['**/app/(sub pages)/Education&Experience/**'],
    },
  }
  
  export default nextConfig;