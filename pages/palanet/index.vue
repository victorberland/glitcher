<template>
  <div class="palanet">

		<ul>
			<li><nuxt-link to="/palanet/plass">Velg plass</nuxt-link></li>
			<li><nuxt-link to="/palanet/turnering">Turnering</nuxt-link></li>
		</ul>

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

.palanet {
	margin-left: 8%;
	margin-right: 5%;
	margin-top: 8%;
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			margin-bottom: 30px;
			a {
				color: transparent;
				mix-blend-mode: screen;
				font-weight: bold;
				text-transform: uppercase;
				-webkit-text-stroke: 1px white;
				font-size: 66px;

			}
		} 
	}
	h1 {
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
		background: transparent;
		padding: 10px 20px;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		cursor: pointer;
	}
	.content {
		max-width: 800px;
		color: white;
		input[type="text"], input[type="number"], input[type="email"] {
			width: 100%;
			outline: none;
			border: 0px;
			border: 2px solid white;
			color: white;
			background: black;
			padding: 10px 20px;
			font-size: 16px;
			margin: 20px 0;
		}
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
