<template>
	<section>
		<!-- Sidebar Button -->
		<v-list-tile
			ripple
			@click="dialog = true"
			v-shortkey="['s']"
			@shortkey="dialog = true"
		>
			<v-list-tile-action>
				<v-icon v-html="$vuetify.icons.search" />
			</v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title class="spacedLetters" v-html="getLocale('dashboard_dialog_search_title')" />
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="940">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<v-icon v-html="$vuetify.icons.search" />
					<v-card-title
						class="headline spacedLetters text-uppercase ml-2"
						v-html="getLocale('dashboard_dialog_search_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<!-- TODO: Add way to search through extensions repo -->
				</v-card-text>
			</v-card>
		</v-dialog>
	</section>
</template>

<script>
import { getLocale } from '../../js/util';

export default {
	data() {
		return {
			dialog: false,
			searchInput: null,
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
