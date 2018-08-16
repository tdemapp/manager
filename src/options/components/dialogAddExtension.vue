<template>
  <section>
    <v-fab-transition>
      <v-btn icon fab fixed bottom right dark class='ma-4' color='primary' @click='dialog = true'>
        <v-icon v-html='$vuetify.icons.add' />
      </v-btn>
    </v-fab-transition>

    <v-dialog v-model='dialog' max-width='640' >
      <v-card>
        <v-toolbar flat dark tabs color='primary'>
          <v-icon v-html='$vuetify.icons.add' />
          <v-spacer />
          <v-card-title class='headline' v-html='dialogTitle' />
          <v-spacer />
          <v-btn icon large @click='dialog = false'>
            <v-icon v-html='$vuetify.icons.x' />
          </v-btn>
          <v-tabs grow slot='extension' v-model='tab' color='primary'>
            <v-tabs-slider color='white' />
            <v-tab>
              <v-icon class='mr-3' v-html='$vuetify.icons.link' />
              Link
            </v-tab>
            <v-tab>
              <v-icon class='mr-3' v-html='$vuetify.icons.code' />
              Code
            </v-tab>
          </v-tabs>
        </v-toolbar>

        <v-card-text>
          <v-tabs-items v-model='tab'>

            <v-tab-item>
              <v-card flat>
                <v-text-field box label='URL' placeholder='https://gist.github.com/' />
                <v-btn flat block large color='primary'>
                  <v-icon left v-html='$vuetify.icons.save' />
                  Save
                </v-btn>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-textarea auto-grow box label='Object' />
                <v-btn flat block large color='primary'>
                  <v-icon left v-html='$vuetify.icons.save' />
                  Save
                </v-btn>
              </v-card>
            </v-tab-item>

          </v-tabs-items>
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
      dialog: false,
      dialogTitle: util.getMessage('dashboardDialogAdd'),
      tab: null
		};
	}
};
</script>
