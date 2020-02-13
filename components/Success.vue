<template>
  <div class="success">
		<div class="content">
			<h1>Flotte greier!</h1>
			<div class="text">
				<p v-if="type == 'seat'">Du har nå reservert plass! Ønsker du å endre plassen, så bare går du tilbake til der du var og reserverer på nytt en annen plass. Vi snakkes :-)</p>
				<p v-if="type == 'tournament'">Du er nå påmeldt turneringen! Ønsker du å bli med på flere turneringer, så bare last denne sida inn på nytt og gjør samme prosess på nytt.</p>
				<nuxt-link to="/">Til forsida</nuxt-link>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	props: ['type'],
	data() {
		return {
		}
	},
}
</script>

<style lang="scss" scoped>
.success {
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: black;
	z-index: 10;
	.content {
		h1 {
			-webkit-text-stroke: 1px white;
			color: transparent;
			text-transform: uppercase;
			font-size: 52px;
			line-height: 1.2em;
			margin-bottom: 50px;
		}
		max-width: 600px;
		margin-left: 15%;
		margin-right: 15%;
		margin-top: 20vh;
		.text {
			color: white;
			margin-bottom: 20px;
			p {
				margin-bottom: 30px;
			}
		}
		input {
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
		button {
			margin-top: 40px;
			font-size: 16px;
			outline: none;
			border: 4px double white;
			//background: $purple1;
			background: black;
			color: white;
			padding: 10px 20px;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			width: 100%;
			cursor: pointer;
		}
	}
}
</style>
