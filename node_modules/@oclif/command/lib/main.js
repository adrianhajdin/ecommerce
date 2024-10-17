"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.Main = void 0;
const help_1 = require("@oclif/help");
const command_1 = require("./command");
const ROOT_INDEX_CMD_ID = '';
class Main extends command_1.default {
    static run(argv = process.argv.slice(2), options) {
        return super.run(argv, options || (module.parent && module.parent.parent && module.parent.parent.filename) || __dirname);
    }
    async init() {
        const [id, ...argv] = this.argv;
        await this.config.runHook('init', { id, argv });
        return super.init();
    }
    async run() {
        let [id, ...argv] = this.argv;
        this.parse(Object.assign({ strict: false, '--': false }, this.ctor));
        if (!this.config.findCommand(id)) {
            const topic = this.config.findTopic(id);
            if (topic)
                return this._help();
            if (this.config.findCommand(ROOT_INDEX_CMD_ID)) {
                id = ROOT_INDEX_CMD_ID;
                argv = this.argv;
            }
        }
        await this.config.runCommand(id, argv);
    }
    _helpOverride() {
        if (['-v', '--version', 'version'].includes(this.argv[0]))
            return this._version();
        if (['-h', 'help'].includes(this.argv[0]))
            return true;
        if (this.argv.length === 0 && !this.config.findCommand(ROOT_INDEX_CMD_ID))
            return true;
        for (const arg of this.argv) {
            if (arg === '--help')
                return true;
            if (arg === '--')
                return false;
        }
        return false;
    }
    _help() {
        const HelpClass = help_1.getHelpClass(this.config);
        const help = new HelpClass(this.config);
        help.showHelp(this.argv);
        return this.exit(0);
    }
}
exports.Main = Main;
function run(argv = process.argv.slice(2), options) {
    return Main.run(argv, options);
}
exports.run = run;
