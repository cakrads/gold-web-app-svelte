import type { DailyPrice } from '$lib/services/daily-price';
import { extractElementContent, fetchHTML } from './utils';

const URL = 'https://harga-emas.org/';
const SELECTOR: Map<string, string> = new Map([
  ['sellPrice', '#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(9)'],
  ['buybackPrice', '#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(10)'],
  ['sellPriceEn', '#container > div:nth-child(3) > div.col-md-8 > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)'],
  ['changePriceEn', '#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > font'],
  ['currentDollar', '#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(6)'],
]);

interface IScrapDailyPrice {
  status: boolean;
  data: DailyPrice;
}

interface IParams {
  date: number;
}

type IScrappedData = Omit<DailyPrice, 'id' | 'date'>;

export async function scrapDailyPrice({ date }: IParams): Promise<IScrapDailyPrice> {

  const html = await fetchHTML(URL);

  const scrappedData = {} as IScrappedData;
  scrappedData.sellPrice = extractContent(html, 'sellPrice');
  scrappedData.sellPriceEn = extractContent(html, 'sellPriceEn');
  scrappedData.buybackPrice = extractContent(html, 'buybackPrice');
  scrappedData.buybackPriceEn = calculateBuybackEn(scrappedData);
  scrappedData.dollarToRupiah = extractContent(html, 'currentDollar');
  scrappedData.changePrice = 0;
  scrappedData.changePriceEn = extractContent(html, 'changePriceEn');

  return {
    status: true,
    data: {
      id: 0,
      date,
      ...scrappedData
    },
  };
}

function extractContent(html: string, selector: string) {
  const getValue = extractElementContent(html, SELECTOR.get(selector) ?? '');
  console.log({ selector, getValue });
  const price = Number(String(getValue).replaceAll('.', '').replaceAll(',', '.'));
  return price;
}

function calculateBuybackEn({ buybackPrice, sellPriceEn, sellPrice }: IScrappedData) {
  return +(buybackPrice * (sellPriceEn / sellPrice)).toFixed(2);
}
