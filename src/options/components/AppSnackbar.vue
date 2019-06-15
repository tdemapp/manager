<template>
	<v-snackbar
		top
		right
		multi-line
		:color="color"
		@click="close"
		v-model="active"
		class="snackbar"
	>
		<IconInfo v-if="color === 'info'" :class="`mr-4 white--text`" />
		<IconError v-else-if="color === 'error'" :class="`mr-4 white--text`" />
		<IconSuccess v-else-if="color === 'success'" :class="`mr-4 white--text`" />

		<span :class="`text-uppercase spacedLetters white--text`" v-text="text" />
	</v-snackbar>
</template>

<script>
import IconError from '../icons/error.svg';
import IconInfo from '../icons/info.svg';
import IconSuccess from '../icons/success.svg';

export default {
	components: {
		IconError,
		IconInfo,
		IconSuccess,
	},
	props: {
		color: {
			type: String,
			default: 'info'
		},
		text: {
			type: String,
		},
	},
	data() {
		return {
			active: false,
		};
	},
	mounted() {
		this.$nextTick(() => (this.active = true));
	},
	watch: {
		active(isActive, wasActive) {
			this.$emit('statusChange', isActive, wasActive);
		},
	},
	methods: {
		show() {
			this.active = true
		},
		close() {
			this.active = false
		},
		dismiss() {
			if (this.dismissable) {
				this.close()
			}
		},
	}
};
</script>
