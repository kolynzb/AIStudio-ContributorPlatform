import type { NextConfig } from "next"
import "./env"

const nextConfig: NextConfig = {
  // output: "standalone", // For Docker deployment

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
}

export default nextConfig
