<script lang="ts">
	export let meme;
	const onSubmit = async (event: Event) => {
		event.preventDefault();
		const rawResponse = await fetch('/' + meme.uid, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meme)
		});
	};
	function newDescription() {
		meme.description.push('');
		meme.description = meme.description;
	}
</script>

<svelte:head>
	<title>{meme.title}</title>
</svelte:head>

<section>
	<h1>{meme.title}</h1>
	<div class="image-container">
		<img src={meme.poster} alt={meme.title} width="100%" class="image" />
	</div>
	<form on:submit={onSubmit}>
		<input name="title" bind:value={meme.title} />
		<input name="text" bind:value={meme.text} />
		<input name="template" bind:value={meme.template} />
		<h1>Описания</h1>
		{#each meme.description as desk}
			<input bind:value={desk} />
		{/each}
		<button type="button" on:click={newDescription}>Новое</button>
		<h1>Персонажи</h1>
		{#each meme.characters as char}
			<input bind:value={char} />
		{/each}
		<button type="submit">Обновить</button>
	</form>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	.image {
		border-radius: 5px;
		border-width: 5px;
	}
</style>
