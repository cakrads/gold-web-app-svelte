import { db, schema } from '$lib/db';
import { eq } from 'drizzle-orm';
// import { eq } from 'drizzle-orm';
import DAILY_PRICE_DATA from './daily-price-data.json';

export type DailyPrice = schema.DailyPrice;
export type DailyPriceCreate = schema.DailyPriceCreate;

class DailyPriceService {
	private static instance: DailyPriceService;

	constructor() {
		//
	}

	public static getInstance(): DailyPriceService {
		if (!DailyPriceService.instance) {
			DailyPriceService.instance = new DailyPriceService();
		}

		return DailyPriceService.instance;
	}

	public async instert(data: DailyPriceCreate): Promise<void> {
		const result = await db.insert(schema.dailyPrice).values(data);

		console.log({ result });
	}

	public async updateById(id: number, data: DailyPriceCreate): Promise<void> {
		const result = await db.update(schema.dailyPrice)
			.set(data)
			.where(eq(schema.dailyPrice.id, id));

		console.log({ result });
	}

	public getDailyPrice(): DailyPrice[] {
		return DAILY_PRICE_DATA.map((item) => {
			const data = {} as DailyPrice;
			data.sellPrice = item.sellPrice;
			data.date = item.date;
			return data;
		});
	}

	public async getLatestData(): Promise<DailyPrice | undefined> {
		const data = await db.query.dailyPrice.findFirst();
		return data;
	}

}

const singletonDailyPriceService = DailyPriceService.getInstance();
export default singletonDailyPriceService;
