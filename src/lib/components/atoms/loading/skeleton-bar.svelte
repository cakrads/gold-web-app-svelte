<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className: string = '';
</script>

<div class={twMerge('h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2', className)} />
