<template>
	<div id="app">
		<Search />
	</div>
</template>

<script>
import Search from './components/search.vue'

export default {
	name: 'app',
	components: {
		Search
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 960px;
	margin: 10px auto 0 auto;
}
</style>