<template>
	<div class="box">
    <div class="box-title">
			<p>{{ error.statusCode }}</p>
			<nuxt-link to="/"><button>X</button></nuxt-link>
    </div>
    <div class="body">
			<p v-if="error.statusCode === 404">Beklager, denne siden finnes ikke.</p>
			<p v-else>Whoopsie, det oppstod en feil.</p>
			<nuxt-link to="/"><button>OK</button></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss">
.box {
  width: 292px;
  background: #C0C0C0;
  border-width: 1px;
  border-color: #FFFFFF #808080 #808080 #FFFFFF;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 1px;
	.box-title {
  	height: 18px;
  	width: 100%;
  	background: #000080;
  	color: #FFF;
	}
	.box-title img {
  	float: left;
	}
	.box-title p {
  	margin: 2px 0 0 1px;
  	float: left;
  	font-family: Tahoma;
  	font-weight: bold;
  	font-size: 11px;
	}
	.box-title button {
  	right: 3px;
  	top: 3px;
 		margin: 2px 2px 2px 0;
  	float: right;
  	width: 14px;
  	height: 13.5px;
  	background: #C0C0C0;
  	border-width: 1px;
  	border-color: #FFFFFF #808080 #808080 #FFFFFF;
  	padding: 0;
  	font-size: 9px;
  	font-weight: bold;
  	font-family: Tahoma;
  	text-align: center;
  	focus: none;
	}
	.body {
  	padding: 13px 12px 12px;
  	height: 100%;
  	width: calc(100% - 26px);
  	display: inline-block;
		p {
  		font-family: "MS Sans Serif";
  		font-size: 11px;
		}
		button {
  		font-family: "MS Sans Serif";
  		font-size: 11px;
  		outline: 1px solid #000000;
  		background: #C0C0C0;
  		border-width: 1px;
  		border-style: solid;
  		border-color: #FFFFFF #808080 #808080 #FFFFFF;
  		padding: 4px 10px;
  		margin: 20px auto 3px;
  		display: block;
  		position: relative;
  		bottom: 0px;
		}
	}
}
</style>
