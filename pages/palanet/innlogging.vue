<template>
  <div class="login">
		<h1>På LAN.</h1>
		<main class="content">
			<h3>Reserver plasser, meld deg på turneringer og få oppdatert informasjon om Glitcher.</h3>
			<form>
				<label>E-postadresse brukt ved bestilling av billetter</label>
				<input type="email"/>
				<button type="button" class="button">Fortsett</button>
			</form>
		</main>

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

.login {
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
