<template>
    <v-app>
        <v-content>
            <Toolbar />
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 xl3 v-for='(item, i) in extensionsList' :key='i'>
                        <ExtensionCard :name='item.name' :version='item.version' :description='item.description' />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Extensions from '../../js/extensions';
import ExtensionCard from './extensionCard';
import Toolbar from './toolbar.vue';

export default {
	components: {
		ExtensionCard,
		Toolbar
	},
	data() {
		return {
			extensionsList: Extensions
		};
	}
};
</script>

<style src='./options.css' />
