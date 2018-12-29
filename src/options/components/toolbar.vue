<template>
	<section>
		<v-toolbar flat dark class='transparent mt-3'>
			<v-text-field light solo label='Search' class='mr-1 ml-2 mt-3 elevation-0' color='grey darken-4' :prepend-icon='$vuetify.icons.search' />

			<div class='mr-4'>
				<v-btn flat large light @click='dialogs.settings = true' v-shortkey='[","]' @shortkey='dialogs.settings = true' class='mt-3' >
					<v-icon left v-html='$vuetify.icons.settings' />
					<span v-html='getLocale("dashboard_dialog_settings_title")' />
				</v-btn>
				<v-btn flat large light @click='dialogs.info = true' v-shortkey='["i"]' @shortkey='dialogs.info = true' class='mt-3' >
					<v-icon left v-html='$vuetify.icons.info' />
					<span v-html='getLocale("dashboard_dialog_info_title")' />
				</v-btn>
			</div>
		</v-toolbar>

		<v-dialog v-model='dialogs.settings' max-width='640'>
			<v-card>
				<v-toolbar flat dark color='grey darken-4'>
					<v-icon v-html='$vuetify.icons.settings' />
					<v-card-title class='headline spacedLetters upperCase ml-2' v-html='getLocale("dashboard_dialog_settings_title")' />
					<v-spacer />
					<v-toolbar-items class='hidden-sm-and-down'>
						<v-btn flat class='squareCorners' @click='dialogs.settings = false'>
							<v-icon v-html='$vuetify.icons.x' />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<h1 class='headline spacedLetters upperCase boldTitle ma-2 mb-3' v-html='getLocale("dashboard_dialog_settings_subtitle_display") + ":"' />
					<v-divider />
					<v-layout align-center justify-center row fill-height>
						<v-flex xs4 class='mt-2 ml-4 mr-4'>
							<span class='body-2 spacedLetters upperCase'>Dark Theme</span>
						</v-flex>
						<v-flex xs2 class='mt-2 ml-4 mr-4'>
							<v-switch class='mt-3' color='grey darken-4' />
						</v-flex>
						<v-flex xs4 class='mt-2 ml-4 mr-4'>
							<span class='body-2 spacedLetters upperCase'>Dark Theme</span>
						</v-flex>
						<v-flex xs2 class='mt-2 ml-4 mr-4'>
							<v-switch class='mt-3' color='grey darken-4' />
						</v-flex>
					</v-layout>
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-dialog v-model='dialogs.info' max-width='740'>
			<v-card>
				<v-toolbar flat dark color='grey darken-4'>
					<v-icon v-html='$vuetify.icons.info' />
					<v-card-title class='headline spacedLetters upperCase ml-2' v-html='getLocale("dashboard_dialog_info_title")' />
					<v-spacer />
					<v-toolbar-items class='hidden-sm-and-down'>
						<v-btn flat class='squareCorners' @click='dialogs.info = false'>
							<v-icon v-html='$vuetify.icons.x' />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<!-- Shortcuts section -->
					<h1 class='headline spacedLetters upperCase boldTitle ma-2' v-html='getLocale("dashboard_dialog_info_subtitle_shortcuts") + ":"' />
					<v-divider />
					<v-layout row wrap class='mt-2 mb-3'>
						<v-flex xs5 class='ml-4 mr-4' v-for='(item, i) in shortcuts' :key='i'>
							<v-btn flat large block disabled>
								<v-icon left v-html='"$vuetify.icons." + item.icon' />
								<span v-html='item.text + ": " + item.bind'/>
							</v-btn>
						</v-flex>
					</v-layout>

					<!-- Links section -->
					<h1 class='headline spacedLetters upperCase boldTitle ma-2' v-html='getLocale("dashboard_dialog_info_subtitle_links") + ":"' />
					<v-divider />
					<v-layout row wrap class='mt-2'>
						<v-flex xs5 class='mb-1 ml-4 mr-4' v-for='(item, i) in links' :key='i'>
							<v-btn flat large block target='_blank' :href='item.href' >
								<v-icon left v-html='"$vuetify.icons." + item.icon' />
								<span v-html='item.text'/>
							</v-btn>
						</v-flex>
					</v-layout>

					<!-- Debug section -->
					<h1 class='headline spacedLetters upperCase boldTitle ma-2' v-html='getLocale("dashboard_dialog_info_subtitle_debug") + ":"' />
					<v-divider />
					<v-layout row wrap class='mt-2'>
						<v-flex xs5 class='ml-4 mr-4'>
							<v-btn flat large block disabled>
								<span class='spacedLetters' v-html='getLocale("dashboard_dialog_info_app_version") + ": " + extensionVersion' />
							</v-btn>
						</v-flex>
						<v-flex xs5 class='ml-4 mr-4'>
							<v-btn flat large block>
								<v-icon left v-html='$vuetify.icons.download' />
								<span v-html='getLocale("dashboard_dialog_info_btn_download_settings")' />
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
			dialogs: {
				search: false,
				settings: false,
				info: false,
			},
			shortcuts: [
				// { icon: 'search', text: util.getLocale('dashboard_dialog_search_title'), bind: 'S' },
				{ icon: 'settings', text: util.getLocale('dashboard_dialog_settings_title'), bind: ',' },
				{ icon: 'info', text: util.getLocale('dashboard_dialog_info_title'), bind: 'I' },
				{ icon: 'add', text: util.getLocale('dashboard_dialog_add_title'), bind: 'A' },
			],
			links: [
				{ icon: 'twitter', text: util.getLocale('dashboard_dialog_info_btn_twitter_personal'), href: 'https://twitter.com/nurodev'},
				{ icon: 'twitter', text: util.getLocale('dashboard_dialog_info_btn_twitter_tdem'), href: 'https://twitter.com/tdemapp'},
				{ icon: 'chrome', text: util.getLocale('dashboard_dialog_info_btn_chrome'), href: 'https://chrome.google.com/webstore/detail/tdem/'},
				{ icon: 'github', text: 'GitHub', href: 'https://github.com/nurodev/tdem'},
				{ icon: 'users', text: util.getLocale('dashboard_dialog_info_btn_contributors'), href: 'https://github.com/NuroDev/TDEM/graphs/contributors'},
				{ icon: 'grid', text: util.getLocale('dashboard_dialog_info_btn_dependencies'), href: 'https://github.com/NuroDev/TDEM/graphs/dependencies'},
			]
		};
	},
	methods: {
		getLocale(text) {
			return util.getLocale(text);
		},
	},
};
</script>
