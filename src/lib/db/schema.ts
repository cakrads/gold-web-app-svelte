import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { mysqlTable, int, double, serial, index, varchar } from 'drizzle-orm/mysql-core';

// only have one row, to get the latest info
export const mainInfo = mysqlTable(
	'main_info',
	{
		id: serial('id').primaryKey().notNull(),
		date: int('date').unique().notNull(),
		sellPrice: double('sell_price', { precision: 15, scale: 2 }).notNull(),
		buybackPrice: double('buyback_price', { precision: 15, scale: 2 }).notNull(),
		changePrice: double('change_price', { precision: 15, scale: 2 }).notNull(),
		dollarToRupiah: double('dollar_to_rupiah', { precision: 15, scale: 2 }).notNull(),
		sellPriceEn: double('sell_price_en', { precision: 15, scale: 2 }).notNull(),
		buybackPriceEn: double('buyback_price_en', { precision: 15, scale: 2 }).notNull(),
		changePriceEn: double('change_price_en', { precision: 15, scale: 2 }).notNull()
	},
	(table) => {
		return {
			dateIdx: index('date_idx').on(table.date)
		};
	}
);

// will have many row, used by chart/graph
export const dailyPrice = mysqlTable(
	'daily_price',
	{
		id: serial('id').primaryKey().notNull().autoincrement(),
		date: int('date').unique().notNull(),
		sellPrice: double('sell_price', { precision: 15, scale: 2 }).notNull(),
		buybackPrice: double('buyback_price', { precision: 15, scale: 2 }).notNull(),
		changePrice: double('change_price', { precision: 15, scale: 2 }).notNull(),
		dollarToRupiah: double('dollar_to_rupiah', { precision: 15, scale: 2 }).notNull(),
		sellPriceEn: double('sell_price_en', { precision: 15, scale: 2 }).notNull(),
		buybackPriceEn: double('buyback_price_en', { precision: 15, scale: 2 }).notNull(),
		changePriceEn: double('change_price_en', { precision: 15, scale: 2 }).notNull()
	},
	(table) => {
		return {
			dateIdx: index('date_idx').on(table.date)
		};
	}
);

// will have many row, will group by date and show all variant price in that date.
export const dailyInfo = mysqlTable(
	'daily_info',
	{
		id: serial('id').primaryKey().notNull().autoincrement(),
		date: int('date').notNull(),
		variant: varchar('variant', { length: 256 }).notNull(),
		price: double('price', { precision: 15, scale: 2 }).notNull(),
		priceEn: double('price_en', { precision: 15, scale: 2 }).notNull()
	},
	(table) => {
		return {
			dateIdx: index('date_idx').on(table.date)
		};
	}
);

export type MainInfo = InferSelectModel<typeof mainInfo>;
export type MainInfoCreate = InferInsertModel<typeof mainInfo>;
export type DailyPrice = InferSelectModel<typeof dailyPrice>;
export type DailyPriceCreate = InferInsertModel<typeof dailyPrice>;
export type DailyInfo = InferSelectModel<typeof dailyInfo>;
export type DailyInfoCreate = InferInsertModel<typeof dailyInfo>;
