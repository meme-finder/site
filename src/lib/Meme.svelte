<script lang="ts">
	export let meme;
</script>

<div class="meme">
	<a href="/{meme.id}">
		<img
			src="{import.meta.env.VITE_API_BASE}/static/images/preview/{meme.id.substring(
				0,
				2
			)}/{meme.id.substring(2, 4)}/{meme.id}.webp"
			alt={meme.name}
			class="image"
		/>
	</a>
</div>

<style>
	.meme {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between; */
	}

	.image {
		border-radius: 3px;
		object-fit: contain;
		height: 100%;
		max-width: 100%;
		transition: 0.3s ease-out;
		cursor: pointer;
		margin: auto;
		display: block;
	}

	.image:hover {
		transform: scale(1.03);
	}
</style>
