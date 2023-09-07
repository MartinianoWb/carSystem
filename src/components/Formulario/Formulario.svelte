<script>
	// @ts-nocheck
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import { getUsers } from '$components/services/users.js';
	import { userIsValid } from '$components/store.js';
	import { goto } from '$app/navigation';

	export let type = 'login';
	export let title = '';
	let isValid = false;
	let loginObj = {
		name: '',
		password: ''
	};
	let registerObj = {
		name: '',
		avatar: '',
		password: ''
	};
	const showToast = (msg) => {
		const toast = toasts.add({
			title: msg ?? 'Error, todos los campos son obligatorios',
			description: 'Por favor rellene los campos.',
			duration: 0, // 0 or negative to avoid auto-remove
			placement: 'top-right',
			type: 'error',
			theme: 'dark',
			onClick: () => {},
			onRemove: () => {}
			// component: BootstrapToast, // allows to override toast component/template per toast
		});
	};
	function handleChange(e) {
		if (type == 'register') {
			if (e.target.id === 'nombre') {
				registerObj.name = e.target.value;
			} else if (e.target.id === 'avatar') {
				registerObj.avatar = e.target.value;
			} else if (e.target.id === 'password') {
				registerObj.password = e.target.value;
			}
		} else {
			if (e.target.id === 'nombre') {
				loginObj.name = e.target.value;
			} else if (e.target.id === 'password') {
				loginObj.password = e.target.value;
			}
		}
		if (
			(loginObj.name !== '' && loginObj.password !== '') ||
			(registerObj.name !== '' && registerObj.password !== '' && registerObj.avatar !== '')
		) {
			isValid = true;
		} else {
			console.log(loginObj, registerObj);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (
			(type === 'register' && hasRequiredFields(registerObj)) ||
			(type !== 'register' && hasRequiredFields(loginObj))
		) {
			if (type === 'register') {
			} else {
				const { name, password } = loginObj;
				console.log(getUsers);
				const res = await getUsers(name, password);

				if (res) {
					userIsValid.set(true);
					userIsValid.subscribe((value) => {
						console.log('userIsValid', value);
					});
					goto('/');
				} else {
					showToast('El usuario no existe o la contraseña es incorrecta');
				}
			}
		} else {
			showToast();
		}
	}
	function hasRequiredFields(obj) {
		return (
			obj.name !== '' && obj.password !== '' && (type === 'register' ? obj.avatar !== '' : true)
		);
	}
</script>

<!-- <section class="formulario">
	<form on:submit={handleSubmit} class="formulario__form">
		<h3>Bienvenido a autoCity</h3>
		<h3>{title}</h3>

		{#if type === 'register'}
			<div class="formulario__form-container">
				<label class="formulario__form-container-label" for="">Nombre</label>
				<input
					class="formulario__form-container-input"
					id="nombre"
					on:input={handleChange}
					type="text"
				/>
			</div>
			<div class="formulario__form-container">
				<label class="formulario__form-container-label" for="">Avatar</label>
				<input
					class="formulario__form-container-input formulario__form-container-input--modified"
					id="avatar"
					on:input={handleChange}
					type="file"
				/>
			</div>
			<div class="formulario__form-container">
				<label class="formulario__form-container-label" for="">Password</label>
				<input
					class="formulario__form-container-input"
					id="password"
					on:input={handleChange}
					type="password"
				/>
			</div>

			<button class="formulario__form-button">Registrarse</button>
		{:else}
			<label class="formulario__form-label" for="">Nombre</label>
			<input class="formulario__form-input" id="nombre" on:input={handleChange} type="text" />
			<label class="formulario__form-label" for="">Password</label>
			<input class="formulario__form-input" id="password" on:input={handleChange} type="password" />
			<button class={!isValid ? 'disableBtn formulario__form-button' : 'formulario__form-button'}
				>Iniciar Sesión</button
			>
		{/if}
	</form>
	<div class="formulario__background">
		<ToastContainer let:data>
			<FlatToast {data} />
		</ToastContainer>
	</div>
</section> -->
<div class="col-lg-6 mx-auto mt-10">
	<form on:submit={handleSubmit} action="#">
		<div class="login-form">
			<h4 class="login-title">Inicio de sesion</h4>
			<div class="row">
				<div class="col-lg-12">
					<label>Nombre de usuario*</label>
					<input on:input={handleChange} id="nombre" type="text" placeholder="Usuario" />
				</div>
				<div class="col-lg-12">
					<label>Contraseña</label>
					<input on:input={handleChange} id="password" type="password" placeholder="Contraseña" />
				</div>

				<div class="col-md-4 pt-1 mt-md-0 w-100">
					<div class="forgotton-password_info d-flex justify-content-end">
						<a href="#" class=""> ¿Olvido su contraseña?</a>
					</div>
				</div>
				<div class="col-lg-12 pt-5">
					<button
						class={!isValid
							? 'disableBtn btn btn-custom-size lg-size btn-primary'
							: 'btn btn-custom-size lg-size btn-primary'}>Iniciar sesion</button
					>
				</div>
			</div>
		</div>
	</form>
	<ToastContainer let:data>
		<FlatToast {data} />
	</ToastContainer>
</div>

<style>
	.formulario__background {
		background-image: url(https://www.megautos.com/wp-content/uploads/2016/12/Hyundai-concesionario-Busan-0.jpg);
		background-size: cover;
		background-position: center;
		width: 100%;
		filter: brightness(0.5);

		height: 100%;
	}
</style>
