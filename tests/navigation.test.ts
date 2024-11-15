import { test, expect } from '@playwright/test';
import { type Page } from '@playwright/test';

// Helper function to check console errors
const checkNoConsoleErrors = async (page: Page): Promise<string[]> => {
	const errors: string[] = [];
	page.on('console', (msg: { type: () => string; text: () => string }) => {
		if (msg.type() === 'error') {
			errors.push(`Console Error: ${msg.text()}`);
		}
	});
	return errors;
};

test.describe('Page Navigation Tests', () => {
	test.beforeEach(async ({ page }) => {
		// Clear any existing listeners
		await page.removeAllListeners('console');
	});

	// Test main page
	test('main page loads without errors', async ({ page }) => {
		const errors = await checkNoConsoleErrors(page);
		await page.goto('/');
		await page.waitForLoadState('networkidle');

		// Check for no console errors (except PostHog)
		expect(errors).toHaveLength(0);

		// Verify page loaded by checking for common elements
		await expect(page.locator('body')).toBeVisible();

		// Take a screenshot for visual comparison
		await page.screenshot({ path: './test-results/main-page.png' });
	});

	// Test login page
	test('login page loads without errors', async ({ page }) => {
		const errors = await checkNoConsoleErrors(page);
		await page.goto('/login');
		await page.waitForLoadState('networkidle');

		expect(errors).toHaveLength(0);
		await expect(page.locator('body')).toBeVisible();
		await page.screenshot({ path: './test-results/login-page.png' });
	});

	// Test privacy policy page
	test('privacy policy page loads without errors', async ({ page }) => {
		const errors = await checkNoConsoleErrors(page);
		await page.goto('/privacy-policy');
		await page.waitForLoadState('networkidle');

		expect(errors).toHaveLength(0);
		await expect(page.locator('body')).toBeVisible();
		await page.screenshot({ path: './test-results/privacy-policy-page.png' });
	});

	// Add more specific route tests here as needed
});
