ALTER TABLE `daily_price` MODIFY COLUMN `price` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `daily_price` MODIFY COLUMN `price_en` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `buyback_price` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `sell_price_en` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `buyback_price_en` decimal(15,2) NOT NULL;