import Vue from 'vue';
import Vuetify from 'vuetify';

import Options from './options.vue';

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
			refresh: 'feather-refresh-cw',
			trash: 'feather-trash-2',
			search: 'feather-search',
			info: 'feather-info',
			twitter: 'feather-twitter',
			github: 'feather-github',
			settings: 'feather-settings',
			x: 'feather-x',
			add: 'feather-plus',
			code: 'feather-code',
			save: 'feather-save'
		}
	});

	new Vue({
		el: '#app',
		render: (h) => h(Options)
	});
}

initOptions();
