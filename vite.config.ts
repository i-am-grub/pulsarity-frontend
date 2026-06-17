import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Features } from "lightningcss"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
      transformer: "lightningcss",
      lightningcss: {
          exclude: Features.LightDark,
      },
  },
  server: {
    host: 'localhost', // Changes the host URL from localhost
    port: 3000,                  // Changes the port number
    strictPort: true,            // Avoids trying next available port if 3000 is taken
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend URL
        changeOrigin: true,
        secure: false,
      }
    }}
})
