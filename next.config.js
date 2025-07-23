/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  experimental: {
    // Compatible with Next.js 15.4.1
    typedRoutes: false,
  },
  // Optimize memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Reduce memory pressure
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    }
    
    return config
  },
  // Modern Next.js doesn't need swcMinify flag
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig