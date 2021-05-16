<template>
	<div class="review-card">
		<div class="avatar">
			<img :src="review.picture.large" :alt="`${review.login.username}' avatar`">
		</div>
		<div class="text-container" >
			<h6>{{review.login.username}}</h6>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam magni beatae possimus debitis.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ReviewCardComponent",
	props: ['review']
}
</script>

<style scoped>
.review-card {
	margin-top: 1.5rem;
	height: 4rem;
	display: flex;
}

.text-container {
	margin-left: 2rem;
}

img {
	width: 4rem;
	height: 4rem;
	border-radius: 100%;
}

p {
	color: #808080;
}
</style>
