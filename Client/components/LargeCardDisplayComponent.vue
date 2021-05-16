<template>
	<div class="container">
		<h4 class="header">
			{{ cardData.title }}
		</h4>
		<p class="snippet">
			{{ cardData.snippet }}
		</p>
		<div class="cards-container">
			<LargeCardComponent
				v-for="card in cardData.cards"
				:key="card.id"
				:card="card"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "LargeCardDisplayComponent",
	props: ['cardData']
}
</script>

<style scoped>
.container {
	margin-top: 2rem;
}

.header {
	font-weight: 700;
	font-size: 1.5rem;
}

.snippet {
	color: #808080;
	margin-bottom: 1.5rem;
}

.cards-container {
	display: flex;
	justify-content: space-between;
}
</style>
