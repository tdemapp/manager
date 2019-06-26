<template>
  <Dialog
    :name="$i18n('dashboard_dialog_download_title')"
    :width="540"
    :storage="storage"
  >
    <IconDownload slot="icon" />

    <template slot="content">
      <v-layout
        row
        wrap
      >
        <!-- Download Settings -->
        <v-flex xs12>
          <v-text-field
            v-model="inputText"
            :color="storage.isDarkTheme ? 'white' : 'primary'"
            label="URL"
          />

          <v-btn
            flat
            large
            block
            :loading="isDownloadingExtension"
            @click="install(inputText)"
          >
            <IconDownload class="mr-3" />
            <span
              class="spacedLetters"
              v-text="$i18n('dashboard_dialog_download_title')"
            />
          </v-btn>
        </v-flex>
      </v-layout>
    </template>
  </Dialog>
</template>

<script>
import { extension, log, storage } from '../../scripts/util';
import Dialog from './AppDialog.vue';
import IconDownload from '../icons/download.svg';

export default {
	components: {
		Dialog,
		IconDownload,
	},
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isDownloadingExtension: false,
			inputText: '',
		};
	},
	methods: {
		async install(url) {
			const isUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

			if (this.inputText.match(isUrl)) {
				this.isDownloadingExtension = true;

				let json;
				try {
					json = await extension.download(url);
				} catch (err) {
					this.$snackbar.error(err.message);
					log.error(err);
				}

				let install;
				try {
					install = await extension.add(json.message ? json.message : json);

					this.$snackbar.success(install.message);
					this.inputText = '';
					this.isDownloadingExtension = false;
				} catch (err) {
					this.$snackbar.error(err.message);
					this.isDownloadingExtension = false;
					log.error(err);
				}
			}
		},
	},
};
</script>
