<template>
	<div>
		<!-- Sidebar Button -->
		<v-list-tile ripple @click="dialog = true">
			<v-list-tile-action> <v-icon v-html="$vuetify.icons.settings" /> </v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title
					class="spacedLetters"
					v-html="getLocale('dashboard_dialog_settings_title')"
				/>
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="740">
			<v-card>
				<v-toolbar flat dark tabs color="grey darken-4">
					<v-icon v-html="$vuetify.icons.settings" />
					<v-card-title
						class="headline spacedLetters text-uppercase ml-2"
						v-html="getLocale('dashboard_dialog_settings_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<h1
						class="headline spacedLetters text-uppercase boldTitle ma-2 mb-3"
						v-html="
							getLocale('dashboard_dialog_settings_subtitle_display') + ':'
						"
					/>

					<v-divider />

					<v-layout align-center justify-center row fill-height>
						<v-flex xs4 class="mt-2 ml-4 mr-4">
							<span class="body-2 spacedLetters text-uppercase"
								>Dark Theme</span
							>
						</v-flex>
						<v-flex xs2 class="mt-2 ml-4 mr-4">
							<v-switch v-model="$store.state.settings.isDarkTheme" class="mt-3" color="white" />
						</v-flex>
						<v-flex xs4 class="mt-2 ml-4 mr-4">
							<span class="body-2 spacedLetters text-uppercase"
								>Dark Theme</span
							>
						</v-flex>
						<v-flex xs2 class="mt-2 ml-4 mr-4">
							<v-switch class="mt-3" color="grey darken-4" />
						</v-flex>
					</v-layout>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { getLocale, storage } from '../../js/util';

export default {
	data() {
		return {
			dialog: false,
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
