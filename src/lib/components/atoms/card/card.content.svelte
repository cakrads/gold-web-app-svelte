<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className = '';
</script>

<h5 class={twMerge(`font-normal text-gray-700 dark:text-gray-400 ${className}`)}>
	<slot />
</h5>
