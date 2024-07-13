// declaration.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    PUBLIC_KEY: string;
    // Add other environment variables here if needed
  }
}

// Allow importing .env files
declare module "*.env" {
  const content: any;
  export default content;
}

declare module "shared/constants/index.js" {
  export const skills: { name: string; level: string }[];
}

declare module "*.glb" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.mp3" {
  const content: any;
  export default content;
}
