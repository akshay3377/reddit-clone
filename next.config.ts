// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dfstudio-d420.kxcdn.com" , "randomuser.me" , "api.dicebear.com" , "https://api.dicebear.com/"], // Add allowed image domains here
  },
  // other config options
};

export default nextConfig;
