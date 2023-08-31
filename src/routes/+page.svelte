<script>
	import { browser } from '$app/environment';

	// @ts-ignore
	import { userIsValid } from '$components/store.js';
	let userStore = false;
	userIsValid.subscribe((/** @type {any} */ value) => {
		if (browser && !value) {
			// to prevent error window is not defined, because it's SSR
			window.location.href = '/auth/login';
		} else {
			userStore = value;
		}
	});
</script>

<section>
	<h1>Home</h1>
	<p>Page content</p>
</section>
