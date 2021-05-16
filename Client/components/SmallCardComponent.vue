<template>
	<NuxtLink :to="`/products/${card.id}`" class="card">
		<img :src="require(`@/assets/images/${card.image || 'placeholder.png'}`)" alt="fire extinguisher" class="image" />
	</NuxtLink>
</template>

<script>
export default {
	name: "SmallCardComponent",
	props: ['card']
}
</script>

<style scoped>
* {
	transition: all 0.3s ease;
}

.card {
	width: 24%;
	height: 12.5rem;
	border-radius: 0.5rem;
	overflow: hidden;
	margin-bottom: 1.5rem;
	cursor: pointer;
}

.card:hover {
	color: #000;
	text-decoration-line: none;
	box-shadow: 3px 3px 5px 6px #ccc;
}

.image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 0.5rem;
}
</style>
