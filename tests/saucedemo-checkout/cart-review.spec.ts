import { test, expect } from '@playwright/test';

test.describe('SCRUM-101 cart review', () => {
  test('shows the cart details and supports cart navigation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('.shopping_cart_link').click();

    const itemNames = page.locator('.inventory_item_name');

    await expect(page.locator('.cart_item')).toHaveCount(2);
    await expect(itemNames).toHaveCount(2);
    await expect(itemNames.nth(0)).toContainText('Sauce Labs Backpack');
    await expect(itemNames.nth(1)).toContainText('Sauce Labs Bike Light');
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();

    await page.locator('[data-test="continue-shopping"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
});
