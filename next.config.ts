import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const isUserPage = repository && owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubPages && repository && !isUserPage ? `/${repository}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
