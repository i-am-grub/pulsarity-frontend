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
})
