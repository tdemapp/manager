<template>
  <Dialog
    :name="$i18n('dashboard_dialog_store_title')"
    :width="1240"
    :scrollable="true"
    :storage="storage"
  >
    <IconStore slot="icon" />

    <template slot="content">
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="(item, i) in extensions"
          :key="i"
          xs4
        >
          <v-layout
            row
            wrap
            justify-start
            align-start
          >
            <v-toolbar
              flat
              dark
              :color="storage.isDarkTheme ? 'black' : 'secondary'"
              class="ma-2 pa-2 extensionCardHover defaultShadow"
            >
              <IconBox
                width="32px"
                height="32px"
                class="white--text"
              />

              <v-card-title
                primary-title
                class="white--text"
                v-text="item.name"
              />

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
                  @click="install(item.name)"
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
import { extension, log, storage } from '../../scripts/util';
import Dialog from './AppDialog.vue';
import IconBox from '../icons/box.svg';
import IconDownload from '../icons/download.svg';
import IconLink from '../icons/link.svg';
import IconStore from '../icons/store.svg';

export default {
	components: {
		Dialog,
		IconBox,
		IconDownload,
		IconLink,
		IconStore,
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
			extensions: [],
		};
	},
	async created() {
		let store;
		try {
			store = await extension.getRegistry();
			this.extensions = store;
		} catch (err) {
			this.$snackbar.error(store);
			log.error(store);
		}
	},
	methods: {
		async install(extensionName) {
			this.isDownloadingExtension = true;

			let json;
			try {
				json = await extension.download(`https://registry.tdem.app/${extensionName}`);
			} catch (err) {
				this.$snackbar.error(err);
				log.error(err);
			}

			let install;
			try {
				install = await extension.add(json);

				this.$snackbar.success(install);
				this.isDownloadingExtension = false;
			} catch (err) {
				this.$snackbar.error(err);
				this.isDownloadingExtension = false;
				log.error(err);
			}
		},
	},
};
</script>
