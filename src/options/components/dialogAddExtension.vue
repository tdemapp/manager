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
        </v-toolbar>

        <v-card-text>
          <v-text-field v-model='gistID' box label='Gist ID' placeholder='1e1209f905603e1b2b77997e500df40e' />

          <v-btn flat block large color='primary' @click='addExtension(gistID)'>
            <v-icon left v-html='$vuetify.icons.save' />
            Save
          </v-btn>
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
			tab: null,
			gistID: null
		};
	},
	methods: {
		addExtension(url) {
			if (!util.addExtension(url)) {
				this.dialog = false;
			}
		}
	}
};
</script>
