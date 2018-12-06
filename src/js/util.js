import { util } from 'node-forge';

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
		throw new Error(`No Message found for "${msg}" in locales`);
	}

	return string;
};

export const addExtension = (id) => {
	fetch('https://api.github.com/gists/' + id)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => {
			console.log(data.files['extension.js'].content);
			return true;
		})
		.catch((e) => {
			throw new Error(`⚠️ Error Adding Extension | ${e}`);
		});
};

export const storage = {
	getLocal(done) {
		chrome.storage.local.get(null, (obj) => {
			done(obj);
		});
	},
	getSync(done) {
		chrome.storage.sync.get(null, (obj) => {
			done(obj);
		});
	},
	setLocal(obj, cb) {
		this.getLocal((currentSettings) => {
			chrome.storage.local.set(Object.assign(currentSettings, obj), () => {
				if (cb) {
					return this.getLocal(cb);
				}

				return false;
			});
		});
	},
	setSync(obj, cb) {
		this.getSync((currentSettings) => {
			chrome.storage.sync.set(Object.assign(currentSettings, obj), () => {
				if (cb) {
					return this.getSync(cb);
				}

				return false;
			});
		});
	}
};
