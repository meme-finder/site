<script lang="ts">
	export let meme;
</script>

<a href="/{meme.id}"
	><div class="meme-container">
		<div class="meme">
			<h1 class="meme-title">{meme.name}</h1>
			<div class="image-container">
				<img
					src="{import.meta.env.VITE_API_BASE}/static/images/preview/{meme.id.substring(
						0,
						2
					)}/{meme.id.substring(2, 4)}/{meme.id}.webp"
					alt={meme.name}
					class="image"
				/>
			</div>
			<p class="meme-description">{meme.description}</p>
		</div>
	</div></a
>

<style>
	.meme-container {
		background: rgb(112, 167, 214);
		background: linear-gradient(60deg, rgba(112, 167, 214, 1) 25%, rgba(43, 167, 162, 1) 72%);
		border-radius: 5px;
		border-width: 5px;
		transition: 0.3s ease-out;
		cursor: pointer;
	}

	.meme-container:hover {
		transform: scale(1.03);
		/* background-position: 100px; */
		/* background: linear-gradient(240deg, rgba(112, 167, 214, 1) 25%, rgba(43, 167, 162, 1) 72%); */
	}

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
