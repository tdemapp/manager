import $ from 'jquery';
import domify from 'domify';
import { getExtensionUrl, storage, getIsDev as isDev } from './util';
import tde from 'tde';
import template from './template';

/*
 * Injects API into TweetDeck
 */
function injectAPI() {
	try {
		storage.get((storage) => {
			storage.extensions.forEach((extension) => {
				tde.add(extension, extension.isEnabled, extension.isInit);
			});
		});

		tde.init();
	} catch (e) {
		throw new Error(`⚠️ Error loading TDEM api | ${e}`);
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
		<a class='tdem-dashboard-btn js-header-action link-clean cf app-nav-link padding-h--16 padding-v--2 with-nav-border-t' data-title='TDEM Dashboard'>
			<div class='obj-left margin-l--2'>
				<i class='icon icon-tdem icon-medium'></i>
			</div>
			<div class='nbfc padding-ts hide-condensed txt-size--14 txt-bold app-nav-link-text'>TDEM</div>
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
	} finally {
		isDev() ? console.log("✅ Successfully injected items") : null;
	}
}

injectAPI();
injectButton();
