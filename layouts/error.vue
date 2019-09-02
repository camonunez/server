<template lang="pug">
	.rootError
		section.container
			//.iconoError.icono.caca
			h1.statusCode
				| {{ error.statusCode }}
			h2.info(v-if="error.statusCode === 404")
				| Página no encontrada
			h2.info(v-else)
				| {{ error.message }}
			//h2.info(v-if="enDesarrollo")
				| Este sitio está en desarrollo
			nuxt-link.button(to="/" v-if="error.statusCode === 404")
				| Al inicio
			.button(@click="recargar" v-else)
				| Recargar
</template>
<script>
	export default {
		props: ['error'],
		computed: {
			// enDesarrollo () {
			// 	return this.$store.state && this.$store.state.host === 'obiqu.com'
			// }
		},
		methods: {
			recargar () {
				window.location.reload()
			}
		}
	}
</script>
<style lang="sass" scoped>
	.rootError
		display: flex
		align-items: center
		justify-content: center
		text-align: center

	.iconoError
		font-size: 8em
	.statusCode
		margin-top: 15px
		font-size: 7em
	.info
		font-weight: 300
		color: #9aabb1
		margin: 0
	.button
		display: inline-block
		margin-top: 50px
</style>
