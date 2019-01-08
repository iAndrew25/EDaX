import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		monuments: []
	},
	mutations: {
		setMonuments: function(state, monuments) {
			state.monuments = monuments;
		}
	},
	getters: {
		getMonument: state => monumentId => state.monuments.find(({id}) => id === monumentId)
	}
});