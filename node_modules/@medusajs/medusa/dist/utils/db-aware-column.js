"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAwareColumn = exports.resolveDbGenerationStrategy = exports.resolveDbType = void 0;
var typeorm_1 = require("typeorm");
function resolveDbType(pgSqlType) {
    return pgSqlType;
}
exports.resolveDbType = resolveDbType;
function resolveDbGenerationStrategy(pgSqlType) {
    return pgSqlType;
}
exports.resolveDbGenerationStrategy = resolveDbGenerationStrategy;
function DbAwareColumn(columnOptions) {
    var pre = columnOptions.type;
    if (columnOptions.type) {
        columnOptions.type = resolveDbType(columnOptions.type);
    }
    if (pre === "jsonb" && pre !== columnOptions.type) {
        if ("default" in columnOptions) {
            columnOptions.default = JSON.stringify(columnOptions.default);
        }
    }
    return (0, typeorm_1.Column)(columnOptions);
}
exports.DbAwareColumn = DbAwareColumn;
//# sourceMappingURL=db-aware-column.js.map