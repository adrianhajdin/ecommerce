"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backoffs = void 0;
class Backoffs {
    static normalize(backoff) {
        if (Number.isFinite(backoff)) {
            return {
                type: 'fixed',
                delay: backoff,
            };
        }
        else if (backoff) {
            return backoff;
        }
    }
    static calculate(backoff, attemptsMade, err, job, customStrategy) {
        if (backoff) {
            const strategy = lookupStrategy(backoff, customStrategy);
            return strategy(attemptsMade, backoff.type, err, job);
        }
    }
}
exports.Backoffs = Backoffs;
Backoffs.builtinStrategies = {
    fixed: function (delay) {
        return function () {
            return delay;
        };
    },
    exponential: function (delay) {
        return function (attemptsMade) {
            return Math.round(Math.pow(2, attemptsMade - 1) * delay);
        };
    },
};
function lookupStrategy(backoff, customStrategy) {
    if (backoff.type in Backoffs.builtinStrategies) {
        return Backoffs.builtinStrategies[backoff.type](backoff.delay);
    }
    else if (customStrategy) {
        return customStrategy;
    }
    else {
        throw new Error(`Unknown backoff strategy ${backoff.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`);
    }
}
//# sourceMappingURL=backoffs.js.map