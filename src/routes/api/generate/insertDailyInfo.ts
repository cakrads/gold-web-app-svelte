import DailyInfoService, { type DailyInfoCreate } from '$lib/services/daily-info';
import { isSameDate } from './utils';

export async function insertDailyInfo(dailyInfo: DailyInfoCreate[]) {
  const latestData = await DailyInfoService.getLatestData();

  if (latestData && isSameDate(latestData.date, Date.now())) {
    DailyInfoService.deleteByDate(latestData.date);
  }

  return DailyInfoService.instertMultiple(dailyInfo);
}
