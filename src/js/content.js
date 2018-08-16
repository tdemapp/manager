import util from './util';

function init() {
	console.log('🛠️ TDEM Initializing...');
	inject();
}

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

init();
