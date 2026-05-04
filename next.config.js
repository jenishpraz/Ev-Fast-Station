/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopcdnpro.grainajz.com',
      },
    ],
  },
};

export const images = {
  domains: ["images.unsplash.com"],
};
