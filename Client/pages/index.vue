<template>
	<div class="container">
		<HeroComponent />
		<LargeCardDisplayComponent
			v-for="cardInfo in largeCardsData"
			:key="cardInfo.id"
			:cardData="cardInfo"
		/>
		<SmallCardDisplayComponent
			v-for="cardInfo in smallCardsData"
			:key="cardInfo.id"
			:cardData="cardInfo"
		/>
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

<style></style>
