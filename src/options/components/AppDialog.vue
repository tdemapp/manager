<template>
	<section>
		<!-- Sidebar Button -->
		<v-list-tile ripple @click="dialog = true">
			<v-list-tile-action> <slot name="icon" /> </v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title class="spacedLetters text-uppercase" v-html="name" />
			</v-list-tile-content>
		</v-list-tile>

		<!-- Dialog Content -->
		<v-dialog v-model="dialog" :max-width="width">
			<v-card>
				<v-toolbar flat dark tabs color="grey darken-4">
					<slot name="icon" />

					<v-card-title
						class="dialogTitle spacedLetters text-uppercase font-weight-thin ml-2"
						v-html="name"
					/>
					<v-spacer />
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat class="squareCorners" @click="dialog = false">
							<IconClose />
						</v-btn>
					</v-toolbar-items>
				</v-toolbar>

				<v-card-text> <slot name="content" /> </v-card-text>
			</v-card>
		</v-dialog>
	</section>
</template>

<script>
import IconClose from '../icons/x.svg';

export default {
	components: {
		IconClose,
	},
	props: {
		name: {
			type: String,
			default: 'Title',
			required: true,
		},
		width: {
			type: Number,
			default: 440,
			required: false,
		},
	},
	data() {
		return {
			dialog: null,
		};
	},
};
</script>
