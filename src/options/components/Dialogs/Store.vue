<template>
	<Dialog :name="getLocale('dashboard_dialog_store_title')" :scrollable="true">
		<IconStore slot="icon" />

		<template slot="content">
			<v-list
				subheader
				:dark="$store.state.settings.display.darkTheme"
				:style="
					$store.state.settings.display.darkTheme
						? 'background-color: #262626 !important;'
						: null
				"
			>
				<template v-for="(item, tile, i) in storeExtensions">
					<v-list-tile :key="tile">
						<v-list-tile-content>
							<v-list-tile-title
								class="caption spacedLetters text-uppercase"
								v-html="item.title"
							/>
						</v-list-tile-content>

						<v-list-tile-action>
							<v-btn flat large icon :href="item.href"> <IconLink /> </v-btn>
						</v-list-tile-action>
						<v-list-tile-action>
							<v-btn flat large icon @click="downloadExtension(item.extensionName)">
								<IconDownload />
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>

					<v-divider class="my-2" :key="i" />
				</template>
			</v-list>
		</template>
	</Dialog>
</template>

<script>
import { getExtensionVersion, getLocale } from '../../../scripts/util';

import Dialog from '../App/Dialog.vue';

import IconDownload from '../../icons/download.svg';
import IconStore from '../../icons/store.svg';
import IconLink from '../../icons/link.svg';

export default {
	components: {
		Dialog,
		IconDownload,
		IconLink,
		IconStore,
	},
	data() {
		return {
			storeExtensions: [
				{ title: 'Emoji Picker', href: 'https://tdem.app' },
				{ title: 'Gif Picker', href: 'https://tdem.app' },
				{ title: 'Embedded Thumbnails', href: 'https://tdem.app' },
				{ title: 'Custom CSS', href: 'https://tdem.app' },
			],
		};
	},
	methods: {
		getLocale(text) {
			return getLocale(text);
		},
	},
};
</script>
