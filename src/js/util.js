// Get extension name
export const getExtensionUrl = (...args) => {
	return chrome.extension.getURL(...args);
};

// Get extension name
export const getExtensionName = () => {
	return chrome.runtime.getManifest().name;
};

// Get extension version
export const getExtensionVersion = () => {
	return chrome.runtime.getManifest().version;
};

/*
* Get localization 
*/
export const getLocale = (msg) => {
	const string = chrome.i18n.getMessage(msg);

	if (string === '') {
		throw new Error(`No Message found for "${msg}" in locales`);
	}

	return string;
};

/*
* Extension global functions
*/
export const addExtension = (id) => {
	fetch('https://api.github.com/gists/' + id)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`⚠️ Error fetching gist`);
			}
		})
		.then((data) => {
			storage.set({
				extensions: [eval(data.files['extension.js'].content)],
			});

			return true;
		})
		.catch((e) => {
			throw new Error(`⚠️ Error Adding Extension | ${e}`);
		});
};

/*
 * Storage global functions
 */
export const storage = {
	get(done) {
		chrome.storage.local.get(null, (obj) => {
			done(obj);
		});
	},
	set(obj, cb) {
		this.get((currentSettings) => {
			chrome.storage.local.set(Object.assign(currentSettings, obj), () => {
				if (cb) {
					return this.get(cb);
				}

				return false;
			});
		});
	},
};
