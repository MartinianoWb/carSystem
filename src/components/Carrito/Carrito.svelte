<script>
	// @ts-nocheck

	import { carrito } from '$components/store.js';

	let carritoStore = [];
	let cantidadCarrito = 0;
	let total = 0;
	carrito.subscribe((/** @type {any} */ value) => {
		carritoStore = value;
		cantidadCarrito = value.cantidad
			? value.cantidad
			: value.reduce((acc, elm) => acc + elm.cantidad, 0);
		total = carritoTotal();
	});

	function deleteProduct(id) {
		carrito.update((/** @type {any} */ value) => {
			const item = value.find((item) => item.id === id);
			if (item.cantidad >= 2) {
				item.cantidad--;
				return [...value];
			} else {
				return value.filter((item) => item.id !== id);
			}
		});
	}
	function vaciarCarrito() {
		carrito.update((/** @type {any} */ value) => {
			return [];
		});
	}

	function carritoTotal() {
		let total = 0;
		carritoStore.forEach((item) => {
			total += item.precio * item.cantidad;
		});
		return total;
	}
</script>

<div class="header__carrito d-flex">
	<ul>
		<li class="submenu">
			<img
				src="https://cdn.icon-icons.com/icons2/742/PNG/512/shopping-cart-1_icon-icons.com_63427.png"
				alt=""
			/>
			<div class="carrito" id="carrito">
				<table class="carrito__color" id="lista-carrito">
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>cantidad</th>
							<th />
						</tr>
					</thead>
					<tbody class="containerCarrito" id="containerCarrito">
						{#each carritoStore as elm}
							<tr>
								<th><img class="img__carrito" src={elm.img} /></th>
								<th>{elm.nombre}</th>
								<th>{elm.precio}</th>
								<th>{elm.cantidad}</th>
								<th
									on:click={() => {
										deleteProduct(elm.id);
									}}
									class="btnEliminar">X</th
								>
							</tr>
						{/each}
					</tbody>
				</table>
				<p class="precioTotal">Precio total: ${total}</p>
				<a href="#" on:click={vaciarCarrito} id="vaciarCarrito" class="btnVaciar">Vaciar Carrito</a>
			</div>
		</li>
	</ul>
	<p id="cantidadCarrito">{cantidadCarrito}</p>
</div>
