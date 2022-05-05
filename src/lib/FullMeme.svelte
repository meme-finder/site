<script lang="ts">
	import { goto } from '$app/navigation';

	export let meme;
	async function remove() {
		await fetch(import.meta.env.VITE_API_BASE + '/images/' + meme.id, {
			method: 'DELETE'
		});
		goto('/');
	}
</script>

<div class="meme">
	<h1 class="meme-title">{meme.name}</h1>
	<div class="image-container">
		<img
			src="{import.meta.env.VITE_API_BASE}/static/images/normal/{meme.id.substring(
				0,
				2
			)}/{meme.id.substring(2, 4)}/{meme.id}.webp"
			alt={meme.name}
			class="image"
		/>
	</div>
	<p class="meme-description">{meme.description}</p>
	<button on:click={remove}>Удалить</button>
</div>

<style>
	.meme-title {
		margin: 1rem;
	}

	.meme {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.image {
		border-radius: 5px;
		max-width: 100%;
		max-height: 100%;
	}

	.image-container {
		margin: 8px;
	}
</style>
