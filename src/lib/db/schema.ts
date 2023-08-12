import type { InferModel } from 'drizzle-orm';
import { mysqlTable, int, decimal, serial, index, varchar, } from 'drizzle-orm/mysql-core';

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

export const dailyPrice = mysqlTable('daily_price', {
  id: serial('id').primaryKey().notNull(),
  variant: varchar('variant', { length: 256 }).notNull(),
  date: int('date').notNull(),
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