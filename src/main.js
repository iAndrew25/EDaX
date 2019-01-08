import Vue from 'vue';

import router from './config/routes';
import store from './config/store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	template: `<router-view class="index"></router-view>`
}).$mount('#app');