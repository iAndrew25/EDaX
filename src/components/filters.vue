<template>
	<div class="filters absolute-horizontal-center" v-bind:class="{'filters-displayed': shouldDisplay }">
		<button @click="toggleFilters">Filters</button>
		

		<button @click="toggleFilters">Set Filters</button>

	</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'Filters',
	props: ['display'],
	data: function() {
		console.log('pro', this.display)
		return {
			shouldDisplay: this.display
		}
	},
	methods: {
		toggleFilters: function() {
			this.displayFilters = !this.displayFilters;
			console.log("this.displayFilters", this.displayFilters);
		}
	}
}
</script>

<style scoped>
.filters {
	position: absolute;
	top: 0px;

	opacity: 0;
	width: 300px;
	background-color: tomato;
	transition: all .3s;
}

.filters.filters-displayed {
	opacity: 1;
	top: 60px;
}

button {
	display: block;
	margin: auto;
}
</style>