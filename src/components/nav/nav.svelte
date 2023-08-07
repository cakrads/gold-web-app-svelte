<script>
	import Text from '$components/atoms/typography/text.svelte';
	import Theme from '$lib/Theme.svelte';
</script>

<nav class="flex justify-between h-16 px-6">
	<div class="flex">
		<div class="flex-shrink-0 flex items-center">
			<Text color="primary" type="title">GD</Text>
		</div>
	</div>
	<div class="flex items-center">
		<Theme variant="normal" />
	</div>
</nav>
