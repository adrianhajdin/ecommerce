"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigData = void 0;
const types_1 = require("@smithy/types");
const loadSharedConfigFiles_1 = require("./loadSharedConfigFiles");
const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const sections = key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
    if (sections.length === 2 && Object.values(types_1.IniSectionType).includes(sections[0])) {
        return true;
    }
    return false;
})
    .reduce((acc, [key, value]) => {
    const updatedKey = key.startsWith(types_1.IniSectionType.PROFILE) ? key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)[1] : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});
exports.getConfigData = getConfigData;
