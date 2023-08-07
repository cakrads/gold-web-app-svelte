<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className = '';
</script>

<h5
	class={twMerge(
		`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${className}`
	)}
>
	<slot />
</h5>
