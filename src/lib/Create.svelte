<script lang="ts">
	let image: File;

	const onImageSelected = (e) => {
		image = e.target.files[0];
	};

	async function onSubmit() {
		const formData = new FormData();
		formData.append("image", image);

		const response = await fetch(import.meta.env.VITE_API_BASE + '/images', {
			method: 'POST',
			body: formData
		});
		if (response.ok) {
			alert('Мем добавлен!');
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
