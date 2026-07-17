const { test, expect } = require('@playwright/test');

test('Add Product To Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
        .fill('standard_user');

    await page.locator('#password')
        .fill('secret_sauce');

    await page.locator('#login-button')
        .click();

    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');

});

test('Remove Product From Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
        .fill('standard_user');

    await page.locator('#password')
        .fill('secret_sauce');

    await page.locator('#login-button')
        .click();

    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    await page.locator('#remove-sauce-labs-backpack')
        .click();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveCount(0);

});