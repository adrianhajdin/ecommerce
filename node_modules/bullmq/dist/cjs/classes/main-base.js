"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wrapper for sandboxing.
 *
 */
const child_processor_1 = require("./child-processor");
const enums_1 = require("../enums");
const utils_1 = require("../utils");
exports.default = (send, receiver) => {
    const childProcessor = new child_processor_1.ChildProcessor(send);
    receiver === null || receiver === void 0 ? void 0 : receiver.on('message', async (msg) => {
        try {
            switch (msg.cmd) {
                case enums_1.ChildCommand.Init:
                    await childProcessor.init(msg.value);
                    break;
                case enums_1.ChildCommand.Start:
                    await childProcessor.start(msg.job, msg === null || msg === void 0 ? void 0 : msg.token);
                    break;
                case enums_1.ChildCommand.Stop:
                    break;
            }
        }
        catch (err) {
            console.error('Error handling child message');
        }
    });
    process.on('SIGTERM', () => childProcessor.waitForCurrentJobAndExit());
    process.on('SIGINT', () => childProcessor.waitForCurrentJobAndExit());
    process.on('uncaughtException', async (err) => {
        if (typeof err !== 'object') {
            err = new Error((0, utils_1.toString)(err));
        }
        await send({
            cmd: enums_1.ParentCommand.Failed,
            value: (0, utils_1.errorToJSON)(err),
        });
        // An uncaughException leaves this process in a potentially undetermined state so
        // we must exit
        process.exit();
    });
};
//# sourceMappingURL=main-base.js.map