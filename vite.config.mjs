import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    tsconfigPaths(),
    react(),
  ],
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    exclude: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/*.visual.test.tsx',
    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      all: true,
    }
  },
});
