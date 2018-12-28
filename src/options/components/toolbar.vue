<template>
	<section>
		<v-toolbar flat dark class="transparent mt-3">
			<v-text-field
				light
				solo
				label="Search"
				class="mr-1 ml-2 mt-3 elevation-0"
				color="grey darken-4"
				:prepend-icon="$vuetify.icons.search"
			/>

			<div class="mr-4">
				<v-btn
					flat
					large
					@click="dialogSettings = true"
					v-shortkey="[',']"
					@shortkey="dialogSettings = true"
					light
					class="mt-3"
				>
					<v-icon left v-html="$vuetify.icons.settings" />
					<span v-html="getLocale('dashboard_dialog_settings_title')" />
				</v-btn>
				<v-btn
					flat
					large
					@click="dialogInfo = true"
					v-shortkey="['i']"
					@shortkey="dialogInfo = true"
					light
					class="mt-3"
				>
					<v-icon left v-html="$vuetify.icons.info" />
					<span v-html="getLocale('dashboard_dialog_info_title')" />
				</v-btn>
			</div>
		</v-toolbar>

		<v-dialog v-model="dialogSettings" max-width="640">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<v-icon v-html="$vuetify.icons.settings" />
					<v-card-title
						class="headline spacedLetters upperCase ml-2"
						v-html="getLocale('dashboard_dialog_settings_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialogSettings = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<section>
						<h1
							class="headline spacedLetters upperCase boldTitle ma-2 mb-3"
							v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
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
					</section>
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-dialog v-model="dialogInfo" max-width="640">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<v-icon v-html="$vuetify.icons.info" />
					<v-card-title
						class="headline spacedLetters upperCase ml-2"
						v-html="getLocale('dashboard_dialog_info_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialogInfo = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<h1
						class="headline spacedLetters upperCase boldTitle ma-2"
						v-html="getLocale('dashboard_dialog_info_subtitle_links') + ':'"
					/>
					<v-divider />

					<v-layout row wrap class="mt-2">
						<!-- <v-flex xs5 class='mb-2 ml-4 mr-4'>
							<v-btn flat large block target='_blank' href='https://chrome.google.com/webstore/detail/tdem/'>
								<v-icon left v-html='$vuetify.icons.chrome' />
								<span v-html='getLocale("dashboard_dialog_info_btn_chrome")' />
							</v-btn>
						</v-flex> -->
						<v-flex xs5 class="mb-2 ml-4 mr-4">
							<v-btn
								flat
								large
								block
								target="_blank"
								href="https://github.com/nurodev/tdem"
							>
								<v-icon left v-html="$vuetify.icons.github" />
								<span>GitHub</span>
							</v-btn>
						</v-flex>
						<v-flex xs5 class="mb-2 ml-4 mr-4">
							<v-btn
								flat
								large
								block
								target="_blank"
								href="https://twitter.com/nurodev"
							>
								<v-icon left v-html="$vuetify.icons.twitter" />
								<span
									v-html="
										'@' +
											getLocale('dashboard_dialog_info_btn_twitter_personal')
									"
								/>
							</v-btn>
						</v-flex>
						<!-- <v-flex xs5 class='mb-2 ml-4 mr-4'>
							<v-btn flat large block target='_blank' href='https://twitter.com/tdem_app'>
								<v-icon left v-html='$vuetify.icons.twitter' />
								<span v-html='"@" + getLocale("dashboard_dialog_info_btn_twitter_tdem")' />
							</v-btn>
						</v-flex> -->
					</v-layout>

					<h1
						class="headline spacedLetters upperCase boldTitle ma-2"
						v-html="getLocale('dashboard_dialog_info_subtitle_thanks') + ' ❤️'"
					/>
					<v-divider />

					<v-layout row wrap class="mt-2">
						<v-flex xs5 class="mb-2 ml-4 mr-4">
							<v-btn
								flat
								large
								block
								target="_blank"
								href="https://github.com/NuroDev/TDEM/graphs/contributors"
							>
								<v-icon left v-html="$vuetify.icons.users" />
								<span
									v-html="getLocale('dashboard_dialog_info_btn_contributors')"
								/>
							</v-btn>
						</v-flex>
						<v-flex xs5 class="mb-2 ml-4 mr-4">
							<v-btn
								flat
								large
								block
								target="_blank"
								href="https://github.com/NuroDev/TDEM/network/dependencies"
							>
								<v-icon left v-html="$vuetify.icons.grid" />
								<span
									v-html="getLocale('dashboard_dialog_info_btn_dependencies')"
								/>
							</v-btn>
						</v-flex>
					</v-layout>

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
										getLocale('dashboard_dialog_info_btn_download_settings')
									"
								/>
							</v-btn>
						</v-flex>
					</v-layout>
				</v-card-text>
			</v-card>
		</v-dialog>
	</section>
</template>

<script>
import * as util from '../../js/util';

export default {
	data() {
		return {
			extensionName: util.getExtensionName(),
			extensionVersion: util.getExtensionVersion(),
			infoTab: null,
			searchInput: null,
			dialogSearch: false,
			dialogSettings: false,
			dialogInfo: false,
		};
	},
	methods: {
		getLocale(text) {
			return util.getLocale(text);
		},
	},
};
</script>
