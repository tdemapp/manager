<template>
  <v-card class='ma-2 extensionCard defaultShadow'>
    <v-toolbar flat :class='isEnabled ? "primary pt-3 pb-3" : "white pt-3 pb-3"'>
			<v-icon large :dark='isEnabled' v-html='$vuetify.icons.package' />

			<v-card-text :class='isEnabled ? "white--text subheading" : "grey--text subheading"'>
				<span v-html='extensionData.name' />
				<br />
				<span class='caption' v-html='"Version: " + extensionData.version' />
			</v-card-text>

      <v-spacer />

      <v-card-actions>
        <v-switch class='mt-3' color='white' v-model='isEnabled' />
      </v-card-actions>
    </v-toolbar>

		<v-divider :class='isEnabled ? "transparent ml-3 mr-3" : "ml-3 mr-3"' />

    <v-card-text class='caption' v-html='extensionData.description' />

		<v-card-actions>
			<v-btn flat block large :color='isEnabled ? "primary": "grey"' target='_blank' :href='extensionData.website'>
				<v-icon left v-html='$vuetify.icons.link' />
				Source
			</v-btn>
			<v-btn flat block large :color='isEnabled ? "red": "grey"'>
				<v-icon left v-html='$vuetify.icons.trash' />
				Remove
			</v-btn>
		</v-card-actions>
  </v-card>
</template>

 <script>
export default {
	props: {
		extensionData : {
			type: Object,
			default: {
				name: 'Extension Name',
				author: 'Extension Author',
				description: 'Extension Description',
				version: '1.1.1',
				website: 'https://example.com/',
				dependencies: ['myImportantExtension'],
				conflicts: ['veryBadExtension'],
				create: () => {
					console.log('Extension created!');
				},

				destroy: () => {
					console.log('Extension destroyed!');
				}
			}
		},
		isEnabled: {
			type: Boolean,
			default: false
		}
	}
};
</script>
