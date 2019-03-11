<template>
	<div>
		<!-- Sidebar Button -->
		<v-list-tile ripple @click="dialog = true">
			<v-list-tile-action> <IconStore /> </v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title
					class="spacedLetters"
					v-html="getLocale('dashboard_dialog_store_title')"
				/>
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="940">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<IconStore />
					<v-card-title
						class="headline spacedLetters text-uppercase ml-2"
						v-html="getLocale('dashboard_dialog_store_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<IconClose />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<!-- TODO: Add list of extensions to quick install from GitHub extensions repo -->
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { getLocale } from '../../js/util';
import IconClose from '../icons/x.svg';
import IconStore from '../icons/store.svg';

export default {
	components: {
		IconClose,
		IconStore,
	},
	data() {
		return {
			dialog: false,
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
