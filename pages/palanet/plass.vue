<template>
  <div class="container">
		<Auth v-show="authShow" @submit="auth"/>
		<Success v-show="successShow" type="seat"/>

		<div class="bar">
			<p>Valgt {{ selectedTables.length }}/{{ quantity }} plasser</p>
			<button type="button" @click="reserve">Reserver</button>
			<button type="button" @click="reset">Nullstill</button>
		</div>
		<h1>Velg plass</h1>

		<div class="info">
			<a href="/plassoversikt.pdf">For mer detaljert plassoversikt, se vår illustrasjon for dette</a>
		</div>

		<div class="table-container">
			<div class="scene"></div>

			<div class="tables">
				<div v-for="(col, colIndex) in tables" class="col">
					<div v-for="(row, rowIndex) in col" class="row">
						<div class="seat" :class="{ busy: row == 1 }" @click="selectTable(colIndex, rowIndex, row)"></div>
					</div>
				</div>
			</div>
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
			tables: null,
			quantity: null,
			selectedTables: [],
			authShow: true,
			successShow: false
		}
	},
	methods: {
		async getData() {
   		const tables = await this.$axios.get('https://api.glitcher.space/tables')
			this.tables = tables.data

   		// const quantity = await this.$axios.get('https://api.glitcher.space/quantity')

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

    	this.quantity = quantity.data
  	},
		auth(email) {
			this.authShow = false
			this.email = email
			this.getData()
		},
		selectTable(col, row, busy) {
			if (busy != 1) {

				if (this.selectedTables.length < this.quantity) {
					var selection = String(col) +','+ String(row)
					this.selectedTables.push(selection)
					this.tables[col][row] = 1
				} else {
					alert('Din billett gjelder kun for '+ this.quantity +' plass(er)')
				}

			} else {
				alert('Denne plassen er opptatt')
			}
		},
		reserve() {
			var tables = this.selectedTables
			var reservation = '';

			for (var i = 0; i < tables.length; i++) {
				console.log(tables[i])
				reservation += tables[i] + '-'
			}

			// Check if - in end
			if (reservation.slice(-1) == '-') {
				reservation = reservation.substring(0, reservation.length - 1)
			}

			axios({
				method: 'post',
				url: 'https://api.glitcher.space/take',
				data: {
					email: this.email,
					tables: reservation
				},
				headers: {
					'Content-Type': 'text/plain;charset=utf-8'
				}
			}).then(response => {
				console.log(response)
				this.successShow = true
			})

		},
		reset() {
			location.reload()
		}
	},
	mounted() {
		//this.getData()
	}
}
</script>

<style lang="scss" scoped>

.container {
	margin: 5%;
	padding: 100px 150px;
	background: black;
	h1 {
		font-size: 52px;
	}
	.info {
		color: white;
		margin-top: 30px;
		a {
			color: white;
			text-decoration: none;
			border-bottom: 3px solid white;
		}
	}
	.bar {
		position: fixed;
		bottom: 0;
		left: 0;
		margin: 0 5%;
		background: black;
		padding: 30px 100px;
		z-index: 5;
		width: calc(100% - 10%);
		color: white;
		p {
			float: left;
			margin-top: 20px;
		}
		button {
			float: right;
			margin-left: 30px;
			font-size: 16px;
			outline: none;
			border: 4px double white;
			background: black;
			color: white;
			padding: 10px 20px;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			cursor: pointer;
		}
	}

	.table-container {
		.tables {
			color: white;
			overflow: auto;
			display: flex;
			//align-items: flex-start;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			margin-top: 100px;
			.col {
				width: 100px;
				flex-shrink: 0;
				display: block;
				float: left;
				position: relative;
				margin-right: -35px;
				.row {
					width: 100%;
					.seat {
						background: #aaa;
						margin: 10px 0;
						width: 50px;
						height: 50px;
						opacity: 1;
						transition: 0.1s opacity ease;
						cursor: pointer;
						&:hover {
							opacity: 0.7;
						}
					}
					.busy {
						background: #222;
					}
				}
				&:nth-child(2n) {
					margin-right: 40px
				}
			}
		}
	}

	h1 {
		mix-blend-mode: screen;
		text-transform: uppercase;
		-webkit-text-stroke: 1px white;
	}
	h3 {
		margin-top: 50px;
		color: white;
		max-width: 700px;
		line-height: 180%;
		margin-bottom: 50px;
	}
	.button {
		border: 2px double white;
		background: transparent;
		padding: 10px 20px;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		cursor: pointer;
	}
	.content {
		max-width: 800px;
		color: white;
		input[type="text"], input[type="number"], input[type="email"] {
			width: 100%;
			outline: none;
			border: 0px;
			border: 2px solid white;
			color: white;
			background: black;
			padding: 10px 20px;
			font-size: 16px;
			margin: 20px 0;
		}
	}
}

@media(max-width: 800px) {
	.success {
		h1 {
			font-size: 16vw;
		}
	}
}
</style>
