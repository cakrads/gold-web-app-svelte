<script lang="ts">
	import Card from '$lib/components/atoms/card/card.svelte';
	import SkeletonList from '$lib/components/atoms/loading/skeleton-list.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { onMount, onDestroy } from 'svelte';
	import PriceItem from './PriceItem.svelte';
	import { mainInfoStore } from '$lib/stores/main-info';
	import type { DailyInfo } from '$lib/services/daily-info';
	import { formatCurrency } from '$lib/utils/currency';
	import type { IResponseApi } from '$lib/utils/response';

	let data = [] as DailyInfo[];
	let isLoading = true;
	let controller: AbortController | undefined;

	const fetchData = async () => {
		const updatedDate = $mainInfoStore.date; // Get the current selected date from the store
		controller = new AbortController();
		try {
			const response = await fetch(`api/daily-info/${updatedDate}`, {
				signal: controller.signal
			});
			const responseData: IResponseApi<DailyInfo[]> = await response.json();
			data = responseData.data;
		} catch (err) {
			// TO DO: SHOW TOAST
		} finally {
			isLoading = false;
		}
	};

	onMount(() => {
		fetchData();

		onDestroy(() => {
			if (controller) {
				controller.abort();
			}
		});
	});
</script>

<section class="px-5">
	<Text type="subtitle" color="main" colorDark="primary" className="mb-3">Harga Emas Hari Ini</Text>
	<Card className="py-6">
		<div class="flex justify-between mb-2 px-5">
			<Text color="main" colorDark="primary">Berat</Text>
			<Text color="main" colorDark="primary">Harga Dasar (Rp)</Text>
		</div>
		{#if isLoading}
			<SkeletonList listLength={9} />
		{:else}
			{#each data as item, index}
				<PriceItem
					label={item.variant}
					value={formatCurrency(+item.price)}
					className={index === data.length - 1 ? '' : 'border-b-[1px] border-primary'}
				/>
			{/each}
		{/if}
	</Card>
</section>
