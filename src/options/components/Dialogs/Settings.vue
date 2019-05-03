<template>
    <Dialog :name="getLocale('dashboard_dialog_settings_title')" :width="740">
        <IconSettings slot="icon" />

        <template slot="content">
            <h1
                class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 mb-3"
                v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
            />

            <v-divider />

            <v-layout align-center justify-center row wrap class="ml-4">
                <v-flex xs4>
                    <v-switch
                        v-model="isDarkTheme"
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
                <v-flex xs4>
                    <v-switch
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
                <v-flex xs4>
                    <v-switch
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
            </v-layout>

            <h1
                class="dialogTitle spacedLetters text-uppercase boldTitle ma-2 my-3"
                v-html="getLocale('dashboard_dialog_settings_subtitle_display') + ':'"
            />

            <v-divider />

            <v-layout align-center justify-center row wrap class="ml-4">
                <v-flex xs4>
                    <v-switch
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
                <v-flex xs4>
                    <v-switch
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
                <v-flex xs4>
                    <v-switch
                        class="body-2 spacedLetters text-uppercase"
                        :color="isDarkTheme ? 'white' : 'secondary'"
                        label="Dark Theme"
                    />
                </v-flex>
            </v-layout>
        </template>
    </Dialog>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../../scripts/util';

import Dialog from '../App/Dialog.vue';
import IconSettings from '../../icons/settings.svg';

export default {
	components: {
		Dialog,
		IconSettings,
    },
    data () {
        return {
			isDarkTheme: this.$store.state.settings.isDarkTheme,
        }
    },
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>