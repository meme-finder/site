<script lang="ts">
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<footer>
	<p>
		Meme Search, by <a href="https://t.me/despectdr">DeSpecTDr</a>,
		<a href="https://t.me/averyanalex">AveryanAlex</a>
		and <a href="https://t.me/gasilont">Gasilont</a>
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 95vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
</style>
