/* eslint-disable */

<template>
	<div id="app">
		<Search v-bind:get-data="getData" />

		<ul class="monuments" v-if="monuments.length > 0">
			<li v-for="monument in monuments" :key="monument.title">
				<Summary v-bind:monument="monument" />
			</li>
		</ul>		
	</div>
</template>

<script>
import Search from './components/search.vue';
import Summary from './components/summary.vue';
import {getMonuments} from './services/search-service';

export default {
	name: 'app',
	components: {
		Search,
		Summary
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

			this.monuments.push({
				thumbnail: 'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/2/2c/AT_Icons_100x100_Finn.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi natus error reiciendis, sunt perspiciatis cumque odit at iure tempora, doloremque numquam hic eaque. Consequatur provident iusto iure, sequi hic?',
				title: 'Random title'
			});

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
.monuments {
	list-style: none;
}
</style>