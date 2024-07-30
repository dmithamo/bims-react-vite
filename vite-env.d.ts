/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
  readonly VITE_PROD_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
