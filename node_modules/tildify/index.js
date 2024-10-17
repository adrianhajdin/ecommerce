'use strict';
const path = require('path');
const os = require('os');

const homeDirectory = os.homedir();

module.exports = absolutePath => {
	const normalizedPath = path.normalize(absolutePath) + path.sep;

	return (normalizedPath.indexOf(homeDirectory) === 0 ?
		normalizedPath.replace(homeDirectory + path.sep, `~${path.sep}`) :
		normalizedPath).slice(0, -1);
};
