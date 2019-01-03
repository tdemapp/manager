<template>
	<v-card class="ma-2 defaultCorners defaultShadow">
		<v-toolbar
			flat
			:class="extension.isEnabled ? 'grey darken-4 pt-3 pb-3' : 'white pt-3 pb-3'"
		>
			<v-layout align-center justify-start row fill-height>
				<v-flex xs1>
					<v-icon large :dark="extension.isEnabled" v-html="$vuetify.icons.box" />
				</v-flex>
				<v-flex xs9>
					<v-card-text
						:class="
							extension.isEnabled ? 'white--text subheading' : 'grey--text subheading'
						"
					>
						<span v-html="extension.name" /> <br />
						<span
							class="caption"
							v-html="
								getLocale('dashboard_extension_version') + ': ' + extension.version
							"
						/>
					</v-card-text>
				</v-flex>
				<v-flex xs1>
					<v-card-actions>
						<v-switch class="mt-3" color="white" v-model="extension.isEnabled" />
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-toolbar>

		<v-divider :class="extension.isEnabled ? 'transparent ml-3 mr-3' : 'ml-3 mr-3'" />

		<v-card-text class="caption" v-html="extension.description" />

		<v-card-actions>
			<v-btn
				flat
				icon
				large
				:color="extension.isEnabled ? 'grey--darken-4' : 'grey'"
				target="_blank"
				:href="extension.website"
			>
				<v-icon v-html="$vuetify.icons.link" />
			</v-btn>
			<v-btn flat icon large :color="extension.isEnabled ? 'grey--darken-4' : 'grey'">
				<v-icon v-html="$vuetify.icons.refresh" />
			</v-btn>

			<v-spacer />

			<v-btn flat icon large :color="extension.isEnabled ? 'red' : 'grey'">
				<v-icon v-html="$vuetify.icons.trash" />
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { storage, getLocale } from '../../js/util';
import extensionTemplate from '../../js/template';

export default {
	props: {
		extension: {
			type: Object,
			required: true,
			default: extensionTemplate,
		},
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
