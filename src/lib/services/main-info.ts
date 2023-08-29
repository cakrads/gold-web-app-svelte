/* eslint-disable no-console */
import { db, schema } from '$lib/db';
import { desc, eq } from 'drizzle-orm';

export type MainInfo = schema.MainInfo;
export type MainInfoCreate = schema.MainInfoCreate;

class MainInfoService {
	private static instance: MainInfoService;

	constructor() {
		//
	}

	public static getInstance(): MainInfoService {
		if (!MainInfoService.instance) {
			MainInfoService.instance = new MainInfoService();
		}

		return MainInfoService.instance;
	}

	public async insert(data: MainInfoCreate) {
		const result = await db.insert(schema.mainInfo).values(data);

		console.log('insert success', { result });
	}

	public async updateLastPrice(latestId: number, data: MainInfoCreate): Promise<MainInfo> {
		await db.update(schema.mainInfo).set(data).where(eq(schema.mainInfo.id, latestId));

		return await this.latestPrice();
	}

	public async latestPrice(): Promise<MainInfo> {
		const latestPrice = await db
			.select()
			.from(schema.mainInfo)
			.orderBy(desc(schema.mainInfo.id))
			.execute();

		if (!latestPrice.length) {
			return {} as MainInfo;
		}

		return latestPrice[0];
	}
}

const singletonMainInfoService = MainInfoService.getInstance();
export default singletonMainInfoService;
