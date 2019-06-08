<template>
	<v-card
		:class="`ma-2 defaultShadow ${storage.doAnimations ? 'extensionCardHover' : null}`"
		:color="storage.isDarkTheme ? 'accent' : 'white'"
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
					<span class="caption" v-text="extension.name" /> <br />
					<span class="caption" v-text="`v${extension.version}`" />
				</v-card-text>

				<v-spacer />

				<v-card-actions>
					<v-switch
						class="mt-3"
						color="white"
						@click="toggleExtension(extension.name)"
						v-model="extension.enabled"
					/>
				</v-card-actions>
			</v-layout>
		</v-toolbar>

		<v-divider :class="extension.enabled ? 'transparent ml-3 mr-3' : 'ml-3 mr-3'" />

		<v-card-text
			:class="
				`caption text-truncate ${extension.enabled ? 'grey--text--darken-4' : 'grey--text'}`
			"
			v-text="extension.description"
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

			<v-btn
				flat
				icon
				large
				@click="reloadExtension(extension.name)"
				:color="extension.enabled ? 'grey--darken-4' : 'grey'"
			>
				<IconRefresh />
			</v-btn>

			<v-btn
				flat
				icon
				large
				@click="removeExtension(extension.name)"
				:color="extension.enabled ? 'red' : 'grey'"
			>
				<IconTrash />
			</v-btn>
			<v-spacer />
		</v-card-actions>
	</v-card>
</template>

<script>
import { extension, getLocale, storage } from '../../scripts/util';
import IconBox from '../icons/box.svg';
import IconLink from '../icons/link.svg';
import IconRefresh from '../icons/refresh.svg';
import IconTrash from '../icons/trash.svg';

export default {
	props: {
		extension: {
			type: Object,
			required: true,
			default: extension.template,
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
		getLocale: (text) => getLocale(text),
		getToolbarColor() {
			if (this.storage.isDarkTheme) {
				return this.extension.enabled ? 'secondary py-3' : 'accent py-3';
			} else {
				return this.extension.enabled ? 'primary py-3' : 'white py-3';
			}
		},
		async reloadExtension(extensionName) {
			await extension.reload(extensionName);
			this.$snackbar(`Reloaded: ${extensionName}`, 'success');
		},
		async removeExtension(extensionName) {
			await extension.remove(extensionName);
			this.$snackbar(`Removed: ${extensionName}`, 'success');
		},
		async toggleExtension(extensionName) {
			extension.toggle(extensionName);
		},
	},
};
</script>
