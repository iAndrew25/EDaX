/* eslint-disable */

<template>
	<div>
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
import {getMonuments} from '../../services/search-service';
import debounce from 'lodash/debounce';

export default {
	name: 'landing',
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
		getData: debounce(async function(searchedValue, type, ethnicity, owner, dating, area) {
			if(searchedValue || type || ethnicity || owner || dating || area) {
				let {monuments} = await getMonuments(searchedValue, type, ethnicity, owner, dating, area);
				this.monuments = monuments;
			} else {
				this.monuments = [];
			}
		}, 250)
	}
}
</script>

<style>
.monuments {
	margin-top: 20px;
	list-style: none;
}
</style>