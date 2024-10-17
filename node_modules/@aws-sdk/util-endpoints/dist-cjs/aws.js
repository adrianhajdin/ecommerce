"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_endpoints_1 = require("@smithy/util-endpoints");
const isVirtualHostableS3Bucket_1 = require("./lib/aws/isVirtualHostableS3Bucket");
const parseArn_1 = require("./lib/aws/parseArn");
const partition_1 = require("./lib/aws/partition");
const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket_1.isVirtualHostableS3Bucket,
    parseArn: parseArn_1.parseArn,
    partition: partition_1.partition,
};
util_endpoints_1.customEndpointFunctions.aws = awsEndpointFunctions;
