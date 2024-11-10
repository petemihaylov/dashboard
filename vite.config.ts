import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@utils/*': path.resolve(__dirname, './src/utils/*'),
    } as AliasOptions,
  },
});
