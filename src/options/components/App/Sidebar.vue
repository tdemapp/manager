<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="sidebar"
		:mini-variant="isMini"
		:class="storage.isDarkTheme ? 'secondary' : 'primary'"
	>
		<v-list class="pt-0" three-line>
			<!-- Sidebar toggle -->
			<v-list-tile ripple @click="toggleSidebar">
				<v-list-tile-action> <IconMenu /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title
						class="spacedLetters text-uppercase"
						v-html="getLocale('dashboard_menu')"
					/>
				</v-list-tile-content>
			</v-list-tile>

			<!-- Dialogs -->
			<Store :storage="storage" />
			<Info :storage="storage" />
			<Settings :storage="storage" />
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
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	components: {
		IconMenu,
		Info,
		Settings,
		Store,
	},
	data() {
		return {
			sidebar: true,
			isMini: false,
		};
	},
	created() {
		this.isMini = this.storage.isSidebarMini;
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
		toggleSidebar() {
			let currentSetting = this.isMini;
			this.isMini = !this.isMini;

			storage.set({
				isSidebarMini: !this.isMini,
			});
		},
	},
};
</script>
