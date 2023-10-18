/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/RemiLeBeau/blogposts-repo/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
