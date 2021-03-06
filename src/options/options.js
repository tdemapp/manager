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
import VAnimateCSS from 'v-animate-css';
import i18n from 'vue-plugin-webextension-i18n'

import Options from '../options/options.vue';
import Snackbar from './plugins/snackbar';

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
			success: '#0076FF',
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
		minifyTheme: (css) => process.env.NODE_ENV === 'production' ? css.replace(/[\s|\r\n|\r|\n]/g, '') : css,
	});
	Vue.use(VAnimateCSS);
	Vue.use(i18n)
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
