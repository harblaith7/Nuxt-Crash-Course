<template>
	<div>
		<h3>Customer Reviews</h3>
		<div v-if="reviewers.results">
			<ReviewCardComponent
				v-for="reviewer in reviewers.results"
				:key="reviewer.login.uuid"
				:review="reviewer"
			/>
		</div>
		<div v-else>
			<ReviewSkeletonCardComponent
				v-for="reviewer in 3"
				:key="reviewer"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "ReviewsComponent",
	props: ['id'],
	data() {
		return {
			reviewers: []
		}
	},
	async fetch() {
		this.reviewers = await fetch(`https://randomuser.me/api/?results=${this.id}`)
			.then((res) => res.json())
	}
}
</script>

<style scoped>
</style>
