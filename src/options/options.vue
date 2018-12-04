<template>
    <v-app>
		<Toolbar />

		<v-content>
			<v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6 lg3 xl3 v-for='(item, i) in extensionsStorage' :key='i'>
						<Extension :name='item.name' :version='item.version' :description='item.description' :isEnabled='item.enabled' />
                    </v-flex>
                </v-layout>
            </v-container>
		</v-content>
    </v-app>
</template>

<script>
import * as util from '~/js/util';
import Extension from './components/extension';
import Toolbar from './components/toolbar.vue';

export default {
	components: {
		Extension,
		Toolbar
	},
	data() {
		return {
			extensionsStorage: this.updateExtensions()
		};
	},
	created() {
		this.updateExtensions();
	},
	methods: {
		updateExtensions() {
			util.storage.get((storage) => {
				this.extensionsStorage = storage.extensions;
			});
		}
	}
};
</script>
