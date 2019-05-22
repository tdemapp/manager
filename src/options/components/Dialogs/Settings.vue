<template>
	<Dialog :name="getLocale('dashboard_dialog_settings_title')" :width="740" :storage="storage">
		<IconSettings slot="icon" />

		<template slot="content">
			<v-layout align-left justify-left row wrap class="ml-4">
				<v-flex xs4>
					<v-switch
						v-model="storage.doAnimations"
						class="body-2 spacedLetters text-uppercase"
						:color="storage.isDarkTheme ? 'white' : 'secondary'"
						:label="getLocale('dashboard_dialog_settings_animations')"
					/>
				</v-flex>
				<v-flex xs4>
					<v-switch
						v-model="storage.isDarkTheme"
						class="body-2 spacedLetters text-uppercase"
						:color="storage.isDarkTheme ? 'white' : 'secondary'"
						:label="getLocale('dashboard_dialog_settings_dark_theme')"
					/>
				</v-flex>
				<v-flex xs4>
					<v-switch
						v-model="storage.debugMode"
						class="body-2 spacedLetters text-uppercase"
						:color="storage.isDarkTheme ? 'white' : 'secondary'"
						:label="getLocale('dashboard_dialog_settings_debug_mode')"
					/>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { getExtensionVersion, getLocale } from '../../../scripts/util';

import Dialog from '../App/Dialog.vue';
import IconSettings from '../../icons/settings.svg';

export default {
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	components: {
		Dialog,
		IconSettings,
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
