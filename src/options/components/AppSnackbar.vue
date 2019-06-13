<template>
	<v-snackbar
		top
		right
		multi-line
		v-model="active"
		class="snackbar"
		:color="color.background"
		@click="active = false"
	>
		<IconDownload v-if="icon === 'download'" :class="`mr-4 ${color.icon}--text`" />
		<IconError v-else-if="icon === 'error'" :class="`mr-4 ${color.icon}--text`" />
		<IconSuccess v-else-if="icon === 'success'" :class="`mr-4 ${color.icon}--text`" />
		<IconInfo v-else :class="`mr-4 ${color.icon}--text`" />

		<span :class="`text-uppercase spacedLetters ${color.text}--text`" v-text="text" />
	</v-snackbar>
</template>

<script>
import IconDownload from '../icons/download.svg';
import IconError from '../icons/error.svg';
import IconInfo from '../icons/info.svg';
import IconSuccess from '../icons/success.svg';

export default {
	components: {
		IconDownload,
		IconError,
		IconInfo,
		IconSuccess,
	},
	props: {
		color: {
			type: Object,
			default: () => {
				return {
					background: 'primary',
					icon: 'white',
					text: 'white',
				};
			},
		},
		icon: {
			type: String,
			required: true,
			default: 'info',
		},
		text: {
			type: String,
			required: true,
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
};
</script>
