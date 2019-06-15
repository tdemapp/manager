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
			secondary: '#161616',
			info: '#0076FF',
			success: '#2CBE4E',
			error: '#FF0000',
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
	Vue.config.devtools = false;

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
