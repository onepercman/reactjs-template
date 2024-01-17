import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import vitePluginRadar from "vite-plugin-radar"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC_URL,
  plugins: [
    nodePolyfills(),
    react({
      tsDecorators: true,
    }),
    viteTsConfigPaths(),
    vitePluginRadar({
      analytics: {
        id: loadEnv(mode, process.cwd()).VITE_GA_ID,
      },
      enableDev: true,
    }),
    splitVendorChunkPlugin(),
  ],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    minify: true,
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
}))
