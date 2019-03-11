<template>
	<v-app :dark="$store.state.settings.isDarkTheme">
		<AppSidebar />

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
					<v-flex
						xs12
						sm12
						md6
						lg3
						xl3
						v-for="(item, i) in $store.state.extensions"
						:key="i"
					>
						<ExtensionCard :extension="item" />
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import { storage } from '../js/util';
import AppNotification from './components/AppNotification.vue';
import AppSidebar from './components/AppSidebar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
		AppNotification,
		AppSidebar,
		ExtensionCard,
	},
	created() {
		this.$store.commit('getExtensionStorage');
	},
};
</script>
