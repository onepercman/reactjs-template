/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  ethereum: any
}

declare const __COMMIT_HASH__: string
