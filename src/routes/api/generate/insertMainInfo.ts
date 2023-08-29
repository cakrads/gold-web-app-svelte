import MainInfoService, { type MainInfoCreate } from '$lib/services/main-info';

export async function insertMainInfo(mainInfo: MainInfoCreate) {
  const check = await MainInfoService.latestPrice();
  console.log({ check });
  if (check.id) {
    return MainInfoService.updateLastPrice(mainInfo);
  } else {
    return MainInfoService.insert(mainInfo);
  }
}
