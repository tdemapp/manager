<template>
	<v-app :dark="$store.state.settings.display.darkTheme">
		<Sidebar v-animate-css="$store.state.settings.display.animations ? 'slideInLeft' : null"/>

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
						v-for="(extensions, i) in $store.state.extensions"
						:key="i"
					>
						<ExtensionCard v-animate-css="$store.state.settings.display.animations ? 'fadeInUp' : null" :extension="extensions" />
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Notification from './components/App/Notification.vue';
import Sidebar from './components/App/Sidebar.vue';
import ExtensionCard from './components/ExtensionCard.vue';

export default {
	components: {
		Notification,
		Sidebar,
		ExtensionCard,
	},
	created() {
		this.$store.commit('getExtensionStorage');
	},
};
</script>
