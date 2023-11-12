import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.VITE_PROJECT_ID': JSON.stringify(env.PRO_ID),
      'process.env.VITE_APPWRITE_URL': JSON.stringify(env.URL),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
