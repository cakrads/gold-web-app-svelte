import { db, schema } from '$lib/db';
import { eq } from 'drizzle-orm';

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

	public async updateLastPrice(data: MainInfoCreate): Promise<MainInfo> {
		await db.update(schema.mainInfo).set(data).where(eq(schema.mainInfo.id, 1));

		return await this.latestPrice();
	}

	public async latestPrice(): Promise<MainInfo> {
		const latestPrice = await db.query.mainInfo.findFirst();

		if (!latestPrice) {
			return {} as MainInfo;
		}

		return latestPrice;
	}
}

const singletonMainInfoService = MainInfoService.getInstance();
export default singletonMainInfoService;
