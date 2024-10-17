"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable node/no-missing-require */
exports.default = {
    get stripAnsi() {
        return require('strip-ansi');
    },
    get ansiStyles() {
        return require('ansi-styles');
    },
    get ansiEscapes() {
        return require('ansi-escapes');
    },
    get passwordPrompt() {
        return require('password-prompt');
    },
    get screen() {
        return require('@oclif/screen');
    },
    get open() {
        return require('./open').default;
    },
    get prompt() {
        return require('./prompt');
    },
    get styledObject() {
        return require('./styled/object').default;
    },
    get styledHeader() {
        return require('./styled/header').default;
    },
    get styledJSON() {
        return require('./styled/json').default;
    },
    get table() {
        return require('./styled/table').table;
    },
    get tree() {
        return require('./styled/tree').default;
    },
    get wait() {
        return require('./wait').default;
    },
    get progress() {
        return require('./styled/progress').default;
    },
};
