<template>
	<Dialog :name="getLocale('dashboard_dialog_settings_title')" :width="740">
		<IconSettings slot="icon" />

		<template slot="content">
			<h1
				class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 mb-3"
				v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
			/>

			<v-divider />

			<v-layout align-left justify-left row wrap class="ml-4">
				<v-flex xs4>
					<v-switch
						v-model="$store.state.settings.display.animations"
						class="body-2 spacedLetters text-uppercase"
						:color="$store.state.settings.display.darkTheme ? 'white' : 'secondary'"
						label="Animations"
					/>
				</v-flex>
				<v-flex xs4>
					<v-switch
						v-model="$store.state.settings.display.darkTheme"
						class="body-2 spacedLetters text-uppercase"
						:color="$store.state.settings.display.darkTheme ? 'white' : 'secondary'"
						label="Dark Theme"
					/>
				</v-flex>
			</v-layout>

			<h1
				class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 mb-3"
				v-html="getLocale('dashboard_dialog_settings_subtitle_advanced') + ':'"
			/>

			<v-divider />

			<v-layout align-left justify-left row wrap class="ml-4">
				<v-flex xs4>
					<v-switch
						v-model="$store.state.settings.advanced.debugMode"
						class="body-2 spacedLetters text-uppercase"
						:color="$store.state.settings.display.darkTheme ? 'white' : 'secondary'"
						label="Debug Mode"
					/>
				</v-flex>
				<v-flex xs4>
					<v-switch
						v-model="$store.state.settings.advanced.thirdParty"
						class="body-2 spacedLetters text-uppercase"
						:color="$store.state.settings.display.darkTheme ? 'white' : 'secondary'"
						label="3rd Party"
					/>
				</v-flex>
				<v-flex xs4>
					<v-switch
						v-model="$store.state.settings.advanced.other"
						class="body-2 spacedLetters text-uppercase"
						:color="$store.state.settings.display.darkTheme ? 'white' : 'secondary'"
						label="Other"
					/>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../../scripts/util';

import Dialog from '../App/Dialog.vue';
import IconSettings from '../../icons/settings.svg';

export default {
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
