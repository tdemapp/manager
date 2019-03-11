import Vue from 'vue';
import Vuetify from 'vuetify';

import { storage } from '../js/util';
import extensionTemplate from '../js/template';
import Options from '../options/options.vue';
import store from './store';

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
	Vue.use(Vuetify);

	new Vue({
		el: '#app',
		store,
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
			isSidebarMini: false,
		},
	};

	/*
	 * Setting can be synced as their total byte size for storage does not exceed max storage size (Chrome max sync storage size: 102,400 bytes)
	 * Extension storage is much larger than settings, as such they need to be storaed locally. (Chrome max local storage size: 5,242,880 bytes)
	 */
	storage.set(defaultStorage);
}

initOptions();
