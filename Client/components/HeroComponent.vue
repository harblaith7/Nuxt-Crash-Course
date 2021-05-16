<template>
	<div class="hero container">
		<div class="text-container">
			<h1 class="header">Find your Fire Extinguisher</h1>
			<p class="snippet">
				Aliquid beatae corporis dolores ipsam
				iste non numquam officia placeat porro,
				quasi ratione sint? Animi earum magnam mollitia, necessitatibus neque
				omnis rem?
			</p>
			<ButtonComponent
				href="/products"
				text="Start Looking"
			/>
<!--			<button class="button btn">Start Looking</button>-->
		</div>
		<img src="~assets/svg/fire-extinguisher.svg" alt="fire extinguisher" class="image" />
	</div>
</template>

<script>
export default {
	name: "HeroComponent"
}
</script>

<style scoped>
.hero {
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}

.text-container {
  width: 50%;
  margin-top: 4rem;
}

.header {
  font-weight: 900;
  font-size: 5rem;
}

.snippet {
  color: #808080;
  font-size: 1.25rem;
}

.image {
  width: 27.5rem;
  margin-top: 2rem;
}
</style>
