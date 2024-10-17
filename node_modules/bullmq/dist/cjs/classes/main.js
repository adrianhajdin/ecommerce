"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Child process wrapper for sandboxing.
 *
 */
const utils_1 = require("../utils");
const main_base_1 = require("./main-base");
(0, main_base_1.default)((msg) => (0, utils_1.childSend)(process, msg), process);
//# sourceMappingURL=main.js.map