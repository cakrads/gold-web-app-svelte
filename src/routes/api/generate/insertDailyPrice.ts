import DailyPriceService, { type DailyPriceCreate } from '$lib/services/daily-price';
import { isSameDate } from './utils';

export async function insertDailyPrice(dailyPrice: DailyPriceCreate) {
  const latestData = await DailyPriceService.getLatestData();

  if (latestData) {
    if (isSameDate(latestData.date, Date.now())) {
      dailyPrice.changePrice = latestData.changePrice;
      return await DailyPriceService.updateById(latestData.id, dailyPrice);
    } else {
      dailyPrice.changePrice = dailyPrice.sellPrice - latestData.sellPrice;
      return await DailyPriceService.instert(dailyPrice);
    }
  } else {
    console.log(4);
    console.log({ dailyPrice });
    return await DailyPriceService.instert(dailyPrice);
  }
}
