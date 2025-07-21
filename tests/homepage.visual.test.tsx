import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('Home Page should display correctly', async ({ page }, testInfo) => {
    testInfo.snapshotSuffix = '';

    await page.goto('http://localhost:5173/');
    await page.waitForSelector('#root');

    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  });
});
