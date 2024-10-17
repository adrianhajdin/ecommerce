"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
var util_1 = require("util");
exports.sleep = (0, util_1.promisify)(setTimeout);
//# sourceMappingURL=sleep.js.map