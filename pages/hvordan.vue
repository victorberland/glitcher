<template>
  <div class="meld">
		<div class="circle" :class="{ 'big-circle': bigCircle }">

			<transition name="fade">
				<div class="circle-content" v-show="contentReady">

					<h1>Ka vente<br/>du på?</h1>
					<div class="inner-content">
						<form>
							<label>Hvor gammel er du?</label><br/>
							<input type="number" v-model="userAge"/>

							<div class="underage-consent" v-if="!overAge">
								<br/>
								Mine foresatte samtykker til at jeg får dra på Glitcher LAN
								<input type="checkbox" v-model="parentsConsent"/>
							</div>

							<br/>
							<br/>
							<label>Hvor mange skal du melde på?</label><br/>
							<input type="number" v-model="numberParticipants"/>

						</form>
						<button type="button" @click="goCheckout" v-if="overAge || parentsConsent">Fortsett</button>
					</div>

				</div>
			</transition>
		</div>
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
			bigCircle: false,
			contentReady: false,
			userAge: '',
			parentsConsent: false,
			numberParticipants: 1
		}
	},
	computed: {
		overAge() {
			var ageLimit = 13

			if (this.userAge <= ageLimit) {
				return false
			} else if (this.userAge > ageLimit) {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		goCheckout() {
			var stripe = Stripe('pk_test_sIbuppzttNc2FPdCHcEUUdyG');

			stripe.redirectToCheckout({
				items: [
					// Replace with the ID of your SKU
					{sku: 'sku_GEEOtn0fRdwg48', quantity: Number(this.numberParticipants)}
				],
				successUrl: 'https://example.com/success',
				cancelUrl: 'https://example.com/cancel',
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
			that.bigCircle = true
		}, 300);
		setTimeout(function() {
			that.contentReady = true
		}, 1300);
	}
}
</script>

<style lang="scss">
$purple1: #3F2E55;
$purple2: #8F4C92;

.meld {
	.big-circle {
		width: 100vh!important;
		height: 100vh!important;
	}
	.circle {
		background: white;
		transition: 1s ease;
		mix-blend-mode: screen;
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		.circle-content {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			transform: translate(-50%,-50%);
			.inner-content {
				min-width: 400px;
				width: 45vh;
				margin-left: auto;
				margin-right: auto;
				margin-top: 60px;
				.underage-consent {
					color: #333;
				}
				label {
					color: $purple2;
					font-size: 18px;
					font-weight: bold;
				}
				input[type="text"], input[type="number"] {
					width: 100%;
					outline: none;
          border: 0px;
					border-bottom: 8px solid $purple1;
					padding: 10px 20px;
					font-size: 16px;
					margin: 10px 0;
				}
				button {
					margin-top: 40px;
					font-size: 16px;
					outline: none;
					border: 8px solid $purple1;
					background: $purple1;
					color: white;
					padding: 10px 20px;
					width: 100%;
					cursor: pointer;
				}
			}
		}
		h1 {
			font-size: 9vh;
			color: white;
			text-align: center;
			text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			line-height: 120%;
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
