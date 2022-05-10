<script lang="ts">
	import { goto } from '$app/navigation';
	let images: File[];

	const onImageSelected = (e) => {
		images = e.target.files;
	};

	async function onSubmit() {
		const formData = new FormData();
		images.forEach((image) => {
			formData.append('image', image);
		});

		const response = await fetch(import.meta.env.VITE_API_BASE + '/images', {
			method: 'POST',
			body: formData
		});
		if (response.ok) {
			const memes = await response.json();
			const id: String = memes[0]['id'];
			goto('/' + id);
		} else {
			alert('Что-то пошло не так...');
		}
	}
</script>

<h1>Добавить мем</h1>
<form class="create-form" on:submit|preventDefault={onSubmit}>
	<input
		name="image"
		on:change={(e) => onImageSelected(e)}
		type="file"
		accept=".jpg, .jpeg, .png, .webp"
		multiple
	/>
	<button type="submit">Добавить</button>
</form>

<style lang="scss">
	.create-form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
