import { getExtensionUrl, getIsDev as isDev } from './util';

/*
 * Initialize TDEM
 */
function initContent() {
	isDev() ? console.log('🛠️ TDEM Initializing...') : null;

	try {
		inject();
		isDev() ? console.log('✨ TDEM Successfully Initialized!') : null;
	} catch (e) {
		throw new Error(`⚠️ Error Initializing TDEM | ${e}`);
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

initContent();
