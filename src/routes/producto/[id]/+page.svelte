<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { getPartById } from '$components/services/partes.js';
	import { onMount } from 'svelte';
	import Loader from '$components/Loader/Loader.svelte';
	import { carrito, Carrito } from '$components/store.js';

	const { id } = $page.params;

	let data = {};
	const carritoClass = new Carrito();

	onMount(async () => {
		data = await getPartById(id);
	});
</script>

{#if Object.keys(data).length > 0}
	<div class="productoId">
		<div class="productoId__img">
			<img src={data.img} alt="" />
		</div>
		<div class="productoId__text">
			<h1>{data.nombre}</h1>
			<h2>{data.descripcion}</h2>
			<h3>Precio: ${data.precio}</h3>
			<button
				on:click={() => {
					carritoClass.comprar(data);
				}}>Comprar</button
			>
		</div>
	</div>
{:else}
	<Loader />
{/if}
