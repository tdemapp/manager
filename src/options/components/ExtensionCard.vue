<template>
	<v-card class="ma-2 defaultCorners defaultShadow">
		<v-toolbar
			flat
			:color="$store.state.settings.isDarkTheme ? 'grey darken-3' : 'white'"
			:class="extension.isEnabled ? 'grey darken-4 py-3' : 'py-3'"
		>
			<v-layout align-center justify-start row fill-height>
				<IconBox
					width="48px"
					height="48px"
					:class="extension.isEnabled ? 'white--text' : 'black--text'"
				/>

				<v-spacer />

				<v-card-text
					:class="
						extension.isEnabled ? 'white--text subheading' : 'grey--text subheading'
					"
				>
					<span class="caption" v-html="extension.name" /> <br />
					<span
						class="caption"
						v-html="getLocale('dashboard_extension_version') + ': ' + extension.version"
					/>
				</v-card-text>

				<v-spacer />

				<v-card-actions>
					<v-switch class="mt-3" color="white" v-model="extension.isEnabled" />
				</v-card-actions>
			</v-layout>
		</v-toolbar>

		<v-divider :class="extension.isEnabled ? 'transparent ml-3 mr-3' : 'ml-3 mr-3'" />

		<v-card-text class="caption" v-html="extension.description" />

		<v-card-actions>
			<v-btn
				flat
				icon
				large
				target="_blank"
				:href="extension.website"
				:color="extension.isEnabled ? 'grey--darken-4' : 'grey'"
			>
				<IconLink />
			</v-btn>

			<v-btn flat icon large :color="extension.isEnabled ? 'grey--darken-4' : 'grey'">
				<IconRefresh />
			</v-btn>

			<v-spacer />

			<v-btn flat icon large :color="extension.isEnabled ? 'red' : 'grey'">
				<IconTrash />
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { storage, getLocale } from '../../scripts/util';
import extensionTemplate from '../../scripts/template';
import IconBox from '../icons/box.svg';
import IconLink from '../icons/link.svg';
import IconRefresh from '../icons/refresh.svg';
import IconTrash from '../icons/trash.svg';

export default {
	props: {
		extension: {
			type: Object,
			required: true,
			default: extensionTemplate,
		},
	},
	components: {
		IconBox,
		IconLink,
		IconRefresh,
		IconTrash,
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
