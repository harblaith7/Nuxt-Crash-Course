<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<NuxtLink to="/" class="navbar-brand">Firengii</NuxtLink>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active">
					<NuxtLink to="/products" class="nav-link">Products</NuxtLink>
				</li>
				<li class="nav-item active">
					<NuxtLink to="/@me/items" class="nav-link">My Items</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavbarComponent"
}
</script>

<style scoped>
* {
	transition: 0.3s ease-out all;
}

a:hover {
	color: #d72255 !important;
}
</style>
