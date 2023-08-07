<script>
	import Text from '$lib/components/atoms/typography/text.svelte';
	import TextExample from '$lib/components/atoms/typography/example.svelte';
	import ButtonExample from '$lib/components/atoms/button/example.svelte';
	import CardExample from '$lib/components/atoms/card/example.svelte';
</script>

<section class="p-3">
	<Text type="title" className="mb-3">Component Example</Text>

	<Text type="subtitle" className="my-3">Text</Text>
	<TextExample />
	<hr class="my-3" />
	<Text type="subtitle" className="my-3">Button</Text>
	<ButtonExample />
	<hr class="my-3" />
	<Text type="subtitle" className="my-3">Card</Text>
	<CardExample />
</section>
