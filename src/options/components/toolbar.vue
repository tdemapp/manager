<template>
  <v-toolbar app fixed flat dark color='primary' class='pt-2 pb-1'>
    <v-toolbar-title class='white--text'>
      <span class='headline'>TDEM </span>
      <small class='caption' v-html='"v" + extensionVersion' />
    </v-toolbar-title>

    <v-spacer />

    <v-text-field solo-inverted class='mx-3' flat :label='searchBarText' :prepend-inner-icon='$vuetify.icons.search' />

    <v-spacer />

    <DialogInfo />

    <v-btn large icon target='_blank' href='https://github.com/nurodev/tdem'>
      <v-icon v-html='$vuetify.icons.github' />
    </v-btn>

    <DialogSettings />
  </v-toolbar>
</template>

<script>
import DialogInfo from './dialogInfo';
import DialogSettings from './dialogSettings';
import package from '../../../package.json';

export default {
	components: {
		DialogInfo,
		DialogSettings
	},
	data() {
		return {
      extensionVersion: package.version,
      searchBarText: chrome.i18n.getMessage('dashboardSearchBarText')
		};
	}
};
</script>
