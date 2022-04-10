<!-- <script lang="ts">
	export let meme = { name: 'Имя', link: 'https://example.org/image.png' };
	const onSubmit = async (event: Event) => {
		event.preventDefault();
		let formData = new FormData();
		formData.append('name', meme.name);
		formData.append('link', meme.link);
		const rawResponse = await fetch('http://localhost:8080/images', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formData
		});
	};
</script> -->

<h1>Создать мем</h1>
<form class="create-form" action="http://localhost:8080/images" method="post">
	<input name="name" type="text" placeholder="Имя" />
	<input name="link" type="text" placeholder="Ссылка" />
	<button type="submit">Создать</button>
</form>

<style lang="scss">
	.create-form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
