"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Since typeorm require us to use ES6 and that migrating require a lot of work
// one solution is to override directly the one from typeorm so that there is no complain about
// the output build
var typeorm_1 = require("typeorm");
typeorm_1.DefaultNamingStrategy.prototype.eagerJoinRelationAlias = function (alias, propertyPath) {
    var path = propertyPath
        .split(".")
        .map(function (p) { return p.substring(0, 2); })
        .join("_");
    var out = alias + "_" + path;
    var match = out.match(/_/g) || [];
    return out + match.length;
};
//# sourceMappingURL=naming-strategy.js.map