<script>
	// @ts-nocheck
	export let data = [];
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	console.log(data);
	const handleFilter = (e) => {
		const filter = e.target.id;
		if (filter === 'todos') return dispatch('objetos-enviados', data);
		const filteredData = data.filter((item) => item.tipo === filter);
		console.log(filteredData);
		dispatch('objetos-enviados', filteredData);
	};
</script>

<div class="widgets-area mb-9">
	<h2 class="widgets-title mb-5">Categoria productos</h2>
	<div class="widgets-item">
		<ul class="widgets-category">
			<li>
				<a on:click={handleFilter} id="block" href="#">Blocks </a>
			</li>
			<li>
				<a on:click={handleFilter} id="subconjunto" href="#">Subconjuntos </a>
			</li>
			<li>
				<a on:click={handleFilter} id="turbo" href="#">Turbos </a>
			</li>
			<li>
				<a on:click={handleFilter} id="llantas" href="#">Llantas </a>
			</li>
			<li>
				<a on:click={handleFilter} id="ciguenal" href="#">Cigueñales </a>
			</li>
			<li>
				<a on:click={handleFilter} id="levas" href="#">Levas </a>
			</li>
			<li>
				<a on:click={handleFilter} id="todos" href="#">Todos </a>
			</li>
		</ul>
	</div>
</div>
