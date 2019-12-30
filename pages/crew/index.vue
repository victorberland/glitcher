<template>
  <div class="admin">
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
			stripeShow: false
		}
	},
	mounted() {
		var that = this

		axios({
      method: 'post',
      url: 'http://chatly.no/Vic/as/participants',
      data: {
        password: 'GlitcherLAN2020'
      },
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      }
    })
  	.then(function (response) {
   		console.log(response);
			that.participants = response.data
  	})
  	.catch(function (error) {
    	console.log(error);
  	})
	},
	methods: {
		joinClicked() {
			var that = this
			setTimeout(function() {
				that.$router.push('/blimed')
			}, 1000)
		}
	},
	computed: {
		numberParticipants() {
			return this.participants.length
		}
	}
}
</script>

<style lang="scss">
.admin {
	padding-left: 15%;
	background: #24054B;
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
				background: #9767C4;
				color: rgba(black, 0.8);
				margin: 50px 0;
				padding: 40px 50px;
			}
		}
	}
}
</style>
