<template lang="pug">
	.elCanvas
		nuxt
</template>
<script>
	export default {
		data () {
			return {
				montado: null
			}
		},
		mounted () {
			this.montado = true
		}
	}
</script>
<style lang="sass" scoped>
	//@import "~sass/layouts/default"
	//.elCanvas
		height: 100vh
		width: 100vw
		display: flex
		align-items: center
		justify-content: center

</style>
