/** @type {import('next').NextConfig} */
const nextConfig = {
  // Foundation config - ignore ESLint and TypeScript errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed standalone output for simpler deployment
  experimental: {
    // Compatible with Next.js 15.4.1
    typedRoutes: false,
  },
  // Optimize memory usage and fix 'self is not defined'
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Fix 'self is not defined' error
    config.module = {
      ...config.module,
      unknownContextCritical: false,
    }
    
    // Define global variables for server-side
    config.plugins = config.plugins || []
    config.plugins.push(
      new config.webpack.DefinePlugin({
        'global.self': 'global',
      })
    )
    
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