<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="less">
@import "./assets/common.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.form_fixed{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,0.6);
	z-index: 10;
	.form{
		position: relative;
		margin: 10% auto;
		padding:30px;
		width:500px;
		background: #fff;
		border-radius: 8px;
		.close{
			font-size: 30px;
			font-weight: 600;
			position: absolute;
			top: 10px;
			right: 30px;
		}
		.title{
			padding-bottom: 30px;
		}
	}
}
</style>
