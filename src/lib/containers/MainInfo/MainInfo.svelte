<script lang="ts">
	import Card from '$lib/components/atoms/card/card.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';

	type TUpdatedPrice = {
		type: 'up' | 'down';
		price: number | string;
		color: 'text-red-500' | 'text-green-500';
	};
	type TPrice = {
		sell: number | string;
		buyback: number | string;
	};

	export let updatedDate = '4 Agustus 2023, 10.00';
	export let updatedPrice: TUpdatedPrice = {
		type: 'down',
		price: -5000,
		color: 'text-red-500'
	};
	export let price: TPrice = {
		sell: 1067000,
		buyback: 953000
	};
</script>

<section class="p-5">
	<div class="flex justify-end mb-3">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2.5"
			stroke="currentColor"
			class="w-5 h-5 mr-2 text-base-text-light dark:text-base-text-dark"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<Text color="base" className="text-sm font-medium">${updatedDate}</Text>
	</div>

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

	<div class="grid gap-4 grid-cols-2">
		<Card className="gradient-primary hover:gradient-primary-hover">
			<div class="grid py-6 px-5">
				<Text className="text-base-text-light dark:text-base-text-light font-medium">
					Harga Jual
				</Text>
				<Text className="text-black dark:text-black text-2xl font-medium">
					{price.sell}
				</Text>
			</div>
		</Card>
		<Card>
			<div class="grid py-6 px-5">
				<Text color="base" className="font-medium">Harga Buyback</Text>
				<Text className="text-2xl font-medium">
					{price.buyback}
				</Text>
			</div>
		</Card>
	</div>
</section>
