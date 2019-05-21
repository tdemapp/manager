export default {
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
	destroy:'function () { console.log("myExtension destroyed!"); }',
};
