import react from "@vitejs/plugin-react-swc"
import { randomUUID } from "crypto"
import { defineConfig, loadEnv } from "vite"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import vitePluginRadar from "vite-plugin-radar"
import svgr from "vite-plugin-svgr"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"
import { dependencies } from "./package.json"

const globalVendorPackages = ["react", "react-dom", "react-router-dom"]

function chunkDeps(deps: Record<string, string>) {
  const chunks = {}
  Object.keys(deps).forEach((key) => {
    if (globalVendorPackages.includes(key)) return
    chunks[randomUUID()] = [key]
  })
  return chunks
}

export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC_URL,
  plugins: [
    nodePolyfills(),
    react({
      tsDecorators: true,
    }),
    viteTsConfigPaths(),
    svgr({ include: "**/*.svg", svgrOptions: { icon: true, replaceAttrValues: { fill: "currentColor" } } }),
    vitePluginRadar({
      analytics: {
        id: loadEnv(mode, process.cwd()).VITE_GA_ID,
      },
      enableDev: true,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: globalVendorPackages,
          ...chunkDeps(dependencies),
        },
      },
    },
  },
}))
