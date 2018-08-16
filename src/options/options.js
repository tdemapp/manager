import Vue from 'vue';
import Vuetify from 'vuetify';

import Dashboard from './components/dashboard.vue';

const featherIcons = {
	package: 'feather-package',
	link: 'feather-external-link',
	trash: 'feather-trash-2',
	search: 'feather-search',
	info: 'feather-info',
	twitter: 'feather-twitter',
	github: 'feather-github',
	settings: 'feather-settings',
	x: 'feather-x',
	add: 'feather-plus'
};

Vue.use(Vuetify, {
	iconfont: 'feather',
	icons: featherIcons
});

new Vue({
	el: '#app',
	render: (h) => h(Dashboard)
});
