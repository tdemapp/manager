<template>
	<v-dialog app persistent v-model="dialogState" max-width="480">
		<v-card>
			<v-card-title class="pb-0 grey darken-4">
				<v-spacer />
				<v-icon v-html="$vuetify.icons.warning" size="128" color="white" />
				<v-spacer />
			</v-card-title>
			<v-card-title class="pt-0 grey darken-4">
				<v-spacer />
				<h1
					class="headline spacedLetters upperCase boldTitle ma-2 white--text"
					v-html="getLocale('dashboard_dialog_install_warning_title')"
				/>
				<v-spacer />
			</v-card-title>
			<v-card-text class="pb-2">
				<h4
					class="body-2 pa-2"
					v-html="getLocale('dashboard_dialog_install_warning_text')"
				/>
			</v-card-text>
			<v-card-actions>
				<v-btn flat large block @click="acceptWarning()">
					<v-icon left v-html="$vuetify.icons.tick" />
					<span
						class="spacedLetters"
						v-html="getLocale('dashboard_dialog_install_warning_agree')"
					/>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import * as util from '../../js/util';

export default {
	created() {
		util.storage.getSync((storage) => {
			this.dialogState = !storage.settings.acceptedTheDangers;
		});
	},
	data() {
		return {
			dialogState: util.storage.getSync((storage) => !storage.settings.acceptedTheDangers),
		};
	},
	methods: {
		getLocale(text) {
			return util.getLocale(text);
		},
		acceptWarning() {
			// TODO: State gets reset to default after 2nd page refresh. Fix this.
			// Set storage `acceptedTheDangers` to true
			util.storage.setSync({
				settings: {
					acceptedTheDangers: true,
				},
			});

			// Close warning dialog
			this.dialogState = false;
		},
	},
};
</script>
