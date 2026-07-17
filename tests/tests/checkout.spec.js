const { test, expect } = require('@playwright/test');

test('Complete Checkout', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name')
        .fill('standard_user');

    await page.locator('#password')
        .fill('secret_sauce');

    await page.locator('#login-button')
        .click();

    // Add product to cart
    await page.locator('#add-to-cart-sauce-labs-backpack')
        .click();

    // Open cart
    await page.locator('.shopping_cart_link')
        .click();

    // Checkout
    await page.locator('#checkout')
        .click();

    // Fill customer information
    await page.locator('#first-name')
        .fill('Arshdeep');

    await page.locator('#last-name')
        .fill('Kaur');

    await page.locator('#postal-code')
        .fill('V5C1A1');

    await page.locator('#continue')
        .click();

    // Complete order
    await page.locator('#finish')
        .click();

    // Verify successful order
    await expect(
        page.getByText('Thank you for your order!')
    ).toBeVisible();

});