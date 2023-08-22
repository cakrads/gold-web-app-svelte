import type { RequestHandler } from './$types';
import { apiResponse } from '$lib/utils/response';
import Data from './data.json';

export const GET: RequestHandler = async () => {
	try {
		const dailyPrice = Data;

		if (!dailyPrice.length) {
			return apiResponse(404, {}, 'No daily price found for the given date', true);
		}

		return apiResponse(200, dailyPrice, 'Daily Price retrieved successfully', false);
	} catch (error) {
		console.error('An error occurred:', error);
		return apiResponse(500, {}, 'An error occurred while processing the request', true);
	}
};
