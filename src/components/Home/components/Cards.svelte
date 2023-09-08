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

<div class="col-lg-4 col-md-6 pt-7">
	<div class="product-item">
		<div class="product-img img-zoom-effect">
			<a href="#">
				<img class="img-full" src={item.img} alt="Product Images" />
			</a>
		</div>
		<div class="product-content">
			<a class="product-name pb-1" href="#">{item.nombre}</a>
			<div class="price-box">
				<div class="price-box-holder">
					<span>Precio:</span>
					<span class="new-price text-warning">${item.precio}</span>
				</div>
			</div>
			<div class="product-add-action">
				<ul>
					<li>
						<a
							href="#"
							on:click={() => {
								comprar(item);
							}}
							id={item.id}
						>
							<i class="pe-7s-cart" />
						</a>
					</li>
					<li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
						<a
							href="#"
							data-tippy="Quickview"
							data-tippy-inertia="true"
							data-tippy-animation="shift-away"
							data-tippy-delay="50"
							data-tippy-arrow="true"
							data-tippy-theme="sharpborder"
						>
							<i class="pe-7s-look" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.pe-7s-look {
		background-color: gainsboro;
	}
	.pe-7s-look::before {
		font-size: 1.3rem;
	}
</style>
