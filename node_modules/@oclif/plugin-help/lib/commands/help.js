"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const help_1 = require("@oclif/help");
class HelpCommand extends command_1.default {
    async run() {
        const { flags, argv } = this.parse(HelpCommand);
        const Help = help_1.getHelpClass(this.config);
        const help = new Help(this.config, { all: flags.all });
        help.showHelp(argv);
    }
}
exports.default = HelpCommand;
HelpCommand.description = 'display help for <%= config.bin %>';
HelpCommand.flags = {
    all: command_1.flags.boolean({ description: 'see all commands in CLI' }),
};
HelpCommand.args = [
    { name: 'command', required: false, description: 'command to show help for' },
];
HelpCommand.strict = false;
