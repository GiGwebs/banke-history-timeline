import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: ['es2020', 'chrome89', 'firefox89', 'safari15'],
  },
  esbuild: {
    supported: {
      'dynamic-import': true,
      'import-meta': true,
    },
  },
});
