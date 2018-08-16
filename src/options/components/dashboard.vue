<template>
    <v-app>
        <Toolbar />
        
        <v-content>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 xl3 v-for='(item, i) in extensionsList' :key='i'>
                        <CardExtension :name='item.name' :version='item.version' :description='item.description' />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <DialogAddExtension />
    </v-app>
</template>

<script>
import Extensions from '../../js/extensions';
import CardExtension from './cardExtension';
import DialogAddExtension from './dialogAddExtension';
import Toolbar from './toolbar.vue';

export default {
	components: {
        CardExtension,
		DialogAddExtension,
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
