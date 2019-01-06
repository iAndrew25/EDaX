<template>
	<div id="app">
		<Search v-bind:get-data="getData" />
	</div>
</template>

<script>
import Search from './components/search.vue';
import {getMonuments} from './services/search-service';

export default {
	name: 'app',
	components: {
		Search
	},
	data: function() {
		return {
			monuments: []
		}
	},
	methods: {
		getData: async function(searchedTerm) {
			let result = await getMonuments({searchedTerm});
			// eslint-disable-next-line
			console.log('RESULT', result);
		}
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