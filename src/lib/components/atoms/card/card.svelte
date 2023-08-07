<script lang="ts">
	export let className = '';

	type TWidth = 'sm' | 'full';
	export let width: TWidth = 'full';

	interface WidthClassess {
		[key: string]: string;
		sm: string;
		full: string;
	}

	let widthClasses: WidthClassess = {
		sm: 'max-w-sm p-4',
		full: 'w-full p-6'
	};
</script>

<div
	class={`${widthClasses[width]} block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${className}`}
>
	<slot />
</div>
