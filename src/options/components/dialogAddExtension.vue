<template>
  <section>
    <v-fab-transition>
      <v-btn icon fab fixed bottom right dark class='ma-4' color='primary' @click='dialog = true'>
        <v-icon v-html='$vuetify.icons.add' />
      </v-btn>
    </v-fab-transition>

    <v-dialog v-model='dialog' max-width='640' >
      <v-card>
        <v-toolbar flat dark color='primary'>
          <v-icon v-html='$vuetify.icons.add' />
          <v-spacer />
          <v-card-title class='headline' v-html='dialogTitle' />
          <v-spacer />
          <v-btn icon large @click='dialog = false'>
            <v-icon v-html='$vuetify.icons.x' />
          </v-btn>
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
      dialog: false,
      dialogTitle: util.getMessage('dashboardDialogAdd')
		};
	}
};
</script>
