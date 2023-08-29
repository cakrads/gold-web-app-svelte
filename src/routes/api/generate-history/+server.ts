import DailyPriceService from '$lib/services/daily-price';
import { apiResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';
import DATA_ANTAM from './data-antam.json';
import DATA_GOLD_EN from './data-gold-en.json';
import { combineArrays, convertAntam, convertGoldEn } from './utils';

export const GET: RequestHandler = async () => {
	try {
		const historyAntam = convertAntam(DATA_ANTAM.data);
		const historyGoldEn = convertGoldEn(DATA_GOLD_EN.data);
		const dailyPrice = combineArrays(historyAntam, historyGoldEn);

		const data = {
			historyAntam,
			historyGoldEn,
			dailyPrice
		};

		await DailyPriceService.deleteAll();
		await DailyPriceService.instertMultiple(dailyPrice);

		return apiResponse(200, data, 'Daily Price retrieved successfully', false);
	} catch (error) {
		return handleError(error);
	}
};

function handleError(error: unknown) {
	// eslint-disable-next-line no-console
	console.error('An error occurred:', error);

	return apiResponse(
		500,
		[],
		String(error) || 'An error occurred while processing the request',
		true
	);
}
