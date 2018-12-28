<template>
	<v-app>
		<Toolbar />

		<v-content>
			<v-container fluid>
				<v-layout row wrap>
					<v-flex xs12 sm12 md6 lg3 xl3 v-for="(item, i) in extensionsStorage" :key="i">
						<Extension
							:name="item.name"
							:version="item.version"
							:description="item.description"
							:isEnabled="item.enabled"
						/>
					</v-flex>
				</v-layout>
			</v-container>

			<AddBtn />
		</v-content>
	</v-app>
</template>

<script>
import * as util from '../js/util';
import AddBtn from './components/addBtn.vue';
import Extension from './components/extension.vue';
import Toolbar from './components/toolbar.vue';

export default {
	components: {
		AddBtn,
		Extension,
		Toolbar,
	},
	data() {
		return {
			extensionsStorage: this.updateExtensions(),
		};
	},
	created() {
		this.updateExtensions();
	},
	methods: {
		updateExtensions() {
			util.storage.getLocal((storage) => {
				this.extensionsStorage = storage.extensions;
			});
		},
	},
};
</script>
