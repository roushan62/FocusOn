/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === '1'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isStaticExport
    ? {
        output: 'export',
        basePath: '/FocusOn',
        assetPrefix: '/FocusOn/',
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig
