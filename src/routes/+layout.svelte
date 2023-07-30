<script lang="ts" context="module">
	import '../app.css';
</script>

<script lang="ts">
	import Theme from '$lib/Theme.svelte';
</script>

<section
	class="
		my-0 mx-auto min-h-full max-w-screen-sm
	bg-white dark:bg-slate-900 text-slate-900 dark:text-white
	"
>
	<nav
		class="
		flex justify-between h-16 px-6
		bg-slate-200 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900
		"
	>
		<div class="flex">
			<div class="flex-shrink-0 flex items-center">
				<img
					class="h-8 w-auto block dark:hidden"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
					alt="Workflow"
				/>
				<img
					class="h-8 w-auto hidden dark:block"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
					alt="Workflow"
				/>
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
