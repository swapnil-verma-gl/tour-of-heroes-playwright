import { expect, test } from '@playwright/test';

test.describe('test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200");
  })

  test('first test', async ({ page }) => {

    await expect(page).toHaveTitle(/Tour of Heroes/);
    await page.click('[routerLink="/heroes"]');
    await page.click('button :text-is("Clear messages")');
  });

})
