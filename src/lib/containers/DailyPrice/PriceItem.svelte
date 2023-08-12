<script lang="ts">
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { formatRupiah } from '$lib/utils/currency';
	import { twMerge } from 'tailwind-merge';

	export let className: string = '';
	export let item: {
		label: string;
		value: number;
	};
</script>

<div
	class={twMerge(
		`flex justify-between py-4 px-5 hover:bg-main-bg-light hover:dark:bg-black ${className}`
	)}
>
	<Text color="main">{item.label}</Text>
	<Text color="main">{formatRupiah(item.value)}</Text>
</div>
