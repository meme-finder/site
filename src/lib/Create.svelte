<script lang="ts">
	import { getBase64 } from '$lib/base64';

	let fileinput;
	let image: File;
	let name: String;
	let description: String;
	let text: String;

	const onImageSelected = (e) => {
		image = e.target.files[0];
	};

	async function onSubmit() {
		console.log(image);
		let img_base64 = await getBase64(image);
		let meme = { image: img_base64, name: name, description: description, text: text };
		await fetch(import.meta.env.VITE_API_BASE + '/images', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meme)
		});
		alert('Мем добавлен!');
	}
</script>

<h1>Добавить мем</h1>
<form class="create-form" on:submit|preventDefault={onSubmit}>
	<input
		name="image"
		on:change={(e) => onImageSelected(e)}
		bind:this={fileinput}
		type="file"
		accept=".jpg, .jpeg, .png, .webp"
	/>
	<input name="name" bind:value={name} type="text" placeholder="Имя" />
	<input name="description" bind:value={description} type="text" placeholder="Описание" />
	<input name="text" bind:value={text} type="text" placeholder="Текст" />
	<button type="submit">Добавить</button>
</form>

<style lang="scss">
	.create-form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
