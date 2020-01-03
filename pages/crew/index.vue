<template>
  <div class="admin">
		<div class="login" v-show="login">
			<h1>Glitcher Crew</h1>
			<input type="password" v-model="password"/>
			<button type="button" @click="logIn">Logg inn</button>
		</div>

		<header class="header">
		</header>

		<main class="main">
			<h1 class="headline">{{ numberParticipants }} påmeldte</h1>
			<p @click="stripeShow =! stripeShow">Vis/skjul Stripe ID</p>
			<ul>
				<li v-for="participant in participants" class="participant">
					<table style="width:100%">
  					<tr>
							<td><strong>{{ participant.email }}</strong></td>
							<td v-show="!stripeShow">{{ participant.quantity }}</td>
							<td v-show="!stripeShow">{{ participant.date }}</td>
							<td v-show="!stripeShow">{{ participant.tables }}</td>
							<td v-show="stripeShow">{{ participant.stripeId }}</td>
  					</tr>
					</table>
				</li>
			</ul>
		</main>
  </div>
</template>

<script>
const axios = require('axios');
export default {
	layout: 'minimal',
	data() {
		return {
			participants: [],
			stripeShow: false,
			login: true,
		}
	},
	mounted() {	
	},
	methods: {
		logIn() {
			var that = this

			axios({
				method: 'post',
				url: 'https://api.glitcher.space/participants',
				data: {
					password: that.password
				},
				headers: {
					'Content-Type': 'text/plain;charset=utf-8'
				}
			})
			.then(function (response) {
				console.log(response);
				that.participants = response.data
				if (that.participants[0].email) {
					that.login = false
				}
			})
			.catch(function (error) {
				console.log(error);
			})
		}
	},
	computed: {
		numberParticipants() {
			return this.participants.length
		}
	}
}
</script>

<style lang="scss" scoped>
$purple-1: #24054B;
$purple-2: #9767C4;
.admin {
	padding-left: 15%;
	background: $purple-1;
	min-height: 100vh;
	.login {
		position: fixed;
		height: 100vh;
		width: 100%;
		background: $purple-1;
		z-index: 100;
		padding-top: 120px;
		h1 {
			font-size: 5vw;
			-webkit-text-stroke: 1px white;
			mix-blend-mode: lighten;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			line-height: 120%;
    	z-index: 1;
			margin-bottom: 50px;
		}
		input, button {
			border: 1px solid white;
			background: $purple-1;
			color: white;
			padding: 10px 20px;
			font-size: 1em;
		}
		button {
			cursor: pointer;
		}
	}
	.main {
		padding-top: 200px;
		max-width: 1000px;
		padding-bottom: 100px;
		.headline {
			font-size: 5vw;
			-webkit-text-stroke: 1px white;
			mix-blend-mode: lighten;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			line-height: 120%;
    	z-index: 1;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			margin-top: 200px;
			.participant {
				border-radius: 10px;
				background: $purple-2;
				color: rgba(black, 0.8);
				margin: 50px 0;
				padding: 40px 50px;
			}
		}
	}
}
</style>
