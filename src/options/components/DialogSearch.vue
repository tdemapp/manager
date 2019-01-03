<template>
	<section>
		<!-- Toolbar Search Input Field -->
		<v-text-field
			light
			solo
			label="Search"
			class="mr-2 ml-2 mt-3 elevation-0"
			color="grey darken-4"
			v-model="searchInput"
			:append-icon="$vuetify.icons.search"
			@click:append="dialog = true"
			v-shortkey="['s']"
			@shortkey="dialog = true"
		/>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" max-width="640">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<v-icon v-html="$vuetify.icons.search" />
					<v-card-title
						class="headline spacedLetters upperCase ml-2"
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
