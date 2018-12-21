export default {
	name: 'myExtension',
	author: 'myExtensionAuthor',
	description: 'This is myExtension!',
	version: '1.1.1',
	website: 'https://gist.github.com/',
	isEnabled: false,
	dependencies: ['myImportantExtension'],
	conflicts: ['veryBadExtension'],
	create: () => {
		console.log('myExtension created!');
	},
	destroy: () => {
		console.log('myExtension destroyed!');
	}
};
