import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selectedMonument: {}
	},
	mutations: {
		setSelectedMonument: function(state, selectedMonument) {
			state.selectedMonument = selectedMonument
		}
	}
})