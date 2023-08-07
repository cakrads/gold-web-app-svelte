<script lang="ts" context="module">
	import '../app.css';
</script>

<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Text from './../components/typography/index.svelte';
</script>

<section
	class="
	my-0 mx-auto min-h-full max-w-screen-sm
	bg-main-bg-light dark:bg-black text-main-text-light dark:text-white
	"
>
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
	<main>
		<slot />
	</main>
</section>
