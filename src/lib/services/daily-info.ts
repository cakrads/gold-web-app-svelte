import { db, schema } from '$lib/db';
import { desc, eq } from 'drizzle-orm';

export type DailyInfo = schema.DailyInfo;
export type DailyInfoCreate = schema.DailyInfoCreate;

export const dailyInfoVariant = {
	'05_GR': '0.5 gr',
	'1_GR': '1 gr',
	'2_GR': '2 gr',
	'3_GR': '3 gr',
	'5_GR': '5 gr',
	'10_GR': '10 gr',
	'25_GR': '25 gr',
	'50_GR': '50 gr',
	'100_GR': '100 gr',
	'250_GR': '250 gr',
	'500_GR': '500 gr',
	'1000_GR': '1000 gr (1kg)',
};

class DailyInfoService {
	private static instance: DailyInfoService;

	constructor() {
		//
	}

	public static getInstance(): DailyInfoService {
		if (!DailyInfoService.instance) {
			DailyInfoService.instance = new DailyInfoService();
		}

		return DailyInfoService.instance;
	}

	public async instert(data: DailyInfoCreate): Promise<void> {
		const result = await db.insert(schema.dailyInfo).values(data);

		console.log('insert success', { result });
	}

	public async instertMultiple(data: DailyInfoCreate[]): Promise<void> {
		const result = await db.insert(schema.dailyInfo).values(data);

		console.log('insert multiple success', { result });
	}

	public async updateById(id: number, data: DailyInfoCreate): Promise<void> {
		const result = await db.update(schema.dailyInfo)
			.set(data)
			.where(eq(schema.dailyInfo.id, id));

		console.log('update success', { result });
	}

	public async getById(id: number): Promise<DailyInfo> {
		const data = await db.query.dailyInfo.findFirst({
			where: eq(schema.dailyInfo.id, id)
		});

		if (!data) {
			return {} as DailyInfo;
		}

		return data;
	}

	public async getByDate(date: number): Promise<DailyInfo[]> {
		const data = await db.query.dailyInfo.findMany({
			where: eq(schema.dailyInfo.date, date)
		});

		if (!data) {
			return [] as DailyInfo[];
		}

		return data;
	}

	public async getLatestData(): Promise<DailyInfo | undefined> {
		const data = await db.select().from(schema.dailyInfo)
			.orderBy(desc(schema.dailyInfo.id)).execute();

		if (!data) {
			return {} as DailyInfo;
		}

		return data[0];
	}

	public async deleteByDate(date: number) {
		const result = await db.delete(schema.dailyInfo)
			.where(eq(schema.dailyInfo.date, date));

		console.log('delete success', { result });
	}
}

const singletonDailyInfoService = DailyInfoService.getInstance();
export default singletonDailyInfoService;
