<template>
  <v-card class='ma-2 extensionCard'>
    <v-toolbar flat :class='isEnabled ? "grey darken-4 pt-3 pb-3" : "white pt-3 pb-3"'>
			<v-icon large :dark='isEnabled' v-html='$vuetify.icons.package' />

			<v-card-text :class='isEnabled ? "white--text subheading" : "grey--text subheading"'>
				<span v-html='name' />
				<br />
				<span class='caption' v-html='getMessage("dashboardExtensionVersion") + ": " + version' />
			</v-card-text>

      <v-spacer />

      <v-card-actions>
        <v-switch class='mt-3' color='white' v-model='isEnabled' />
      </v-card-actions>
    </v-toolbar>

		<v-divider :class='isEnabled ? "transparent ml-3 mr-3" : "ml-3 mr-3"' />

    <v-card-text class='caption' v-html='description' />

		<v-card-actions>
			<v-btn flat icon large :color='isEnabled ? "grey--darken-4": "grey"' target='_blank' :href='website'>
				<v-icon v-html='$vuetify.icons.link' />
			</v-btn>
			<v-btn flat icon large :color='isEnabled ? "grey--darken-4": "grey"'>
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
import * as util from '../../js/util';
import extensionTemplate from '../../js/template';

export default {
	props: {
		name: {
			type: String,
			default: extensionTemplate.name
		},
		description: {
			type: String,
			default: extensionTemplate.description
		},
		version: {
			type: String,
			default: extensionTemplate.version
		},
		website: {
			type: String,
			default: extensionTemplate.website
		},
		isEnabled: {
			type: Boolean,
			default: extensionTemplate.isEnabled
		}
	},
	methods: {
		toggleExtension() {
			let currentState = util.storage.get((storage) => storage.extensions.isEnabled);
			util.storage.set(currentState);
		},
		getMessage(text) {
			return util.getMessage(text);
		}
	}
};
</script>
