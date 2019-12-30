<template>
  <div>
    <nuxt />
		<Back/>
  </div>
</template>

<script>
import Back from '~/components/Back.vue'
import { Cursor } from '~/assets/modules/cursor.js'
 export default {
		components: {
   		Back
  	},
	 mounted() {
		 const cursor = new Cursor()
		 cursor.initCursor()
	 }
 }
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/*body::-webkit-scrollbar       {background-color:#fff;width:16px}
body::-webkit-scrollbar-track {background-color:#fff}
body::-webkit-scrollbar-thumb {background-color:#babac0;border-radius:16px;border:4px solid #fff}*/

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
