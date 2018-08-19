<template>
  <v-toolbar app fixed flat dark color='primary' class='pt-2 pb-1 toolbarGradient'>
    <v-toolbar-title class='white--text'>
      <span class='headline' v-html='extensionName' />
      <small class='caption' v-html='extensionVersion' />
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
import * as util from '../../js/util';
import DialogInfo from './dialogInfo';
import DialogSettings from './dialogSettings';

export default {
	components: {
		DialogInfo,
		DialogSettings
	},
	data() {
		return {
			extensionName: util.getExtensionName(),
			extensionVersion: `v${util.getExtensionVersion()}`,
			searchBarText: util.getMessage('dashboardSearchBarText')
		};
	}
};
</script>
