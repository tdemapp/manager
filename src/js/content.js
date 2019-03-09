import { getExtensionUrl, getIsDev as isDev } from './util';

/*
 * Initialize TDEM
 */
function init() {
	isDev() ? console.log('🛠️ TDEM Initializing...') : null;

	try {
		inject();
	} catch (e) {
		throw new Error(`⚠️ Error Initializing TDEM | ${e}`);
	} finally {
		isDev() ? console.log('✨ TDEM Successfully Initialized!') : null;
	}
}

/*
 * Injects script element into TweetDeck
 */
function inject() {
	const script = document.createElement('script');

	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', getExtensionUrl('js/inject.js'));

	document.head.appendChild(script);
}

init();
