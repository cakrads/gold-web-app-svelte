import { error } from '@sveltejs/kit';
import MainInfoService, { MainInfo } from '$lib/services/main-info';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
  const mainInfo = await MainInfoService.latestPrice() || {} as MainInfo;

  if (Object.keys(mainInfo).length) {
    return mainInfo;
  }

  throw error(404, 'Not found');
};
