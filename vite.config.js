import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['problematic-module'], // Replace 'problematic-module' with the actual module name
    },
  },
});
