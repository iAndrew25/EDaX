<template>
	<div class="filters" v-bind:class="{'filters-displayed': displayFilters }">
		<div class="filters-wraper">
			<div class="left-filers">
				<div class="filter-block">
					<label for="owner">Muzeul deținător:</label>
					<select id="owner" v-model="selectedOwner">
						<option value="">Oricare</option>
						<option v-for="owner in owners" v-bind:value="owner" v-bind:key="owner">
							{{ owner }}
						</option>
					</select>
				</div>

				<div class="filter-block">
					<label for="type">Tipul ansamblului:</label>
					<select id="type" v-model="selectedType">
						<option value="">Oricare</option>
						<option v-for="type in types" v-bind:value="type" v-bind:key="type">
							{{ type }}
						</option>
					</select>
				</div>

				<div class="filter-block">
					<label for="ethnicity">Etnia:</label>
					<select id="ethnicity" v-model="selectedEthnicity">
						<option value="">Oricare</option>
						<option v-for="ethnicity in ethnicities" v-bind:value="ethnicity" v-bind:key="ethnicity">
							{{ ethnicity }}
						</option>
					</select>
				</div>
			</div>

			<div class="right-filters">
				<div class="filter-block">
					<label for="dating">Datarea:</label>
					<select id="dating" v-model="selectedDating">
						<option value="">Oricare</option>
						<option v-for="dating in datings" v-bind:value="dating" v-bind:key="dating">
							{{ dating }}
						</option>
					</select>
				</div>

				<div class="filter-block">
					<label for="area">Localitatea de proveniență:</label>
					<select id="area" v-model="selectedArea">
						<option value="">Oricare</option>
						<option v-for="area in areas" v-bind:value="area" v-bind:key="area">
							{{ area }}
						</option>
					</select>
				</div>
			</div>
		</div>	

		<button @click="searchWithFilters" class="search">Caută</button>
	</div>
</template>

<script>
/* eslint-disable */
import {getFiltersConfig, getMonuments} from '../../../services/search-service';

export default {
	name: 'Filters',
	props: ['displayFilters', 'filterData', 'toggleDisplayFilters'],
	data: function() {
		return {
			selectedType: '',
			types: [],
			selectedEthnicity: '',
			ethnicities: [],
			selectedOwner: '', 
			owners: [],
			selectedDating: '',
			datings: [],
			selectedArea: '',
			areas: [],
		}
	},
	methods: {
		searchWithFilters: function() {
			this.toggleDisplayFilters();
			this.filterData(this.selectedType, this.selectedEthnicity, this.selectedOwner, this.selectedDating, this.selectedArea);
		}
	},
	mounted: async function() {
		let {type, ethnicity, owner, dating, area} = await getFiltersConfig();

		this.types = type;
		this.ethnicities = ethnicity;
		this.owners = owner;
		this.datings = dating;
		this.areas = area;
	}
}
</script>

<style scoped>
.filters {
	margin-top: 10px;
	background-color: #eee;
	border: 1px solid #dfdfdf;
	box-shadow: 0 0 10px #bfbebf;
	position: relative;
	height: 0;
	width: 100%;
	opacity: 0;
	transition: opacity .2s, height .4s, padding .4s;
}
.filters-wraper {
	display: flex;
	flex-direction: row;
}
.right-filters {
	margin-left: 20px;
}
.filters.filters-displayed {
	opacity: 1;
	padding: 20px;
	height: 240px;
}
.filter-block {
	padding-bottom: 10px;
}
.filter-block label {
	display: block;
	text-align: left;
}
.filter-block select {
	max-width: 220px;
	text-align: left;
}
.search {
	margin: auto;
}
</style>