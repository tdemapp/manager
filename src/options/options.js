import Vue from 'vue';
import Vuetify from 'vuetify';
import VueShortKey from 'vue-shortkey';

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
			add: 'feather-plus',
			download: 'feather-download',
			chrome: 'feather-chrome',
			users: 'feather-users',
			grid: 'feather-grid'
		}
	});

	Vue.use(VueShortKey);

	new Vue({
		el: '#app',
		render: (h) => h(Options)
	});
}

/* 
 * Initialize Chrome Storage
 */
function initializeStorage() {
	const baseSettingsStorageTemplate = {
		settings: {}
	};
	const baseExtensionStorageTemplate = {
		extensions: [extensionTemplate]
	};

	/*
	 * Setting can be synced as their total byte size for storage does not exceed max storage size (Chrome max sync storage size: 102,400 bytes)
	 * Extension storage is much larger than settings, as such they need to be storaed locally. (Chrome max local storage size: 5,242,880 bytes)
	*/
	util.storage.setSync(baseSettingsStorageTemplate);
	util.storage.setLocal(baseExtensionStorageTemplate);
}

initOptions();
