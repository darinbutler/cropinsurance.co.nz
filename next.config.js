/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Non-www → www permanent redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cropinsurance.co.nz' }],
        destination: 'https://www.cropinsurance.co.nz/:path*',
        permanent: true,
      },
      // Old short-slug crop pages → new -insurance slugs
      { source: '/crops/kiwifruit/', destination: '/crops/kiwifruit-insurance/', permanent: true },
      { source: '/crops/apple-pear/', destination: '/crops/apple-pear-insurance/', permanent: true },
      { source: '/crops/grape-vineyard/', destination: '/crops/grape-vineyard-insurance/', permanent: true },
      { source: '/crops/wheat-grain/', destination: '/crops/wheat-grain-insurance/', permanent: true },
      { source: '/crops/maize/', destination: '/crops/maize-insurance/', permanent: true },
      { source: '/crops/hops/', destination: '/crops/hops-insurance/', permanent: true },
      { source: '/crops/stone-fruit/', destination: '/crops/stone-fruit-insurance/', permanent: true },
      { source: '/crops/avocado/', destination: '/crops/avocado-insurance/', permanent: true },
      { source: '/crops/berry/', destination: '/crops/berry-insurance/', permanent: true },
      { source: '/crops/flower-ornamental/', destination: '/crops/flower-ornamental-insurance/', permanent: true },
      { source: '/crops/vegetable-crop/', destination: '/crops/vegetable-crop-insurance/', permanent: true },
      { source: '/crops/barley/', destination: '/crops/barley-insurance/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
