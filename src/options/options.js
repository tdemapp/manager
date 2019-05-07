import Vue from 'vue';
import Vuetify, {
	VApp,
	VBtn,
	VCard,
	VCardActions,
	VCardTitle,
	VCardText,
	VContent,
	VContainer,
	VDialog,
	VDivider,
	VFlex,
	VLayout,
	VList,
	VListTile,
	VListTileAction,
	VListTileContent,
	VListTileTitle,
	VNavigationDrawer,
	VSnackbar,
	VSpacer,
	VSwitch,
	VToolbar,
	VToolbarItems,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import { storage } from '../scripts/util';
import extensionTemplate from '../scripts/template';
import Options from '../options/options.vue';
import store from './store';

import 'vuetify/src/stylus/app.styl';
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
		theme: {
			primary: '#212121',
			secondary: '#1b1b1b',
		},
		components: {
			VApp,
			VBtn,
			VCard,
			VCardActions,
			VCardTitle,
			VCardText,
			VContent,
			VContainer,
			VDialog,
			VDivider,
			VFlex,
			VLayout,
			VList,
			VListTile,
			VListTileAction,
			VListTileContent,
			VListTileTitle,
			VNavigationDrawer,
			VSnackbar,
			VSpacer,
			VSwitch,
			VToolbar,
			VToolbarItems,
		},
		directives: {
			Ripple,
		},
	});

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
			display: {
				cardHover: true,
				darkTheme: true,
			},
			isSidebarMini: true,
		},
	};

	/*
	 * Setting can be synced as their total byte size for storage does not exceed max storage size (Chrome max sync storage size: 102,400 bytes)
	 * Extension storage is much larger than settings, as such they need to be storaed locally. (Chrome max local storage size: 5,242,880 bytes)
	 */
	storage.set(defaultStorage);
}

initOptions();
