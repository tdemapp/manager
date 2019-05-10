<template>
	<Dialog :name="getLocale('dashboard_dialog_info_title')" :width="440">
		<IconInfo slot="icon" />

		<v-layout row wrap slot="content">
			<!-- Links -->
			<v-flex xs12>
				<v-btn
					flat
					large
					block
					target="_blank"
					rel="noopener"
					href="https://github.com/tdemapp"
					class="spacedLetters"
				>
					<IconGitHub class="mr-3" />
					<span>GitHub</span>
				</v-btn>
				<v-btn
					flat
					large
					block
					target="_blank"
					rel="noopener"
					href="https://tdem.app"
					class="spacedLetters"
				>
					<IconWebsite class="mr-3" />
					<span>Website</span>
				</v-btn>
				<v-btn
					flat
					large
					block
					target="_blank"
					rel="noopener"
					href="https://github.com/tdemapp/TDEM/graphs/contributors"
					class="spacedLetters"
				>
					<IconContributors class="mr-3" />
					<span>Contributors</span>
				</v-btn>
				<v-btn
					flat
					large
					block
					target="_blank"
					rel="noopener"
					href="https://github.com/tdemapp/TDEM/network/dependencies"
					class="spacedLetters"
				>
					<IconDependencies class="mr-3" />
					<span>Dependencies</span>
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
				<v-btn flat large block disabled> <span v-html="`v${extensionVersion}`" /> </v-btn>
			</v-flex>
		</v-layout>
	</Dialog>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../../scripts/util';

import Dialog from '../App/Dialog.vue';

import IconClose from '../../icons/x.svg';
import IconContributors from '../../icons/contributors.svg';
import IconDependencies from '../../icons/dependencies.svg';
import IconDownload from '../../icons/download.svg';
import IconGitHub from '../../icons/github.svg';
import IconInfo from '../../icons/info.svg';
import IconLink from '../../icons/link.svg';
import IconWebsite from '../../icons/website.svg';

export default {
	components: {
		Dialog,
		IconClose,
		IconContributors,
		IconDependencies,
		IconDownload,
		IconGitHub,
		IconInfo,
		IconWebsite,
	},
	data() {
		return {
			extensionVersion: getExtensionVersion(),
			settingsJSON: null,
		};
	},
	created() {
		this.settingsJSON = JSON.stringify(this.$store.state, null, 2);
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
		downloadSettings() {
			storage.get((data) => {
				var blob = new Blob([JSON.stringify(data.settings, null, 2)], {
					type: 'application/json',
				});
				var url = URL.createObjectURL(blob);

				chrome.downloads.download({
					url: url,
					filename: 'settings.json',
					saveAs: false,
				});

				return (
					'data:text/json;charset=utf-8,' +
					encodeURIComponent(JSON.stringify(data.settings))
				);
			});
		},
	},
};
</script>
