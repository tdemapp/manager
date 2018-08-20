import * as util from './util';

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
 * Appends new script element at end of body with src link to extension inject file
 */
function inject() {
	const content = util.getExtensionUrl('js/inject.js');
	const script = document.createElement('script');

	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', content);

	document.head.appendChild(script);
}

initContent();
