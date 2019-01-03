import Vue from 'vue';
import Vuetify from 'vuetify';
import VueShortKey from 'vue-shortkey';

import { storage } from '../js/util';
import extensionTemplate from '../js/template';
import Options from '../options/options.vue';

import './options.css';

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
			// Extension card icon
			box: 'feather-box',
			link: 'feather-link',
			refresh: 'feather-refresh-cw',
			trash: 'feather-trash-2',

			// Toolbar icons
			store: 'feather-shopping-cart',
			search: 'feather-search',
			info: 'feather-info',
			settings: 'feather-sliders',

			// Modal icons
			twitter: 'feather-twitter',
			website: 'feather-globe',
			github: 'feather-github',
			download: 'feather-download',
			chrome: 'feather-chrome',
			users: 'feather-users',
			grid: 'feather-grid',

			// Misc Icons
			x: 'feather-x',
			x_circle: 'feather-x-circle',
			tick: 'feather-check',
			tick_circle: 'feather-check-circle',
			add: 'feather-plus',
			warning: 'feather-alert-triangle',
		},
	});

	Vue.use(VueShortKey);

	new Vue({
		el: '#app',
		render: (h) => h(Options),
	});
}

/*
 * Initialize Chrome Storage
 */
function initializeStorage() {
	const defaultStorage = {
		extensions: [extensionTemplate],
		settings: {
			isDarkTheme: false,
			shortcuts: {
				store: 'a',
				search: 's',
				settings: ',',
			},
		},
	};

	/*
	 * Setting can be synced as their total byte size for storage does not exceed max storage size (Chrome max sync storage size: 102,400 bytes)
	 * Extension storage is much larger than settings, as such they need to be storaed locally. (Chrome max local storage size: 5,242,880 bytes)
	 */
	storage.set(defaultStorage);
}

initOptions();
