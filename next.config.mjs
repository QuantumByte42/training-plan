/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/training-plan',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
