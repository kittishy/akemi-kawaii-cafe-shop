import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-missing-modules',
      resolveId(id) {
        // Handle react-icons imports specifically
        if (id.startsWith('react-icons/')) {
          return { id: 'virtual:empty-module', external: false };
        }
        return null;
      },
      load(id) {
        if (id === 'virtual:empty-module') {
          // Return an empty module that exports a component that renders nothing
          return `
            import React from 'react';
            export const FaTwitter = () => React.createElement('span', null, 'T');
            export const FaFacebook = () => React.createElement('span', null, 'F');
            export const FaWhatsapp = () => React.createElement('span', null, 'W');
            export const FaLink = () => React.createElement('span', null, 'L');
            export default { FaTwitter, FaFacebook, FaWhatsapp, FaLink };
          `;
        }
        return null;
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
