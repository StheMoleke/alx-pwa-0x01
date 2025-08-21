import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public", // where the service worker + manifest will be generated
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // allow movie posters from IMDb
  },
};

export default withPWA({
  ...nextConfig,
});
