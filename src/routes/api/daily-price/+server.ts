import DailyPriceService from '$lib/services/daily-price';
import type { DailyPrice } from '$lib/services/daily-price';
import { apiResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		// Get daily price
		const dailyPrice = await DailyPriceService.getDailyPrice();
		if (!dailyPrice.length) {
			return apiResponse<DailyPrice[]>(404, [], 'No daily price found for the given date', true);
		}

		return apiResponse<DailyPrice[]>(200, dailyPrice, 'Daily Price retrieved successfully', false);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('An error occurred:', error);
		return apiResponse<DailyPrice[]>(
			500,
			[],
			'An error occurred while processing the request',
			true
		);
	}
};
