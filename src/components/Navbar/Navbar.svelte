<script>
	// @ts-ignore
	import { userIsValid } from '$components/store.js';
	let userStore = false;

	userIsValid.subscribe((/** @type {any} */ value) => {
		userStore = value;
	});
</script>

<nav class="navbar">
	{#if !userStore}
		<div>
			<a href="/auth/login">Sign in</a>
			<a href="/auth/register">Sign up</a>
		</div>
	{:else}
		<a href="/">Home</a>
		<div>
			<a href="">Logout</a><a href="">Mi perfil</a>
		</div>
	{/if}
</nav>
