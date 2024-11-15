import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'NODE_ENV=test pnpm run build && NODE_ENV=test pnpm run preview',
		port: 4173,
		stdout: 'pipe',
		stderr: 'pipe'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
