import { dailyInfoVariant, type DailyInfo, } from '$lib/services/daily-info';
import { rupiahToDollar } from '$lib/utils/currency';
import { extractElementContent, fetchHTML } from './utils';
import { SOURCE_1 } from '$env/static/private';

const URL = SOURCE_1;
const SELECTOR: Map<string, string> = new Map([
  ['05_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2)'],
  ['1_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2)'],
  ['2_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2)'],
  ['3_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2)'],
  ['5_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(7) > td:nth-child(2)'],
  ['10_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(2)'],
  ['25_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(9) > td:nth-child(2)'],
  ['50_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(10) > td:nth-child(2)'],
  ['100_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(11) > td:nth-child(2)'],
  ['250_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(12) > td:nth-child(2)'],
  ['500_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(13) > td:nth-child(2)'],
  ['1000_GR', 'body > section.section-padding.n-no-padding-top > div > div:nth-child(3) > table:nth-child(3) > tbody > tr:nth-child(14) > td:nth-child(2)'],
]);

interface IScrapDailyInfo {
  status: boolean;
  data: DailyInfo[];
}

interface IParams {
  date: number;
  dollarToRupiah: number;
}

export async function scrapDailyInfo({ date, dollarToRupiah }: IParams): Promise<IScrapDailyInfo> {

  const html = await fetchHTML(URL);
  const variantKeys = Object.keys(dailyInfoVariant);
  const variantValues = Object.values(dailyInfoVariant);

  const sellPrice = variantKeys.map((key, index) => {
    const getValue = extractElementContent(html, SELECTOR.get(key) ?? '');
    const price = Number(String(getValue).replaceAll(',', ''));

    return {
      date,
      variant: variantValues[index],
      price,
      priceEn: rupiahToDollar(price, dollarToRupiah),
    } as DailyInfo;
  });

  return {
    status: sellPrice.every((value) => value.price > 0),
    data: sellPrice,
  };
}