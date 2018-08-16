import Vue from 'vue';
import Vuetify from 'vuetify';

import Dashboard from './components/dashboard.vue';

/* 
 * Initialize Options
 */
function initOptions() {
	try {
		initVue();
	} catch (e) {
		throw new Error(`⚠️ Error Initializing Options | ${e}`);
	}
}

/* 
 * Initialize Vue
 */
function initVue() {
	Vue.use(Vuetify, {
		iconfont: 'feather',
		icons: {
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
		}
	});
	
	new Vue({
		el: '#app',
		render: (h) => h(Dashboard)
	});
}

initOptions();