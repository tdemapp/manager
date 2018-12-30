<template>
	<v-card class='ma-2 defaultCorners defaultShadow'>
		<v-toolbar flat :class='isEnabled ? "grey darken-4 pt-3 pb-3" : "white pt-3 pb-3"'>
			<v-layout align-center justify-start row fill-height>
				<v-flex xs1>
					<v-icon large :dark='isEnabled' v-html='$vuetify.icons.box' />
				</v-flex>
				<v-flex xs9>
					<v-card-text :class='isEnabled ? "white--text subheading" : "grey--text subheading"' >
						<span v-html='name' />
						<br />
						<span class='caption' v-html='getLocale("dashboard_extension_version") + ": " + version' />
					</v-card-text>
				</v-flex>
				<v-flex xs1>
					<v-card-actions>
						<v-switch class='mt-3' color='white' v-model='isEnabled' />
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-toolbar>

		<v-divider :class='isEnabled ? "transparent ml-3 mr-3" : "ml-3 mr-3"' />

		<v-card-text class='caption' v-html='description' />

		<v-card-actions>
			<v-btn flat icon large :color='isEnabled ? "grey--darken-4" : "grey"' target='_blank' :href='website' >
				<v-icon v-html='$vuetify.icons.link' />
			</v-btn>
			<v-btn flat icon large :color='isEnabled ? "grey--darken-4" : "grey"'>
				<v-icon v-html='$vuetify.icons.refresh' />
			</v-btn>

			<v-spacer />

			<v-btn flat icon large :color='isEnabled ? "red" : "grey"'>
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
			required: true,
			default: extensionTemplate.name,
		},
		description: {
			type: String,
			required: true,
			default: extensionTemplate.description,
		},
		version: {
			type: String,
			required: true,
			default: extensionTemplate.version,
		},
		website: {
			type: String,
			required: false,
			default: extensionTemplate.website,
		},
		isEnabled: {
			type: Boolean,
			required: true,
			default: extensionTemplate.isEnabled,
		},
	},
	methods: {
		toggleExtension() {
			let currentState = util.storage.getLocal((storage) => storage.extensions.isEnabled);
			util.storage.setLocal(currentState);
		},
		getLocale(text) {
			return util.getLocale(text);
		},
	},
};
</script>
