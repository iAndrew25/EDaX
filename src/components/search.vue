<template>
	<div class="search">
		<input type="text" v-model="message" class="search-input"/>
		<Filters />
		<p>{{message}}</p>
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
	data: function() {
		return {
			message: ''
		}
	}
}
</script>

<style scoped>
.search {
	position: relative;
}
.search-input {
	width: 500px;
	padding: 10px;
	margin: auto;
	border-radius: 5px;
	border: 1px solid #888;
}
</style>