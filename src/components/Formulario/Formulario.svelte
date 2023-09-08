<script>
	// @ts-nocheck
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import { getUsers, createUser } from '$components/services/users.js';
	import { userIsValid } from '$components/store.js';
	import { goto } from '$app/navigation';

	export let type = 'login';
	let isValid = false;
	let loginObj = {
		name: '',
		password: ''
	};
	let registerObj = {
		name: '',
		passwordConfirm: '',
		password: ''
	};
	const showToast = (msg) => {
		const toast = toasts.add({
			title: msg ?? 'Error, todos los campos son obligatorios',
			description: 'Por favor rellene los campos.',
			duration: 3000, // 0 or negative to avoid auto-remove
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
			} else if (e.target.id === 'passwordConfirm') {
				registerObj.passwordConfirm = e.target.value;
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
			(registerObj.name !== '' && registerObj.password !== '' && registerObj.passwordConfirm !== '')
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
				if (registerObj.password !== registerObj.passwordConfirm) {
					showToast('Las contraseñas no coinciden');
					return;
				}
				const { password, name } = registerObj;
				const object = {
					name: name,
					password: password
				};
				const user = await createUser(object);
				if (user) {
					userIsValid.set(true);
					goto('/');
				} else {
					showToast('Hubo un error al crearlo');
				}
			} else {
				const { name, password } = loginObj;
				console.log(getUsers);
				const res = await getUsers(name, password);

				if (res) {
					userIsValid.set(true);
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
			obj.name !== '' &&
			obj.password !== '' &&
			(type === 'register' ? obj.passwordConfirm !== '' : true)
		);
	}
</script>

<div class="col-lg-6 mx-auto mt-10">
	<form on:submit={handleSubmit} action="#">
		<div class="login-form">
			{#if type != 'register'}
				<h4 class="login-title">Inicio de sesión</h4>
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
							<a href="#" class=""> ¿Olvidó su contraseña?</a>
						</div>
					</div>
					<div class="col-lg-12 pt-5">
						<button
							class={!isValid
								? 'disableBtn btn btn-custom-size lg-size btn-primary'
								: 'btn btn-custom-size lg-size btn-primary'}>Iniciar sesión</button
						>
					</div>
				</div>
			{:else}
				<h4 class="login-title">Registro</h4>
				<div class="row">
					<div class="col-md-6 col-12">
						<label>Nombre</label>
						<input type="text" id="nombre" on:input={handleChange} placeholder="Ingresar nombre" />
					</div>
					<div class="col-md-6">
						<label>Contraseña</label>
						<input type="password" id="password" on:input={handleChange} placeholder="Contraseña" />
					</div>
					<div class="col-md-6">
						<label>Confirmar tu contraseña</label>
						<input
							type="password"
							id="passwordConfirm"
							on:input={handleChange}
							placeholder="Confirmar contraseña"
						/>
					</div>
					<div class="col-12">
						<button
							class={!isValid
								? 'disableBtn btn btn-custom-size lg-size btn-primary'
								: 'btn btn-custom-size lg-size btn-primary'}>Registrarme</button
						>
					</div>
				</div>
			{/if}
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
