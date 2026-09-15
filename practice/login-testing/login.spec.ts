import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

test('TC-001: User can log in with valid credentials', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory.html/);
});

test('TC-002: Login is rejected with an invalid password', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText(
        'Epic sadface: Username and password do not match any user in this service'
      );
});

test('TC-003: Login is rejected with an invalid username', async ({ page }) => {
    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText(
        'Epic sadface: Username and password do not match any user in this service'
      );
  });

  test('TC-004: Login is rejected when username is blank', async ({ page }) => {
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText(
        'Epic sadface: Username is required'
    );
  });

  test('TC-005: Login is rejected when password is blank', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Password is required'
    );
  });