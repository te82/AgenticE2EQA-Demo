const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const dir = 'test-results/manual-screenshots';
  fs.mkdirSync(dir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.screenshot({ path: `${dir}/01-login.png` });

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.screenshot({ path: `${dir}/02-inventory.png` });

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.screenshot({ path: `${dir}/03-cart.png` });

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await page.screenshot({ path: `${dir}/04-overview.png` });

  await page.locator('[data-test="finish"]').click();
  await page.screenshot({ path: `${dir}/05-confirmation.png` });

  await browser.close();
  console.log(`Screenshots saved to ${dir}`);
})();
