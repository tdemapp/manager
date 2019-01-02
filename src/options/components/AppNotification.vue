<template>
	<v-snackbar
		multi-line
		right
		top
		v-model="showSnackbar"
		:color="bgColor"
		:timeout="infinite ? 0 : '3500'"
	>
		<v-icon class="mr-3" :color="iconColor" v-html="'$vuetify.icons.' + icon" />
		<span class="upperCase spacedLetters" v-html="text" />
		<v-btn flat icon :color="iconColor" @click="showSnackbar = false">
			<v-icon v-html="$vuetify.icons.x" />
		</v-btn>
	</v-snackbar>
</template>

<script>
export default {
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
