"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCategoryDescendantsIds = exports.categoryMatchesScope = void 0;
var categoryMatchesScope = function (category, query) {
    return Object.keys(query !== null && query !== void 0 ? query : {}).every(function (key) { return category[key] === query[key]; });
};
exports.categoryMatchesScope = categoryMatchesScope;
var fetchCategoryDescendantsIds = function (productCategory, query) {
    var result = [productCategory.id];
    (productCategory.category_children || []).forEach(function (child) {
        if ((0, exports.categoryMatchesScope)(child, query)) {
            result = result.concat((0, exports.fetchCategoryDescendantsIds)(child, query));
        }
    });
    return result;
};
exports.fetchCategoryDescendantsIds = fetchCategoryDescendantsIds;
//# sourceMappingURL=index.js.map