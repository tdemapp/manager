<template>
    <section>
        <!-- Toolbar Button -->
        <v-btn
            flat
            large
            light
            @click="dialog = true"
            v-shortkey="[',']"
            @shortkey="dialog = true"
            class="mt-3 mr-4"
        >
            <v-icon left v-html="$vuetify.icons.settings" />
            <span v-html="getLocale('dashboard_dialog_settings_title')" />
        </v-btn>

        <!-- Dialog Content -->
        <v-dialog v-model="dialog" max-width="640">
			<v-card>
				<v-toolbar flat dark color="grey darken-4">
					<v-icon v-html="$vuetify.icons.settings" />
					<v-card-title
						class="headline spacedLetters upperCase ml-2"
						v-html="getLocale('dashboard_dialog_settings_title')"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<v-icon v-html="$vuetify.icons.x" />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text>
					<h1
						class="headline spacedLetters upperCase boldTitle ma-2 mb-3"
						v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
					/>
					<v-divider />
					<v-layout align-center justify-center row fill-height>
						<v-flex xs4 class="mt-2 ml-4 mr-4">
							<span class="body-2 spacedLetters upperCase">Dark Theme</span>
						</v-flex>
						<v-flex xs2 class="mt-2 ml-4 mr-4">
							<v-switch class="mt-3" color="grey darken-4" />
						</v-flex>
						<v-flex xs4 class="mt-2 ml-4 mr-4">
							<span class="body-2 spacedLetters upperCase">Dark Theme</span>
						</v-flex>
						<v-flex xs2 class="mt-2 ml-4 mr-4">
							<v-switch class="mt-3" color="grey darken-4" />
						</v-flex>
					</v-layout>
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
