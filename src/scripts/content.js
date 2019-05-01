import domify from 'domify';
import tde from 'tde';

import { getExtensionUrl, storage, getIsDev } from './util';
import template from './template';

const isDev = getIsDev();

const dashboardButtonIcon = `
	<style type='text/css'>
		.icon-tdem:before { 
			content: '\\F400';
		}
	</style>
`;

const dashboardButton = `
	<a class='tdem-dashboard-btn js-header-action link-clean cf app-nav-link padding-h--16 padding-v--2 with-nav-border-t' data-title='TDEM Dashboard'>
		<div class='obj-left margin-l--2'>
			<i class='icon icon-tdem icon-medium'></i>
		</div>
		<div class='nbfc padding-ts hide-condensed txt-size--14 txt-bold app-nav-link-text'>TDEM</div>
	</a>
`;

/*
 * Initialize TDEM
 */
function init() {
	if (isDev) { console.log('🛠️ TDEM Initializing...'); }

	try {
		injectButtons();
		injectAPI();
	} catch (err) {
		console.error(`⚠️ Error Initializing TDEM | ${err}`);
	} finally {
		if (isDev) { console.log('✨ TDEM Successfully Initialized!'); }
	}
}

const injectButtons = () => {
	try {
		// Inject dashboard button icon
		document.head.appendChild(domify(dashboardButtonIcon));

		// Inject dashboard button
		document.querySelector('.app-navigator').insertAdjacentHTML('afterbegin', dashboardButton);

		// Inject URL to open dashboard
		document.querySelector('.tdem-dashboard-btn').addEventListener('click', (e) => {
			e.preventDefault();
			console.log(getExtensionUrl('options/options.html'));
			window.open(getExtensionUrl('options/options.html'));
		});
	} catch (err) {
		throw new Error(`⚠️ Error injecting buttons | ${err}`);
	} finally {
		if (isDev) { console.log('✅ Successfully injected buttons'); }
	}
}

// Inject API script
const injectAPI = () => {
	try {
		storage.get((storage) => {
			storage.extensions.forEach((extension) => {
				tde.add(extension, extension.isEnabled, extension.isInit);
			});
		});

		tde.add(template);
		tde.enable('myExtension', true);
		tde.init();
	} catch (err) {
		throw new Error(`⚠️ Error loading API | ${err}`);
	} finally {
		if (isDev) { console.log('✅ Successfully loaded API'); }
	}
};

init();
