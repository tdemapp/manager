export const getExtensionUrl = (...args) => {
	return chrome.extension.getURL(...args);
};

export const getExtensionName = () => {
	return chrome.runtime.getManifest().name;
};

export const getExtensionVersion = () => {
	return chrome.runtime.getManifest().version;
};

export const getMessage = (msg) => {
	const string = chrome.i18n.getMessage(msg);

	if (string === '') {
		throw new Error(`Error: No Message found for ${msg} in locales`);
	}

	return string;
};
