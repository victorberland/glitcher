<template>
  <div class="meld">
		<div class="circle">
			<div class="circle-content">
				<h1>Early bird</h1>
				<h1>299,- kr</h1>
				<p @click="goCheckout">Til checkout</p>
			</div>
		</div>
		<Back/>
  </div>
</template>

<script>
import Back from '~/components/Back.vue'

export default {
	head: {
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ]
  },
  components: {
    Back
  },
	data() {
		return {
		}
	},
	methods: {
		goCheckout() {
			var stripe = Stripe('pk_test_sIbuppzttNc2FPdCHcEUUdyG');

			stripe.redirectToCheckout({
				items: [
					// Replace with the ID of your SKU
					{sku: 'sku_GEEOtn0fRdwg48', quantity: 1}
				],
				successUrl: 'https://example.com/success',
				cancelUrl: 'https://example.com/cancel',
				customerEmail: 'customer@example.com',
			}).then(function (result) {
  			// If `redirectToCheckout` fails due to a browser or network
  			// error, display the localized error message to your customer
  			// using `result.error.message`.
			});
		}
	}
}
</script>

<style lang="scss">
.meld {
	.circle {
		background: white;
		mix-blend-mode: screen;
		position: absolute;
		width: 100vh;
		height: 100vh;
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
</style>
