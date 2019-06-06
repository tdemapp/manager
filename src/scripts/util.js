import tde from 'tde';
import * as yup from 'yup';

// Get extension name
export const getExtensionUrl = (...args) => {
	return browser.extension.getURL(...args);
};

// Get extension name
export const getExtensionName = () => {
	return browser.runtime.getManifest().name;
};

// Get extension version
export const getExtensionVersion = () => {
	return browser.runtime.getManifest().version;
};

// Simple logging function that only logs when in dev mode
export const devLog = (data) => {
	storage.get((storage) => {
		if (storage.debugMode) {
			console.log('[DEBUG]', data);
		}
	});
};

// Get localization
export const getLocale = (msg) => {
	const string = browser.i18n.getMessage(msg);

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
		website: yup
			.string()
			.url()
			.required(),
		enabled: yup.boolean().required(),
		init: yup.boolean().required(),
		dependencies: yup
			.array()
			.of(yup.string())
			.required(),
		conflicts: yup
			.array()
			.of(yup.string())
			.required(),
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
	validate(obj, cb) {
		this.schema
			.isValid(obj)
			.then((valid) => {
				cb(valid);
			})
			.catch((err) => {
				console.error('Error validating extension: ', err);
			});
	},
	toggle(extensionName) {
		storage.get((currentStorage) => {
			let newStorage = currentStorage;
			newStorage.extensions.filter((ext) => {
				if (ext.name === extensionName) {
					ext.enabled = !ext.enabled;
				}
			});
			storage.set(newStorage);
		});
	},
	remove(extensionName) {
		devLog('Removing: ' + extensionName);
		try {
			storage.get((currentStorage) => {
				tde.remove(extensionName);
				let newSettings = currentStorage;
				newSettings.extensions.splice(
					newSettings.extensions.map((e) => e.name).indexOf(extensionName),
					1
				);
				storage.set(newSettings);
			});
		} catch (err) {
			throw new Error('Error removing extension | ' + err);
		}
	},
	reload(extensionName) {
		devLog('Reloading: ' + extensionName);
		try {
			const temp = tde.getExtension(extensionName);
			tde.remove(extensionName);
			tde.add(temp, true, true);
		} catch (err) {
			throw new Error('Error removing extension | ' + err);
		}
	},
};

// Storage global functionss
export const storage = {
	get(cb) {
		browser.storage.local.get().then((obj, err) => {
			if (err) throw new Error(err);
			cb(obj);
		});
	},
	set(obj, cb) {
		this.get((currentStorage) => {
			browser.storage.local.set(Object.assign(currentStorage, obj)).then(() => {
				if (cb) return this.get(cb);
				return false;
			});
		});
	},
	subscribe(cb, executeRightAway) {
		// If storage is empty, set it to the default storage
		this.get((currentStorage) => {
			if (Object.keys(currentStorage).length === 0) {
				this.set(defaultStorage);
			}
		});

		const fn = () => this.get(cb);
		if (executeRightAway) fn();
		browser.storage.onChanged.addListener(fn);
	},
	toggleSetting(name) {
		this.get((currentStorage) => {
			let newStorage = currentStorage;
			newStorage[name] = !currentStorage[name];
			this.set(newStorage);
		});
	},
};
