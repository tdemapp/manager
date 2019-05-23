<template>
	<v-app :dark="storage.isDarkTheme">
		<Sidebar v-animate-css="storage.doAnimations ? 'slideInLeft' : null" :storage="storage" />

		<!-- <Notification
			:infinite="true"
			text="A new version of TDEM has been installed"
			icon="download"
			bgColor="grey darken-4"
			iconColor="white"
    />-->

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
import { devLog, storage, defaultStorage } from '../scripts/util';
import extensionTemplate from '../scripts/template';
import Notification from './components/App/Notification.vue';
import Sidebar from './components/App/Sidebar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
		Notification,
		Sidebar,
		ExtensionCard,
	},
	data() {
		return {
			storage: defaultStorage,
		};
	},
	created() {
		storage.subscribe((data) => {
			this.storage = data;

			if (this.storage.extensions.length === 0) {
				let newSettings = data;
				newSettings.extensions.push(extensionTemplate);
				storage.set(newSettings, () => {
					devLog('✨ Added template extension');
				});
			}

			devLog('🔨 Debug Mode Enabled');
			devLog(this.storage);
		}, true);
	},
};
</script>
