import MainInfoService, { type MainInfoCreate } from '$lib/services/main-info';

export async function insertMainInfo(mainInfo: MainInfoCreate) {
	const hasMainInfo = await MainInfoService.latestPrice();

	if (hasMainInfo.id) {
		return MainInfoService.updateLastPrice(mainInfo);
	} else {
		return MainInfoService.insert(mainInfo);
	}
}
