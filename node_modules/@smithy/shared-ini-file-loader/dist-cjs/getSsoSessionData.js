"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSsoSessionData = void 0;
const types_1 = require("@smithy/types");
const loadSharedConfigFiles_1 = require("./loadSharedConfigFiles");
const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => key.startsWith(types_1.IniSectionType.SSO_SESSION + loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR))
    .reduce((acc, [key, value]) => ({ ...acc, [key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)[1]]: value }), {});
exports.getSsoSessionData = getSsoSessionData;
