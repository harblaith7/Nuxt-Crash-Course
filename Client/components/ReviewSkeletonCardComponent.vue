<template>
	<div class="review-card">
		<div class="avatar">
			<b-skeleton type="avatar" />
		</div>
		<div class="text-container" >
			<b-skeleton class="title" />
			<b-skeleton class="text" />
		</div>
	</div>
</template>

<script>
export default {
	name: "ReviewSkeletonCardComponent"
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

.title {
	width: 10vw;
}

.text {
	width: 40vw;
}
</style>
