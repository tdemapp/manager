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
		storage.get((data) => {
			(state.extensions = data.extensions), (state.settings = data.settings);
		});
	},
	toggleSidebar(state) {
		state.settings.display.sidebarMini = !state.settings.display.sidebarMini;
	},
	toggleDarkTheme(state) {
		state.settings.display.darkTheme = !state.settings.display.darkTheme;
	},
	toggleAnimations(state) {
		state.settings.display.animations = !state.settings.display.animations;
	},
};

const actions = {
	getExtensionStorage: ({ commit }) => commit('getExtensionStorage'),
	toggleSidebar: ({ commit }) => commit('toggleSidebar'),
	toggleDarkTheme: ({ commit }) => commit('toggleDarkTheme'),
	toggleAnimations: ({ commit }) => commit('toggleAnimations'),
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
});
