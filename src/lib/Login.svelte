<script lang="ts">
	let token: String;

	async function onSubmit() {
		const loginRequest = { token: token };
		const response = await fetch(import.meta.env.VITE_API_BASE + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginRequest)
		});

		if (response.ok) {
			alert('Вход выполнен!');
		} else {
			alert('Войти не удалось...');
		}
	}
</script>

<h1>Добавить мем</h1>
<form class="create-form" on:submit|preventDefault={onSubmit}>
	<input name="token" bind:value={token} type="password" placeholder="Токен" />
	<button type="submit">Войти</button>
</form>

<style lang="scss">
	.create-form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
