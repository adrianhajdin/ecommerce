"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitRelationIfExists = void 0;
/**
 *
 * @param relations relations from which a relation should be removed
 * @param relation relation to be removed
 * @returns tuple containing the new relations and a boolean indicating whether the relation was found in the relations array
 */
var omitRelationIfExists = function (relations, relation) {
    var filteredRelations = relations.filter(function (rel) { return rel !== relation; });
    var includesRelation = relations.length !== filteredRelations.length;
    return [relations, includesRelation];
};
exports.omitRelationIfExists = omitRelationIfExists;
//# sourceMappingURL=omit-relation-if-exists.js.map