<template>
  <div class="container">
		<div class="bar">
			<p>Du kan velge {{ quantity }} plasser</p>
			<p>{{ selectedTables }}</p>
			<button type="button">Reserver</button>
		</div>
		<h1>Velg plass</h1>

		<div class="info">
		</div>

		<div class="tables">
			<div v-for="(col, colIndex) in tables" class="col">
				<div v-for="(row, rowIndex) in col" class="row">
					<div class="seat" :class="{ busy: row.busy }" @click="selectTable(colIndex, rowIndex)"></div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			tables: null,
			selectedTables: []
		}
	},
	methods: {
		async getData() {
   		const tables = await this.$axios.get('https://api.glitcher.space/tables')
    	this.tables = tables.data
  	},
		selectTable(col, row) {
			var selection = String(col) +','+ String(row)
			this.selectedTables.push(selection)
		}
	},
	mounted() {
		this.getData()
	}
}
</script>

<style lang="scss" scoped>

.container {
	margin: 5%;
	padding: 100px 150px;
	background: black;
	.info {
		color: white;
		margin-top: 50px;
	}
	.bar {
		position: fixed;
		bottom: 0;
		left: 0;
		margin: 0 5%;
		background: black;
		padding: 30px 100px;
		z-index: 10;
		width: calc(100% - 10%);
		color: white;
		p {
			float: left;
		}
		button {
			float: right;
			margin-top: 40px;
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
	.tables {
		color: white;
		overflow: auto;
		display: flex;
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		margin-top: 100px;
		.col {
			width: 100px;
			margin: auto;
			display: block;
			float: left;
			position: relative;
			.row {
				//margin: 15px 0;
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
			&:nth-child(even) {
				.col {
					margin: 0 30px;
				}
			}
			&:nth-child(odd) {
				.col {
					margin: 0 80px;
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
