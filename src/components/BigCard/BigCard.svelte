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

<div class="col-12 pt-8">
	<div class="product-list-item">
		<div class="product-list-img img-zoom-effect">
			<a href="#">
				<img class="img-full" src={item.img} alt="Product Images" />
			</a>
		</div>
		<div class="product-list-content">
			<a class="product-name pb-2" href="#">{item.nombre}</a>
			<div class="price-box pb-1">
				<span class="new-price">${item.precio}</span>
			</div>
			<div class="rating-box pb-2">
				<ul>
					<li><i class="fa fa-star" /></li>
					<li><i class="fa fa-star" /></li>
					<li><i class="fa fa-star" /></li>
					<li><i class="fa fa-star" /></li>
					<li><i class="fa fa-star-o" /></li>
				</ul>
			</div>
			<p class="short-desc mb-0">
				{item.descripcion}
			</p>
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
