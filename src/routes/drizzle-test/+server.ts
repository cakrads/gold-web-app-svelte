import DailyInfoService from '$lib/services/daily-info';
import type { DailyInfo } from '$lib/services/daily-info';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const mainInfo = (await DailyInfoService.getByDate(1691989961)) || ({} as DailyInfo);
	return json(mainInfo);
};
