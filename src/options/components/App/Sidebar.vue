<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="sidebar"
		:mini-variant="storage.isSidebarMini"
		:class="storage.isDarkTheme ? 'secondary' : 'primary'"
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
			<Download :storage="storage" />
			<Info :storage="storage" />
			<Settings :storage="storage" />
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getLocale, storage } from '../../../scripts/util';

import Download from '../Dialogs/Download.vue';
import Info from '../Dialogs/Info.vue';
import Settings from '../Dialogs/Settings.vue';

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
		Download,
		Info,
		Settings,
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
