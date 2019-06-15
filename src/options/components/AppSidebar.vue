<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		class="black"
		v-model="sidebar"
		:mini-variant="storage.isSidebarMini"
	>
		<v-list class="pt-0" three-line>
			<!-- Sidebar toggle -->
			<v-list-tile ripple @click="toggleSetting('isSidebarMini')">
				<v-list-tile-action> <IconMenu /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title
						class="spacedLetters text-uppercase"
						v-text="getLocale('dashboard_menu')"
					/>
				</v-list-tile-content>
			</v-list-tile>

			<!-- Dialogs -->
			<Store :storage="storage" />
			<Download :storage="storage" />
			<Info :storage="storage" />
			<Settings :storage="storage" />
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getLocale, storage } from '../../scripts/util';

import Download from './DialogDownload.vue';
import Info from './DialogInfo.vue';
import Settings from './DialogSettings.vue';
import Store from './DialogStore.vue';

import IconMenu from '../icons/menu.svg';

export default {
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	components: {
		IconMenu,
		Download,
		Info,
		Settings,
		Store,
	},
	data() {
		return {
			sidebar: true,
		};
	},
	methods: {
		getLocale: (text) => getLocale(text),
		toggleSetting: (name) => storage.toggleSetting(name),
	},
};
</script>
