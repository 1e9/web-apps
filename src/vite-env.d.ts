/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_TG_BOT_TOKEN: string
    readonly VITE_API_BASE: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
