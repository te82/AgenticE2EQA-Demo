import { test, expect } from '@playwright/test';

test.describe('SCRUM-101 checkout validation', () => {
  test('shows the required validation messages for empty checkout fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]').first()).toContainText('First Name is required');

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]').first()).toContainText('Last Name is required');

    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]').first()).toContainText('Postal Code is required');
  });
});
