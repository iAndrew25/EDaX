<template>
	<div class="search">
		<div class="logo" v-bind:class="{small: searchedValue}"></div>
		<input type="text" v-model="searchedValue" @keyup="getData(searchedValue)" class="search-input"/>
		<Filters />
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
			searchedValue: ''
		}
	}
}
</script>

<style scoped>
.search {
	position: relative;
	width: 500px;
	margin: auto;
}
.search-input {
	width: 100%;
	padding: 10px;
	margin: 10px auto;
	border-radius: 5px;
	border: 1px solid #dfdfdf;
	box-shadow: 0 1px 0 #bfbebf;
}
</style>