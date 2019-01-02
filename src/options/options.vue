<template>
	<v-app>
		<AppToolbar />

		<!-- <AppNotification
			:infinite="true"
			text="A new version of TDEM has been installed"
			icon="download"
			bgColor="grey darken-4"
			iconColor="white"
		/> -->

		<v-content>
			<v-container fluid>
				<v-layout row wrap>
					<v-flex xs12 sm12 md6 lg3 xl3 v-for="(item, i) in extensionsStorage" :key="i">
						<ExtensionCard :extension="item" />
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import * as util from '../js/util';
import AppNotification from './components/AppNotification.vue';
import AppToolbar from './components/AppToolbar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
		AppNotification,
		AppToolbar,
		ExtensionCard,
	},
	data() {
		return {
			extensionsStorage: this.updateExtensions(),
		};
	},
	created() {
		this.updateExtensions();
	},
	methods: {
		updateExtensions() {
			util.storage.getLocal((storage) => {
				this.extensionsStorage = storage.extensions;
			});
		},
	},
};
</script>
