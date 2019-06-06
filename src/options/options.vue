<template>
	<v-app :dark="storage.isDarkTheme">
		<Sidebar v-animate-css="storage.doAnimations ? 'slideInLeft' : null" :storage="storage" />

		<v-content>
			<v-container fluid>
				<v-layout align-start justify-start row wrap fill-height>
					<v-flex
						xs12
						sm12
						md6
						lg3
						xl3
						v-for="(extension, i) in storage.extensions"
						:key="i"
					>
						<ExtensionCard
							v-animate-css="storage.doAnimations ? 'fadeInUp' : null"
							:extension="extension"
							:storage="storage"
						/>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import { defaultStorage, extension, devLog, storage } from '../scripts/util';
import Sidebar from './components/App/Sidebar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
		Sidebar,
		ExtensionCard,
	},
	data() {
		return {
			storage: defaultStorage,
		};
	},
	created() {
		devLog('🔨 Debug Mode Enabled');

		storage.subscribe((data) => {
			this.storage = data;
			devLog(data);
		}, true);
	},
};
</script>
