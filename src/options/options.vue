<template>
	<v-app :dark="storage.isDarkTheme">
		<AppSidebar v-animate-css="storage.doAnimations ? 'slideInLeft' : null" :storage="storage" />

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
						<CardExtension
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
import { extension, devLog, storage } from '../scripts/util';
import AppSidebar from './components/AppSidebar.vue';
import CardExtension from './components/CardExtension.vue';

export default {
	components: {
		AppSidebar,
		CardExtension,
	},
	data() {
		return {
			storage: storage.template,
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
