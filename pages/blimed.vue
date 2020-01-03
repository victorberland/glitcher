<template>
  <div class="meld" :class="{ 'loaded-black': blackColReady }">
	
		<transition name="fade">
			<nuxt-link to="/" class="home clickable" v-show="contentReady">
				<img src="/logo-2.svg"/>
			</nuxt-link>
		</transition>

		<transition name="fade">
			<div class="container" v-show="contentReady">
				<h1>14 - 16 februar</h1>
				<div class="content" v-html="content">
				</div>
				<form>
					<label>Hvor gammel er du (eller fyller i 2020)?</label><br/>
					<input type="number" v-model="userAge" placeholder="Alder"/>
					<br/>
					<br/>
					<label>Hvor mange skal du melde på?</label><br/>
					<input type="number" v-model="numberParticipants" placeholder="Antall"/>
					<br/>
					<br/>
					<label>E-postadresse</label>
					<input type="email" v-model="email" placeholder="E-post"/>
				</form>
				<br/>
				<p class="errortext">{{ inputError }}</p>
				<br/>
				<button type="button" @click="goCheckout" v-show="overAge" class="clickable">Fortsett</button>
			</div>
		</transition>
  </div>
</template>

<script>

export default {
	head: {
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ]
  },
	data() {
		return {
			blackColReady: false,
			contentReady: false,
			// content: 'Sett av datoen, vi ser fram til å se deg på Glitcher LAN! Men før du melder deg på, ønsker vi at du leser <a href="/reglement" class="clickable">reglementet for Glitcher</a>',
			content: 'Ikke langt igjen nå før du er påmeldt, vi gleder oss til å møte deg på Glitcher! Men før du melder deg på kan det være greit å lese mer om <a href="/glitcher" class="clickable">om Glitcher</a> dersom du ikke allerede har gjort dette.',
			userAge: '',
			numberParticipants: 1,
			email: '',
			inputError: ''
		}
	},
	computed: {
		overAge() {
			var ageLimit = 13

			if (this.userAge < ageLimit && this.userAge > 1) {
				this.inputError = 'Beklager, Glitcher er kun for gamers over 13 år.'
				return false
			} else if (this.numberParticipants > 15) {
				this.inputError = 'Vi beklager for at dere er litt for mange gamers for samfunnet vårt.'
				return false
			} else if (this.email == '') {
				return false
			} else if (this.userAge >= ageLimit) {
				this.inputError = ''
				return true
			} else {
				this.inputError = ''
				return false
			}
		}
	},
	methods: {
		goCheckout() {
			var that = this
			if (this.overAge) {
				var stripe = Stripe('pk_live_Kax5nieVSihzoQw18OLjbqyD00o5aqSi01');

				stripe.redirectToCheckout({
					items: [
						// Replace with the ID of your SKU
						{sku: 'sku_GHCoyq9zL5EOPn', quantity: Number(this.numberParticipants)}
					],
					successUrl: 'https://glitcher.space/gg',
					cancelUrl: 'https://glitcher.space',
					customerEmail: that.email,
				}).then(function (result) {
					// If `redirectToCheckout` fails due to a browser or network
					// error, display the localized error message to your customer
					// using `result.error.message`.
				});
			}
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
$purple1: #3F2E55;
$purple2: #8F4C92;


.loaded-black {
	transform: translateX(0)!important;
}
.meld {
	width: 700px;
	background: black;
	float: right;
	min-height: 100vh;
	transform: translateX(100%);
	transition: 1s transform ease;
	color: white;

	.home {
		position: absolute;
		top: 0;
		right: 0;
		margin: 2px 60px;
		text-decoration: none;
		width: 150px;
		z-index: 5;
	}
	.container {
		//margin: 170px;
		margin: 15%;
		.content {
			line-height: 200%;
			margin-top: 50px;
			a {
				text-decoration: none;
				color: purple;
			}
		}
	}
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
	.errortext {
		line-height: 200%;
		opacity: 0.5;
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
	h1 {
		//font-size: 62px;
		font-size: 86px;
		color: black;
		text-transform: uppercase;
		-webkit-text-stroke: 1px white;
		line-height: 140%;
	}
	form {
		margin-top: 60px;
	}
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 900px) {
	.meld {
		width: 100%;
		.home {
			display: none;
		}
		h1 {
			font-size: 10vw;
		}
	}
}
</style>
