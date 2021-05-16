<template>
	<div class="container">
		<h1>Page Not Found</h1>
		<img :src="require('@/assets/images/fe26.jpg')" alt="fire extinguisher" class="image">
	</div>
</template>

<script>
export default {
	name: "PageNotFound"
}
</script>

<style scoped>
div {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50rem;
	padding: 5rem 0;
	height: 70vh;
}

h1 {
	font-size: 7.5rem;
}

.image {
	width: 15rem;
	margin: 0 auto;
}
</style>
