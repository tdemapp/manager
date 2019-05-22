<template>
	<v-app :dark="storage.settings.display.darkTheme">
		<Sidebar
			:storage="storage"
			v-animate-css="storage.settings.display.animations ? 'slideInLeft' : null"
		/>

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
							v-animate-css="storage.settings.display.animations ? 'fadeInUp' : null"
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
import { devLog, storage } from '../scripts/util';
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
			storage: {},
		};
	},
	created() {
		storage.subscribe((storage) => {
			this.storage = storage;
		}, true);

		storage.set({
			extensions: [extensionTemplate]
		});

		devLog('🔨 Debug Mode Enabled');
		storage.get((data) => {
			devLog(data);
		});
	},
};
</script>
