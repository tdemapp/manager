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
						:rules="[validateUrl]"
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
							v-html="getLocale('dashboard_dialog_download_title')"
						/>
					</v-btn>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { devLog, getLocale, storage } from '../../../scripts/util';
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
			dialog: null,
			isDownloadingExtension: false,
			inputText: '',
			validateUrl: (value) => {
				const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
				return pattern.test(value) || 'Invalid URL.';
			},
		};
	},
	methods: {
		getLocale,
		download(url) {
			this.isDownloadingExtension = true;
			fetch(url)
				.then((res) => {
					return res.json();
				})
				.then((json) => {
					devLog(json);
					storage.set({}, (data) => {
						data.extensions.push(json);
					});
				})
				.catch((err) => {
					console.error(err);
				});
			this.isDownloadingExtension = false;
		},
	},
};
</script>
