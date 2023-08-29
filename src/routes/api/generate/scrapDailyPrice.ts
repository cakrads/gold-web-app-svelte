import type { DailyPriceCreate } from '$lib/services/daily-price';
import { extractElementContent, fetchHTML } from './utils';
import { SOURCE_2 } from '$env/static/private';

const URL = SOURCE_2;
const SELECTOR: Map<string, string> = new Map([
	[
		'sellPrice',
		'#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(9)'
	],
	[
		'buybackPrice',
		'#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(10)'
	],
	[
		'sellPriceEn',
		'#container > div:nth-child(3) > div.col-md-8 > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)'
	],
	[
		'changePriceEn',
		'#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > font'
	],
	[
		'currentDollar',
		'#container > div:nth-child(3) > div.col-md-8 > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3)'
	]
]);

interface IScrapDailyPrice {
	status: boolean;
	data: DailyPriceCreate;
}

interface IParams {
	date: number;
}

type IScrappedData = Omit<DailyPriceCreate, 'id' | 'date'>;

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
			date,
			...scrappedData
		}
	};
}

function extractContent(html: string, selector: string) {
	let getValue = extractElementContent(html, SELECTOR.get(selector) ?? '');

	if (getValue?.includes('(')) {
		getValue = getValue.split('(')[0].replace(' ', '');
	}
	const price = Number(String(getValue).replaceAll('.', '').replaceAll(',', '.'));

	return price;
}

function calculateBuybackEn({ buybackPrice, sellPriceEn, sellPrice }: IScrappedData) {
	return +(buybackPrice * (sellPriceEn / sellPrice)).toFixed(2);
}
