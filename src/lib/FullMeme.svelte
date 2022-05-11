<script lang="ts">
	import { goto } from '$app/navigation';

	export let meme;

	let name = meme.name;
	let description = meme.description;
	let text = meme.text;

	let statuses = ['Published', 'Draft', 'Offered'];

	let status = meme.status;

	async function remove() {
		const response = await fetch(import.meta.env.VITE_API_BASE + '/images/' + meme.id, {
			method: 'DELETE'
		});

		if (response.ok) {
			goto('/');
		} else {
			alert('Не удалось удалить мем');
		}
	}

	async function update() {
		// TODO: исправить лапшу
		if (name) {
			meme.name = name;
		} else {
			meme.name = null;
		}

		if (description) {
			meme.description = description;
		} else {
			meme.description = null;
		}

		if (text) {
			meme.text = text;
		} else {
			meme.text = null;
		}

		meme.status = status;

		const response = await fetch(import.meta.env.VITE_API_BASE + '/images/' + meme.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meme)
		});

		if (response.ok) {
			alert('Мем обновлён!');
		} else {
			alert('Не удалось обновить мем');
		}
	}
</script>

<div class="meme">
	<h1 class="meme-title">{meme.name}</h1>
	<div class="image-container">
		<img
			src="{import.meta.env.VITE_API_BASE}/static/images/normal/{meme.id.substring(
				0,
				2
			)}/{meme.id.substring(2, 4)}/{meme.id}.webp"
			alt={meme.name}
			class="image"
		/>
	</div>
	<input name="name" bind:value={name} type="text" placeholder="Имя" />
	<input name="description" bind:value={description} type="text" placeholder="Описание" />
	<input name="text" bind:value={text} type="text" placeholder="Текст на картинке" />
	<select value={status}>
		{#each statuses as status}
			<option value={status}>
				{status}
			</option>
		{/each}
	</select>
	<button on:click={update}>Обновить</button>
	<button on:click={remove}>Удалить</button>
</div>

<style>
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
