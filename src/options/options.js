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
	VTextField,
	VToolbar,
	VToolbarItems,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import VAnimateCss from 'v-animate-css';
import Snackbar from './plugins/snackbar';

import Options from '../options/options.vue';

import 'vuetify/src/stylus/app.styl';
import './options.css';

/*
 * Initialize Vue
 */
function initVue() {
	Vue.use(Vuetify, {
		theme: {
			primary: '#212121', // Lighter
			secondary: '#1b1b1b', // Darker
			accent: '#262626', // Lightest
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
			VTextField,
			VToolbar,
			VToolbarItems,
		},
		directives: {
			Ripple,
		},
	});
	Vue.use(VAnimateCss);
	Vue.use(Snackbar);

	Vue.config.productionTip = false;

	new Vue({
		el: '#app',
		render: (h) => h(Options),
	});
}

try {
	initVue();
} catch (e) {
	throw new Error(`⚠️ Error Initializing Options | ${e}`);
}
