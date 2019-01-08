<template>
	<div class="monument">
		<h1>{{this.monument.title}}</h1>
		<p>{{this.monument.description}}</p>
	</div>
</template>

<script>
/* eslint-disable */
import {getMonumentById} from '../../services/search-service';

export default {
	name: 'Monument',
	data: function() {
		return {
			monument: {}
		}
	},
	methods: {

	},
	mounted: async function() {
		try {
			let result = await getMonumentById(this.$route.params.id);
			this.monument = result;
		} catch(err) {
			console.error(err);
		}
	}
}
</script>

<style scoped>

</style>