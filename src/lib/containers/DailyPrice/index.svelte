<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import DailyPriceChart from './DailyPriceChart.svelte';
	import SkeletonBar from '$lib/components/atoms/loading/skeleton-bar.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';

	import type { IResponseApi } from '$lib/utils/response';
	import type { DailyPrice } from '$lib/services/daily-price';

	type TData = DailyPrice[];
	let data: TData = [];
	let isLoading = true;
	let controller: AbortController | undefined;

	const fetchData = async () => {
		controller = new AbortController();
		try {
			const response = await fetch(`api/daily-price`, {
				signal: controller.signal
			});
			const responseData: IResponseApi<TData> = await response.json();
			data = responseData.data;
		} catch (err) {
			// TO DO: SHOW TOAST
		} finally {
			isLoading = false;
		}
	};

	onMount(fetchData);
	onDestroy(() => {
		if (controller) {
			controller.abort();
		}
	});
</script>

<section class="py-3">
	<Text type="subtitle" color="main" colorDark="primary" className="mb-5 ml-5"
		>Harga Emas Harian</Text
	>
	{#if isLoading}
		<SkeletonBar className="h-[288px] rounded-none" />
	{:else}
		<DailyPriceChart {data} />
	{/if}
</section>
