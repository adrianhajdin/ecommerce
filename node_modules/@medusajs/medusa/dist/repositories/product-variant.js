"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantRepository = void 0;
var product_variant_1 = require("../models/product-variant");
var database_1 = require("../loaders/database");
exports.ProductVariantRepository = database_1.dataSource.getRepository(product_variant_1.ProductVariant);
exports.default = exports.ProductVariantRepository;
//# sourceMappingURL=product-variant.js.map