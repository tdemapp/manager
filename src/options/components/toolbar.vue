<template>
  <section>
    <v-toolbar flat dark class='transparent mt-3'>
      <v-text-field light solo label='Search' class='mr-1 ml-2 mt-3 elevation-0' color='grey darken-4' :prepend-icon='$vuetify.icons.search' />

      <div class='mr-4'>
        <v-btn flat large @click='dialogSettings = true' light class='mt-3'>
          <v-icon v-html='$vuetify.icons.settings' />
        </v-btn>
        <v-btn flat large @click='dialogInfo = true' light class='mt-3'>
          <v-icon v-html='$vuetify.icons.info' />
        </v-btn>
      </div>
    </v-toolbar>

    <v-dialog v-model='dialogSettings' max-width='840' >
      <v-card>
        <v-toolbar flat dark color='grey darken-4'>
          <v-icon v-html='$vuetify.icons.settings' />
          <v-spacer />
          <v-card-title class='headline' v-html='getMessage("dashboardDialogTitleSettings")' />
          <v-spacer />
          <v-toolbar-items class='hidden-sm-and-down'>
            <v-btn flat class='squareCorners' @click='dialogSettings = false'>
              <v-icon v-html='$vuetify.icons.x' />
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <v-dialog v-model='dialogInfo' max-width='640' >
      <v-card>
        <v-toolbar flat dark color='grey darken-4'>
          <v-icon v-html='$vuetify.icons.info' />
          <v-spacer />
          <v-card-title class='headline' v-html='getMessage("dashboardDialogTitleInfo")' />
          <v-spacer />
          <v-toolbar-items class='hidden-sm-and-down'>
            <v-btn flat class='squareCorners' @click='dialogInfo = false'>
              <v-icon v-html='$vuetify.icons.x' />
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
            <v-layout row wrap>
              <v-flex xs5 class='mb-2 ml-4 mr-4'>
                <v-btn flat large block target='_blank' href='https://twitter.com/nurodev'>
                  <v-icon left v-html='$vuetify.icons.twitter' />
                  <span>Twitter</span>
                </v-btn>
              </v-flex>
              <v-flex xs5 class='mb-2 ml-4 mr-4'>
                <v-btn flat large block target='_blank' href='https://github.com/nurodev/tdem'>
                  <v-icon left v-html='$vuetify.icons.github' />
                  <span>GitHub</span>
                </v-btn>
              </v-flex>
            </v-layout>

            <v-divider />

            <v-layout row wrap>
              <v-flex xs5 class='mt-2 ml-4 mr-4'>
                <v-btn flat large block disabled>
                  <span v-html='getMessage("dashboardDialogInfoAppVersion") + ": " + extensionVersion' />
                </v-btn>
              </v-flex>
              <v-flex xs5 class='mt-2 ml-4 mr-4'>
                <v-btn flat large block>
                  <v-icon left v-html='$vuetify.icons.download' />
                  <span v-html='getMessage("dashboardDialogInfoDownloadSettings")' />
                </v-btn>
              </v-flex>
            </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import * as util from '~/js/util';

export default {
	data() {
		return {
			extensionName: util.getExtensionName(),
      extensionVersion: util.getExtensionVersion(),
      infoTab: null,
			searchInput: null,
			dialogSearch: false,
			dialogSettings: false,
      dialogInfo: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		};
	},
	methods: {
		getMessage(text) {
			return util.getMessage(text);
		}
	}
};
</script>
