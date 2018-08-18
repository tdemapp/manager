<template>
    <v-app>
        <Toolbar />
        
        <v-content>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 xl3 v-for='(item, i) in 5' :key='i'>
                        <CardExtension :name='item.name' :version='item.version' :description='item.description' />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <DialogAddExtension />
    </v-app>
</template>

<script>
import CardExtension from './components/cardExtension';
import DialogAddExtension from './components/dialogAddExtension';
import Toolbar from './components/toolbar.vue';

export default {
	components: {
		CardExtension,
		DialogAddExtension,
		Toolbar
	}
};
</script>
