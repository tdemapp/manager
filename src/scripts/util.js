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

// Get is development environment
export const getIsDev = () => {
	if (
		process.env.NODE_ENV === 'development' ||
		this.storage.get((storage) => storage.settings.advanced.debugMode) === true
	) {
		return true;
	} else {
		return false;
	}
};

// Simple logging function that only logs when in dev mode
export const devLog = (data) => {
	if (getIsDev()) {
		return console.log('[DEV]', data);
	}
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
 * Default storage object
 */
export const defaultStorage = {
	debugMode: false,
	doAnimations: true,
	extensions: [],
	isDarkTheme: false,
	isSidebarMini: false,
};

/*
 * Storage global functions
 */
export const storage = {
	get(done) {
		chrome.storage.local.get(defaultStorage, (obj) => {
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
	subscribe(cb, executeRightAway) {
		const fn = () => this.get(cb);
		if (executeRightAway) fn();
		chrome.storage.onChanged.addListener(fn);
	},
};
