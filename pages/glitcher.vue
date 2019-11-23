<template>
  <div class="glitcher">

		<div class="black-col" :class="{ 'loaded-black': blackColReady }">
				<div class="year">
					<h1>2K</h1>
					<h1>20</h1>
				</div>
			</div>


		<transition name="fade">
			<div class="content" v-show="contentReady">
				<h1>Gamers rise up.</h1>
				<p>Lorem ipsum dolor amet hella hexagon prism whatever beard echo park retro tousled. Hoodie pabst cardigan irony four dollar toast adaptogen. Squid hashtag taxidermy kombucha quinoa single-origin coffee cardigan lyft. Shabby chic echo park craft beer prism marfa franzen heirloom hella knausgaard selfies portland trust fund hot chicken. Wayfarers pour-over bicycle rights af etsy cray try-hard roof party 8-bit, enamel pin franzen. Irony +1 lyft hot chicken kombucha vexillologist disrupt pok pok keffiyeh master cleanse artisan. Tacos health goth literally cred, ennui lyft semiotics fingerstache tofu sriracha thundercats pabst.</p>
				<img src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/>
				<p>Lorem ipsum dolor amet hella hexagon prism whatever beard echo park retro tousled. Hoodie pabst cardigan irony four dollar toast adaptogen. Squid hashtag taxidermy kombucha quinoa single-origin coffee cardigan lyft. Shabby chic echo park craft beer prism marfa franzen heirloom hella knausgaard selfies portland trust fund hot chicken. Wayfarers pour-over bicycle rights af etsy cray try-hard roof party 8-bit, enamel pin franzen. Irony +1 lyft hot chicken kombucha vexillologist disrupt pok pok keffiyeh master cleanse artisan. Tacos health goth literally cred, ennui lyft semiotics fingerstache tofu sriracha thundercats pabst.</p>
				<img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"/>
			</div>
		</transition>

  </div>
</template>

<script>

export default {
	data() {
		return {
			blackColReady: false,
			contentReady: false,
		}
	},
	mounted() {
		var that = this

		setTimeout(function() {
			that.blackColReady = true
		}, 300);

		setTimeout(function() {
			that.contentReady = true
		}, 700);
	}
}
</script>

<style lang="scss">
.glitcher {
	.loaded-black {
		transform: translateX(0)!important;
	}
	.black-col {
		width: 40%;
		min-height: 100vh;
		background: black;
		transform: translateX(-100%);
		transition: 1s transform ease;
		color: white;
		padding: 70px;
		mix-blend-mode: color-burn;
		position: fixed;
		.year {
			position: absolute;
			bottom: 50px;
			h1 {
				font-size: 10vw;
				user-select: none;
				pointer-events: none;
			}
		}
	}
	.content {
		position: absolute;
		left: 35%;
		color: white;
		top: 25vh;
		width: 50%;
		h1 {
			font-size: 62px;
			margin: 50px 0;
			color: white;
			mix-blend-mode: difference;
		}
		p {
			max-width: 800px;
			line-height: 200%;
			font-size: 16px;
		}
		img {
			width: 100%;
			height: auto;
			margin: 100px 0;
		}
	}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
