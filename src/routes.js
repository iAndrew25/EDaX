import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './pages/landing/landing.vue';
import Monument from './pages/monument/monument.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/', 
		component: App
	}, {
		path: '/monument/:id', 
		component: Monument
	}]
});