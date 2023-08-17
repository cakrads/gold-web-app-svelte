<script lang="ts">
	import Text from '$lib/components/atoms/typography/text.svelte';
	import { convertDate } from '$lib/utils/date';
	import { mainInfoStore } from '$lib/stores/main-info';

	$: updatedDate = convertDate(+$mainInfoStore.date);
</script>

<div class="flex justify-end mb-3">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="2.5"
		stroke="currentColor"
		class="w-5 h-5 mr-2 text-base-text-light dark:text-base-text-dark"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
	<Text color="base" className="text-sm font-medium">
		{updatedDate}
	</Text>
</div>
