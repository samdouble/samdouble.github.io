import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('Home Page should display correctly', async ({ page }, testInfo) => {
    testInfo.snapshotSuffix = '';

    await page.goto('http://localhost:5173/');
    await page.waitForSelector('#root');
    const root = await page.locator('#root');
    const box = await root.boundingBox();

    await expect(page).toHaveScreenshot('homepage.png', { clip: box, fullPage: true });
  });
});
