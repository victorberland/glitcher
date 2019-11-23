<template>
  <div class="meld">
		<div class="circle" :class="{ 'big-circle': bigCircle }">

			<transition name="fade">
				<div class="circle-content" v-show="contentReady">
					<h1>Early bird</h1>
					<h1>299,- kr</h1>
					<form>
						Antall
						<input type="number" v-model="numberParticipants"/>
						Alder
						<input type="number" v-model="userAge"/>
						<div class="underage-consent" v-if="!overAge">
							For å delta på Glitcher LAN må foreldrene dine samtykke til at du drar. Er dette tilfellet?
							<input type="checkbox" v-model="parentsConsent"/>
						</div>
					</form>
					<p @click="goCheckout" v-if="overAge || parentsConsent">Til checkout</p>
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
			text-align: center;
		}
		h1 {
			font-size: 6em;
			color: #000;
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
