<script lang="ts">
	import Search from '$lib/Search.svelte';
</script>

<svelte:head>
	<title>Memesearch</title>
</svelte:head>

<section>
	<Search />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
