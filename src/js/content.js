import $ from 'jquery';
import domify from 'domify';
import { getExtensionUrl, getLocale } from './util';

/*
 * Initialize TDEM
 */
function initContent() {
	console.log('🛠️ TDEM Initializing...');

	try {
		injectButton();
		console.log('✨ TDEM Successfully Initialized!');
	} catch (e) {
		throw new Error(`⚠️ Error Initializing TDEM | ${e}`);
	}
}

/*
 * Injects new button at top of sidebar footer items
 */
function injectButton() {
	// Style element to add custom icon
	const dashboardButtonIcon = `
		<style type='text/css'>
			.icon-tdem:before { 
				content: '\\F400';
			}
		</style>
	`;

	// Button to inject to sidebar nav
	const dashboardButton = `
		<a class='tdem-dashboard-btn js-header-action link-clean cf app-nav-link padding-h--16 padding-v--2 txt-bold with-nav-border-t' data-title='${getLocale('appShortName')}'>
			<div class='obj-left margin-l--2'>
				<i class='icon icon-tdem icon-medium'></i>
			</div>
			<div class='nbfc padding-ts hide-condensed txt-size--16'>${getLocale('appShortName')}</div>
		</a>
	`;

	try {
		// Inject custom icon style element in head tag
		$('head').append(domify(dashboardButtonIcon));

		// Inject button at top of sidebar nav footer items
		$('nav.app-navigator').prepend(domify(dashboardButton));

		// Open dashbord when button is clicked
		$('.tdem-dashboard-btn').bind('click', (e) => {
			e.preventDefault();
			window.open(getExtensionUrl('options/options.html'));
		});
	} catch (e) {
		throw new Error(`⚠️ Error Injecting TDEM | ${e}`);
	}
}

initContent();
