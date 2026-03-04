import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // preserveSymlinks prevents Vite from following the file:../.. symlink into the
  // root package, which would break peer-dep resolution (react-redux, react-intl, etc.)
  resolve: {
    preserveSymlinks: true,
    dedupe: ['react', 'react-dom', 'react-intl', 'react-redux'],
  },
});
