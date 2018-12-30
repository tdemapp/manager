<template>
	<section>
		<v-toolbar flat dark class="transparent mt-3">
			<!-- Store Dialog -->
			<DialogStore />

			<!-- Search Input -->
			<v-text-field
				light
				solo
				label="Search"
				class="mr-2 ml-2 mt-3 elevation-0"
				color="grey darken-4"
				:append-icon="$vuetify.icons.search"
			/>

			<!-- Settings Dialog -->
			<DialogSettings />

			<!-- Into Dialog -->
			<DialogInfo />
			
		</v-toolbar>
	</section>
</template>

<script>
import DialogInfo from './DialogInfo.vue'
import DialogSettings from './DialogSettings.vue'
import DialogStore from './DialogStore.vue'
import * as util from '../../js/util';

export default {
	components: {
		DialogInfo,
		DialogSettings,
		DialogStore
	},
	data() {
		return {
			searchInput: null,
		};
	},
	methods: {
		getLocale(text) {
			return util.getLocale(text);
		},
	},
};
</script>
