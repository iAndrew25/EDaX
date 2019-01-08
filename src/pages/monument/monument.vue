<template>
	<div class="monument">
		<h1>{{this.selectedMonument.title}}</h1>
	</div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';

export default {
	name: 'Monument',
	props: {
		monument: Object
	},
	computed: {
		...mapState(['selectedMonument'])
	}
}
</script>

<style scoped>

</style>