<script lang="ts">
	import Meme from './Meme.svelte';
	import matomo from '@dexlib/svelte-matomo';
	import { onMount } from 'svelte';

	let query = '';
	let hits = [];

	async function search() {
		const result = await (await fetch(import.meta.env.VITE_API_BASE + '/images?q=' + query)).json();
		hits = result;
		matomo.trackSiteSearch(query, 'all', hits.length);
	}

	onMount(async () => {
		await search();
	});
</script>

<div class="search">
	<h1>Поиск по коллекции мемов</h1>

	<input
		type="text"
		placeholder="Введите описание мема"
		bind:value={query}
		on:keyup={search}
		class="search-box"
	/>

	<div class="results">
		{#each hits as hit}
			<Meme meme={hit} />
		{/each}
	</div>
</div>

<style>
	.results {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-auto-rows: 1fr;
		grid-gap: 0.5rem;
	}

	.search {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
