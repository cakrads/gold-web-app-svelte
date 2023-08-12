<script lang="ts">
	import Card from '$lib/components/atoms/card/card.svelte';
	import Text from '$lib/components/atoms/typography/text.svelte';
	import PriceItem from './PriceItem.svelte';

	const items = [
		{
			label: '0.5 gr',
			value: 550000
		},
		{
			label: '1 gr',
			value: 1074000
		},
		{
			label: '2 gr',
			value: 2093000
		},
		{
			label: '3 gr',
			value: 3107000
		},
		{
			label: '5 gr',
			value: 5145000
		},
		{
			label: '10 gr',
			value: 10235000
		},
		{
			label: '25 gr',
			value: 25462000
		},
		{
			label: '50 gr',
			value: 50845000
		},
		{
			label: '100 gr',
			value: 101612000
		},
		{
			label: '250 gr',
			value: 25376000
		},
		{
			label: '500 gr',
			value: 507320000
		},
		{
			label: '1000 gr (1kg)',
			value: 1014600000
		}
	];

	function isLast(index: number) {
		return index === items.length - 1;
	}
</script>

<section class="px-5">
	<Text type="subtitle" color="main" colorDark="primary" className="mb-3">Harga Emas Hari Ini</Text>
	<Card className="py-6 px-5">
		<div class="flex justify-between mb-2 px-3">
			<Text color="main" colorDark="primary">Berat</Text>
			<Text color="main" colorDark="primary">Harga Dasar (Rp)</Text>
		</div>
		{#each items as item, index}
			<PriceItem {item} className={isLast(index) ? '' : 'border-b-[1px] border-primary'} />
		{/each}
	</Card>
</section>
