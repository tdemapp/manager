<template>
  <section>
    <v-toolbar app fixed permanent flat dark class='transparent'>
      <v-text-field light solo label='Search' class='mr-1 ml-2 mt-3 elevation-0' color='grey darken-4' :prepend-icon='$vuetify.icons.search' />

      <div class='mr-4'>
        <v-btn flat large @click='dialogAddExtension = true' light class='mt-3'>
          <v-icon v-html='$vuetify.icons.add' />
        </v-btn>
        <v-btn flat large @click='dialogSettings = true' light class='mt-3'>
          <v-icon v-html='$vuetify.icons.settings' />
        </v-btn>
        <v-btn flat large @click='dialogInfo = true' light class='mt-3'>
          <v-icon v-html='$vuetify.icons.info' />
        </v-btn>
      </div>
    </v-toolbar>

    <v-dialog v-model='dialogAddExtension' max-width='640' >
        <v-card>
        <v-toolbar flat dark tabs color='grey darken-4' class='pr-0'>
            <v-icon v-html='$vuetify.icons.add' />
            <v-spacer />
            <v-card-title class='headline' v-html='dialogTitleAddExtension' />
            <v-spacer />
            <v-toolbar-items class='hidden-sm-and-down'>
              <v-btn flat @click='dialogAddExtension = false'>
                  <v-icon v-html='$vuetify.icons.x' />
              </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
            <v-text-field v-model='gistID' label='Gist ID' placeholder='1e1209f905603e1b2b77997e500df40e' />

            <v-btn flat block large color='grey darken-4' @click='addExtension(gistID)'>
              <v-icon left v-html='$vuetify.icons.add' />
              <span>Add</span>
            </v-btn>
        </v-card-text>
        </v-card>
    </v-dialog>

    <v-dialog v-model='dialogSettings' max-width='840' >
      <v-card>
        <v-toolbar flat dark color='grey darken-4'>
          <v-icon v-html='$vuetify.icons.settings' />
          <v-spacer />
          <v-card-title class='headline' v-html='dialogTitleSettings' />
          <v-spacer />
          <v-toolbar-items class='hidden-sm-and-down'>
            <v-btn flat @click='dialogSettings = false'>
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
          <v-card-title class='headline' v-html='dialogTitleInfo' />
          <v-spacer />
          <v-toolbar-items class='hidden-sm-and-down'>
            <v-btn flat @click='dialogInfo = false'>
              <v-icon v-html='$vuetify.icons.x' />
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import * as util from '../../js/util';

export default {
	data() {
		return {
			extensionName: util.getExtensionName(),
			extensionVersion: `v${util.getExtensionVersion()}`,
      gistID: null,
      searchInput: null,
			dialogAddExtension: false,
			dialogSearch: false,
			dialogSettings: false,
			dialogInfo: false,
			dialogTitleAddExtension: util.getMessage('dashboardDialogAdd'),
			dialogTitleSearch: util.getMessage('dashboardDialogSearch'),
			dialogTitleSettings: util.getMessage('dashboardDialogSettings'),
			dialogTitleInfo: util.getMessage('dashboardDialogInfo')
		};
	}
};
</script>
