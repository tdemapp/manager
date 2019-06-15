import Snackbar from '../components/AppSnackbar';

/* ================================================
	❤️ Insired heavily by eolant's vuetify/toast ❤️
			https://github.com/eolant/vuetify-toast
================================================ */

export default (Vue, globalOptions = {}) => {
	let component = null;
	let queue = [];

	const create = (options) => {
		let component = new Vue(Snackbar);
		Object.assign(component, Vue.prototype.$snackbar.globalOptions, options);
		document.body.appendChild(component.$mount().$el);
		return component;
	};

	const show = (text, options = {}) => {
		if (component) {
			if (options.queueable !== undefined ? options.queueable : globalOptions.queueable) {
				queue.push({ text, options });
			} else {
				component.close();
				queue.unshift({ text, options });
			}
			return;
		}

		options.text = text;
		component = create(options);
		component.$on('statusChange', (isActive, wasActive) => {
			if (wasActive && !isActive) {
				component = null;
				if (queue.length) {
					let toast = queue.shift();
					show(toast.text, toast.options);
				}
			}
		});
	};

	const shorts = (options) => {
		const colors = [
			'success',
			'info',
			'error',
			'warning'
		];
		
		let methods = {};

		colors.forEach((color) => {
			methods[color] = (text, options) => show(text, { color, ...options });
		});

		if (options.shorts) {
			for (let key in options.shorts) {
				let localOptions = options.shorts[key];
				methods[key] = (text, options) => show(text, { ...localOptions, ...options });
			}
		}

		return methods;
	};

	Vue.prototype.$snackbar = Object.assign(show, {
		globalOptions,
		...shorts(globalOptions),
	});
}
