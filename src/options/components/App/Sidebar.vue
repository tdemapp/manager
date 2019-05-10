<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="sidebar"
		:mini-variant="$store.state.settings.display.sidebarMini"
		:class="$store.state.settings.display.darkTheme ? 'secondary' : 'primary'"
	>
		<v-list class="pt-0" three-line>
			<!-- Sidebar toggle -->
			<v-list-tile ripple @click="$store.commit('toggleSidebar')">
				<v-list-tile-action> <IconMenu /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title
						class="spacedLetters text-uppercase"
						v-html="getLocale('dashboard_menu')"
					/>
				</v-list-tile-content>
			</v-list-tile>

			<!-- Dialogs -->
			<Store />
			<Info />
			<Settings />
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getLocale, storage } from '../../../scripts/util';

import Info from '../Dialogs/Info.vue';
import Settings from '../Dialogs/Settings.vue';
import Store from '../Dialogs/Store.vue';

import IconMenu from '../../icons/menu.svg';

export default {
	components: {
		IconMenu,
		Info,
		Settings,
		Store,
	},
	data() {
		return {
			sidebar: true,
		};
	},
	created() {
		this.$store.commit('getExtensionStorage');
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
