import { error } from '@sveltejs/kit';
import MainInfoService from '$lib/services/main-info';
import type { MainInfo } from '$lib/services/main-info';
import type { PageServerLoad } from './$types';
import { mainInfoStore } from '$lib/stores/main-info';

export const load: PageServerLoad = async () => {
  const mainInfo = await MainInfoService.latestPrice() || {} as MainInfo;

  if (Object.keys(mainInfo).length) {
    mainInfoStore.set(mainInfo);
    return mainInfo;
  }

  throw error(404, 'Not found');
};
