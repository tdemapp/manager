<template>
  <v-card class='ma-2 extensionCard defaultShadow'>
    <v-toolbar flat :class='isEnabled ? "extensionCardToolbar pt-3 pb-3" : "white pt-3 pb-3"'>
			<v-icon large :dark='isEnabled' v-html='$vuetify.icons.package' />

			<v-card-text :class='isEnabled ? "white--text subheading" : "grey--text subheading"'>
				<span v-html='name' />
				<br />
				<span class='caption' v-html='"Version: " + version' />
			</v-card-text>

      <v-spacer />

      <v-card-actions>
        <v-switch class='mt-3' color='white' v-model='isEnabled' />
      </v-card-actions>
    </v-toolbar>

		<v-divider :class='isEnabled ? "transparent ml-3 mr-3" : "ml-3 mr-3"' />

    <v-card-text class='caption' v-html='description' />

		<v-card-actions>
			<v-btn flat icon large :color='isEnabled ? "primary": "grey"' target='_blank' :href='website'>
				<v-icon v-html='$vuetify.icons.link' />
			</v-btn>
			<v-btn flat icon large :color='isEnabled ? "primary": "grey"'>
				<v-icon v-html='$vuetify.icons.refresh' />
			</v-btn>

			<v-spacer />

			<v-btn flat icon large :color='isEnabled ? "red": "grey"'>
				<v-icon v-html='$vuetify.icons.trash' />
			</v-btn>
		</v-card-actions>
  </v-card>
</template>

 <script>
export default {
	props: {
		name: {
			type: String
		},
		description: {
			type: String
		},
		version: {
			type: String
		},
		website: {
			type: String
		},
		isEnabled: {
			type: Boolean
		}
	}
};
</script>
