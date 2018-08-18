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

export const addExtension = (id) => {
	fetch('https://api.github.com/gists/' + id).then((res) => {
		if (res.ok) {
      return res.json();
    }
	}).then((data) => {
		console.log(data.files['extension.js'].content);
		return true;
	}).catch((e) => {
		throw new Error(`⚠️ Error Adding Extension | ${e}`);
	});
}