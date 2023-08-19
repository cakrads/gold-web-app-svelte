import DailyInfoService from '$lib/services/daily-info';
import type { DailyInfo } from '$lib/services/daily-info';
import { apiResponse } from '$src/lib/utils/response';
import type { RequestHandler, RequestEvent } from './$types';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	try {
		// Validate input date parameter to prevent path traversal
		const dateParam = params.date;
		if (!isValidEpochDate(dateParam)) {
			return apiResponse<DailyInfo[]>(400, [], 'Invalid date parameter', true);
		}

		// Get daily info by date
		const dailyInfo = await DailyInfoService.getByDate(+dateParam);

		if (!dailyInfo) {
			return apiResponse<DailyInfo[]>(404, [], 'No daily info found for the given date', true);
		}

		return apiResponse<DailyInfo[]>(200, dailyInfo, 'Daily info retrieved successfully', false);
	} catch (error) {
		console.error('An error occurred:', error);
		return apiResponse<DailyInfo[]>(
			500,
			[],
			'An error occurred while processing the request',
			true
		);
	}
};

function isValidEpochDate(epochDate: string): boolean {
	const epochDateRegex = /^\d{10}$/;
	return epochDateRegex.test(epochDate);
}
