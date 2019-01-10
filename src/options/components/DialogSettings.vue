<template>
	<section>
		<!-- Sidebar Button -->
		<v-list-tile
			ripple
			@click="dialog = true"
			v-shortkey="[',']"
			@shortkey="dialog = true"
		>
			<v-list-tile-action>
				<v-icon v-html="$vuetify.icons.settings" />
			</v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title class="spacedLetters" v-html="getLocale('dashboard_dialog_settings_title')" />
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="740">
			<v-card>
				<v-toolbar flat dark tabs color="grey darken-4">
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>

					<v-tabs grow slot="extension" v-model="activeTab" color="grey darken-4">
						<v-tabs-slider color="white" />

						<v-tab>
							<v-icon class="mr-3" v-html="$vuetify.icons.settings" />
							<span v-html="getLocale('dashboard_dialog_settings_title')" />
						</v-tab>
						<v-tab>
							<v-icon class="mr-3" v-html="$vuetify.icons.info" />
							<span v-html="getLocale('dashboard_dialog_info_title')" />
						</v-tab>
					</v-tabs>
				</v-toolbar>

				<v-card-text>
					<v-tabs-items v-model="activeTab">
						<!-- Settings Tab -->
						<v-tab-item>
							<!-- Shortcuts settings -->
							<h1
								class="headline spacedLetters text-uppercase boldTitle ma-2"
								v-html="
									getLocale('dashboard_dialog_settings_subtitle_shortcuts') + ':'
								"
							/>
							<v-divider />
							<v-layout row wrap class="mt-2 mb-3">
								<v-flex
									xs5
									class="ml-4 mr-4"
									v-for="(item, i) in shortcuts"
									:key="i"
								>
									<v-btn flat large block disabled>
										<v-icon left v-html="'$vuetify.icons.' + item.icon" />
										<span v-html="item.text + ': ' + item.bind" />
									</v-btn>
								</v-flex>
							</v-layout>

							<!-- Display settings -->
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
									<v-switch class="mt-3" color="grey darken-4" />
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
						</v-tab-item>

						<!-- Info Tab -->
						<v-tab-item>
							<!-- Links info -->
							<h1
								class="headline spacedLetters text-uppercase boldTitle ma-2"
								v-html="getLocale('dashboard_dialog_settings_subtitle_links') + ':'"
							/>
							<v-divider />
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

							<!-- Debug info -->
							<h1
								class="headline spacedLetters text-uppercase boldTitle ma-2"
								v-html="getLocale('dashboard_dialog_settings_subtitle_debug') + ':'"
							/>
							<v-divider />
							<v-layout row wrap class="mt-2">
								<v-flex xs5 class="ml-4 mr-4">
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
								<v-flex xs5 class="ml-4 mr-4">
									<v-btn flat large block>
										<v-icon left v-html="$vuetify.icons.download" />
										<span
											v-html="
												getLocale(
													'dashboard_dialog_settings_btn_download_settings'
												)
											"
										/>
									</v-btn>
								</v-flex>
							</v-layout>
						</v-tab-item>
					</v-tabs-items>
				</v-card-text>
			</v-card>
		</v-dialog>
	</section>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../js/util';

export default {
	data() {
		return {
			dialog: false,
			activeTab: 0,
			extensionVersion: getExtensionVersion(),
			shortcuts: [
				{
					icon: 'store',
					text: getLocale('dashboard_dialog_store_title'),
					bind: null,
				},
				{
					icon: 'search',
					text: getLocale('dashboard_dialog_search_title'),
					bind: null,
				},
				{
					icon: 'settings',
					text: getLocale('dashboard_dialog_settings_title'),
					bind: null,
				},
			],
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
	created() {
		// Get shortcut key binds from settings
		storage.get((storage) => {
			this.shortcuts[0].bind = storage.settings.shortcuts.store;
			this.shortcuts[1].bind = storage.settings.shortcuts.search;
			this.shortcuts[2].bind = storage.settings.shortcuts.settings;
		});
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
