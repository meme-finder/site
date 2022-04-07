<script lang="ts">
	export let meme;
</script>

<a href="/{meme.uid}"
	><div class="meme">
		<h1>{meme.title}</h1>
		<div class="image-container">
			<img src={meme.poster} alt={meme.title} width="100%" class="image" />
		</div>
	</div></a
>

<style>
	.meme {
		background-color: #2fa5c2;
		width: 100%;
		height: 100%;
		border-radius: 5px;
		border-width: 5px;
		border-color: #2fa5c2;
		border-style: solid;
		/* width: 100px;
		height: 100px;
		margin: 32px auto; */
		transition: transform 0.2s; /* Animation */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.meme:hover {
		border-color: #2f74c2;
	}

	.image {
		border-radius: 5px;
	}

	.image-container {
		padding: 5px;
	}
</style>
