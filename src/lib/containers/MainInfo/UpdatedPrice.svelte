<script lang="ts">
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { formatCurrency } from '$lib/utils/currency';
	import { mainInfoStore } from '$lib/stores/main-info';

	let updatedPrice: string | number = 0;
	let isPriceIncrease: boolean = false;
	let color: 'text-red-500' | 'text-green-500';

	$: {
		updatedPrice = formatCurrency(+$mainInfoStore.changePrice);
		isPriceIncrease = +$mainInfoStore.changePrice > 0;
		color = isPriceIncrease ? 'text-green-500' : 'text-red-500';
	}
</script>

<div class="flex justify-between bg-white dark:bg-main-bg-dark p-3 rounded-lg mb-3">
	<Text color="base" className="font-medium">Logam Mulia (Antam) dalam gram</Text>
	<div class={`flex items-center ${color}`}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class={`w-4 h-4 mr-1 ${!isPriceIncrease && 'rotate-180'}`}
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
		<div>{updatedPrice}</div>
	</div>
</div>
