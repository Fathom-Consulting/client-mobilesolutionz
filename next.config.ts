import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lpsog3i64o.ufs.sh" },
      { protocol: "https", hostname: "kcxusa.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "shinesupply.com" },
      { protocol: "https", hostname: "www.sonax.com" },
      { protocol: "https", hostname: "www.systemxceramiccoating.com" },
      { protocol: "https", hostname: "behold.pictures" },
    ],
  },
};

export default nextConfig;
