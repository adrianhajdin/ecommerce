"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSharedConfigFiles = exports.CONFIG_PREFIX_SEPARATOR = void 0;
const getConfigData_1 = require("./getConfigData");
const getConfigFilepath_1 = require("./getConfigFilepath");
const getCredentialsFilepath_1 = require("./getCredentialsFilepath");
const parseIni_1 = require("./parseIni");
const slurpFile_1 = require("./slurpFile");
const swallowError = () => ({});
exports.CONFIG_PREFIX_SEPARATOR = ".";
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
    const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni_1.parseIni)
            .then(getConfigData_1.getConfigData)
            .catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni_1.parseIni)
            .catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
exports.loadSharedConfigFiles = loadSharedConfigFiles;
