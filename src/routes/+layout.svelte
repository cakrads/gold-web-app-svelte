<script lang="ts" context="module">
	import '../app.css';
</script>

<script lang="ts">
	import Nav from '$components/nav/nav.svelte';
</script>

<section
	class="
	my-0 mx-auto min-h-full max-w-screen-sm
	bg-main-bg-light dark:bg-black text-main-text-light dark:text-white
	"
>
	<Nav />
	<main>
		<slot />
	</main>
</section>
