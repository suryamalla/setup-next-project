/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.pravatar.cc"
          }
        ]
      },
};

export default nextConfig;
