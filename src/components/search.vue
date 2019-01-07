<template>
	<div class="search" v-bind:class="{searching: searchedValue}">
		<div class="logo" v-bind:class="{small: searchedValue}"></div>
		<div class="forms">
			<input type="text" v-model="searchedValue" @keyup="getData(searchedValue)" class="search-input"/>
			<button @click="toggleDisplayFilters">Adaugă filtre</button>
		</div>
		<Filters v-bind:filter-data="filterData" v-bind:toggle-display-filters="toggleDisplayFilters" v-bind:display-filters="displayFilters" />
	</div>
</template>

<script>
/* eslint-disable */
import Filters from './filters.vue';

export default {
	name: 'Search',
	components: {
		Filters
	},
	props: ['getData'],
	data: function() {
		return {
			displayFilters: false,
			searchedValue: ''
		}
	},
	methods: {
		toggleDisplayFilters: function() {
			this.displayFilters = !this.displayFilters;
		},
		filterData: function(selectedType, selectedEthnicity, selectedOwner, selectedDating, selectedArea) {
			this.getData(this.searchedValue, selectedType, selectedEthnicity, selectedOwner, selectedDating, selectedArea);
		}
	}
}
</script>

<style scoped>
.search {
	position: relative;
	width: 500px;
	margin: 20% auto;
	transition: all .6s;
}
.forms {
	margin: 20px auto 0 auto;
	display: flex;
	flex-direction: row;
}
.search.searching {
	margin: 0 auto;
}
.search-input {
	flex: 1;
	margin-right: 5px;
}
</style>