<template>
	<NuxtLink :to="`/products/${card.id}`" class="card">
		<img :src="require(`@/assets/images/${card.image || 'placeholder.png'}`)" alt="fire extinguisher" class="image" />
		<h3 class="header">
			{{ card.title }}
		</h3>
		<p class="snippet">
			{{ card.snippet }}
		</p>
	</NuxtLink>
</template>

<script>
export default {
	name: "LargeCardComponent",
	props: ['card']
}
</script>

<style scoped>
* {
	transition: all 0.3s ease;
}

.card {
	width: 31.5%;
	height: 25rem;
	border: none;
	overflow: hidden;
	padding: 0;
	cursor: pointer;
	border-radius: 0.5rem;
}

.card:hover {
	color: #000;
	text-decoration-line: none;
	box-shadow: 3px 3px 5px 6px #ccc;
	background: #cccccc40;
}

.image {
	height: 65%;
	border-radius: 0.5rem;
	object-fit: cover;
}

.header {
	color: #000;
	font-size: 1.15rem;
	margin-top: 0.4rem;
	text-align: center;
}

.snippet {
	color: #808080;
	text-align: center;
	margin: 3px 10px 1px 10px;
}
</style>
