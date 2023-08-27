import DailyInfoService, { type DailyInfo } from '$lib/services/daily-info';
import { isSameDate } from './utils';

export async function insertDailyInfo(dailyInfo: DailyInfo[]) {
  const latestData = await DailyInfoService.getLatestData();
  console.log({ latestData });

  if (latestData) {
    if (isSameDate(latestData.date, Date.now())) {
      DailyInfoService.deleteByDate(latestData.date);
    }
  }

  return DailyInfoService.instertMultiple(dailyInfo);
}
