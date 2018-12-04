import Vue from 'vue';
import Vuetify from 'vuetify';

import * as util from '~/js/util';
import extensionTemplate from '~/js/template';
import Options from './options.vue';

/* 
 * Initialize Options
 */
function initOptions() {
	try {
		initVue();
		initializeStorage();
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
			donate: 'feather-dollar-sign',
			settings: 'feather-settings',
			x: 'feather-x',
			add: 'feather-plus'
		}
	});

	new Vue({
		el: '#app',
		render: (h) => h(Options)
	});
}

/* 
 * Initialize Chrome Storage
 */
function initializeStorage() {
	const baseStorageTemplate = {
		settings: {},
		extensions: [extensionTemplate]
	};

	util.storage.set(baseStorageTemplate);
}

initOptions();
