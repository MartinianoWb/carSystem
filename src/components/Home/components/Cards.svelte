<script>
	// @ts-nocheck
	import { Carrito } from '$components/store.js';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	export let item = {};
	const carritoClass = new Carrito();
	const showToast = (msg) => {
		const toast = toasts.add({
			title: msg ?? 'Se ha agregado un producto al carrito',
			description: '',
			duration: 3000, // 0 or negative to avoid auto-remove
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
			onClick: () => {},
			onRemove: () => {}
			// component: BootstrapToast, // allows to override toast component/template per toast
		});
	};
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
								carritoClass.comprar(item);
								showToast();
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

<ToastContainer let:data>
	<FlatToast {data} />
</ToastContainer>

<style>
	.pe-7s-look {
		background-color: gainsboro;
	}
	.pe-7s-look::before {
		font-size: 1.3rem;
	}
</style>
