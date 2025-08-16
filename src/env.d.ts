// Tell TypeScript how to handle common static asset imports used in this project
declare module "*.svg" { const content: string; export default content; }
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";