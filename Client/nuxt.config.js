export default {
	head: {
		title: 'Firengii',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
	],

	plugins: [
		{ src: '~plugins/vue-calendar.js', mode: 'client' }
	],

	components: true,

	buildModules: [
	],

	modules: [
		'bootstrap-vue/nuxt',
	],

	build: {
	}
}
