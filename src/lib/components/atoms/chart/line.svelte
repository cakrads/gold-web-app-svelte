<!--
  @component
  Generates an SVG area shape using the `area` function from [d3-shape](https://github.com/d3/d3-shape).
 -->
<script lang="ts">
	import { getContext } from 'svelte';
	import type { LayerCake } from 'layerCake';

	const { data, xGet, yGet } = getContext<LayerCake>('LayerCake');

	/** @type {String} [stroke='#ab00d6'] - The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
	export let stroke = '#ab00d6';

	$: path =
		'M' +
		$data
			.map((d: number) => {
				return $xGet(d) + ',' + $yGet(d);
			})
			.join('L');
</script>

<path class="path-line" d={path} {stroke} />

<style>
	.path-line {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}
</style>
