<!--
  @component
  Generates an SVG area shape using the `area` function from [d3-shape](https://github.com/d3/d3-shape).
 -->
<script lang="ts">
	import { getContext } from 'svelte';
	import type { LayerCake } from 'layerCake';

	const { data, xGet, yGet, xScale, yScale, extents } = getContext<LayerCake>('LayerCake');

	/**  @type {String} [fill='#ab00d610'] The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
	export let fill = '#ab00d610';

	/** @type {number} [number=0.5] - An optional to opacity the fill, value: 0 - 1*/
	export let fillOpacity = 0.5;

	$: path =
		'M' +
		$data
			.map((d: number) => {
				return $xGet(d) + ',' + $yGet(d);
			})
			.join('L');

	let area: string;

	$: {
		const yRange = $yScale.range();
		area =
			path +
			('L' +
				$xScale($extents.x ? $extents.x[1] : 0) +
				',' +
				yRange[0] +
				'L' +
				$xScale($extents.x ? $extents.x[0] : 0) +
				',' +
				yRange[0] +
				'Z');
	}
</script>

<path class="path-area" d={area} {fill} opacity={fillOpacity} />
