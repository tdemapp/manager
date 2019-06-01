<template>
	<v-snackbar top right multi-line :color="color.background" v-model="active">
		<IconDownload v-if="icon === 'download'" :class="`mr-4 ${color.icon}--text`" />
		<IconError v-else-if="icon === 'error'" :class="`mr-4 ${color.icon}--text`" />
		<IconSuccess v-else-if="icon === 'success'" :class="`mr-4 ${color.icon}--text`" />
		<IconInfo v-else :class="`mr-4 ${color.icon}--text`" />

		<span :class="`text-uppercase spacedLetters ${color.text}--text`" v-text="text" />

		<v-btn flat large :color="color.icon" @click="active = false">
			<IconClose />
		</v-btn>
	</v-snackbar>
</template>

<script>
import IconClose from '../../icons/x.svg';
import IconDownload from '../../icons/download.svg';
import IconError from '../../icons/error.svg';
import IconInfo from '../../icons/info.svg';
import IconSuccess from '../../icons/success.svg';

export default {
	components: {
		IconClose,
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
	data: () => ({
		active: false,
	}),
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
