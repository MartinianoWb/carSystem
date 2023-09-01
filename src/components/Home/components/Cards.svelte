<script>
	// @ts-nocheck
	export let item = {};
	console.log(item);
</script>

<div class="Cards">
	<div class="Cards__container">
		<div class="Cards__container-image" style="background-image: url({item.img})" />
		<div class="Cards__container-info">
			<h3>{item.nombre}</h3>
			<span>Precio: ${item.precio}</span>
			<button id={item.id}>Comprar</button>
			<a href="/producto/{item.id}">Ver producto</a>
		</div>
	</div>
</div>
