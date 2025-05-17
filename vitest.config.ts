import viteTsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

export default defineConfig({
  plugins: [viteTsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 10000,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.tsx', 'src/components/**/index.ts'],
      thresholds: {
        branches: 69,
        functions: 73,
        lines: 73,
        statements: 74,
      },
    },
    passWithNoTests: true,
    setupFiles: './setup.ts',
  },
})
