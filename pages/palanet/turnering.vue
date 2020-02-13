<template>
  <div class="tournament">

		<Auth v-show="authShow" @submit="auth"/>
		<Success v-show="successShow" type="tournament"/>

		<div class="container">
			<h1>Turnering</h1>

			<div class="tournament-list">
				<form>
					<ul>
						<li v-for="tournament in tournaments">
							<input type="radio" :value="tournament" v-model="selection.tournament"/>{{ tournament.name }}
						</li>
					</ul>

					<div class="selection-details">
						<input type="number" v-model="selection.participants" v-if="selection.tournament.group" placeholder="Antall på lag">

						<div v-if="selection.tournament.fortnite">
							<br/>
							<input type="radio" v-model="selection.fortnite" id="fortnite" value="duo">Fortnite duo<br/>
							<input type="radio" v-model="selection.fortnite" id="fortnite" value="solo">Fortnite solo
						</div>

					</div>

				</form>
			</div>

			<button class="join" type="button" @click="join()" v-show="selection.tournament != ''">Bli med</button>


		</div>
  </div>
</template>

<script>
import Auth from '~/components/Auth.vue'
import Success from '~/components/Success.vue'

const axios = require('axios');
export default {
	components: {
		Auth,
		Success
	},
	data() {
		return {
			email: null,
			authShow: true,
			successShow: false,
			quantity: null,
			selection: {
				tournament: '',
				fortnite: null,
				participants: null
			},
			tournaments: [
				{ id: 'smash', name: 'Super Smash Ultimate', group: false },
				{ id: 'fortnite', name: 'Fortnite', group: true, fortnite: true },
				{ id: 'csgo', name: 'CS:GO', group: true },
				{ id: 'lol', name: 'League of Legends', group: true},
			]
		}
	},
	methods: {
		async join() {

			const joinResponse = await axios({
				method: 'post',
				url: 'https://cms.glitcher.space/api/forms/submit/'+ this.selection.tournament.id +'?token=8358792f15fbeb1233b6ec69e52688',
				data: {
					form: {
						email: this.email,
						fortnite: this.selection.fortnite,
						participants: this.selection.participants
					}
				},
				// headers: {
					// 'Content-Type': 'text/plain;charset=utf-8'
				//}
			})

			if(joinResponse.status == 200) {
				this.successShow = true
			} else {
				alert(joinResponse)
			}
  	},
		auth(email) {
			this.email = email
			this.getData()

		},
		async getData() {

			const quantity = await axios({
				method: 'post',
				url: 'https://api.glitcher.space/quantity',
				data: {
					email: this.email
				},
				headers: {
					'Content-Type': 'text/plain;charset=utf-8'
				}
			})	

			if ( Number(quantity.data) >= 1) {
				this.authShow = false
			}

  	}
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>

.tournament {
	margin: 5%;
	padding: 100px 150px;
	background: black;

	h1 {
		color: transparent;
		mix-blend-mode: screen;
		font-weight: bold;
		text-transform: uppercase;
		-webkit-text-stroke: 1px white;
		font-size: 66px;
	}

	.tournament-list {
		color: white;
		form {
			ul {
				list-style: none;
				margin: 0;
				padding: 0;
				li {
					margin: 30px 0;
					input {
						height: 20px;
						width: 20px;
					}
				}
			}
		}
	}
	.selection-details {
		input {
			padding: 10px;
			font-size: 1em;
			background: black;
			border: 4px double white;
			color: white;
			&:focus {
				outline: none;
			}
		}
		input[type="radio"] {
			height: 20px;
			width: 20px;
		}
	}

	.join {
		margin-top: 50px;
		padding: 10px;
		font-size: 1em;
		background: black;
		color: white;
		border: 3px solid white;
		cursor: pointer;
	}
}
</style>
