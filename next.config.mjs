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
}

export default nextConfig
