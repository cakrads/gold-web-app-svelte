<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import SkeletonBar from './skeleton-bar.svelte';

	export let listLength: number = 5;
	export let className: string = '';

	const newArray = new Array(listLength);
</script>

<div class="animate-pulse">
	{#each newArray as _}
		<SkeletonBar className={twMerge('h-14 mb-[1px] rounded-none', className)} />
	{/each}
</div>
