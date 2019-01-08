<template>
	<div class="summary">
		<div class="thumbnail">
			<img class="thumbnail" v-bind:src="monument.thumbnail" />
		</div>
		<div class="content">
			<div class="title">{{monument.title}}</div>
			<div class="description">{{monument.description}}</div>
			<router-link v-bind:to="'/monument/' + monument.id" class="read-more">Citește mai mult</router-link>
		</div>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	name: 'Summary',
	props: {
		monument: Object
	}
}
</script>

<style scoped>
.summary {
	display: flex;
	flex-direction: row;
	background-color: #ddd;
	padding: 10px;
	margin-bottom: 20px;
}

.summary:hover {
	background-color: #eee;
}

.thumbnail {
	height: 100px;
	width: 100px;
}

.thumbnail img {
	height: 100px;
}

.content {
	display: flex;
	padding: 10px;
	text-align: left;
	flex-direction: column;
}

.title {
	font-size: 17px;
	font-weight: bold;
}

.read-more {
	text-decoration: none;
	color: black;
	font-style: italic;
	font-size: 13px;
}

.read-more:hover {
	text-decoration: underline;
}
</style>