
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Brotli-compress all assets > 10 KB for production
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 10240 }),
    // Also produce gzip for hosts that don't support Brotli
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 10240 }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    // Split the bundle into logical chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-spline': ['@splinetool/react-spline', '@splinetool/runtime'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});