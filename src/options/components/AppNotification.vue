<template>
	<v-snackbar
		top
		right
		multi-line
		:color="bgColor"
		v-model="showSnackbar"
		:timeout="infinite ? 0 : '3500'"
	>
		<!-- TODO: Port v-icon to SVG icon component -->
		<!-- <v-icon class="mr-3" :color="iconColor" v-html="'$vuetify.icons.' + icon" /> -->
		<span class="text-uppercase spacedLetters" v-html="text" />
		<v-btn flat icon :color="iconColor" @click="showSnackbar = false">
			<IconClose />
		</v-btn>
	</v-snackbar>
</template>

<script>
import IconClose from '../icons/x.svg';

export default {
	components: {
		IconClose
	},
	props: {
		bgColor: {
			type: String,
			required: true,
			default: 'grey darken-4',
		},
		text: {
			type: String,
			required: true,
			default: 'Error: Text not provided...',
		},
		icon: {
			type: String,
			required: true,
			default: 'info',
		},
		iconColor: {
			type: String,
			required: true,
			default: 'white',
		},
		infinite: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	data() {
		return {
			showSnackbar: true,
		};
	},
};
</script>
