<script>
	// @ts-nocheck

	export let data = [];
</script>

<div>
	<h3>Categorias</h3>
	<div>
		{#each data as item}
			<div>
				<img src={item.image} alt="" />
				<h4>{item.name}</h4>
			</div>
		{/each}
	</div>
</div>
