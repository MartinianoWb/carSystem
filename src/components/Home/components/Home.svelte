<script>
	// @ts-nocheck
	import Filter from '$components/Home/components/Filter.svelte';
	import { getAllParts } from '$components/services/partes.js';
	import { onMount } from 'svelte';
	import Cards from '$components/Home/components/Cards.svelte';

	let data = [];
	let filtro = [];
	let mostrar = [];

	onMount(async () => {
		data = await getAllParts();
		mostrar = data;
	});
	function manejarObjetosEnviados(event) {
		filtro = event.detail;
		mostrar = filtro;
	}
</script>

<section class="Home">
	<div class="Home__container-secundario">
		<div class="Home__container-secundario-side-banner">
			<img src="http://www.speedpartsuae.com/speeduae/wp-content/uploads/2021/09/ad-3.jpg" alt="" />
		</div>
		<div>
			<Filter {data} on:objetos-enviados={manejarObjetosEnviados} />
		</div>
	</div>
	<div class="Home__container-principal">
		<div class="Home__container-principal-header">
			<span class="Home__container-principal-header-presentacion">
				<img src="https://media.tenor.com/zCaD8FYVbF4AAAAC/ae86-ae86trueno.gif" alt="" />
				<div>
					<h1>AutoCity</h1>
					<h2>La mejor comunidad de coches</h2>
				</div>
			</span>
		</div>
		<section class="Home__container-principal-productos">
			<h3 class="Home__container-principal-productos-title">Productos</h3>
			<div class="Home__container-principal-productos-items">
				{#each mostrar as item}
					<Cards {item} />
				{/each}
			</div>
		</section>
	</div>
</section>
