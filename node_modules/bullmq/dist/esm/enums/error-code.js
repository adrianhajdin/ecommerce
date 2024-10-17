export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["JobNotExist"] = -1] = "JobNotExist";
    ErrorCode[ErrorCode["JobLockNotExist"] = -2] = "JobLockNotExist";
    ErrorCode[ErrorCode["JobNotInState"] = -3] = "JobNotInState";
    ErrorCode[ErrorCode["JobPendingDependencies"] = -4] = "JobPendingDependencies";
    ErrorCode[ErrorCode["ParentJobNotExist"] = -5] = "ParentJobNotExist";
    ErrorCode[ErrorCode["JobLockMismatch"] = -6] = "JobLockMismatch";
    ErrorCode[ErrorCode["ParentJobCannotBeReplaced"] = -7] = "ParentJobCannotBeReplaced";
    ErrorCode[ErrorCode["JobBelongsToJobScheduler"] = -8] = "JobBelongsToJobScheduler";
})(ErrorCode || (ErrorCode = {}));
//# sourceMappingURL=error-code.js.map