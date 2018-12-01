import Vue from 'vue';
import Vuetify from 'vuetify';

import * as util from '../js/util';
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
	const extensionTemplate = {
		name: 'myExtension',
		author: 'myExtensionAuthor',
		description: 'This is myExtension!',
		version: '1.1.1',
		website: 'https://example.com/',
		isEnabled: false,
		dependencies: ['myImportantExtension'],
		conflicts: ['veryBadExtension'],
		create: () => {
			console.log('myExtension created!');
		},
		destroy: () => {
			console.log('myExtension destroyed!');
		}
	};
	const baseStorageTemplate = {
		options: {},
		extensions: [extensionTemplate]
	};

	util.storage.set(baseStorageTemplate);
}

initOptions();
