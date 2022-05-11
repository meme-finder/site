<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch(import.meta.env.VITE_API_BASE + '/images/' + params.id);

		return {
			status: response.status,
			props: {
				meme: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import FullMeme from '$lib/FullMeme.svelte';
	export let meme;
</script>

<svelte:head>
	<title>{meme.name} - Meme Finder</title>
	<meta property="og:site_name" content="Meme Finder" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:type" content="object" />
	<meta property="og:title" content={meme.name} />
	<meta property="og:url" content="https://memefinder.ru/{meme.id}" />
	<meta property="og:description" content={meme.description} />
	<meta property="og:image:alt" content={meme.name} />
	<meta
		property="og:image"
		content="{import.meta.env.VITE_API_BASE}/static/images/normal/{meme.id.substring(
			0,
			2
		)}/{meme.id.substring(2, 4)}/{meme.id}.jpeg"
	/>
</svelte:head>

<FullMeme {meme} />
