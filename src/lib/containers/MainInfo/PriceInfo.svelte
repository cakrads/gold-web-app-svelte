<script lang="ts">
	import Card from '$lib/components/atoms/card/card.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { formatCurrency } from '$lib/utils/currency';
	import { mainInfoStore } from '$lib/stores/main-info';

	let sellPrice = '-';
	let buybackPrice = '-';

	$: {
		sellPrice = formatCurrency(+$mainInfoStore.sellPrice);
		buybackPrice = formatCurrency(+$mainInfoStore.buybackPrice);
	}
</script>

<div class="grid gap-4 grid-cols-2">
	<Card className="gradient-primary hover:gradient-primary-hover" hover>
		<div class="grid py-6 px-5">
			<Text className="text-base-text-light dark:text-base-text-light font-medium">Harga Jual</Text>
			<Text className="text-black dark:text-black text-2xl font-medium">
				{sellPrice}
			</Text>
		</div>
	</Card>
	<Card hover>
		<div class="grid py-6 px-5">
			<Text color="base" className="font-medium">Harga Buyback</Text>
			<Text className="text-2xl font-medium">
				{buybackPrice}
			</Text>
		</div>
	</Card>
</div>
