// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"
declare module "*.svg" {
  const content: any
  export default content
}

declare module "gatsby-plugin-breadcrumb"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"
