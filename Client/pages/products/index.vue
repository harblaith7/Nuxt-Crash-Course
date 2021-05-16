<template>
	<div>
		<div class="container">
			<LargeCardDisplayComponent
				v-for="cardInfo in largeCardsData.slice(0, 1)"
				:key="cardInfo.id"
				:cardData="cardInfo"
			/>
			<SmallCardDisplayComponent
				v-for="cardInfo in smallCardsData"
				:key="cardInfo.id"
				:cardData="cardInfo"
			/>
		</div>
	</div>
</template>

<script>
import { largeCardsData, smallCardsData } from '@/assets/data.js'

export default {
	data() {
		return {
			largeCardsData,
			smallCardsData
		}
	}
}
</script>

<style scoped>
</style>
