import type { InferModel } from 'drizzle-orm';
import { mysqlTable, int, decimal, serial, index, varchar, } from 'drizzle-orm/mysql-core';

// only have one row, to get the latest info
export const mainInfo = mysqlTable('main_info', {
  id: serial('id').primaryKey().notNull(),
  date: int('date').unique().notNull(),
  sellPrice: decimal('sell_price', { precision: 15, scale: 2 }).notNull(),
  buybackPrice: decimal('buyback_price', { precision: 15, scale: 2 }).notNull(),
  sellPriceEn: decimal('sell_price_en', { precision: 15, scale: 2 }).notNull(),
  buybackPriceEn: decimal('buyback_price_en', { precision: 15, scale: 2 }).notNull(),
}, (table) => {
  return {
    dateIdx: index("date_idx").on(table.date),
  };
});

// will have many row, used by chart/graph
export const dailyPrice = mysqlTable('daily_price', {
  id: serial('id').primaryKey().notNull(),
  date: int('date').unique().notNull(),
  sellPrice: decimal('sell_price', { precision: 15, scale: 2 }).notNull(),
  buybackPrice: decimal('buyback_price', { precision: 15, scale: 2 }).notNull(),
  sellPriceEn: decimal('sell_price_en', { precision: 15, scale: 2 }).notNull(),
  buybackPriceEn: decimal('buyback_price_en', { precision: 15, scale: 2 }).notNull(),
}, (table) => {
  return {
    dateIdx: index("date_idx").on(table.date),
  };
});

// will have many row, will group by date and show all variant price in that date.
export const dailyInfo = mysqlTable('daily_info', {
  id: serial('id').primaryKey().notNull(),
  date: int('date').notNull(),
  variant: varchar('variant', { length: 256 }).notNull(),
  price: decimal('price', { precision: 15, scale: 2 }).notNull(),
  priceEn: decimal('price_en', { precision: 15, scale: 2 }).notNull(),
}, (table) => {
  return {
    dateIdx: index('date_idx').on(table.date),
  };
});

export type MainInfo = InferModel<typeof mainInfo, "select">;
export type MainInfoCreate = InferModel<typeof mainInfo, "insert">;
export type DailyPrice = InferModel<typeof dailyPrice, "select">;
export type DailyPriceCreate = InferModel<typeof dailyPrice, "insert">;
export type DailyInfo = InferModel<typeof dailyInfo, "select">;
export type DailyInfoCreate = InferModel<typeof dailyInfo, "insert">