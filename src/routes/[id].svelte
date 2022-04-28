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

<FullMeme {meme} />
