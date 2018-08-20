import * as util from './util';

/* 
 * Initialize TDEM JS to inject into TweetDeck
 */
function initInject() {
	try {
		injectButton();
	} catch (e) {
		throw new Error(`⚠️ Error Injecting Into TweetDeck | ${e}`);
	}
}

/* 
 * Injects new button at top of sidebar footer items
 */
function injectButton() {
	// Style element to add custom icon
	const dashboardButtonIcon = `
		<style type='text/css'>.icon-tdem:before { content: '\\F400'; }</style>
	`;

	// Button to inject to sidebar nav
	const dashboardButton = `
    <a class='tdem-dashboard-btn js-header-action link-clean cf app-nav-link padding-h--10 with-nav-border-t' data-title='TDEM Dashboard'>
      <div class='obj-left margin-l--2'>
        <i class='icon icon-tdem icon-medium'></i>
      </div>
      <div class='nbfc padding-ts hide-condensed txt-size--16'>Extension Manager</div>
    </a>
	`;

	// Inject custom icon style element in head tag
	$('head').append(dashboardButtonIcon);

	// Inject button at top of sidebar nav footer items
	$('nav.app-navigator').prepend(dashboardButton);

	// Open dashbord when button is clicked
	$('.tdem-dashboard-btn').bind('click', (e) => {
		e.preventDefault();
		window.open(util.getExtensionUrl('options/options.html'));
	});
}

initInject();
