declare const extractStack: {
	/**
	Extract the actual stack of an error.

	It gracefully handles cases where the stack is undefined or empty and returns an empty string.

	@param error - Either an `Error` or the `.stack` of an `Error`.
	@returns The actual stack part of the error stack.

	@example
	```
	import extractStack = require('extract-stack');

	const error = new Error('Missing unicorn');

	console.log(error.stack);
	Error: Missing unicorn
	// 	at Object.<anonymous> (/Users/sindresorhus/dev/extract-stack/unicorn.js:2:15)
	// 	at Module._compile (module.js:409:26)
	// 	at Module.load (module.js:343:32)
	// 	at startup (node.js:139:18)

	console.log(extractStack(error));
	// 	at Object.<anonymous> (/Users/sindresorhus/dev/extract-stack/unicorn.js:2:15)
	// 	at Module._compile (module.js:409:26)
	// 	at Module.load (module.js:343:32)
	// 	at startup (node.js:139:18)
	```
	 */
	(error: Error | string | undefined): string;

	/**
	Extract the actual stack of an error as an array of lines.

	@param error - Either an `Error` or the `.stack` of an `Error`.
	@returns The stack lines of the error stack without the noise.

	@example
	```
	import extractStack = require('extract-stack');

	const error = new Error('Missing unicorn');

	console.log(error.stack);
	Error: Missing unicorn
	// 	at Object.<anonymous> (/Users/sindresorhus/dev/extract-stack/unicorn.js:2:15)
	// 	at Module._compile (module.js:409:26)
	// 	at Module.load (module.js:343:32)
	// 	at startup (node.js:139:18)

	console.log(extractStack.lines(error));
	// [
	// 	'Object.<anonymous> (/Users/sindresorhus/dev/extract-stack/unicorn.js:2:15)'
	// 	'Module._compile (module.js:409:26)'
	// 	'Module.load (module.js:343:32)'
	// 	'startup (node.js:139:18)'
	// ]
	```
	 */
	lines(error: Error | string | undefined): string[];
};

export = extractStack;
