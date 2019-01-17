<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="drawer"
		class="grey darken-4"
		:mini-variant="isMini"
	>
		<v-list class="pt-0" three-line>
			<v-list-tile ripple @click="isMini = !isMini">
				<v-list-tile-action> <v-icon v-html="$vuetify.icons.menu" /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title class="spacedLetters" v-html="getLocale('dashboard_menu')" />
				</v-list-tile-content>
			</v-list-tile>

			<DialogStore />
			<DialogSettings />
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getLocale, storage } from '../../js/util';
import DialogSettings from './DialogSettings.vue';
import DialogStore from './DialogStore.vue';

export default {
	components: {
		DialogSettings,
		DialogStore,
	},
	data() {
		return {
			drawer: true,
			isMini: null,
		};
	},
	created() {
		this.getIsMini();
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
		getIsMini() {
			storage.get((storage) => {
				this.isMini = storage.settings.isSidebarMini;
			});
		},
	},
};
</script>
