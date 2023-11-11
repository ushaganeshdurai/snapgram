import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'https://cloud.appwrite.io',
        changeOrigin:true,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173', // Specify the allowed origin
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Specify allowed methods
          'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify allowed headers
          'Access-Control-Allow-Credentials': 'true', // Enable credentials if needed
        },
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
