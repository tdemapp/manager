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
					<v-layout row wrap justify-start align-start>
						<v-toolbar
							flat
							dark
							:color="storage.isDarkTheme ? 'secondary' : 'primary'"
							class="ma-2 pa-2 extensionCardHover defaultShadow"
						>
							<IconBox width="32px" height="32px" class="white--text" />

							<v-card-title primary-title class="white--text" v-text="item.name" />

							<v-spacer />

							<v-toolbar-items>
								<v-btn
									flat
									large
									icon
									:dark="storage.isDarkTheme"
									:href="item.url"
									target="_blank"
									rel="noopener"
								>
									<IconLink class="white--text" />
								</v-btn>
								<v-btn
									flat
									large
									icon
									:loading="isDownloadingExtension"
									@click="install(item.url)"
								>
									<IconDownload class="white--text" />
								</v-btn>
							</v-toolbar-items>
						</v-toolbar>
					</v-layout>
				</v-flex>
			</v-layout>
		</template>
	</Dialog>
</template>

<script>
import { extension, getLocale, log, storage } from '../../scripts/util';
import Dialog from './AppDialog.vue';
import IconBox from '../icons/box.svg';
import IconDownload from '../icons/download.svg';
import IconLink from '../icons/link.svg';
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
		IconBox,
		IconDownload,
		IconLink,
		IconStore,
	},
	data() {
		return {
			isDownloadingExtension: false,
			extensions: [],
		};
	},
	async created() {
		const store = await extension.getRegistry();
		if(!store.success) {
			this.$snackbar(store.message, 'error', {
				background: 'red',
			});
			log.error(store.message);
		} else {
			this.extensions = store.message;
		}
	},
	methods: {
		getLocale: (text) => getLocale(text),
		async install(url) {
			this.isDownloadingExtension = true;

			let json;
			try {
				json = await extension.download(url);
			} catch (err) {
				this.$snackbar(err, 'error', {
					background: 'red',
				});
				log.error(err);
			}

			let install;
			try {
				install = await extension.add(json.message);
			} catch (err) {
				this.$snackbar(err, 'error', {
					background: 'red',
				});
				this.isDownloadingExtension = false;
				log.error(err);
			} finally {
				this.$snackbar(install.message, 'success');
				this.isDownloadingExtension = false;
			}
		},
	},
};
</script>
