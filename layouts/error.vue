<template>
	<div class="box">
    <div class="title">
      <img src="http://i63.tinypic.com/117hi0p.png" width="18" height="18" class="title" />
			<p class="title">{{ error.statusCode }}</p>
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
.box{
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
	.title{
  	height: 18px;
  	width: 100%;
  	background: #000080;
  	color: #FFF;
	}
	img.title{
  	float:left;
	}
	p.title{
  	margin: 2px 0 0 1px;
  	float: left;
  	font-family: Tahoma;
  	font-weight: bold;
  	font-size: 11px;
	}
	.title button{
  	right:3px;
  	top:3px;*/
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
  focus:none;
}
div.body{
  padding:13px 12px 12px;
  height:100%;
  width:calc(100% - 26px);
  display:inline-block;
}
div.body p{
  font-family:"MS Sans Serif";
  font-size:11px;
}
div.body button{
  font-family:"MS Sans Serif";
  font-size:11px;
  outline:1px solid #000000;
  background:#C0C0C0;
  border-width:1px;
  border-style:solid;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  padding:4px 10px;
  margin:20px auto 3px;
  display:block;
  position:relative;
  bottom:0px;
}
</style>
