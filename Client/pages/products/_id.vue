<template>
	<div>
		<div v-if="product" class="container py-5">
			<div class="hero-container">
<!--				<div class="image-wrapper">-->
<!--					<img :src="require(`@/assets/images/${product.image}`)" alt="fire extinguisher" class="blur-image" />-->
<!--					<img :src="require(`@/assets/images/${product.image}`)" alt="fire extinguisher" class="image" />-->
<!--				</div>-->
				<img :src="require(`@/assets/images/${product.image}`)" alt="fire extinguisher" class="image">
				<div class="info-box">
					<h1>{{ product.title }}</h1>
					<p class="snippet">{{ product.snippet }}</p>
					<RentModalComponent
						:product="product"
					/>
				</div>
			</div>
			<div class="whats-included-container">
				<div class="included-container">
					<h6>Super Effective</h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
				</div>
				<div class="included-container">
					<h6>Clean & Tidy</h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
				</div>
				<div class="included-container">
					<h6>Cancel Anytime</h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
				</div>
				<div class="included-container">
					<h6>Satisfaction Guaranteed</h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
				</div>
			</div>
			<div class="description-container">
				<p>
					{{ product.description }}
				</p>
			</div>
			<ReviewsComponent
				:id="this.$route.params.id"
			/>
		</div>
		<PageNotFound v-else />
	</div>
</template>

<script>
export default {
	computed: {
		product() {
			return this.$store.getters.getProductById(this.$route.params.id)
		}
	}
}
</script>

<style scoped>
.hero-container {
	display: flex;
	justify-content: space-between;
}

/*.image {*/
/*	position: relative;*/
/*	width: 59%;*/
/*	height: 25rem;*/
/*	object-fit: contain;*/
/*	border-radius: 4rem;*/
/*}*/

/*.blur-image {*/
/*	position: absolute;*/
/*	filter: blur(1px);*/
/*	width: 59%;*/
/*	height: 25rem;*/
/*	object-fit: cover;*/
/*}*/

.image {
	width: 59%;
	height: 25rem;
	object-fit: cover;
	border-radius: 0.5rem;
}

.info-box {
	width: 39%;
	background-color: #cfc9c952;
	padding: 1rem;
	border-radius: 0.5rem;
}

.whats-included-container {
	border-bottom: 0.1rem solid #80808026;
}

.description-container {
	border-bottom: 0.1rem solid #80808026;
	padding-bottom: 2rem;
	margin-bottom: 2rem;
}

.included-container {
	margin-top: 1.5rem;
}

h1 {
	font-size: 1.75rem;
}

h6 {
	font-size: 1.15rem;
	font-weight: 400;
}

p {
	color: #808080;
}

.snippet {
	color: #000000C5;
	margin-top: 1rem;
}

.description-container {
	margin-top: 3rem;
	color: #808080;
}
</style>
