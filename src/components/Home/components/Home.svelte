<script>
	// @ts-nocheck
	import { getAllParts } from '$components/services/partes.js';
	import { onMount } from 'svelte';
	import Cards from '$components/Home/components/Cards.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import Footer from '$components/Footer/Footer.svelte';

	let data = [];
	let mostrar = [];

	onMount(async () => {
		data = await getAllParts();
		mostrar = data;
	});
</script>

<section>
	<Carousel />

	<div class="background-img">
		<div class="inner-bg">
			<img
				src="https://htmldemo.net/tromic/tromic/assets/images/background-img/inner-bg/1-1-496x566.png"
				alt="Inner Background"
			/>
		</div>
		<div class="banner-area section-space-top-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="banner-item img-hover-effect">
							<div class="banner-img img-zoom-effect">
								<img
									class="img-full"
									src="https://htmldemo.net/tromic/tromic/assets/images/banner/1-1-400x250.jpg"
									alt="Banner Image"
								/>
								<div class="inner-content text-white">
									<h3 class="offer">Desde $30,000</h3>
									<h2 class="title mb-5">Ultimas ruedas <br /> de auto</h2>
									<div class="button-wrap">
										<a class="btn btn-custom-size btn-primary" href="/shop">Compra ahora</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 pt-6 pt-md-0">
						<div class="banner-item img-hover-effect">
							<div class="banner-img img-zoom-effect">
								<img
									class="img-full"
									src="https://htmldemo.net/tromic/tromic/assets/images/banner/1-2-400x250.jpg"
									alt="Banner Image"
								/>
								<div class="inner-content text-white">
									<h3 class="offer">Desde $60,000</h3>
									<h2 class="title mb-5">Ultimas ruedas <br /> de auto</h2>
									<div class="button-wrap">
										<a class="btn btn-custom-size btn-primary" href="/shop">Compra ahora</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 pt-6 pt-lg-0">
						<div class="banner-item img-hover-effect">
							<div class="banner-img img-zoom-effect">
								<img
									class="img-full"
									src="https://htmldemo.net/tromic/tromic/assets/images/banner/1-3-400x250.jpg"
									alt="Banner Image"
								/>
								<div class="inner-content text-white">
									<h3 class="offer">Desde $120,000</h3>
									<h2 class="title mb-5">Ultimas ruedas <br /> de auto</h2>
									<div class="button-wrap">
										<a class="btn btn-custom-size btn-primary" href="/shop">Compra ahora</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Begin Shipping Area -->
		<div class="shipping-area section-space-y-axis-100">
			<div class="container">
				<div
					class="shipping-bg"
					style="background-image: url(https://htmldemo.net/tromic/tromic/assets/images/shipping/bg/1-1-1280x202.jpg);"
				>
					<div class="row shipping-wrap py-5 py-xl-0">
						<div class="col-lg-4">
							<div class="shipping-item">
								<div class="shipping-img">
									<img
										src="https://htmldemo.net/tromic/tromic/assets/images/shipping/icon/plane.png"
										alt="Shipping Icon"
									/>
								</div>
								<div class="shipping-content">
									<h2 class="title">Envio gratis</h2>
									<p class="short-desc mb-0">Envio gratis desde los $10.000</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 pt-4 pt-lg-0">
							<div class="shipping-item">
								<div class="shipping-img">
									<img
										src="https://htmldemo.net/tromic/tromic/assets/images/shipping/icon/earphones.png"
										alt="Shipping Icon"
									/>
								</div>
								<div class="shipping-content">
									<h2 class="title">Soporte online</h2>
									<p class="short-desc mb-0">
										Para su seguridad contamos con soporte 24/7 hasta que llegue su producto
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 pt-4 pt-lg-0">
							<div class="shipping-item">
								<div class="shipping-img">
									<img
										src="https://htmldemo.net/tromic/tromic/assets/images/shipping/icon/shield.png"
										alt="Shipping Icon"
									/>
								</div>
								<div class="shipping-content">
									<h2 class="title">Pago seguro</h2>
									<p class="short-desc mb-0">
										Utilizamos pasarelas de pago verificadas para su seguridad
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Shipping Area End Here -->
	</div>

	<div class="background-img" data-bg-image="assets/images/background-img/1-1-1920x1107.jpg">
		<div class="product-area section-space-y-axis-100">
			<div class="container">
				<div class="section-title pb-55">
					<h2 class="title mb-0">Ofertas especiales</h2>
				</div>
				<div class="row">
					<div class="col-lg-9 m-auto">
						<div class="product-item-wrap row">
							{#each mostrar.slice(0, 6) as item}
								<Cards {item} />
							{/each}
						</div>
					</div>
					<div class="col-12 pt-55">
						<div class="button-wrap d-flex">
							<a class="btn btn-link mx-auto fs-5 text-danger with-underline p-0" href="/shop"
								>Ver mas productos</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />

<!-- <div class="Home__container-secundario">
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
	</div> -->
