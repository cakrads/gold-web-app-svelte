ALTER TABLE `daily_price` MODIFY COLUMN `variant` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `daily_price` MODIFY COLUMN `date` int NOT NULL;--> statement-breakpoint
ALTER TABLE `daily_price` MODIFY COLUMN `price` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `daily_price` MODIFY COLUMN `price_en` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `sell_price` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `buyback_price` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `sell_price_en` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` MODIFY COLUMN `buyback_price_en` decimal NOT NULL;