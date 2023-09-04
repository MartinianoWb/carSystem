<script>
	// @ts-nocheck
	import { carrito } from '$components/store.js';
	export let item = {};
	function comprar(itemComprado) {
		carrito.update((/** @type {any} */ value) => {
			const item = value.find((item) => item.id === itemComprado.id);
			if (item) {
				item.cantidad++;
				return [...value];
			} else {
				console.log(value);
				return [...value, { ...itemComprado, cantidad: 1 }];
			}
		});
	}
</script>

<div class="Cards">
	<div class="Cards__container">
		<div class="Cards__container-image" style="background-image: url({item.img})" />
		<div class="Cards__container-info">
			<h3>{item.nombre}</h3>
			<span>Precio: ${item.precio}</span>
			<button
				on:click={() => {
					comprar(item);
				}}
				id={item.id}>Comprar</button
			>
			<a href="/producto/{item.id}">Ver producto</a>
		</div>
	</div>
</div>
