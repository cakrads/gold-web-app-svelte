ALTER TABLE `daily_price` ADD `change_price` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `daily_price` ADD `change_price_en` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` ADD `change_price` decimal(15,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `main_info` ADD `change_price_en` decimal(15,2) NOT NULL;