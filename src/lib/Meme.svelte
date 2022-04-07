<script lang="ts">
	export let meme;
</script>

<div class="meme-container">
	<div class="meme"><h1>{meme.title}</h1>
		<div class="image-container">
			<img src={meme.poster} alt={meme.title} width="100%" class="image" />
		</div>
	</div>
</div>

<style>
	.meme-container {
		background-color: #2fa5c2;
		border-radius: 5px;
		border-width: 5px;
		border-color: #2fa5c2;
		border-style: solid;
	}

	.meme-container:hover {
		border-color: #2f74c2;
	}

	.meme {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.image {
		border-radius: 5px;
	}

	.image-container {
		padding: 5px;
	}
</style>
