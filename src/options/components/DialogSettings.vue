<template>
	<section>
		<!-- Toolbar Button -->
		<v-btn
			flat
			large
			light
			@click="dialog = true"
			v-shortkey="[',']"
			@shortkey="dialog = true"
			class="mt-3 mr-4"
		>
			<v-icon left v-html="$vuetify.icons.settings" />
			<span class="spacedLetters" v-html="getLocale('dashboard_dialog_settings_title')" />
		</v-btn>

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

					<v-tabs slot="extension" v-model="activeTab" color="grey darken-4" grow>
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
							<h1
								class="headline spacedLetters upperCase boldTitle ma-2 mb-3"
								v-html="
									getLocale('dashboard_dialog_settings_subtitle_display') + ':'
								"
							/>
							<v-divider />
							<v-layout align-center justify-center row fill-height>
								<v-flex xs4 class="mt-2 ml-4 mr-4">
									<span class="body-2 spacedLetters upperCase">Dark Theme</span>
								</v-flex>
								<v-flex xs2 class="mt-2 ml-4 mr-4">
									<v-switch class="mt-3" color="grey darken-4" />
								</v-flex>
								<v-flex xs4 class="mt-2 ml-4 mr-4">
									<span class="body-2 spacedLetters upperCase">Dark Theme</span>
								</v-flex>
								<v-flex xs2 class="mt-2 ml-4 mr-4">
									<v-switch class="mt-3" color="grey darken-4" />
								</v-flex>
							</v-layout>
						</v-tab-item>

						<!-- Info Tab -->
						<v-tab-item>
							<!-- Shortcuts section -->
							<h1
								class="headline spacedLetters upperCase boldTitle ma-2"
								v-html="getLocale('dashboard_dialog_info_subtitle_shortcuts') + ':'"
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

							<!-- Links section -->
							<h1
								class="headline spacedLetters upperCase boldTitle ma-2"
								v-html="getLocale('dashboard_dialog_info_subtitle_links') + ':'"
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

							<!-- Debug section -->
							<h1
								class="headline spacedLetters upperCase boldTitle ma-2"
								v-html="getLocale('dashboard_dialog_info_subtitle_debug') + ':'"
							/>
							<v-divider />
							<v-layout row wrap class="mt-2">
								<v-flex xs5 class="ml-4 mr-4">
									<v-btn flat large block disabled>
										<span
											class="spacedLetters"
											v-html="
												getLocale('dashboard_dialog_info_app_version') +
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
													'dashboard_dialog_info_btn_download_settings'
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
			activeTab: null,
			extensionVersion: getExtensionVersion(),
			shortcuts: [
				{
					icon: 'store',
					text: getLocale('dashboard_dialog_store_title'),
					bind: 'A',
				},
				{
					icon: 'search',
					text: getLocale('dashboard_dialog_search_title'),
					bind: 'S',
				},
				{
					icon: 'settings',
					text: getLocale('dashboard_dialog_settings_title'),
					bind: ',',
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
					text: getLocale('dashboard_dialog_info_btn_chrome'),
					href: 'https://chrome.google.com/webstore/detail/tdem/',
				},
				{
					icon: 'website',
					text: getLocale('dashboard_dialog_info_btn_website'),
					href: 'https://tdem.app',
				},
				{
					icon: 'users',
					text: getLocale('dashboard_dialog_info_btn_contributors'),
					href: 'https://github.com/tdemapp/TDEM/graphs/contributors',
				},
				{
					icon: 'grid',
					text: getLocale('dashboard_dialog_info_btn_dependencies'),
					href: 'https://github.com/tdemapp/TDEM/network/dependencies',
				},
			],
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
