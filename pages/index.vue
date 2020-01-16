<template>
  <div class="front">

		<transition name="fade">
		</transition>

		<!-- <h1 class="big-text">"gamers<br/>rise up"</h1> -->
		<transition name="fade">
			<header class="header">
				<nuxt-link to="/" class="home clickable" v-show="contentReady">
					<img src="/logo-2.svg"/>
				</nuxt-link>
				<div class="header-right">
					<p>14 - 16 februar, Kopervik VGS</p>
					<nuxt-link to="/blimed" class="join clickable" v-show="contentReady">Bli med.</nuxt-link>
				</div>
			</header>
		</transition>

		<transition name="fade">
			<h1 class="big-text" v-show="blackColReady" v-html="content.headline"></h1>
		</transition>
		<div class="black-col" :class="{ 'loaded-black': blackColReady }">
				<div class="year">
					<h1>14</h1>
					<h1>02</h1>
				</div>
			</div>


		<transition name="fade">
			<div class="content" v-show="contentReady" v-html="content.content">
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
			content: []
		}
	},
	mounted() {
		this.getData()


		var that = this

		setTimeout(function() {
			that.blackColReady = true
		}, 300);

		setTimeout(function() {
			that.contentReady = true
		}, 700);
	},
	methods: {
		async getData() {
   		const content = await this.$axios.get('/singletons/get/info')
    	this.content = content.data
  	}
	}
}
</script>

<style lang="scss">
.front {

	.header {
		position: fixed;
		top: 0;
		width: calc(100% - (60px * 2);
		//right: 0;
		margin: 45px 60px;
		//-webkit-text-stroke: 1px white;
		//text-transform: uppercase;
		font-size: 20px;
		//letter-spacing: 0.1em;
		color: white;
		text-decoration: none;
		z-index: 5;
		.home {
			width: 180px;
			display: block;
			float: left;
			margin-top: -45px;
		}
		.header-right {
			float: right;
			* {
				float: left;
				margin: 0 30px;
				&:last-child {
					margin-right: 0;
				}
			}
			p {
				opacity: 0.7;
			}
			.join {
				color: white;
				text-decoration: none;
				padding-bottom: 6px;
				border-bottom: 2px solid white;
			}
		}
	}
	.big-text {
		position: absolute;
		top: 10vh;
		left: 10%;
		font-size: 8vw;
		-webkit-text-stroke: 1px white;
		//text-shadow: -2px 2px 0 #fff, 2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff;
		mix-blend-mode: lighten;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		line-height: 120%;
		text-indent: 9vw;
    z-index: 1;
	}
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
		left: 47%;
		color: white;
		top: 60vh;
		width: 45%;
		float: right;
		padding-bottom: 150px;
		h1 {
			font-size: 62px;
			margin: 50px 0;
			color: white;
			mix-blend-mode: difference;
		}
		p {
			max-width: 670px;
			line-height: 220%;
			font-size: 16px;
		}
		img {
			width: 130%;
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

@media(max-width: 900px) {
	.home {
		display: none;
	}
	.front {
		.big-text {
			font-size: 12vw;
		}
		.black-col {
			//display: none;
			width: 50%;
		}
		.content {
			left: 0;
			top: 70vw;
			width: 100%;
			padding: 0 10%;
		}
	}
}
</style>
