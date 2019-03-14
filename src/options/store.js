import Vue from 'vue';
import Vuex from 'vuex';

import { storage } from '../scripts/util';

Vue.use(Vuex);

const state = {
	extensions: [],
	settings: {},
};

const mutations = {
	getExtensionStorage(state) {
		storage.get((storage) => {
			(state.extensions = storage.extensions), (state.settings = storage.settings);
		});
	},
	toggleSidebar(state) {
		state.settings.isSidebarMini = !state.settings.isSidebarMini;
	},
	toggleDarkTheme(state) {
		state.settings.isDarkTheme = !state.settings.isDarkTheme;
	},
};

const actions = {
	getExtensionStorage: ({ commit }) => commit('getExtensionStorage'),
	toggleSidebar: ({ commit }) => commit('toggleSidebar'),
	toggleDarkTheme: ({ commit }) => commit('toggleDarkTheme'),
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
});
