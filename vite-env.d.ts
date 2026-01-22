// Removed reference to fix compiler error: Cannot find type definition file for 'vite/client'
// The necessary declarations for asset imports are provided manually below.
// /// <reference types="vite/client" />

declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
