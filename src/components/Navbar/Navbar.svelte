<script>
	// @ts-nocheck
	import { userIsValid } from '$components/store.js';
	import Carrito from '$components/Carrito/Carrito.svelte';
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
		<div class="navbar__logged">
			<a href="/auth/login">Logout</a>
			<Carrito />
			<!-- <a href="">Mi perfil</a> -->
		</div>
	{/if}
</nav>
