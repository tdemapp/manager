import * as yup from 'yup';

export const extension = {
	add(obj) {
		return new Promise(async (resolve, reject) => {
			log.info('Installing: ', obj);

			try {
				await this.validate(obj);
			} catch (err) {
				reject(err);
			}

			storage.get(async (currentStorage) => {
				const filteredExtensions = currentStorage.extensions.filter(
					(el) => el.name === obj.name
				);

				if (filteredExtensions.length > 0) {
					reject(`${obj.name} Already Installed`);
				} else {
					let newStorage = currentStorage;
					newStorage.extensions.push(obj);
					await storage.set(newStorage, (err) => {
						if (err)
							reject(err);
					});

					resolve(`Installed ${obj.name}`);
				}
			});
		});
	},
	download(url) {
		return new Promise(async (resolve, reject) => {
			log.info(`Downloading: ${url}`);

			let json;
			try {
				const response = await fetch(url);
				json = await response.json();
			} catch (err) {
				reject(err);
			}

			resolve(json);
		});
	},
	getExtensionUrl: (...args) => browser.extension.getURL(...args),
	getExtensionName: () => browser.runtime.getManifest().name,
	getExtensionVersion: () => browser.runtime.getManifest().version,
	getRegistry() {
		return new Promise(async (resolve, reject) => {
			const json = await this.download('https://registry.tdem.app');

			for (let i = 0; i < json.message.length; i++) {
				let result = [];
				result.push({
					name: json.message[i].name
						.split('.')
						.slice(0, -1)
						.join('.'),
					url: json.message[i].download_url,
				});

				resolve(result);
			}
		});
	},
	remove(extensionName) {
		return new Promise((resolve) => {
			log.info('Removing: ' + extensionName);

			const result = storage.get((currentData) => {
				let newData = currentData;

				newData.extensions.splice(
					newData.extensions.map((e) => e.name).indexOf(extensionName),
					1
				);

				storage.set(newData);
			});

			resolve(result);
		});
	},
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
		dependencies: yup.array().of(yup.string()),
		conflicts: yup.array().of(yup.string()),
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
	toggle(extensionName) {
		return new Promise((resolve) => {
			log.info('Toggling: ' + extensionName);

			const result = storage.get((currentData) => {
				let newData = currentData;

				newData.extensions.filter((ext) => {
					if (ext.name === extensionName) {
						ext.enabled = !ext.enabled;
					}
				});

				storage.set(newData);
			});

			resolve(result);
		});
	},
	validate(obj) {
		return new Promise(async (resolve, reject) => {
			const isValid = await this.schema.validate(obj);

			if (!isValid) {
				reject(isValid);
			}

			resolve(obj);
		});
	},
};

// Logger formatting
const logFormatting = (color) => `
	background: ${color};
	color: #fff;
	padding: 5px;
	margin: 5px;
	border-radius: 2px;
	font-size: 12px;
	font-weight: bold;
`;

export const log = {
	info(...text) {
		storage.get((data) => {
			if (data.debugMode) {
				console.log('%cINFO', logFormatting('#03A9F4'), ...text);
			}
		});
	},
	warning(...text) {
		storage.get((data) => {
			if (data.debugMode) {
				console.log('%cWARNING', logFormatting('#FFC107'), ...text);
			}
		});
	},
	error(...text) {
		storage.get((data) => {
			if (data.debugMode) {
				console.log('%cERROR', logFormatting('#f44336'), ...text);
			}
		});
	},
};

export const storage = {
	template: {
		debugMode: false,
		doAnimations: true,
		extensions: [],
		isDarkTheme: false,
		isSidebarMini: false,
	},
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
		this.get((currentStorage) => Object.keys(currentStorage).length === 0 ? this.set(this.template) : null);

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
