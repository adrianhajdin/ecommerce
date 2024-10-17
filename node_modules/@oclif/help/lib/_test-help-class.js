"use strict";
// `getHelpClass` tests require an oclif project for testing so
// it is re-using the setup here to be able to do a lookup for
// this sample help class file in tests, although it is not needed
// for @oclif/help itself.
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class default_1 extends _1.HelpBase {
    showHelp() {
        console.log('help');
    }
    showCommandHelp() {
        console.log('command help');
    }
    getCommandHelpForReadme() {
        return 'help for readme';
    }
}
exports.default = default_1;
