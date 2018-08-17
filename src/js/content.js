import * as util from './util';

/* 
 * Initialize TDEM
 */
function initContent() {
	console.log('🛠️ TDEM Initializing...');
	inject();
}

/* 
 * Appends new script element at end of body with src link to extension inject file
 */
function inject() {
	const content = util.getExtensionUrl('js/inject.js');
	const script = document.createElement('script');

	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', content);

	try {
		document.body.appendChild(script);
		console.log('✨ TDEM Successfully Injected!');
	} catch (e) {
		throw new Error(`⚠️ Error Injecting TDEM | ${e}`);
	}
}

initContent();
