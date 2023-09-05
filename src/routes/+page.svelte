<script>
	// @ts-nocheck

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Home from '$components/Home/components/Home.svelte';
	import { userIsValid } from '$components/store.js';
	userIsValid.subscribe((/** @type {any} */ value) => {
		console.log('userIsValid', value);
		if (browser && !value) {
			// goto('/auth/login');
		}
	});
</script>

<Home />
