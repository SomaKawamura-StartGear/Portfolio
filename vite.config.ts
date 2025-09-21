import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import swc from "unplugin-swc";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    swc.vite({
      tsconfigFile: './tsconfig.app.json',
    }),
    react()
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
  },
});