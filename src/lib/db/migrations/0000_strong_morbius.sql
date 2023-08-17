CREATE TABLE `daily_info` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` int NOT NULL,
	`variant` varchar(256) NOT NULL,
	`price` decimal(15,2) NOT NULL,
	`price_en` decimal(15,2) NOT NULL,
	CONSTRAINT `daily_info_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `daily_price` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` int NOT NULL,
	`sell_price` decimal(15,2) NOT NULL,
	`buyback_price` decimal(15,2) NOT NULL,
	`sell_price_en` decimal(15,2) NOT NULL,
	`buyback_price_en` decimal(15,2) NOT NULL,
	CONSTRAINT `daily_price_id` PRIMARY KEY(`id`),
	CONSTRAINT `daily_price_date_unique` UNIQUE(`date`)
);
--> statement-breakpoint
CREATE TABLE `main_info` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`date` int NOT NULL,
	`sell_price` decimal(15,2) NOT NULL,
	`buyback_price` decimal(15,2) NOT NULL,
	`sell_price_en` decimal(15,2) NOT NULL,
	`buyback_price_en` decimal(15,2) NOT NULL,
	CONSTRAINT `main_info_id` PRIMARY KEY(`id`),
	CONSTRAINT `main_info_date_unique` UNIQUE(`date`)
);
--> statement-breakpoint
CREATE INDEX `date_idx` ON `daily_info` (`date`);--> statement-breakpoint
CREATE INDEX `date_idx` ON `daily_price` (`date`);--> statement-breakpoint
CREATE INDEX `date_idx` ON `main_info` (`date`);