<template>
    <section>
        <!-- Toolbar Button -->
        <v-btn
            flat
            large
            light
            @click="dialog = true"
            v-shortkey="['a']"
            @shortkey="dialog = true"
            class="mt-3 ml-2"
        >
            <v-icon left v-html="$vuetify.icons.store" />
            <span v-html="getLocale('dashboard_dialog_store_title')" />
        </v-btn>

        <!-- Dialog Content -->
        <v-dialog v-model="dialog" max-width="940">
            <v-card>
                <v-toolbar flat dark color="grey darken-4">
                    <v-icon v-html="$vuetify.icons.store" />
                    <v-card-title
                        class="headline spacedLetters upperCase ml-2"
                        v-html="getLocale('dashboard_dialog_store_title')"
                    />
                    <v-spacer />
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat class="squareCorners" @click="dialog = false">
                            <v-icon v-html="$vuetify.icons.x" />
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-card-text>
                    <!-- TODO: Add list of extensions to quick install from GitHub extensions repo -->
                </v-card-text>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
import * as util from '../../js/util';

export default {
    data () {
        return {
            dialog: false
        }
    },
    methods: {
		getLocale(text) {
			return util.getLocale(text);
		},
	},
}
</script>
