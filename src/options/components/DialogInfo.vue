<template>
	<div>
		<!-- Sidebar Button -->
		<v-list-tile ripple @click="dialog = true">
			<v-list-tile-action> <IconInfo /> </v-list-tile-action>

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
					<IconInfo />
					<v-card-title
						class="headline spacedLetters text-uppercase ml-2"
						v-html="getLocale('dashboard_dialog_info_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<IconClose />
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
							<IconLink class="mr-3" />
							<span v-html="getLocale('dashboard_dialog_settings_subtitle_links')" />
						</v-tab>
						<v-tab>
							<IconFile class="mr-3" />
							<span v-html="getLocale('dashboard_dialog_settings_subtitle_debug')" />
						</v-tab>
					</v-tabs>
				</v-toolbar>

				<v-card-text>
					<v-tabs-items v-model="activeTab">
						<!-- Links Tab -->
						<v-tab-item>
							<v-layout row wrap class="mt-2">
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://twitter.com/nurodev" class="spacedLetters">
										<IconTwitter class="mr-3" />
										<span>Twitter</span>
									</v-btn>
								</v-flex>
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://github.com/tdemapp/tdem" class="spacedLetters">
										<IconGithub class="mr-3" />
										<span>GitHub</span>
									</v-btn>
								</v-flex>
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://chrome.google.com/webstore/detail/tdem/" class="spacedLetters">
										<IconChrome class="mr-3" />
										<span v-html="getLocale('dashboard_dialog_settings_btn_chrome')" />
									</v-btn>
								</v-flex>
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://tdem.app" class="spacedLetters">
										<IconWebsite class="mr-3" />
										<span v-html="getLocale('dashboard_dialog_settings_btn_website')" />
									</v-btn>
								</v-flex>
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://github.com/tdemapp/TDEM/graphs/contributors" class="spacedLetters">
										<IconContributors class="mr-3" />
										<span v-html="getLocale('dashboard_dialog_settings_btn_contributors')" />
									</v-btn>
								</v-flex>
								<v-flex xs5 class="mb-1 ml-4 mr-4">
									<v-btn flat large block target="_blank" href="https://github.com/tdemapp/TDEM/network/dependencies" class="spacedLetters">
										<IconDependencies class="mr-3" />
										<span v-html="getLocale('dashboard_dialog_settings_btn_dependencies')" />
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
import IconChrome from '../icons/chrome.svg';
import IconClose from '../icons/x.svg';
import IconContributors from '../icons/contributors.svg';
import IconDependencies from '../icons/dependencies.svg';
import IconFile from '../icons/file.svg';
import IconGithub from '../icons/github.svg';
import IconInfo from '../icons/info.svg';
import IconLink from '../icons/link.svg';
import IconTwitter from '../icons/twitter.svg';
import IconWebsite from '../icons/website.svg';

export default {
	components: {
		IconChrome,
		IconClose,
		IconContributors,
		IconDependencies,
		IconFile,
		IconGithub,
		IconInfo,
		IconLink,
		IconTwitter,
		IconWebsite,
	},
	data() {
		return {
			dialog: false,
			activeTab: 0,
			extensionVersion: getExtensionVersion(),
			settingsJSON: null,
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
