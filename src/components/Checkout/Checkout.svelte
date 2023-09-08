<script>
	// @ts-nocheck

	import { userIsValid } from '$components/store.js';
	import { carrito } from '$components/store.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let userStore = false;
	userIsValid.subscribe((value) => {
		userStore = value;
	});
	let cantidadCarrito = 0;
	let carritoStore = [];
	let total = 0;
	carrito.subscribe((value) => {
		console.log(value);
		carritoStore = value;
		cantidadCarrito = value.cantidad
			? value.cantidad
			: value.reduce((acc, elm) => acc + elm.cantidad, 0);
		total = carritoTotal();
	});

	function carritoTotal() {
		let total = 0;
		carritoStore.forEach((item) => {
			total += item.precio * item.cantidad;
		});
		return total;
	}

	onMount(() => {
		if (!userStore) {
			// goto('/auth/login');
		}
	});
</script>

<div class="checkout-area section-space-y-axis-100">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-12">
				<form action="javascript:void(0)">
					<div class="checkbox-form">
						<h3>Formulario de pago</h3>
						<div class="row">
							<div class="col-md-12">
								<div class="country-select clearfix">
									<label>País <span class="required">*</span></label>
									<select class="myniceselect nice-select wide">
										<option data-display="Bangladesh">Argentina</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Nombre <span class="required">*</span></label>
									<input placeholder="" type="text" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Apellido <span class="required">*</span></label>
									<input placeholder="" type="text" />
								</div>
							</div>
							<div class="col-md-12">
								<div class="checkout-form-list">
									<label>Dirección <span class="required">*</span></label>
									<input placeholder="Dirección de calle" type="text" />
								</div>
							</div>
							<div class="col-md-12">
								<div class="checkout-form-list">
									<input placeholder="Apartamento - piso" type="text" />
								</div>
							</div>
							<div class="col-md-12">
								<div class="checkout-form-list">
									<label>Ciudad / Pueblo <span class="required">*</span></label>
									<input type="text" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Provincia <span class="required">*</span></label>
									<input placeholder="" type="text" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Código postal <span class="required">*</span></label>
									<input placeholder="" type="text" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Email <span class="required">*</span></label>
									<input placeholder="" type="email" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="checkout-form-list">
									<label>Número de celular <span class="required">*</span></label>
									<input type="text" />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-lg-6 col-12">
				<div class="your-order">
					<h3>Tu pedido</h3>
					<div class="your-order-table table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th id="cart-product-name">Producto</th>
									<th id="cart-product-total">Total</th>
								</tr>
							</thead>
							<tbody>
								{#each carritoStore as elm}
									<tr class="cart_item">
										<td class="cart-product-name text-left">
											{elm.nombre} <strong class="product-quantity"> × {elm.cantidad}</strong>
										</td>
										<td class="cart-product-total text-end"
											><span class="amount">${elm.cantidad * elm.precio}</span></td
										>
									</tr>
								{/each}
							</tbody>
							<tfoot>
								<tr class="cart-subtotal text-left">
									<th>SubTotal</th>
									<td class="text-end"><span class="amount">${total}</span></td>
								</tr>
								<tr class="order-total">
									<th class="text-left">Total</th>
									<td class="text-end"><strong><span class="amount">${total}</span></strong></td>
								</tr>
							</tfoot>
						</table>
					</div>
					<div class="payment-method">
						<div class="payment-accordion">
							<div id="accordion">
								<div class="card">
									<div class="card-header" id="#payment-1">
										<h5 class="panel-title">
											<a
												href="#"
												class=""
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
											>
												Transferencia bancaria directa.
											</a>
										</h5>
									</div>
									<div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
										<div class="card-body">
											<p>
												Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de
												pedido como referencia de pago. Su pedido no se enviará hasta que los fondos
												se hayan liquidado en nuestra cuenta.
											</p>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="#payment-2">
										<h5 class="panel-title">
											<a
												href="#"
												class="collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
											>
												Pago con cheque
											</a>
										</h5>
									</div>
									<div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
										<div class="card-body">
											<p>
												Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de
												pedido como referencia de pago. Su pedido no se enviará hasta que los fondos
												se hayan liquidado en nuestra cuenta.
											</p>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="#payment-3">
										<h5 class="panel-title">
											<a
												href="#"
												class="collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
											>
												PayPal
											</a>
										</h5>
									</div>
									<div id="collapseThree" class="collapse" data-bs-parent="#accordion">
										<div class="card-body">
											<p>
												Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de
												pedido como referencia de pago. Su pedido no se enviará hasta que los fondos
												se hayan liquidado en nuestra cuenta.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="order-button-payment">
								<input value="Realizar pedido" type="submit" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
