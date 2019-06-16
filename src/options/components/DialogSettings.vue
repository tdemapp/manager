<template>
  <Dialog
    :name="getLocale('dashboard_dialog_settings_title')"
    :width="740"
    :storage="storage"
  >
    <IconSettings slot="icon" />

    <template slot="content">
      <v-layout
        align-left
        justify-left
        row
        wrap
        class="ml-4"
      >
        <v-flex xs4>
          <v-switch
            v-model="storage.doAnimations"
            class="body-2 spacedLetters text-uppercase"
            :color="storage.isDarkTheme ? 'white' : 'secondary'"
            :label="getLocale('dashboard_dialog_settings_animations')"
            @click="toggleSetting('doAnimations')"
          />
        </v-flex>
        <v-flex xs4>
          <v-switch
            v-model="storage.isDarkTheme"
            class="body-2 spacedLetters text-uppercase"
            :color="storage.isDarkTheme ? 'white' : 'secondary'"
            :label="getLocale('dashboard_dialog_settings_dark_theme')"
            @click="toggleSetting('isDarkTheme')"
          />
        </v-flex>
        <v-flex xs4>
          <v-switch
            v-model="storage.debugMode"
            class="body-2 spacedLetters text-uppercase"
            :color="storage.isDarkTheme ? 'white' : 'secondary'"
            :label="getLocale('dashboard_dialog_settings_debug_mode')"
            @click="toggleSetting('debugMode')"
          />
        </v-flex>
      </v-layout>
    </template>
  </Dialog>
</template>

<script>
import { getExtensionVersion, getLocale, storage } from '../../scripts/util';

import Dialog from './AppDialog.vue';
import IconSettings from '../icons/settings.svg';

export default {
	components: {
		Dialog,
		IconSettings,
	},
	props: {
		storage: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getLocale: (text) => getLocale(text),
		toggleSetting: (name) => storage.toggleSetting(name),
	},
};
</script>
