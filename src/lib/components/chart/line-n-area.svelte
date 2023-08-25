<script lang="ts">
	import { LayerCake, Html, Svg } from 'layercake';

	import Line from '$lib/components/atoms/chart/line.svelte';
	import Area from '$lib/components/atoms/chart/area.svelte';
	import AxisX from '$lib/components/atoms/chart/axisX.svelte';
	import AxisY from '$lib/components/atoms/chart/axisY.svelte';
	import SharedTooltip from '../atoms/chart/shared-tooltip.svelte';
	import type { TDataset } from '../atoms/chart/types';

	export let data: TDataset = [];
	export let xKey: string | number;
	export let yKey: string | number;
	export let yMin: number | null = 0;
	export let yMax: number | null = null;
	export let isAxisXVisible = true;
	export let isAxisYVisible = true;
	export let formatXTicks = (d: number) => d;
	export let formatYTicks = (d: number) => d;
	export let numberXTicks = 4;
	export let numberYTicks = 4;

	// set yMin 5% from minumum yKey value
	$: {
		if (data !== undefined) {
			const _data = data.map((item) => (typeof item === 'number' ? item : item[yKey]));
			let minValue = Math.min(..._data);
			yMin = minValue - minValue * 0.005;
		}
	}
</script>

<div class="chart-container h-64 w-full">
	<LayerCake
		padding={{ top: 0, right: 0, bottom: isAxisXVisible ? 20 : 2, left: 0 }}
		x={xKey}
		y={yKey}
		yDomain={[yMin, yMax]}
		{data}
	>
		<Svg>
			<Line stroke="#E8BD70" />
			<Area fill="#E8BD70" />
			{#if isAxisXVisible}
				<AxisX
					gridlines={false}
					ticks={numberXTicks}
					formatTick={formatXTicks}
					snapTicks={true}
					tickMarks={true}
				/>
			{/if}
			{#if isAxisYVisible}
				<AxisY ticks={numberYTicks} formatTick={formatYTicks} />
			{/if}
		</Svg>
		<Html>
			<SharedTooltip formatTitle={formatXTicks} formatValue={formatYTicks} dataset={data} />
		</Html>
	</LayerCake>
</div>
