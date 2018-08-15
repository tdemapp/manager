module.exports = [
	{
		name: 'myExtension 1',
		author: 'myExtensionAuthor',
		description: 'This is myExtension 1!',
		version: '1.1.1',
		website: 'https://example.com/',
		dependencies: ['myImportantExtension'],
		conflicts: ['veryBadExtension'],
		create: () => {
			console.log('myExtension 1 created!');
		},

		destroy: () => {
			console.log('myExtension 1 destroyed!');
		}
	},
	{
		name: 'myExtension 2',
		author: 'myExtensionAuthor',
		description: 'This is myExtension 2!',
		version: '2.4.7',
		website: 'https://example.com/',
		dependencies: ['myImportantExtension'],
		conflicts: ['veryBadExtension'],
		create: () => {
			console.log('myExtension 2 created!');
		},

		destroy: () => {
			console.log('myExtension 2 destroyed!');
		}
	},
	{
		name: 'myExtension 3',
		author: 'myExtensionAuthor',
		description: 'This is myExtension 3!',
		version: '1.9.3',
		website: 'https://example.com/',
		dependencies: ['myImportantExtension'],
		conflicts: ['veryBadExtension'],
		create: () => {
			console.log('myExtension 3 created!');
		},

		destroy: () => {
			console.log('myExtension 3 destroyed!');
		}
	}
];
