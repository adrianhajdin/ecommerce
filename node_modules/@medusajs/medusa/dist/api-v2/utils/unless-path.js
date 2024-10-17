"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlessPath = void 0;
// Due to how our route loader works, where we load all middlewares before routes, ambiguous routes end up having all middlewares on different routes executed before the route handler is.
// This function allows us to skip middlewares for particular routes, so we can temporarily solve this without completely breaking the route loader for everyone.
var unlessPath = function (onPath, middleware) {
    return function (req, res, next) {
        if (onPath.test(req.path)) {
            return next();
        }
        else {
            return middleware(req, res, next);
        }
    };
};
exports.unlessPath = unlessPath;
//# sourceMappingURL=unless-path.js.map