<template>
    <section>
        <v-fab-transition>
            <v-btn icon fab fixed bottom right dark class='ma-4 defaultShadow' color='grey darken-4' @click='dialogAddExtension = true'>
                <v-icon v-html='$vuetify.icons.add' />
            </v-btn>
        </v-fab-transition>

        <v-dialog v-model='dialogAddExtension' max-width='640' >
            <v-card>
            <v-toolbar flat dark tabs color='grey darken-4' class='pr-0'>
                <v-icon v-html='$vuetify.icons.add' />
                <v-card-title class='headline spacedLetters upperCase' v-html='getMessage("dashboardDialogTitleAdd")' />
                <v-spacer />
                <v-toolbar-items class='hidden-sm-and-down'>
                    <v-btn flat class='squareCorners' @click='dialogAddExtension = false'>
                        <v-icon v-html='$vuetify.icons.x' />
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
                <v-layout row wrap>
                <v-flex xs9>
                    <v-text-field v-model='gistID' color='grey darken-4' label='Gist ID' placeholder='1e1209f905603e1b2b77997e500df40e' />
                </v-flex>
                <v-flex xs2>
                    <v-btn flat large color='grey darken-4' @click='addExtension(gistID)'>
                    <v-icon left v-html='$vuetify.icons.add' />
                    <span class='spacedLetters'>Add</span>
                    </v-btn>
                </v-flex>
                </v-layout>
            </v-card-text>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
import * as util from '~/js/util';

export default {
	data() {
		return {
			dialogAddExtension: false,
			gistID: null
		};
	},
	methods: {
		addExtension(url) {
			if (!util.addExtension(url)) {
				this.dialog = false;
			}
		},
		getMessage(text) {
			return util.getMessage('dashboardDialogTitleAdd');
		}
	}
};
</script>
