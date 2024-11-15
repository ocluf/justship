import { test, expect } from '@playwright/test';
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';

test.describe('Authentication Flow', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/login');
		await page.waitForLoadState('networkidle');
	});

	test('displays initial login options', async ({ page }) => {
		// Should show both Google and Email options initially
		await expect(page.getByRole('link', { name: /continue with google/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /continue with email/i })).toBeVisible();
	});

	test('Google login redirects to Google auth', async ({ page }) => {
		const googleButton = page.getByRole('link', { name: /continue with google/i });
		await expect(googleButton).toHaveAttribute('href', '/login/google');
	});

	test('email login flow - valid email', async ({ page }) => {
		const testEmail = 'test@example.com';

		// Click email login button
		await page.getByRole('button', { name: /continue with email/i }).click();

		// Form should appear
		const emailInput = page.getByPlaceholder('Email');
		await expect(emailInput).toBeVisible();

		// Fill and submit form
		await emailInput.fill(testEmail);
		await page.getByRole('button', { name: 'Continue' }).click();

		// Check success message
		await expect(page.getByText(/check your inbox/i)).toBeVisible();
		await expect(page.getByText(/we've sent you an activation link/i)).toBeVisible();

		// Wait a bit for the file to be written
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Read and delete the verification link file
		const linkPath = join(process.cwd(), 'test-results', 'verification-link.txt');
		const verificationLink = readFileSync(linkPath, 'utf-8');
		unlinkSync(linkPath); // Clean up the file

		expect(verificationLink).toBeTruthy();

		// Visit the verification link
		await page.goto(verificationLink);
		// Take a screenshot of the home page after successful login
		await page.screenshot({ path: 'test-results/logged-in-home.png', fullPage: true });
		await expect(page.locator('body')).toBeVisible();
	});

	test('email login flow - invalid email', async ({ page }) => {
		// Click email login button
		await page.getByRole('button', { name: /continue with email/i }).click();

		// Fill invalid email and submit
		await page.getByPlaceholder('Email').fill('invalid-email');
		await page.getByRole('button', { name: 'Continue' }).click();

		// Should show validation error
		await expect(page.getByText(/invalid email/i)).toBeVisible();
	});

	test('email input gets focus when switching to email login', async ({ page }) => {
		await page.getByRole('button', { name: /continue with email/i }).click();

		// Check if email input is focused
		await expect(page.getByPlaceholder('Email')).toBeFocused();
	});
});
