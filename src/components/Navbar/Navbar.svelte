<script>
	// @ts-nocheck
	import { userIsValid } from '$components/store.js';
	import Carrito from '$components/Carrito/Carrito.svelte';
	let userStore = false;

	userIsValid.subscribe((/** @type {any} */ value) => {
		userStore = value;
	});
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
							<p class="shipping mb-0">Envio gratis a partir de <span>$10000 pesos</span></p>
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
													<a class="dropdown-item" href="login-register.html">Iniciar sesion</a>
													<a class="dropdown-item" href="login-register.html">Registrarse</a>
												</li>
											{:else}
												<a href="/">Home</a>
												<div class="navbar__logged">
													<a href="/auth/login">Logout</a>
													<li><a class="dropdown-item" href="my-account.html">Mi cuenta</a></li>
													<li><a class="dropdown-item" href="my-account.html">Cerrar sesion</a></li>
													<Carrito />
													<!-- <a href="">Mi perfil</a> -->
												</div>
											{/if}
										</ul>
									</li>

									<li class="minicart-wrap me-3 me-lg-0">
										<a href="#miniCart" class="minicart-btn toolbar-btn">
											<i class="pe-7s-shopbag" />
											<span class="quantity">5</span>
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
		<div class="mobile-menu_wrapper" id="mobileMenu">
			<div class="offcanvas-body">
				<div class="inner-body">
					<div class="offcanvas-top">
						<a href="#" class="button-close"><i class="pe-7s-close" /></a>
					</div>
					<div class="offcanvas-user-info text-center px-6 pb-5">
						<div class=" text-silver">
							<p class="shipping mb-0">
								Free delivery on order over <span class="text-primary">$200</span>
							</p>
						</div>
					</div>
					<div class="offcanvas-menu_area">
						<nav class="offcanvas-navigation">
							<ul class="mobile-menu">
								<li class="menu-item-has-children">
									<a href="#">
										<span class="mm-text"
											>Home
											<i class="pe-7s-angle-down" />
										</span>
									</a>
									<ul class="sub-menu">
										<li>
											<a href="index.html">
												<span class="mm-text">Home One</span>
											</a>
										</li>
										<li>
											<a href="index-2.html">
												<span class="mm-text">Home Two</span>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="about.html">
										<span class="mm-text">About Us</span>
									</a>
								</li>
								<li class="menu-item-has-children">
									<a href="#">
										<span class="mm-text"
											>Shop
											<i class="pe-7s-angle-down" />
										</span>
									</a>
									<ul class="sub-menu">
										<li class="menu-item-has-children">
											<a href="#">
												<span class="mm-text"
													>Shop Layout
													<i class="pe-7s-angle-down" />
												</span>
											</a>
											<ul class="sub-menu">
												<li>
													<a href="shop.html">
														<span class="mm-text">Shop Default</span>
													</a>
												</li>
												<li>
													<a href="shop-grid-fullwidth.html">
														<span class="mm-text">Shop Grid Fullwidth</span>
													</a>
												</li>
												<li>
													<a href="shop-right-sidebar.html">
														<span class="mm-text">Shop Right Sidebar</span>
													</a>
												</li>
												<li>
													<a href="shop-list-fullwidth.html">
														<span class="mm-text">Shop List Fullwidth</span>
													</a>
												</li>
												<li>
													<a href="shop-list-left-sidebar.html">
														<span class="mm-text">Shop List Left Sidebar</span>
													</a>
												</li>
												<li>
													<a href="shop-list-right-sidebar.html">
														<span class="mm-text">Shop List Right Sidebar</span>
													</a>
												</li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="#">
												<span class="mm-text"
													>Product Style
													<i class="pe-7s-angle-down" />
												</span>
											</a>
											<ul class="sub-menu">
												<li>
													<a href="single-product.html">
														<span class="mm-text">Single Product Default</span>
													</a>
												</li>
												<li>
													<a href="single-product-group.html">
														<span class="mm-text">Single Product Group</span>
													</a>
												</li>
												<li>
													<a href="single-product-variable.html">
														<span class="mm-text">Single Product Variable</span>
													</a>
												</li>
												<li>
													<a href="single-product-sale.html">
														<span class="mm-text">Single Product Sale</span>
													</a>
												</li>
												<li>
													<a href="single-product-sticky.html">
														<span class="mm-text">Single Product Sticky</span>
													</a>
												</li>
												<li>
													<a href="single-product-affiliate.html">
														<span class="mm-text">Single Product Affiliate</span>
													</a>
												</li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="#">
												<span class="mm-text"
													>Product Related
													<i class="pe-7s-angle-down" />
												</span>
											</a>
											<ul class="sub-menu">
												<li>
													<a href="my-account.html">
														<span class="mm-text">My Account</span>
													</a>
												</li>
												<li>
													<a href="login-register.html">
														<span class="mm-text">Login | Register</span>
													</a>
												</li>
												<li>
													<a href="cart.html">
														<span class="mm-text">Shopping Cart</span>
													</a>
												</li>
												<li>
													<a href="wishlist.html">
														<span class="mm-text">Wishlist</span>
													</a>
												</li>
												<li>
													<a href="compare.html">
														<span class="mm-text">Compare</span>
													</a>
												</li>
												<li>
													<a href="checkout.html">
														<span class="mm-text">Checkout</span>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="menu-item-has-children">
									<a href="#">
										<span class="mm-text"
											>Pages
											<i class="pe-7s-angle-down" />
										</span>
									</a>
									<ul class="sub-menu">
										<li>
											<a href="faq.html">
												<span class="mm-text">Frequently Questions</span>
											</a>
										</li>
										<li>
											<a href="404.html">
												<span class="mm-text">Error 404</span>
											</a>
										</li>
									</ul>
								</li>
								<li class="menu-item-has-children">
									<a href="#">
										<span class="mm-text"
											>Blog
											<i class="pe-7s-angle-down" />
										</span>
									</a>
									<ul class="sub-menu">
										<li class="menu-item-has-children">
											<a href="#">
												<span class="mm-text"
													>Blog Holder
													<i class="pe-7s-angle-down" />
												</span>
											</a>
											<ul class="sub-menu">
												<li>
													<a href="blog.html">
														<span class="mm-text">Blog Default</span>
													</a>
												</li>
												<li>
													<a href="blog-listview.html">Blog List View</a>
												</li>
												<li>
													<a href="blog-detail.html">Blog Detail</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="contact.html">
										<span class="mm-text">Contact</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<div class="offcanvas-minicart_wrapper" id="miniCart">
			<div class="offcanvas-body">
				<div class="minicart-content">
					<div class="minicart-heading">
						<h4 class="mb-0">Shopping Cart</h4>
						<a href="#" class="button-close"
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
					<ul class="minicart-list" />
				</div>
				<div class="minicart-item_total">
					<span>Subtotal</span>
					<span class="ammount">$240.00</span>
				</div>
				<div class="group-btn_wrap d-grid gap-2">
					<a href="cart.html" class="btn btn-dark btn-primary-hover">View Cart</a>
					<a href="checkout.html" class="btn btn-dark btn-primary-hover">Checkout</a>
				</div>
			</div>
		</div>
		<div class="global-overlay" />
	</header>
</div>
