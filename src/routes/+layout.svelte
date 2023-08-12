<script lang="ts" context="module">
	import '../app.css';
</script>

<script lang="ts">
	import Nav from '$lib/components/nav/nav.svelte';
</script>

<div
	class="
	my-0 mx-auto min-h-screen max-w-screen-sm pb-5
	bg-main-bg-light dark:bg-black text-main-text-light dark:text-white
	shadow-[0px_0px_100px_0px_#474747] dark:shadow-[0px_0px_100px_0px_#000000]
	"
>
	<Nav />
	<main>
		<slot />
	</main>
</div>
