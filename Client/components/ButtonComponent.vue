<template>
	<a :href="href" class="button">
		<p class="button-body">
			<span class="button-bg"></span>
			<span class="button-bs"></span>
			<span class="button-txt">{{ text }}</span>
		</p>
	</a>
</template>

<script>
export default {
	name: "ButtonComponent",
	props: ['href', 'text']
}
</script>

<style scoped>
.button {
	cursor: pointer;
	width: 100%;
	max-width: 240px;
	height: 54px;
	padding: 8px;
	font-size: 0.8rem;
	font-weight: 900;
	color: #d72255;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
	position: relative;
	margin: 10px 0;
}

.button-body {
	margin: 0;
	height: 54px;
	line-height: 54px;
	box-sizing: border-box;
	z-index: 1;
	left: 0;
	width: 100%;
	position: relative;
	overflow: hidden;
}

.button-bs {
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	left: 0;
	border: 1px solid #d72255;
}

.button-bg {
	left: -5%;
	position: absolute;
	background: #d72255;
	width: 0;
	height: 100%;
	z-index: 3;
	transition: 0.3s ease-out all !important;
	transform: skewX(-10deg);
}

.button-txt {
	z-index: 4;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.button:hover {
	color: #ece8e1;
	border-color: #d72255;
}

.button:hover .button-bg {
	width: 110%;
}

.button:hover .button-txt:after {
	background: #ece8e1;
}
</style>
