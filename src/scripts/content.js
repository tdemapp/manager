import domify from 'domify';
import tde from '@tdemapp/interface';

import { getExtensionUrl, log, storage } from './util';

// Hacky way of injecting the button, but it works for now
const injectSelector =
	'body > div.application.js-app.is-condensed > header > div > nav > div > div.js-dropdown-content > ul > li:nth-child(2)';

const dashboardButton = `
	<li class="drp-h-divider"></li>
	<li class="is-selectable">
		<a href="https://twitter.com/i/tweetdeck_release_notes" rel="url noopener noreferrer" class="tdem-dashboard-btn dropdown-menu-url-item" target="_blank">TDEM</a>
	</li>
`;

// Initialize TDEM
function init() {
	log.info('🛠️ TDEM Initializing...');

	try {
		injectAPI();
		// injectButtons();
	} catch (err) {
		log.error(`⚠️ Error Initializing TDEM | ${err}`);
	}
}

// Inject manager shortcut into TweetDeck
const injectButtons = () => {
	try {
		// Inject dashboard button
		document
			.querySelector(injectSelector)
			.insertAdjacentHTML('afterend', domify(dashboardButton));

		// Inject URL to open dashboard
		document.querySelector('.tdem-dashboard-btn').addEventListener('click', (e) => {
			e.preventDefault();
			log.info(getExtensionUrl('options/options.html'));
			window.open(getExtensionUrl('options/options.html'));
		});
	} catch (err) {
		throw new Error(`⚠️ Error injecting buttons | ${err}`);
	}
};

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
