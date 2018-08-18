import * as util from './util';

/* 
 * Injects style element at end of head to add custom TDEM icon
 */
function injectButtonIcon() {
	const dashboardButtonIcon = `
		<style type='text/css'>.icon-tdem:before { content: '\\F046'; }</style>
	`;
	$('head').append(dashboardButtonIcon);
}

/* 
 * Innjects new button at top of sidebar footer items
 */
function injectButton() {
	injectButtonIcon();

	// Button to inject to sidebar nav
	const dashboardButton = `
    <a class='tdem-dashboard-btn js-header-action link-clean cf app-nav-link padding-h--10 with-nav-border-t' data-title='TDEM Dashboard'>
      <div class='obj-left margin-l--2'>
        <i class='icon icon-tdem icon-medium'></i>
      </div>
      <div class='nbfc padding-ts hide-condensed txt-size--16'>Extension Manager</div>
    </a>
	`;

	// Inject button at top of sidebar nav footer items
	$('nav.app-navigator').prepend(dashboardButton);

	// Open dashbord when button is clicked
	$('.tdem-dashboard-btn').bind('click', (e) => {
		e.preventDefault();
		window.open(util.getExtensionUrl('options/options.html'));
	});
}

window.onload = () => {
	injectButton();
};
