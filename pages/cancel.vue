<template>
  <div class="cancel">

    <div class="main-cancel">
      <div class="head"><h1>{{ errorWindowHead }}</h1></div>
      <div class="body"><h1>{{ errorWindowText }}</h1></div>
    </div>

  </div>
</template>

<script>
export default {
	data() {
		return {
      errorWindowHead: "Error!",
      errorWindowText: "Det har skjedd en feil, eller så har du kanselert :-("
		}
	},
	mounted() {

	}
}
</script>

<style lang="scss">
$windowColor: white;//#F6EACD;
$windowBorderColor: black;
$windowBorder: 5px;


.main-cancel {
  width: 50vw;
  height: 20vw;
	text-align: center;

  background: $windowColor;
  mix-blend-mode: multiply;
  border: $windowBorder solid $windowBorderColor;
  border-radius: 15px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  .head {
    width: 100%;
    height: 20%;

    border: 0px;
    border-bottom: $windowBorder solid $windowBorderColor;
    border-radius: 5px 5px 0px 0px;

    h1 {
      color: black;
      font-size: 3vw;

      float: left;
      margin-top: 0.3vw;
      margin-left: 1vw;
    }
  }

  .body {
    width: 100%;
    height: calc(80% - #{$windowBorder});
    margin-top: $windowBorder;

    h1 {
      color: black;
      font-size: 4vw;

      position: relative;
      top: 50%;
      transform: translateY(-50%);

      padding-left: 5%;
      padding-right: 5%;
    }
  }
}
</style>
