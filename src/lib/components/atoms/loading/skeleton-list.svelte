<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import SkeletonBar from './skeleton-bar.svelte';

	export let listLength = 5;
	export let className = '';

	const newArray = new Array<number>(listLength);
</script>

<div class="animate-pulse">
	{#each newArray as item}
		<SkeletonBar id={String(item)} className={twMerge('h-14 mb-[1px] rounded-none', className)} />
	{/each}
</div>
