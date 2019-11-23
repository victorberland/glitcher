<template>
  <div class="front">
		<div class="front-content">
			<h1 @mouseenter="frontMessage = frontMessageHover" @mouseleave="frontMessage = frontMessageOrig"><nuxt-link to="/hvordan">{{ frontMessage }}</nuxt-link></h1>
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
			frontMessage: '',
			frontMessageOrig: '14. - 16. februar',
			frontMessageHover: 'Meld deg på'
		}
	},
	mounted() {
		this.frontMessage = this.frontMessageOrig
	}
}
</script>

<style lang="scss">
.front {
	.side-info {
		position: absolute;
		bottom: 5px;
		right: 5px;
		color: white;
	}
	.front-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: white;
		h1 {
			font-size: 5vw;
			a {
				color: #efefef;
				text-decoration: none;
				border-bottom: 8px solid #efefef;
			}
		}
	}

}
</style>
