<template>
	<v-card
		:class="
			`ma-2 defaultShadow ${
				storage.settings.display.animations ? 'extensionCardHover' : null
			}`
		"
		:color="storage.settings.display.darkTheme ? 'accent' : 'white'"
	>
		<v-toolbar flat :class="getToolbarColor()">
			<v-layout align-center justify-start row fill-height>
				<IconBox
					width="48px"
					height="48px"
					:class="extension.enabled ? 'white--text' : 'grey--text'"
				/>

				<v-spacer />

				<v-card-text
					:class="`subheading ${extension.enabled ? 'white--text' : 'grey--text'}`"
				>
					<span class="caption" v-html="extension.name" /> <br />
					<span class="caption" v-html="'v' + extension.version" />
				</v-card-text>

				<v-spacer />

				<v-card-actions>
					<v-switch class="mt-3" color="white" v-model="extension.enabled" />
				</v-card-actions>
			</v-layout>
		</v-toolbar>

		<v-divider :class="extension.enabled ? 'transparent ml-3 mr-3' : 'ml-3 mr-3'" />

		<v-card-text
			v-html="extension.description"
			:class="
				`caption text-truncate ${
					extension.enabled ? 'grey--text--darken-4' : 'grey--text'
				}`
			"
		/>

		<v-card-actions>
			<v-btn
				flat
				icon
				large
				rel="noopener"
				target="_blank"
				:href="extension.website"
				:color="extension.enabled ? 'grey--darken-4' : 'grey'"
			>
				<IconLink />
			</v-btn>

			<v-btn flat icon large :color="extension.enabled ? 'grey--darken-4' : 'grey'">
				<IconRefresh />
			</v-btn>

			<v-spacer />

			<v-btn flat icon large :color="extension.enabled ? 'red' : 'grey'">
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
		storage: {
			type: Object,
			required: true,
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
		getToolbarColor() {
			if (this.storage.settings.display.darkTheme) {
				return this.extension.enabled ? 'secondary py-3' : 'accent py-3';
			} else {
				return this.extension.enabled ? 'primary py-3' : 'white py-3';
			}
		},
	},
};
</script>
