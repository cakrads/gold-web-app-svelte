import { mysqlTable, int, decimal, serial, index, varchar, } from 'drizzle-orm/mysql-core';

export const mainInfo = mysqlTable('main_info', {
  id: serial('id').primaryKey(),
  date: int('date').unique(),
  sellPrice: decimal('sell_price', { scale: 2 }),
  buybackPrice: decimal('buyback_price', { scale: 2 }),
  sellPriceEn: decimal('sell_price_en', { scale: 2 }),
  buybackPriceEn: decimal('buyback_price_en', { scale: 2 }),
}, (table) => {
  return {
    dateIdx: index("date_idx").on(table.date),
  };
});

export const dailyPrice = mysqlTable('daily_price', {
  id: serial('id').primaryKey(),
  variant: varchar('variant', { length: 256 }),
  date: int('date'),
  price: decimal('price'),
  priceEn: decimal('price_en'),
}, (table) => {
  return {
    dateIdx: index('date_idx').on(table.date),
  };
});