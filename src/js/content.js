import { getExtensionUrl, getIsDev } from './util';

/*
 * Initialize TDEM
 */
function initContent() {
	getIsDev() ? console.log('🛠️ TDEM Initializing...') : null;

	try {
		inject();
		getIsDev() ? console.log('✨ TDEM Successfully Initialized!') : null;
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
