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

<div class="Filter">
	<h3 class="Filter__title">Categorias</h3>
	<div class="Filter__categories">
		<button on:click={handleFilter} id="block">Blocks</button>
		<button on:click={handleFilter} id="subconjunto">Subconjuntos</button>
		<button on:click={handleFilter} id="turbo">Turbos</button>
		<button on:click={handleFilter} id="llantas">Llantas</button>
		<button on:click={handleFilter} id="ciguenal">Cigueñales</button>
		<button on:click={handleFilter} id="levas">Levas</button>
		<button on:click={handleFilter} id="todos">Todos</button>
	</div>
</div>
