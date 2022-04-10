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
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		grid-auto-rows: 1fr;
		grid-gap: 1rem;
	}

	.search {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.search-box {
		width: min(90%, 1000px);
		font-size: 1.5rem;
		margin-bottom: 1rem;
		border: none;
		border-bottom: 2px solid blue;
		height: 2rem;
		transition: 0.25s;
		background-color: var(--primary-color);
	}

	.search-box:focus {
		outline: none;
	}
</style>
