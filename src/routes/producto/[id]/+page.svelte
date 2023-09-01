<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { getPartById } from '$components/services/partes.js';
	import { onMount } from 'svelte';
	import Loader from '$components/Loader/Loader.svelte';
	import ProductoVista from '$components/ProductoVista/ProductoVista.svelte';
	const { id } = $page.params;

	let data = {};
	onMount(async () => {
		data = await getPartById(id);
		console.log(data);
	});
</script>

{#if Object.keys(data).length > 0}
	<div>
		<div>
			<img src={data.img} alt="" />
		</div>
		<div>
			<h1>{data.nombre}</h1>
			<h2>{data.descripcion}</h2>
			<h3>Precio: ${data.precio}</h3>
			<button>Comprar</button>
		</div>
	</div>
{:else}
	<Loader />
{/if}
