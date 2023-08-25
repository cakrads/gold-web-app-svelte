<script lang="ts">
	import MainInfoContainer from '$lib/containers/MainInfo/index.svelte';
	import DailyPriceContainer from '$lib/containers/DailyPrice/index.svelte';
	import DailyInfoContainer from '$lib/containers/DailyInfo/index.svelte';
	import { mainInfoStore } from '$lib/stores/main-info';
	import type { PageData } from './$types';

	export let data: PageData;
	$: mainInfoStore.set(data);
</script>

<MainInfoContainer />
<DailyPriceContainer />
<DailyInfoContainer />
