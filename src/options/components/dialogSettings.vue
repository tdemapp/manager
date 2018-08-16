<template>
  <section>
    <v-btn large icon @click.stop='dialog = true'>
      <v-icon v-html='$vuetify.icons.settings' />
    </v-btn>

    <v-dialog v-model='dialog' max-width='640' >
      <v-card>
        <v-toolbar flat dark color='primary'>
          <v-icon v-html='$vuetify.icons.settings' />
          <v-spacer />
          <v-card-title class='headline'>Settings</v-card-title>
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
export default {
	data() {
		return {
			dialog: false
		};
	}
};
</script>
