<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	// @ts-ignore
	import Home from '$components/Home/components/Home.svelte';
	// @ts-ignore
	import { userIsValid } from '$components/store.js';
	userIsValid.subscribe((/** @type {any} */ value) => {
		console.log('userIsValid', value);
		if (browser && !value) {
			// goto('/auth/login');
		}
	});
</script>

<section>
	<Home />
</section>
