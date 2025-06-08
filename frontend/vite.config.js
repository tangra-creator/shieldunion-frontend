import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

// Custom plugin to copy _redirects after build
function copyRedirects() {
  return {
    name: 'copy-redirects',
    closeBundle() {
      copyFileSync('public/_redirects', 'dist/_redirects');
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyRedirects()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './' // important for relative paths on build
});
