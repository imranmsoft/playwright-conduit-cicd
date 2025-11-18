// ...existing code...
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  fullyParallel: true,
  use: {
    // use APP_URL if set, otherwise fall back to the canonical URL
    baseURL: process.env.APP_URL ?? 'https://conduit.bondaracademy.com',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'auth/storageState.json',
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
});
// ...existing code...