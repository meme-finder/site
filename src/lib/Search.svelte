<script lang="ts">
	import Meme from './Meme.svelte';
	import { onMount } from 'svelte';

	let query = '';
	let hits = [];

	async function search() {
		const result = await (await fetch('/search?q=' + query)).json();
		hits = result.hits;
		console.log(hits);
	}

	onMount(async () => {
		await search();
	});
</script>

<div class="search">
	<h1>Поиск по поллекции мемов</h1>

	<div class="search-box">
		<input type="text" bind:value={query} on:keyup={search} style="width: 100%" />
	</div>

	<div class="results">
		{#each hits as hit}
			<Meme meme={hit} />
		{/each}
	</div>
</div>

<style>
	.results {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		grid-gap: 1.5rem;
	}

	.search {
		/* text-align: center; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.search-box {
		width: min(90vw, 700px);
		margin-bottom: 1rem;
	}
</style>
