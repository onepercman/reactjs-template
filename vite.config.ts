import react from "@vitejs/plugin-react-swc"
import { execSync } from "child_process"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

const gitHash = execSync("git rev-parse --short HEAD").toString().trim()
const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "")
const version = `${gitHash}-${timestamp}`

export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "ReactJS Template",
        short_name: "ReactJS",
        description: "A modern React template with TypeScript and Tailwind CSS",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: { host: true, port: 3000 },
  define: { __PATCH_VERSION__: JSON.stringify(version) },
})
