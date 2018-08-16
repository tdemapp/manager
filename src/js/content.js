function init() {
	console.log('🛠️ TDEM Initializing...');
	inject();
}

function inject() {
	const content = chrome.extension.getURL('js/inject.js');
	const script = document.createElement('script');

	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', content);

	try {
		document.body.appendChild(script);
		console.log('✨ TDEM Successfully Injected!');
	} catch (e) {
		console.log('⚠️ Error Injecting TDEM | ' + e);
	}
}

init();
