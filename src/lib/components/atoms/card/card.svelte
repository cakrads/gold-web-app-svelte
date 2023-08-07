<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let className = '';

	type TWidth = 'sm' | 'full';
	export let width: TWidth = 'full';

	interface WidthClassess {
		[key: string]: string;
		sm: string;
		full: string;
	}

	let widthClasses: WidthClassess = {
		sm: 'max-w-sm',
		full: 'w-full'
	};
</script>

<div
	class={twMerge(
		`${widthClasses[width]} 
		block border rounded-[20px] shadow
	bg-white  border-primary hover:bg-gray-100 
	dark:bg-main-bg-dark dark:border-primary dark:hover:bg-gray-700 
		${className}`
	)}
>
	<slot />
</div>
