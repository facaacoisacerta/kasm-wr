/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Titikasm Workspace Registry',
    description: 'The official Titico store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasm-wr.titico.com.br/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
