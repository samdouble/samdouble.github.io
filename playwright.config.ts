import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: './tests',
  testMatch: '**/*.visual.test.tsx',
  timeout: 10 * 1000,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:5173',
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        viewport: {
          width: 393,
          height: 727,
        },
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },
  ],
  webServer: {
    command: 'npm start',
    env: {
      ...process.env,
      NODE_ENV: 'development',
      DEBUG: 'pw:webserver',
    },
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    url: 'http://localhost:5173',
  },
});
