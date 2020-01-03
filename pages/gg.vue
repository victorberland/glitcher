<template>
  <div class="success">

		<h1>GG.</h1>
		<h3>Fett! Du er nå påmeldt Glitcher LAN og vil straks motta en bekreftelse på e-post. Vi vil holde deg oppdatert på hva som skjer videre via e-post. Lykke til i samfunnet i mellomtiden!</h3>
		<nuxt-link class="button" to="/">Tilbake</nuxt-link>

  </div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
.success {
}

.success {
	margin-left: 8%;
	margin-right: 5%;
	margin-top: 8%;
	h1 {
		font-size: 9vw;
		mix-blend-mode: screen;
		text-transform: uppercase;
		-webkit-text-stroke: 1px white;
	}
	h3 {
		margin-top: 50px;
		color: white;
		max-width: 700px;
		line-height: 180%;
		margin-bottom: 50px;
	}
	.button {
		border: 2px double white;
		padding: 10px 20px;
		color: white;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
}

@media(max-width: 800px) {
	.success {
		h1 {
			font-size: 16vw;
		}
	}
}
</style>
