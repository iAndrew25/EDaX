import Vue from 'vue';

import router from './routes';

Vue.config.productionTip = false;

new Vue({
	router,
	template: `<router-view class="index"></router-view>`
}).$mount('#app');