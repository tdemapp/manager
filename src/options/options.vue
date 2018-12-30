<template>
	<v-app>
		<AppToolbar />

		<v-content>
			<v-container fluid>
				<v-layout row wrap>
					<v-flex xs12 sm12 md6 lg3 xl3 v-for="(item, i) in extensionsStorage" :key="i">
						<ExtensionCard
							:name="item.name"
							:version="item.version"
							:description="item.description"
							:isEnabled="item.enabled"
						/>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import * as util from '../js/util';
import AppToolbar from './components/AppToolbar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
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
