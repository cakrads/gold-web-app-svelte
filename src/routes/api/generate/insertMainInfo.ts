import MainInfoService, { type MainInfo } from '$lib/services/main-info';

export async function insertMainInfo(mainInfo: MainInfo) {
  return MainInfoService.updateLastPrice(mainInfo);
}
