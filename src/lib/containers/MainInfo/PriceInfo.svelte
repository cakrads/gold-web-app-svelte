<script lang="ts">
	import Card from '$lib/components/atoms/card/card.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { formatRupiah } from '$lib/utils/currency';

	type TPrice = {
		sell: number | string;
		buyback: number | string;
	};

	export let price: TPrice = {
		sell: formatRupiah(1067000),
		buyback: formatRupiah(953000)
	};
</script>

<div class="grid gap-4 grid-cols-2">
	<Card className="gradient-primary hover:gradient-primary-hover">
		<div class="grid py-6 px-5">
			<Text className="text-base-text-light dark:text-base-text-light font-medium">Harga Jual</Text>
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
