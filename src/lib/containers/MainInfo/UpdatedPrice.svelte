<script lang="ts">
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { formatRupiah } from '$lib/utils/currency';

	type TUpdatedPrice = {
		type: 'up' | 'down';
		price: number | string;
		color: 'text-red-500' | 'text-green-500';
	};
	export let updatedPrice: TUpdatedPrice = {
		type: 'down',
		price: formatRupiah(-5000),
		color: 'text-red-500'
	};
</script>

<div class="flex justify-between bg-white dark:bg-main-bg-dark p-3 rounded-lg mb-3">
	<Text color="base" className="font-medium">Logam Mulia (Antam) dalam gram</Text>
	<div class={`flex items-center ${updatedPrice.color}`}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class={`w-4 h-4 mr-1 ${updatedPrice.type === 'down' && 'rotate-180'}`}
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
		<div>{updatedPrice.price}</div>
	</div>
</div>
