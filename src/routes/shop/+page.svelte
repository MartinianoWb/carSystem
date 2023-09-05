<script>
	// @ts-nocheck
	import Filter from '$components/Home/components/Filter.svelte';
	import Cards from '../../components/Home/components/Cards.svelte';
	import { getAllParts } from '$components/services/partes.js';
	import { onMount } from 'svelte';
	import BigCard from '../../components/BigCard/BigCard.svelte';
	let data = [];
	let filtro = [];
	let mostrar = [];

	onMount(async () => {
		data = await getAllParts();
		mostrar = data;
	});
	function manejarObjetosEnviados(event) {
		filtro = event.detail;

		mostrar = filtro;
	}
</script>

<main class="main-content">
	<div class="shop-area section-space-y-axis-100">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-lg-4 order-lg-1 order-2 pt-10 pt-lg-0">
					<div class="sidebar-area style-2">
						<Filter {data} on:objetos-enviados={manejarObjetosEnviados} />
					</div>
				</div>
				<div class="col-xl-9 col-lg-8 order-lg-2 order-1">
					<div class="product-topbar">
						<ul>
							<li class="product-view-wrap">
								<ul class="nav" role="tablist">
									<li class="grid-view" role="presentation">
										<a
											class="active"
											id="grid-view-tab"
											data-bs-toggle="tab"
											href="#grid-view"
											role="tab"
											aria-selected="true"
										>
											<i class="fa fa-th" />
										</a>
									</li>
									<li class="list-view" role="presentation">
										<a
											id="list-view-tab"
											data-bs-toggle="tab"
											href="#list-view"
											role="tab"
											aria-selected="true"
										>
											<i class="fa fa-th-list" />
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="tab-content text-charcoal pt-8">
						<div
							class="tab-pane fade show active"
							id="grid-view"
							role="tabpanel"
							aria-labelledby="grid-view-tab"
						>
							<div class="product-grid-view row">
								{#each mostrar as item}
									<Cards {item} />
								{/each}
							</div>
						</div>
						<div
							class="tab-pane fade"
							id="list-view"
							role="tabpanel"
							aria-labelledby="list-view-tab"
						>
							<div class="product-list-view row">
								{#each mostrar as item}
									<BigCard {item} />
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
