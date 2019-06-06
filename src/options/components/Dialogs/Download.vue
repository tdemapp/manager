<template>
	<Dialog
		:name="getLocale('dashboard_dialog_download_title')"
		:width="540"
		:scrollable="true"
		:storage="storage"
	>
		<IconDownload slot="icon" />

		<template slot="content">
			<v-layout row wrap>
				<!-- Download Settings -->
				<v-flex xs12>
					<v-text-field
						:color="storage.isDarkTheme ? 'white' : 'primary'"
						v-model="inputText"
						label="URL"
					/>

					<v-btn
						flat
						large
						block
						:loading="isDownloadingExtension"
						@click="download(inputText)"
					>
						<IconDownload class="mr-3" />
						<span
							class="spacedLetters"
							v-text="getLocale('dashboard_dialog_download_title')"
						/>
					</v-btn>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { devLog, getLocale, storage, extension } from '../../../scripts/util';
import Dialog from '../App/Dialog.vue';
import IconDownload from '../../icons/download.svg';

export default {
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	components: {
		Dialog,
		IconDownload,
	},
	data() {
		return {
			isDownloadingExtension: false,
			inputText: '',
		};
	},
	methods: {
		getLocale: (text) => getLocale(text),
		download(url) {
			this.isDownloadingExtension = true;

			const isUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
			if (this.inputText.match(isUrl)) {
				fetch(url)
					.then((res) => res.json())
					.then((json) => {
						devLog(json);
						extension.validate(json, (valid) => {
							this.storage.extensions.push(json);
							storage.set(this.storage);
							this.$snackbar('Extension Installed', 'success');
							this.inputText = '';
						});
					})
					.catch((err) => {
						this.$snackbar('Error downloading extension', 'error', {
							background: 'red',
						});
						throw new Error(err);
					});
			} else {
				this.$snackbar('Invalid URL', 'error', { background: 'red' });
			}

			this.isDownloadingExtension = false;
		},
	},
};
</script>
