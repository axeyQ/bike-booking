/** @type {import('next').NextConfig} */
const nextConfig = {  env: {
    MONGODB_URI: process.env.MONGODB_URI, // Makes the MONGO_URI available in your app
  },};

export default nextConfig;
