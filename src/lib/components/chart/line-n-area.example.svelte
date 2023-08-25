<script lang="ts">
	import ChartLineArea from './line-n-area.svelte';
	import data from './data.json';

	const formatXTicks = (d: number) => 2 * +d;
	const formatYTicks = (d: number) => 2 * +d;
</script>

<section>
	<ChartLineArea
		{data}
		xKey={'myX'}
		yKey={'myY'}
		isAxisXVisible={true}
		isAxisYVisible={true}
		{formatXTicks}
		{formatYTicks}
	/>
</section>
