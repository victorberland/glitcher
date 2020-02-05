<template>
  <div class="auth">
		<div class="content">
			<h1>Hva er din e-postadresse?</h1>
			<p>Skriv inn den du brukte ved bestilling</p>
			<input type="email" v-model="email"/>
			<button type="button" @click="submit">Fortsett</button>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			email: null,
		}
	},
	methods: {
		submit() {
			this.$emit('submit', this.email)
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
.auth {
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
		p {
			color: white;
			margin-bottom: 20px;
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
