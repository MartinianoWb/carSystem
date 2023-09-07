<script>
	// @ts-nocheck
	import { carrito, userIsValid } from '$components/store.js';

	let userStore = false;
	userIsValid.subscribe((/** @type {any} */ value) => {
		userStore = value;
	});
	let isValid = false;
	function clickCart() {
		isValid = !isValid;
	}

	// @ts-nocheck

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

<div class="main-wrapper">
	<!-- Begin Main Header Area -->
	<header class="main-header-area">
		<div class="header-top border-bottom d-none d-lg-block">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-6" />
					<div class="col-6">
						<div class="header-top-right text-matterhorn">
							<p class="shipping mb-0">Envio gratis a partir de <span>$10000</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-middle header-sticky py-6 py-lg-0">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-12">
						<div class="header-middle-wrap position-relative">
							<a href="index.html" class="header-logo" />

							<div class="main-menu d-none d-lg-block">
								<nav class="main-nav">
									<ul>
										<li class="drop-holder">
											<a href="/">Inicio </a>
										</li>
										<li class="megamenu-holder">
											<a href="/shop">Tienda </a>
										</li>
									</ul>
								</nav>
							</div>
							<div class="header-right">
								<ul>
									<li class="dropdown d-none d-lg-block">
										<button
											class="btn btn-link dropdown-toggle ht-btn p-0"
											type="button"
											id="settingButton"
											data-bs-toggle="dropdown"
											aria-label="setting"
											aria-expanded="false"
										>
											<i class="pe-7s-user" />
										</button>
										<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="settingButton">
											{#if !userStore}
												<li>
													<a class="dropdown-item" href="/auth/login">Iniciar sesion</a>
													<a class="dropdown-item" href="/auth/register">Registrarse</a>
												</li>
											{:else}
												<div class="navbar__logged d-flex flex-column">
													<li><a class="dropdown-item" href="/">Inicio</a></li>
													<li><a class="dropdown-item" href="/auth/login">Cerrar sesion</a></li>
													<!-- <a href="">Mi perfil</a> -->
												</div>
											{/if}
										</ul>
									</li>

									<li class="minicart-wrap me-3 me-lg-0">
										<a on:click={clickCart} class="minicart-btn toolbar-btn">
											<i class="pe-7s-shopbag" />
											<span class="quantity">{cantidadCarrito}</span>
										</a>
									</li>
									<li class="mobile-menu_wrap d-block d-lg-none">
										<a href="#mobileMenu" class="mobile-menu_btn toolbar-btn pl-0">
											<i class="pe-7s-menu" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class={isValid ? 'offcanvas-minicart_wrapper open' : 'offcanvas-minicart_wrapper'}
			id="miniCart"
		>
			<div class="offcanvas-body">
				<div class="minicart-content">
					<div class="minicart-heading">
						<h4 class="mb-0">Carrito</h4>
						<a href="#" class="button-close" on:click={clickCart}
							><i
								class="pe-7s-close"
								data-tippy="Close"
								data-tippy-inertia="true"
								data-tippy-animation="shift-away"
								data-tippy-delay="50"
								data-tippy-arrow="true"
								data-tippy-theme="sharpborder"
							/></a
						>
					</div>
					<ul class="minicart-list">
						{#each carritoStore as elm}
							<li class="minicart-product">
								<a
									class="product-item_remove"
									href="#"
									on:click={() => {
										deleteProduct(elm.id);
									}}
									><i
										class="pe-7s-trash"
										data-tippy="Wanna Remove?"
										data-tippy-inertia="true"
										data-tippy-animation="shift-away"
										data-tippy-delay="50"
										data-tippy-arrow="true"
										data-tippy-theme="sharpborder"
									/></a
								>
								<a href="#" class="product-item_img">
									<img class="img-full" src={elm.img} alt="Product Image" />
								</a>
								<div class="product-item_content">
									<a class="product-item_title" href="shop.html">{elm.nombre}</a>
									<span class="product-item_quantity">{elm.cantidad + ' X ' + elm.precio}</span>
								</div>
							</li>
						{/each}
					</ul>
				</div>
				{#if carritoStore.length === 0}
					<div class="minicart-item_total mx-auto">
						<span>No hay productos en el carrito</span>
					</div>
				{:else}
					<div class="minicart-item_total">
						<span>Total</span>
						<span class="ammount">${total}</span>
					</div>
				{/if}

				<div class="group-btn_wrap d-grid gap-2">
					{#if carritoStore.length !== 0}
						<a on:click={vaciarCarrito} class="btn btn-danger btn-primary-hover"
							>Vaciar carrito completo</a
						>
						<a href="/checkout" class="btn btn-dark btn-primary-hover">Finalizar compra</a>
					{/if}
				</div>
			</div>
		</div>
		<div class={isValid ? 'global-overlay overlay-open' : 'global-overlay'} />
	</header>
</div>
