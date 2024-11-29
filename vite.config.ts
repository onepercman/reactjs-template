import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react({ tsDecorators: true }), viteTsConfigPaths()],
  server: { host: true, port: 3000 },
})
