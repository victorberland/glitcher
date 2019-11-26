<template>
  <div class="front">

		<div class="cursor-circle" :class="{ 'cursor-scale-1': cursorScale1, 'cursor-scale-2': cursorScale2, 'cursor-center': cursorCenter }"></div>

		<transition name="fade">
			<div class="front-content" v-show="contentShow" @mouseenter="cursorScale2 = true" @mouseleave="cursorScale2 = false">
				<h1 @mouseenter="frontMessage = frontMessageHover" @mouseleave="frontMessage = frontMessageOrig" @click="joinClicked">{{ frontMessage }}</h1>
			</div>
		</transition>

		<transition name="fade">
			<header v-show="contentShow" class="front-header">
				<img src="/logo-1.svg" class="logo"/>
				<p @mouseenter="cursorScale1 = true" @mouseleave="cursorScale1 = false" @click="clickedInfo">Hva er Glitcher?</p>
			</header>
		</transition>

  </div>
</template>

<script>
export default {
	data() {
		return {
			frontMessage: '',
			frontMessageOrig: '14 - 16 februar',
			// frontMessageHover: 'ka vente du på?',
			frontMessageHover: 'gamers rise up',
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
		},
		clickedInfo() {
			this.contentShow = false
			var that = this

			setTimeout(function() {
				that.$router.push('/glitcher')
			}, 1000)
		}
	}
}
</script>

<style lang="scss">
.front {
	.cursor-circle {
		position: fixed;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		background: white;
		border-radius: 100%;
		transition: 0.2s ease;
		transform: translate(-50%,-50%);
		mix-blend-mode: difference;
		z-index: 10;
		pointer-events: none;
	}
	.cursor-scale-1 {
		transform: translate(-50%,-50%) scale(3);
	}
	.cursor-scale-2 {
		transform: translate(-50%,-50%) scale(4);
	}
	.cursor-center {
		top: 50%!important;
		left: 50%!important;
		width: 200px;
		height: 200px;
		transform: translate(-50%,-50%) scale(1);
		mix-blend-mode: normal;
	}


	.front-header {
		color: white;
		position: fixed;
		bottom: 10px;
		padding: 50px;
		width: 100%;
		.logo {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 50px;
			width: auto;
		}
		h2 {
			position: absolute;
			bottom: 35px;
		}
		p {
			position: absolute;
			right: 0;
			transform: rotate(-90deg) translate(50%,0);
			font-size: 20px;
			color: white;
			cursor: pointer;
		}
	}
	.front-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: black;
		mix-blend-mode: difference;
		text-transform: uppercase;
		white-space: nowrap;
		border-bottom: 1px solid white;
		h1 {
			font-size: 5.5vw;
			border-bottom: 1px solid white;
			letter-spacing: 0.1em;
			padding-bottom: 10px;
			cursor: pointer;
			text-shadow: -2px 2px 0 #fff, 2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff;
			//text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;
			margin-bottom: 10px;
		}
	}


	.container {
		position: absolute;
		top: 100vh;
		background: white;
		padding: 80px;
		right: 70px;
		mix-blend-mode: screen;
		width: 1100px;
		.content {
			float: right;
		}
		h1 {
			font-size: 150px;
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
