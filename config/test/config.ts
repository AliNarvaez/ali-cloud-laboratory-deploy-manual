import { defineConfig } from 'vitest/config.js';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    setupFiles: ['./config/test/setup.ts'],
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url)),
    },
  },
});
