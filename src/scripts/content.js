import tde from 'tde';

import { log, storage } from './util';

// Initialize TDEM
function init() {
	log.info('🛠️ TDEM Initializing...');

	try {
		injectAPI();
	} catch (err) {
		log.error(`⚠️ Error Initializing TDEM | ${err}`);
	}
}

// Inject Interface API
const injectAPI = () => {
	try {
		log.info('🏗 Loading extensions...');
		storage.get((storage) => {
			for (let i = 0; i < storage.extensions.length; i++) {
				tde.add(
					storage.extensions[i],
					storage.extensions[i].enabled,
					storage.extensions[i].init
				);
			}
		});
	} catch (err) {
		throw new Error(`⚠️ Error loading API | ${err}`);
	}
};

init();
