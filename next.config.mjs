/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // necessário para o Docker multi-stage build
};

export default nextConfig;
