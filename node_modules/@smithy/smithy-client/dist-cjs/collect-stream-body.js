"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectBody = void 0;
const util_stream_1 = require("@smithy/util-stream");
const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return util_stream_1.Uint8ArrayBlobAdapter.mutate(await fromContext);
};
exports.collectBody = collectBody;
