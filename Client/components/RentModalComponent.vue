<template>
	<div>
		<div @click="showModal">
			<ButtonComponent
				id="show-btn"
				text="Rent"
			/>
		</div>

		<b-modal ref="my-modal" hide-footer title="Using Component Methods">
			<div class="calendar-container">
				<div class="text-container">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quis soluta quia neque! Ea modi, a omnis eligendi enim ducimus asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, autem?</p>
				</div>
				<vc-date-picker
					:value="null"
					color="indigo"
					is-dark
					is-range
				/>
			</div>
			<div
				@click="() => {
					addItem(product.id)
					hideModal()
				}"
			>
				<ButtonComponent
					text="Order"
				/>
			</div>
		</b-modal>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name: "RentModalComponent",
	props: ['product'],
	methods: {
		showModal() {
			this.$refs['my-modal'].show()
		},
		hideModal() {
			this.$refs['my-modal'].hide()
		},
		toggleModal() {
			this.$refs['my-modal'].toggle('#toggle-btn')
		},
		...mapMutations(['addItem']),
	}
}
</script>

<style scoped>
.calendar-container {
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}

p {
	color: #808080;
}

.text-container {
	padding: 0.5rem;
}
</style>
