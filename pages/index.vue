<template>
  <div class="front">

		<div class="cursor-circle" :class="{ 'cursor-scale-1': cursorScale1, 'cursor-scale-2': cursorScale2, 'cursor-center': cursorCenter }"></div>

		<transition name="fade">
			<div class="front-content" v-show="contentShow" @mouseenter="cursorScale2 = true" @mouseleave="cursorScale2 = false">
				<h1 @mouseenter="frontMessage = frontMessageHover" @mouseleave="frontMessage = frontMessageOrig" @click="joinClicked">{{ frontMessage }}</h1>
			</div>
		</transition>

		<transition name="fade">
			<header v-show="contentShow">
				<h2>Glitcher</h2>
				<p @mouseenter="cursorScale1 = true" @mouseleave="cursorScale1 = false">Hva er Glitcher?</p>
			</header>
		</transition>

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
			frontMessageHover: 'ka vente du på?',
			cursorScale1: false,
			cursorScale2: false,
			cursorCenter: false,
			contentShow: true
		}
	},
	mounted() {
		this.frontMessage = this.frontMessageOrig

		let cursorCircle = document.querySelector('.cursor-circle')
		document.onmousemove = (event) => this.moveCursor(event, cursorCircle);
	},
	methods: {
		moveCursor(event, cursorDot) {
			console.log(event)
			var xpos = event.clientX;
			var ypos = event.clientY;
			// var wheight = window.innerHeight;
			// var wwidth = window.innerWidth;

			// overlay.style.left = (wwidth / 20) + xpos / 1.2 +'px';
			// overlay.style.top = (wheight / 25) + ypos / 1.2 +'px';

			cursorDot.style.left = xpos +'px';
			cursorDot.style.top = ypos +'px';
		},
		joinClicked() {
			this.contentShow = false
			this.cursorCenter = true

			var that = this
			setTimeout(function() {
				that.$router.push('/hvordan')
			}, 1000)
		}
	}
}
</script>

<style lang="scss">
.front {
	.cursor-circle {
		position: absolute;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		background: white;
		border-radius: 100%;
		transition: 0.2s ease;
		transform: translate(-50,-50%);
		mix-blend-mode: normal;
		z-index: 10;
		pointer-events: none;
	}
	.cursor-scale-1 {
		transform: translate(-50%,-50%) scale(3);
		mix-blend-mode: difference;
	}
	.cursor-scale-2 {
		transform: translate(-50%,-50%) scale(4);
		mix-blend-mode: difference;
	}
	.cursor-center {
		top: 50%!important;
		left: 50%!important;
		width: 200px;
		height: 200px;
		transform: translate(-50%,-50%) scale(1);
	}


	header {
		color: white;
		position: absolute;
		bottom: 10px;
		padding: 50px;
		width: 100%;
		h2 {
			position: absolute;
			bottom: 35px;
		}
		p {
			position: absolute;
			right: 0;
			transform: rotate(-90deg) translate(50%,0);
			font-size: 20px;
		}
	}
	.front-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: white;
		h1 {
			font-size: 5vw;
			color: #efefef;
			border-bottom: 12px solid #efefef;
			padding-bottom: 10px;
		}
	}

}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
