<template>
    <v-app>
		<Toolbar />

		<v-content>
			<v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6 lg3 xl3 v-for='(item, i) in extensionsStorage' :key='i'>
						<CardExtension :name='item.name' :version='item.version' :description='item.description' />
                    </v-flex>
                </v-layout>
            </v-container>
		</v-content>
    </v-app>
</template>

<script>
import * as util from '../js/util';
import CardExtension from './components/cardExtension';
import Toolbar from './components/toolbar.vue';

export default {
	components: {
		CardExtension,
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
