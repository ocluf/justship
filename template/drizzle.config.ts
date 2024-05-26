import type { Config } from 'drizzle-kit';
export default {
	schema: './src/lib/server/database/schema.ts',
	out: './drizzle'
} satisfies Config;
