<script lang="ts">
	export let meme;
</script>

<div class="meme-container">
	<div class="meme">
		<h1 class="meme-title">{meme.name}</h1>
		<div class="image-container">
			<img src={meme.link} alt={meme.name} class="image" />
		</div>
	</div>
</div>

<style>
	.meme-container {
		background-color: #22c76c;
		border-radius: 5px;
		border-width: 5px;
		border-color: #22c76c;
		border-style: solid;
		transition: 0.25s;
	}

	.meme-container:hover {
		border-color: #11f778;
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
		justify-content: space-around;
	}

	.image {
		border-radius: 5px;
		max-width: 100%;
		max-height: 100%;
	}

	.image-container {
		flex: 1;
		margin: 5px;
	}
</style>
