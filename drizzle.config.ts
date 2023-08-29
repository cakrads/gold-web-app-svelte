import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: './src/lib/db/schema.ts',
	out: './src/lib/db/migrations',
	driver: 'mysql2',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL
		// connectionString: process.env.DATABASE_URL_PROD
	}
} as Config;
