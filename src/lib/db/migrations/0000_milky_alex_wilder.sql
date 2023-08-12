CREATE TABLE `daily_price` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`variant` varchar(256),
	`date` int,
	`price` decimal,
	`price_en` decimal,
	CONSTRAINT `daily_price_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `main_info` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` int,
	`sell_price` decimal,
	`buyback_price` decimal,
	`sell_price_en` decimal,
	`buyback_price_en` decimal,
	CONSTRAINT `main_info_id` PRIMARY KEY(`id`),
	CONSTRAINT `main_info_date_unique` UNIQUE(`date`)
);
--> statement-breakpoint
CREATE INDEX `date_idx` ON `daily_price` (`date`);--> statement-breakpoint
CREATE INDEX `date_idx` ON `main_info` (`date`);