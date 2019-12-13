<template>
  <div class="meld" :class="{ 'loaded-black': blackColReady }">
		<transition name="fade">
			<div class="container" v-show="contentReady">
				<h1>Kom igjen,<br/>bli med!</h1>
				<div class="content">
					{{ content }}
				</div>
				<form>
					<label>Hvor gammel er du (eller fyller i 2020)?</label><br/>
					<input type="number" v-model="userAge" placeholder="Alder"/>
					<br/>
					<br/>
					<label>Hvor mange skal du melde på?</label><br/>
					<input type="number" v-model="numberParticipants" placeholder="Antall"/>
				</form>
				<br/>
				<p>{{ inputError }}</p>
				<br/>
				<button type="button" @click="goCheckout" v-if="overAge || parentsConsent">Fortsett</button>
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
			content: 'Vi ser fram til å se deg på Glitcher LAN. Men før vi snakkes, ønsker vi å opplyse deg om hvordan prosessen vil foregå. I første omgang når du nå bestiller reserverer du plass på LANet. I januar vil du motta en e-post hvor du vil kunne velge bord.',
			userAge: '',
			parentsConsent: false,
			numberParticipants: 1,
			inputError: ''
		}
	},
	computed: {
		overAge() {
			var ageLimit = 13

			if (this.userAge <= ageLimit && this.userAge > 1) {
				this.inputError = 'Beklager, Glitcher er kun for gamers over 13 år.'
				return false
			} else if (this.numberParticipants > 15) {
				this.inputError = 'Vi beklager for at dere er litt for mange gamers for samfunnet.'
				return false
			} else if (this.userAge > ageLimit) {
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
			var stripe = Stripe('pk_test_B7QaqTcDegjoupFAjQlmhIuH00TzJYAWD0');

			stripe.redirectToCheckout({
				items: [
					// Replace with the ID of your SKU
					{sku: 'sku_GJLlDK0sVRpNFG', quantity: Number(this.numberParticipants)}
				],
				successUrl: 'https://glitcher.space/yay',
				cancelUrl: 'https://glitcher.space/avbryt',
				// customerEmail: 'customer@example.com',
			}).then(function (result) {
  			// If `redirectToCheckout` fails due to a browser or network
  			// error, display the localized error message to your customer
  			// using `result.error.message`.
			});
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
	.container {
		//margin: 170px;
		margin: 15%;
		.content {
			line-height: 200%;
			margin-top: 50px;
		}
	}
	input[type="text"], input[type="number"] {
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
	h1 {
		font-size: 62px;
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
		h1 {
			font-size: 10vw;
		}
	}
}
</style>
