<template>
	<div class="container">
		<div v-if="myRentals.length !== 0">
			<ItemComponent
				v-for="rental in myRentals"
				:key="rental.id"
				:item="$store.getters.getProductById(rental.id)"
			/>
		</div>
		<div v-else>
			Rent something
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	layout: 'no-navbar',
	computed: {
		...mapState(['myRentals', 'products'])
	}
}
</script>

<style scoped>
.container {
	padding: 5rem 0;
}
</style>
