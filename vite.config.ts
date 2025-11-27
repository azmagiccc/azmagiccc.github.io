import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './', // use relative assets so it works on GitHub Pages or custom domain roots
  plugins: [react()],
})
