import { apiResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';
import { insertDailyInfo } from './insertDailyInfo';
import { insertDailyPrice } from './insertDailyPrice';
import { insertMainInfo } from './insertMainInfo';
import { scrapDailyInfo } from './scrapDailyInfo';
import { scrapDailyPrice } from './scrapDailyPrice';

export const GET: RequestHandler = async () => {
	try {
		const date = +(Date.now() / 1000).toFixed(0); // epoch in second

		const _dailyPrice = await scrapDailyPrice({ date });
		const _dailyInfo = await scrapDailyInfo({
			date,
			dollarToRupiah: _dailyPrice.data.dollarToRupiah
		});

		if (!_dailyInfo.status || !_dailyPrice.status) {
			throw new Error('something error when generate data');
		}

		const data = {
			dailyInfo: _dailyInfo.data,
			dailyPrice: _dailyPrice.data
		};

		await insertDailyInfo(_dailyInfo.data);
		await insertDailyPrice(_dailyPrice.data);
		await insertMainInfo(_dailyPrice.data);

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
