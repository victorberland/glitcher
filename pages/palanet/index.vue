<template>
	<div>
		<div class="palanet">

			<section class="sidebar">
				<ul>
					<li><nuxt-link to="/palanet/plass">Velg plass</nuxt-link></li>
					<li><nuxt-link to="/palanet/turnering">Meld på turnering</nuxt-link></li>
				</ul>
			</section>

			<main class="main">
				<h1>På lanet</h1>
			</main>

		</div>


		<div class="bg"></div>


  </div>
</template>

<script>
export default {
	layout: 'minimal',
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
	margin: 5%;
	.sidebar {
		background: black;
		padding: 80px;
		width: 30%;
		float: left;
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
			li {
				margin-bottom: 50px;
				a {
					color: #777;
					mix-blend-mode: screen;
					font-weight: bold;
					text-transform: uppercase;
					font-size: 26px;
					text-decoration: none;
					transition: 0.1s color ease;
					&:hover {
						color: #aaa;
					}
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
	.main {
		width: 65%;
		color: white;
		background: black;
		float: right;
		padding: 100px 10%;
		h1 {
			-webkit-text-stroke: 1px white;
			text-transform: uppercase;
			color: transparent;
			font-size: 50px;
			letter-spacing: 5px;
		}
		p {
			max-width: 700px;
		}
	}	
}

.bg {
	position: fixed;
	height: 100%;
	width: 100%;
	background: #261340;
	z-index: -1;
	top: 0;
}
@media(max-width: 800px) {
	.success {
		h1 {
			font-size: 16vw;
		}
	}
}
</style>
