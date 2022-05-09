<script lang="ts">
	import '../app.scss';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Matomo, { matomo } from '@dexlib/svelte-matomo';

	const matomoUrl = import.meta.env.VITE_MATOMO_URL;
	const siteId = import.meta.env.VITE_MATOMO_SITEID;
	const matomoEnabled = import.meta.env.VITE_MATOMO_ENABLED;

	if (matomoEnabled) {
		onMount(() => {
			matomo.trackPageView();
		});
	}

	page.subscribe((_) => {
		if (matomoEnabled) {
			matomo.trackPageView();
		}
	});
</script>

{#if { matomoEnabled }}
	<Matomo url={matomoUrl} {siteId} />
{/if}

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>
			MemeSearch, by <a href="https://t.me/despectdr">DeSpecTDr</a>,
			<a href="https://t.me/averyanalex">AveryanAlex</a>
			and <a href="https://t.me/gasilont">Gasilont</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100%;
		max-width: 95vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}
</style>
