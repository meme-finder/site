<script lang="ts">
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	export let meme;
</script>

<div class="meme">
	<a sveltekit:prefetch href="/{meme.id}">
		<img
			data-src="{import.meta.env.VITE_API_BASE}/static/images/preview/{meme.id.substring(
				0,
				2
			)}/{meme.id.substring(2, 4)}/{meme.id}.webp"
			alt={meme.name}
			class="image"
			use:lazyImage
		/>
	</a>
</div>

<style>
	.meme {
		max-width: 300px;
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between; */
	}

	.image {
		object-fit: contain;
		height: 100%;
		width: 100%;
		transition: 0.3s ease-out;
		cursor: pointer;
		margin: auto;
		display: block;
	}

	.image:hover {
		transform: scale(1.03);
	}
</style>
