import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC_URL,
  plugins: [react({ tsDecorators: true }), viteTsConfigPaths()],
  server: { host: true, port: 3000 },
}))
