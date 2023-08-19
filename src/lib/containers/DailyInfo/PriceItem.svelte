<script lang="ts">
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { twMerge } from 'tailwind-merge';

	export let className = '';
	export let label = '-';
	export let value = '-';
</script>

<div
	class={twMerge(
		`flex justify-between py-4 px-5 hover:bg-main-bg-light hover:dark:bg-black ${className}`
	)}
>
	<Text color="main">{label}</Text>
	<Text color="main">{value}</Text>
</div>
