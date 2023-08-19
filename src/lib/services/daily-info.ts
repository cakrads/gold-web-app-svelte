import { db, schema } from "$lib/db";
import { eq } from "drizzle-orm";

export type DailyInfo = schema.DailyInfo;
export type DailyInfoCreate = schema.DailyInfoCreate;

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

  public async instertMultiple(data: DailyInfoCreate[]): Promise<void> {
    const result = await db.insert(schema.dailyInfo)
      .values(data);

    console.log({ result });
  }

  public async getById(id: number): Promise<DailyInfo> {
    const data = await db.query.dailyInfo.findFirst({
      where: eq(schema.dailyInfo.id, id)
    })

    if (!data) {
      throw new Error(`DailyInfo was empty`);
    }

    return data;
  }

  public async getByDate(date: number): Promise<DailyInfo[]> {
    const data = await db.query.dailyInfo.findMany({
      where: eq(schema.dailyInfo.date, date)
    })

    if (!data) {
      throw new Error(`DailyInfo was empty`);
    }

    return data;
  }


}

const singletonDailyInfoService = DailyInfoService.getInstance();
export default singletonDailyInfoService;
