<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="drawer"
		:class="$store.state.settings.isDarkTheme ? 'secondary' : 'primary'"
		:mini-variant="$store.state.settings.isSidebarMini"
	>
		<v-list class="pt-0" three-line>
			<v-list-tile ripple @click="$store.commit('toggleSidebar')">
				<v-list-tile-action> <IconMenu /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title class="spacedLetters" v-html="getLocale('dashboard_menu')" />
				</v-list-tile-content>
			</v-list-tile>

			<DialogStore />

			<div style="position: fixed; bottom: 0; width: 256px;">
				<DialogInfo />
				<DialogSettings />
			</div>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getLocale, storage } from '../../scripts/util';
import DialogInfo from './DialogInfo.vue';
import DialogSettings from './DialogSettings.vue';
import DialogStore from './DialogStore.vue';
import IconMenu from '../icons/menu.svg';

export default {
	components: {
		DialogInfo,
		DialogSettings,
		DialogStore,
		IconMenu,
	},
	data() {
		return {
			drawer: true,
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
