import domify from 'domify';
import tde from 'tde';

import { getExtensionUrl, storage, devLog } from './util';

// Hacky way of injecting the button, but it works for now
const injectSelector =
	'body > div.application.js-app.is-condensed > header > div > nav > div > div.js-dropdown-content > ul > li:nth-child(2)';

const dashboardButton = `
	<li class="drp-h-divider"></li>
	<li class="is-selectable">
		<a href="https://twitter.com/i/tweetdeck_release_notes" rel="url noopener noreferrer" class="tdem-dashboard-btn dropdown-menu-url-item" target="_blank">TDEM</a>
	</li>
`;

/*
 * Initialize TDEM
 */
function init() {
	devLog('🛠️ TDEM Initializing...');

	try {
		injectAPI();
		// injectButtons();
	} catch (err) {
		console.error(`⚠️ Error Initializing TDEM | ${err}`);
	}
}

const injectButtons = () => {
	try {
		// Inject dashboard button
		document
			.querySelector(injectSelector)
			.insertAdjacentHTML('afterend', domify(dashboardButton));

		// Inject URL to open dashboard
		document.querySelector('.tdem-dashboard-btn').addEventListener('click', (e) => {
			e.preventDefault();
			devLog(getExtensionUrl('options/options.html'));
			window.open(getExtensionUrl('options/options.html'));
		});
	} catch (err) {
		throw new Error(`⚠️ Error injecting buttons | ${err}`);
	}
};

// Inject API script
const injectAPI = () => {
	try {
		devLog('🏗 Loading extensions...');
		storage.get((storage) => {
			storage.extensions.forEach((extension) => {
				devLog(extension);
				tde.add(extension, extension.enabled, extension.init);
			});
		});
	} catch (err) {
		throw new Error(`⚠️ Error loading API | ${err}`);
	}
};

init();
