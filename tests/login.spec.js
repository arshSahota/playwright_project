const { test, expect } = require('@playwright/test');

test('Successful Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
        .fill('standard_user');

    await page.locator('#password')
        .fill('secret_sauce');

    await page.locator('#login-button')
        .click();

    await expect(page)
        .toHaveURL(/inventory/);

});

test('Invalid Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
        .fill('wronguser');

    await page.locator('#password')
        .fill('wrongpass');

    await page.locator('#login-button')
        .click();

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();

});