<template>
	<v-app :dark="storage.isDarkTheme">
		<AppSidebar
			v-animate-css="storage.doAnimations ? 'slideInLeft' : null"
			:storage="storage"
		/>

		<v-content>
			<v-container fluid>
				<v-layout align-start justify-start row wrap fill-height>
					<v-flex
						xs12
						sm6
						md4
						lg4
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
import { extension, log, storage } from '../scripts/util';
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
		log.info('🔨 Debug Mode Enabled');

		storage.subscribe((data) => {
			this.storage = data;
			log.info(data);
		}, true);
	},
};
</script>
