import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outputFileTracingRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot,
};

export default nextConfig;
