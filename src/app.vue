/* eslint-disable */

<template>
	<div id="app">
		<Search v-bind:get-data="getData" />

		<ul class="monuments" v-if="monuments.length > 0">
			<li v-for="monument in monuments" :key="monument.id">
				<Summary v-bind:monument="monument" />
			</li>
		</ul>		
	</div>
</template>

<script>
import Search from './components/search.vue';
import Summary from './components/summary.vue';
import {getMonuments} from './services/search-service';
import debounce from 'lodash/debounce';

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
		getData: debounce(async function(searchedTerm) {
			if(searchedTerm) {
				let {monuments} = await getMonuments(searchedTerm);
				this.monuments = monuments;
			} else {
				this.monuments = [];			
			}
		}, 250)
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 960px;
	margin: 10px auto 0 auto;
}
.monuments {
	margin-top: 20px;
	list-style: none;
}
</style>