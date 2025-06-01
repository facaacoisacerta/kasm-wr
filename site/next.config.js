/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Titikasm',
    description: 'The official Titico store for Kasm supported workspaces.',
    icon: 'https://kasm-wr.titico.com.br/1.1/gato.png',
    listUrl: 'https://kasm-wr.titico.com.br/',
    contactUrl: 'https://titico.com.br',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
