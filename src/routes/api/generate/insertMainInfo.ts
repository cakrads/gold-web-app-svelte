import MainInfoService, { type MainInfoCreate } from '$lib/services/main-info';

export async function insertMainInfo(mainInfo: MainInfoCreate) {
	const latestData = await MainInfoService.latestPrice();

	if (latestData.id) {
		return MainInfoService.updateLastPrice(latestData.id, mainInfo);
	} else {
		return MainInfoService.insert(mainInfo);
	}
}
