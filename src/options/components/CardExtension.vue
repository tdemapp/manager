<template>
	<v-card
		:class="`ma-2 defaultShadow ${storage.doAnimations ? 'extensionCardHover' : null}`"
		:color="storage.isDarkTheme ? 'secondary' : 'white'"
	>
		<v-toolbar flat :class="`${extension.enabled ? 'black' : 'secondary'} py-3`">
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
				@click="removeExtension(extension.name)"
				:color="extension.enabled ? 'error' : 'grey'"
			>
				<IconTrash />
			</v-btn>
			<v-spacer />
		</v-card-actions>
	</v-card>
</template>

<script>
import { extension, getLocale, log, storage } from '../../scripts/util';
import IconBox from '../icons/box.svg';
import IconLink from '../icons/link.svg';
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
		IconTrash,
	},
	methods: {
		getLocale: (text) => getLocale(text),
		async removeExtension(extensionName) {
			try {
				await extension.remove(extensionName);
				this.$snackbar.success(`Removed: ${extensionName}`);
			} catch (err) {
				this.$snackbar.error(err);
				log.error(err);
			}
		},
		async toggleExtension(extensionName) {
			try {
				await extension.toggle(extensionName);
			} catch (err) {
				this.$snackbar.error(err);
				log.error(err);
			}
		},
	},
};
</script>
