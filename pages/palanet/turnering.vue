<template>
  <div class="tournament">

		<div class="container">
			<h1>Turnering</h1>

			<div class="tournament-list">
				<form>
					<ul>
						<li v-for="tournament in tournaments">
							<input type="radio" :value="tournament" v-model="selection.tournament"/>{{ tournament.name }}
						</li>
					</ul>
					<input type="number" v-model="selection.participants" v-if="selection.tournament.group" placeholder="Antall på lag">
				</form>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			selection: {
				tournament: '',
				participants: null
			},
			tournaments: [
				{ name: 'Super Smash Ultimate', group: false },
				{ name: 'Fortnite', group: true },
				{ name: 'CS:GO', group: true },
				{ name: 'League of Legends', group: true},
			]
		}
	},
	mounted() {
		console.log(this.tournaments[0].name)
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
}
</style>
