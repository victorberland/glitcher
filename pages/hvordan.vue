<template>
  <div class="meld">
		<div class="circle">
			<div class="circle-content">
				<h1>Early bird</h1>
				<h1>299,- kr</h1>
			</div>
		</div>
		<Back/>
  </div>
</template>

<script>
import Back from '~/components/Back.vue'

export default {
  components: {
    Back
  },
	data() {
		return {
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
