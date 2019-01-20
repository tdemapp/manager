import $ from 'jquery';

/*
 * Initialize TDEM
 */
function initContent() {
	console.log('🛠️ TDEM Initializing...');

	try {
		inject();
		console.log('✨ TDEM Successfully Initialized!');
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
