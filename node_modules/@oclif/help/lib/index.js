"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelpClass = exports.Help = exports.HelpBase = void 0;
const errors_1 = require("@oclif/errors");
const chalk = require("chalk");
const indent = require("indent-string");
const stripAnsi = require("strip-ansi");
const command_1 = require("./command");
const list_1 = require("./list");
const root_1 = require("./root");
const screen_1 = require("./screen");
const util_1 = require("./util");
const util_2 = require("./util");
Object.defineProperty(exports, "getHelpClass", { enumerable: true, get: function () { return util_2.getHelpClass; } });
const wrap = require('wrap-ansi');
const { bold, } = chalk;
const ROOT_INDEX_CMD_ID = '';
function getHelpSubject(args) {
    for (const arg of args) {
        if (arg === '--')
            return;
        if (arg === 'help' || arg === '--help' || arg === '-h')
            continue;
        if (arg.startsWith('-'))
            return;
        return arg;
    }
}
class HelpBase {
    constructor(config, opts = {}) {
        this.config = config;
        this.opts = Object.assign({ maxWidth: screen_1.stdtermwidth }, opts);
    }
}
exports.HelpBase = HelpBase;
class Help extends HelpBase {
    constructor(config, opts = {}) {
        super(config, opts);
        this.render = util_1.template(this);
    }
    /*
     * _topics is to work around Config.topics mistakenly including commands that do
     * not have children, as well as topics. A topic has children, either commands or other topics. When
     * this is fixed upstream config.topics should return *only* topics with children,
     * and this can be removed.
     */
    get _topics() {
        // since this.config.topics is a getter that does non-trivial work, cache it outside the filter loop for
        // performance benefits in the presence of large numbers of topics
        const topics = this.config.topics;
        return topics.filter((topic) => {
            // it is assumed a topic has a child if it has children
            const hasChild = topics.some(subTopic => subTopic.name.includes(`${topic.name}:`));
            return hasChild;
        });
    }
    get sortedCommands() {
        let commands = this.config.commands;
        commands = commands.filter(c => this.opts.all || !c.hidden);
        commands = util_1.sortBy(commands, c => c.id);
        commands = util_1.uniqBy(commands, c => c.id);
        return commands;
    }
    get sortedTopics() {
        let topics = this._topics;
        topics = topics.filter(t => this.opts.all || !t.hidden);
        topics = util_1.sortBy(topics, t => t.name);
        topics = util_1.uniqBy(topics, t => t.name);
        return topics;
    }
    showHelp(argv) {
        const subject = getHelpSubject(argv);
        if (!subject) {
            const rootCmd = this.config.findCommand(ROOT_INDEX_CMD_ID);
            if (rootCmd)
                this.showCommandHelp(rootCmd);
            this.showRootHelp();
            return;
        }
        const command = this.config.findCommand(subject);
        if (command) {
            this.showCommandHelp(command);
            return;
        }
        const topic = this.config.findTopic(subject);
        if (topic) {
            this.showTopicHelp(topic);
            return;
        }
        errors_1.error(`command ${subject} not found`);
    }
    showCommandHelp(command) {
        const name = command.id;
        const depth = name.split(':').length;
        const subTopics = this.sortedTopics.filter(t => t.name.startsWith(name + ':') && t.name.split(':').length === depth + 1);
        const subCommands = this.sortedCommands.filter(c => c.id.startsWith(name + ':') && c.id.split(':').length === depth + 1);
        const title = command.description && this.render(command.description).split('\n')[0];
        if (title)
            console.log(title + '\n');
        console.log(this.formatCommand(command));
        console.log('');
        if (subTopics.length > 0) {
            console.log(this.formatTopics(subTopics));
            console.log('');
        }
        if (subCommands.length > 0) {
            console.log(this.formatCommands(subCommands));
            console.log('');
        }
    }
    showRootHelp() {
        let rootTopics = this.sortedTopics;
        let rootCommands = this.sortedCommands;
        console.log(this.formatRoot());
        console.log('');
        if (!this.opts.all) {
            rootTopics = rootTopics.filter(t => !t.name.includes(':'));
            rootCommands = rootCommands.filter(c => !c.id.includes(':'));
        }
        if (rootTopics.length > 0) {
            console.log(this.formatTopics(rootTopics));
            console.log('');
        }
        if (rootCommands.length > 0) {
            rootCommands = rootCommands.filter(c => c.id);
            console.log(this.formatCommands(rootCommands));
            console.log('');
        }
    }
    showTopicHelp(topic) {
        const name = topic.name;
        const depth = name.split(':').length;
        const subTopics = this.sortedTopics.filter(t => t.name.startsWith(name + ':') && t.name.split(':').length === depth + 1);
        const commands = this.sortedCommands.filter(c => c.id.startsWith(name + ':') && c.id.split(':').length === depth + 1);
        console.log(this.formatTopic(topic));
        if (subTopics.length > 0) {
            console.log(this.formatTopics(subTopics));
            console.log('');
        }
        if (commands.length > 0) {
            console.log(this.formatCommands(commands));
            console.log('');
        }
    }
    formatRoot() {
        const help = new root_1.default(this.config, this.opts);
        return help.root();
    }
    formatCommand(command) {
        const help = new command_1.default(command, this.config, this.opts);
        return help.generate();
    }
    formatCommands(commands) {
        if (commands.length === 0)
            return '';
        const body = list_1.renderList(commands.map(c => [
            c.id,
            c.description && this.render(c.description.split('\n')[0]),
        ]), {
            spacer: '\n',
            stripAnsi: this.opts.stripAnsi,
            maxWidth: this.opts.maxWidth - 2,
        });
        return [
            bold('COMMANDS'),
            indent(body, 2),
        ].join('\n');
    }
    formatTopic(topic) {
        let description = this.render(topic.description || '');
        const title = description.split('\n')[0];
        description = description.split('\n').slice(1).join('\n');
        let output = util_1.compact([
            title,
            [
                bold('USAGE'),
                indent(wrap(`$ ${this.config.bin} ${topic.name}:COMMAND`, this.opts.maxWidth - 2, { trim: false, hard: true }), 2),
            ].join('\n'),
            description && ([
                bold('DESCRIPTION'),
                indent(wrap(description, this.opts.maxWidth - 2, { trim: false, hard: true }), 2),
            ].join('\n')),
        ]).join('\n\n');
        if (this.opts.stripAnsi)
            output = stripAnsi(output);
        return output + '\n';
    }
    formatTopics(topics) {
        if (topics.length === 0)
            return '';
        const body = list_1.renderList(topics.map(c => [
            c.name,
            c.description && this.render(c.description.split('\n')[0]),
        ]), {
            spacer: '\n',
            stripAnsi: this.opts.stripAnsi,
            maxWidth: this.opts.maxWidth - 2,
        });
        return [
            bold('TOPICS'),
            indent(body, 2),
        ].join('\n');
    }
    /**
     * @deprecated used for readme generation
     * @param {object} command The command to generate readme help for
     * @return {string} the readme help string for the given command
     */
    command(command) {
        return this.formatCommand(command);
    }
}
exports.default = Help;
exports.Help = Help;
