<template>
	<v-navigation-drawer
		app
		dark
		floating
		permanent
		width="256"
		v-model="drawer"
		:mini-variant="$store.state.settings.isSidebarMini"
		:class="$store.state.settings.isDarkTheme ? 'secondary' : 'primary'"
	>
		<v-list class="pt-0" three-line>
			<!-- Sidebar toggle -->
			<v-list-tile ripple @click="$store.commit('toggleSidebar')">
				<v-list-tile-action> <IconMenu /> </v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title
						class="spacedLetters text-uppercase"
						v-html="getLocale('dashboard_menu')"
					/>
				</v-list-tile-content>
			</v-list-tile>

			<!-- Store Dialog -->
			<AppDialog :name="getLocale('dashboard_dialog_store_title')">
				<IconStore slot="icon" />

				<template slot="content">
					<v-list subheader :dark="$store.state.settings.isDarkTheme" :style="$store.state.settings.isDarkTheme ? 'background-color: #1b1b1b !important;' : null">
						<v-list-tile v-for="(item, i) in items" :key="i">
							<v-list-tile-content>
								<v-list-tile-title
									class="caption spacedLetters"
									v-html="item.title"
								/>
							</v-list-tile-content>

							<v-list-tile-action>
								<v-btn flat large icon :href="item.href"> <IconLink /> </v-btn>
							</v-list-tile-action>
							<v-list-tile-action>
								<v-btn
									flat
									large
									icon
									@click="downloadExtension(item.extensionName)"
								>
									<IconDownload />
								</v-btn>
							</v-list-tile-action>
						</v-list-tile>
					</v-list>
				</template>
			</AppDialog>

			<!-- Info Dialog -->
			<AppDialog :name="getLocale('dashboard_dialog_info_title')">
				<IconInfo slot="icon" />

				<v-layout row wrap slot="content">
					<!-- Links -->
					<v-flex xs12 v-for="(item, i) in infoLinks" :key="i">
						<v-btn
							flat
							large
							block
							target="_blank"
							rel="noopener"
							:href="item.href"
							class="spacedLetters"
						>
							<IconLink class="mr-3" />
							<span v-html="item.text" />
						</v-btn>
					</v-flex>

					<!-- Download Settings -->
					<v-flex xs12>
						<v-divider class="my-3" />

						<v-btn
							flat
							large
							block
							href="`{data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.props.objectToDownload))}}`"
							download="settings.json"
						>
							<IconDownload class="mr-3" />
							<span
								class="spacedLetters"
								v-html="getLocale('dashboard_dialog_info_download_settings')"
							/>
						</v-btn>
					</v-flex>

					<!-- App version -->
					<v-flex xs12>
						<v-btn flat large block disabled>
							<span v-html="`v${extensionVersion}`" />
						</v-btn>
					</v-flex>
				</v-layout>
			</AppDialog>

			<!-- Settings Dialog -->
			<AppDialog :name="getLocale('dashboard_dialog_settings_title')" :width="740">
				<IconSettings slot="icon" />

				<template slot="content">
					<h1
						class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 mb-3"
						v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
					/>

					<v-divider />

					<v-layout align-center justify-center row wrap class="ml-4">
						<v-flex xs4>
							<v-switch
								v-model="$store.state.settings.isDarkTheme"
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
						<v-flex xs4>
							<v-switch
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
						<v-flex xs4>
							<v-switch
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
					</v-layout>

					<h1
						class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 my-3"
						v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
					/>

					<v-divider />

					<v-layout align-center justify-center row wrap class="ml-4">
						<v-flex xs4>
							<v-switch
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
						<v-flex xs4>
							<v-switch
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
						<v-flex xs4>
							<v-switch
								class="mt- body-2 spacedLetters text-uppercase"
								color="white"
								label="Dark Theme"
							/>
						</v-flex>
					</v-layout>
				</template>
			</AppDialog>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../scripts/util';

import AppDialog from './AppDialog.vue';

import IconClose from '../icons/x.svg';
import IconContributors from '../icons/contributors.svg';
import IconDependencies from '../icons/dependencies.svg';
import IconDownload from '../icons/download.svg';
import IconGithub from '../icons/github.svg';
import IconInfo from '../icons/info.svg';
import IconLink from '../icons/link.svg';
import IconMenu from '../icons/menu.svg';
import IconSettings from '../icons/settings.svg';
import IconStore from '../icons/store.svg';
import IconTwitter from '../icons/twitter.svg';
import IconWebsite from '../icons/website.svg';

export default {
	components: {
		AppDialog,
		IconClose,
		IconContributors,
		IconDependencies,
		IconDownload,
		IconGithub,
		IconInfo,
		IconLink,
		IconMenu,
		IconSettings,
		IconStore,
		IconTwitter,
		IconWebsite,
	},
	data() {
		return {
			drawer: true,
			extensionVersion: getExtensionVersion(),
			settingsJSON: null,
			infoLinks: [
				{ text: 'Twitter', icon: `<IconTwitter />`, href: 'https://twitter.com/nurodev' },
				{ text: 'GitHub', icon: `<IconGithub />`, href: 'https://github.com/nurodev' },
				{ text: 'Website', icon: `<IconWebsite />`, href: 'https://tdem.app/' },
				{
					text: 'Contributors',
					icon: `<IconContributors />`,
					href: 'https://github.com/tdemapp/TDEM/graphs/contributors',
				},
				{
					text: 'Dependencies',
					icon: `<IconDependencies />`,
					href: 'https://github.com/tdemapp/TDEM/network/dependencies',
				},
			],
			items: [
				{
					active: true,
					title: 'Jason Oner',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
				},
				{
					active: true,
					title: 'Ranee Carlson',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				},
				{ title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
				{ title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
			],
		};
	},
	created() {
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
