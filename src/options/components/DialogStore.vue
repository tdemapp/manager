<template>
	<Dialog
		:name="getLocale('dashboard_dialog_store_title')"
		:width="1240"
		:scrollable="true"
		:storage="storage"
	>
		<IconStore slot="icon" />

		<template slot="content">
			<v-layout row wrap>
				<v-flex xs4 v-for="(item, i) in extensions" :key="i">
					<v-card class="ma-2 pa-2 extensionCardHover defaultShadow">
						<v-card-title primary-title v-text="item.name" />

						<v-card-text v-text="item.url" />

						<v-card-actions>
							<v-btn
								:loading="isDownloadingExtension"
								flat
								large
								block
								@click="download(item.url)"
							>
								Install
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { devLog, getLocale, storage, extension } from '../../scripts/util';
import Dialog from './AppDialog.vue';
import IconStore from '../icons/store.svg';

export default {
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	components: {
		Dialog,
		IconStore,
	},
	data() {
		return {
			isDownloadingExtension: false,
			registry: [],
			extensions: [],
		};
	},
	async created() {
		this.extensions = await extension.getRegistry();
	},
	methods: {
		getLocale: (text) => getLocale(text),
		async download(url) {
			this.isDownloadingExtension = true;
			const download = await extension.download(url);

			if (!download) {
				this.$snackbar('Error downloading extension', 'error', {
					background: 'red',
				});
				console.error(download);
			}

			storage.get((data) => {
				let newExtensions = data;
				newExtensions.extensions.push(download);
				storage.set(newExtensions, (err) => {
					if (!err) {
						this.$snackbar('Error saving extension', 'error', {
							background: 'red',
						});
						console.error(download);
					}
				});
			});

			this.$snackbar('Extension Installed', 'success');
			this.inputText = '';
			this.isDownloadingExtension = false;
		},
	},
};
</script>
