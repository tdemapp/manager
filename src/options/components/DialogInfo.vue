<template>
  <Dialog
    :name="getLocale('dashboard_dialog_info_title')"
    :width="440"
    :storage="storage"
  >
    <IconInfo slot="icon" />

    <v-layout
      slot="content"
      row
      wrap
    >
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
          @click="downloadSettings"
        >
          <IconDownload class="mr-3" />
          <span
            class="spacedLetters"
            v-text="getLocale('dashboard_dialog_info_download_settings')"
          />
        </v-btn>
      </v-flex>

      <!-- App version -->
      <v-flex xs12>
        <v-btn
          flat
          large
          block
          disabled
        >
          <span v-text="`v${extensionVersion}`" />
        </v-btn>
      </v-flex>
    </v-layout>
  </Dialog>
</template>

<script>
import * as download from 'downloadjs';

import { getExtensionVersion, getLocale, storage } from '../../scripts/util';

import Dialog from './AppDialog.vue';

import IconContributors from '../icons/contributors.svg';
import IconDependencies from '../icons/dependencies.svg';
import IconDownload from '../icons/download.svg';
import IconGitHub from '../icons/github.svg';
import IconInfo from '../icons/info.svg';
import IconLink from '../icons/link.svg';
import IconWebsite from '../icons/website.svg';

export default {
	components: {
		Dialog,
		IconContributors,
		IconDependencies,
		IconDownload,
		IconGitHub,
		IconInfo,
		IconWebsite,
	},
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			extensionVersion: getExtensionVersion(),
			settingsJSON: null,
		};
	},
	created() {
		this.settingsJSON = JSON.stringify(this.storage, null, 2);
	},
	methods: {
		getLocale: (text) => getLocale(text),
		downloadSettings: () =>
			storage.get((data) => {
				const settings = data;
				delete settings.extensions;
				download(JSON.stringify(settings, null, 2), 'settings.json', 'application/json');
			}),
	},
};
</script>
