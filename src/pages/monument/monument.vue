<template>
	<div class="monument">
		<router-link to="/">
			<div class="logo monument-logo"></div>
		</router-link>
		<h1>{{this.monument.title}}</h1>
		<img class="monument-picture" v-bind:src="monument.thumbnail" />
		<p>{{this.monument.description}} {{this.monument.fencing}}</p>
		<p v-if="monument.locality"><span class="title">Localitatea de proveniență:</span> {{this.monument.locality}}</p>
		<p v-if="monument.area"><span class="title">Zona ennografică de proveniență:</span> {{this.monument.area}}</p>
		<p v-if="monument.type"><span class="title">Tipul ansamblului:</span> {{this.monument.type}}</p>
		<p v-if="monument.dating"><span class="title">Datare:</span> {{this.monument.dating}}</p>
		<p v-if="monument.ethnicity"><span class="title">Etnie:</span> {{this.monument.ethnicity}}</p>
		<p v-if="monument.museum"><span class="title">Muzeul deținător:</span> {{this.monument.museum}}</p>
		<p v-if="monument.bibliography"><span class="title">Bibliografie:</span> {{this.monument.bibliography}}</p>
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
.monument {
	background-color: #eee;
	padding: 10px 50px 50px 50px;
	font-family: Georgia, serif;
}

.monument-picture {
	margin: 20px auto;
	display: block;
}

.monument-logo {
	margin: 20px;
	width: 150px;
	height: 100px;
	background-size: 150px;
	cursor: pointer;
}

.title {
	font-style: italic;
}

.description {
	font-size: 20px;
}

.monument > p {
	margin: 10px 0;
}
</style>