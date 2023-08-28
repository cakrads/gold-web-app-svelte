import DailyPriceService, { type DailyPrice } from '$lib/services/daily-price';
import { isSameDate } from './utils';

export async function insertDailyPrice(dailyPrice: DailyPrice) {
  const latestData = await DailyPriceService.getLatestData();

  if (latestData) {
    if (isSameDate(latestData.date, Date.now())) {
      dailyPrice.changePrice = latestData.changePrice;
      return DailyPriceService.updateById(latestData.id, dailyPrice);
    }
  }

  dailyPrice.changePrice = dailyPrice.sellPrice - (latestData?.sellPrice || 0);
  return DailyPriceService.instert(dailyPrice);
}
