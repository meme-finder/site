<script lang="ts">
	import Meme from './Meme.svelte';
	import { onMount } from 'svelte';

	let query = '';
	let hits = [];

	// Функция отправляет запрос на веб-сервер и получает JSON 
	// метаданных картинок 
	async function search() {
		const result = await (await fetch(import.meta.env.VITE_API_BASE 
									+ '/images?q=' + query)).json();
		hits = result;
		console.log(hits);
	}

	// При загрузке страницы вызывается функция search
	onMount(async () => {
		await search();
	});
</script>

<!-- Компонент поисковика картинок -->
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
</style>
