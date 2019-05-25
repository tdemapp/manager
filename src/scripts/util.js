import * as yup from 'yup';

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

// Get localization
export const getLocale = (msg) => {
	const string = chrome.i18n.getMessage(msg);

	if (string === '') {
		throw new Error(`No Message found for "${msg}" in locales`);
	}

	return string;
};

// Default storage object
export const defaultStorage = {
	debugMode: false,
	doAnimations: true,
	extensions: [],
	isDarkTheme: false,
	isSidebarMini: false,
};
// Extension data handlers
export const extension = {
	schema: yup.object().shape({
		name: yup.string().required(),
		author: yup.string().required(),
		description: yup.string().required(),
		version: yup.string().required(),
		website: yup.string().url().required(),
		enabled: yup.boolean().required(),
		init: yup.boolean().required(),
		dependencies: yup.array().of(yup.string()).required(),
		conflicts: yup.array().of(yup.string()).required(),
		create: yup.string().required(),
		destroy: yup.string().required(),
	}),
	template: {
		name: 'myExtension',
		author: 'myExtensionAuthor',
		description: 'This is myExtension!',
		version: '1.1.1',
		website: 'https://gist.github.com/',
		enabled: true,
		init: true,
		dependencies: ['myImportantExtension'],
		conflicts: ['veryBadExtension'],
		create: 'function () { console.log("myExtension created!"); }',
		destroy: 'function () { console.log("myExtension destroyed!"); }',
	},
	validate (obj, cb) {
		this.schema.isValid(obj).then((valid) => {
			cb(valid);
		}).catch((err) => {
			console.error('Error validating extension: ', err);
		});
	},
};

// Storage global functionss
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
