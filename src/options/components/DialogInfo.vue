<template>
	<div>
		<!-- Sidebar Button -->
		<v-list-tile ripple @click="dialog = true">
			<v-list-tile-action> <v-icon v-html="$vuetify.icons.info" /> </v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title
					class="spacedLetters"
					v-html="getLocale('dashboard_dialog_info_title')"
				/>
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="740">
			<v-card>
				<v-toolbar flat dark tabs color="grey darken-4">
					<v-icon v-html="$vuetify.icons.info" />
					<v-card-title
						class="headline spacedLetters text-uppercase ml-2"
						v-html="getLocale('dashboard_dialog_info_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>

					<v-tabs
						grow
						slot="extension"
						v-model="activeTab"
						color="grey darken-4 activeColorFix"
					>
						<v-tabs-slider color="white" />

						<v-tab>
							<v-icon class="mr-3" v-html="$vuetify.icons.link" />
							<span v-html="getLocale('dashboard_dialog_settings_subtitle_links')" />
						</v-tab>
						<v-tab>
							<v-icon class="mr-3" v-html="$vuetify.icons.file" />
							<span v-html="getLocale('dashboard_dialog_settings_subtitle_debug')" />
						</v-tab>
					</v-tabs>
				</v-toolbar>

				<v-card-text>
					<v-tabs-items v-model="activeTab">
						<!-- Links Tab -->
						<v-tab-item>
							<v-layout row wrap class="mt-2">
								<v-flex
									xs5
									class="mb-1 ml-4 mr-4"
									v-for="(item, i) in links"
									:key="i"
								>
									<v-btn
										flat
										large
										block
										target="_blank"
										:href="item.href"
										class="spacedLetters"
									>
										<v-icon left v-html="'$vuetify.icons.' + item.icon" />
										<span v-html="item.text" />
									</v-btn>
								</v-flex>
							</v-layout>
						</v-tab-item>

						<!-- Debug Info Tab -->
						<v-tab-item>
							<v-layout row wrap class="mt-2">
								<v-flex xs12 class="ml-4 mr-4">
									<v-btn flat large block disabled>
										<span
											class="spacedLetters"
											v-html="
												getLocale('dashboard_dialog_settings_app_version') +
													': ' +
													extensionVersion
											"
										/>
									</v-btn>
								</v-flex>
								<v-flex xs12 class="ml-4 mr-4">
									<code class="pa-2 caption" v-html="settingsJSON" />
								</v-flex>
							</v-layout>
						</v-tab-item>
					</v-tabs-items>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../js/util';

export default {
	data() {
		return {
			dialog: false,
			activeTab: 0,
			extensionVersion: getExtensionVersion(),
			settingsJSON: null,
			links: [
				{
					icon: 'twitter',
					text: 'Twitter',
					href: 'https://twitter.com/nurodev',
				},
				{
					icon: 'github',
					text: 'GitHub',
					href: 'https://github.com/tdemapp/tdem',
				},
				{
					icon: 'chrome',
					text: getLocale('dashboard_dialog_settings_btn_chrome'),
					href: 'https://chrome.google.com/webstore/detail/tdem/',
				},
				{
					icon: 'website',
					text: getLocale('dashboard_dialog_settings_btn_website'),
					href: 'https://tdem.app',
				},
				{
					icon: 'users',
					text: getLocale('dashboard_dialog_settings_btn_contributors'),
					href: 'https://github.com/tdemapp/TDEM/graphs/contributors',
				},
				{
					icon: 'grid',
					text: getLocale('dashboard_dialog_settings_btn_dependencies'),
					href: 'https://github.com/tdemapp/TDEM/network/dependencies',
				},
			],
		};
	},
	created () {
		this.$store.commit('getExtensionStorage');
		this.settingsJSON = JSON.stringify(this.$store.state, null, 2);
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
