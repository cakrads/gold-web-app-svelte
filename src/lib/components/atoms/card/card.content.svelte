<script lang="ts">
	export let className = '';
</script>

<h5 class={`font-normal text-gray-700 dark:text-gray-400 ${className}`}>
	<slot />
</h5>
