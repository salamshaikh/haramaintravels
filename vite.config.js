import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.woff2', '**/*.ttf']
  }

})
