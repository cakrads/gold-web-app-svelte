<script lang="ts">
	import { onMount } from 'svelte';
	import { convertSimpleDate } from '$lib/utils/date';
	import { formatCurrency } from '$lib/utils/currency';

	import Button from '$lib/components/atoms/button/button.svelte';
	import ChartLineArea from '$lib/components/chart/line-n-area.svelte';

	import type { DailyPrice } from '$lib/services/daily-price';

	export let data: DailyPrice[];

	const filterOption = ['1 W', '1 M', '3 M', '1 Y', '5 Y'];
	let filteredData = data;
	let selectedFilter = filterOption[0];

	function applyFilter(filter: string) {
		selectedFilter = filter;

		const now = new Date();
		const timeIntervals: Record<string, number> = {
			'1 W': 7,
			'3 W': 7 * 3,
			'1 M': 30,
			'3 M': 30 * 3,
			'1 Y': 365,
			'5 Y': 365 * 5
		};

		const interval = timeIntervals[filter];
		if (interval) {
			// Calculate the date before which the data should be considered
			const cutoffDate = new Date(now.getTime() - interval * 24 * 60 * 60 * 1000);
			// Filter the data based on the cutoff date
			filteredData = data.filter((item) => new Date(item.date) >= cutoffDate);
		}
	}

	onMount(() => {
		applyFilter(selectedFilter);
	});
</script>

<div class="px-5 py-5 bg-white dark:bg-main-bg-dark">
	<ChartLineArea
		data={filteredData}
		xKey={'date'}
		yKey={'sellPrice'}
		isAxisXVisible={false}
		isAxisYVisible={true}
		formatXTicks={convertSimpleDate}
		formatYTicks={formatCurrency}
	/>
	<div class="grid gap-2 grid-cols-5 py-3">
		{#each filterOption as option}
			<Button
				color={selectedFilter === option ? 'primary' : 'light'}
				on:click={() => applyFilter(option)}
			>
				{option}
			</Button>
		{/each}
	</div>
</div>
