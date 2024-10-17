"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImportProductCategoriesColumnsDefinition = exports.productImportSalesChannelsColumnsDefinition = exports.productImportColumnsDefinition = exports.productCategoriesColumnsDefinition = exports.productSalesChannelColumnsDefinition = exports.productColumnsDefinition = void 0;
exports.productColumnsDefinition = {
    "Product Id": {
        name: "Product Id",
        importDescriptor: {
            mapTo: "product.id",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Handle": {
        name: "Product Handle",
        importDescriptor: {
            mapTo: "product.handle",
            required: true,
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.handle) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Title": {
        name: "Product Title",
        importDescriptor: {
            mapTo: "product.title",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.title) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Subtitle": {
        name: "Product Subtitle",
        importDescriptor: {
            mapTo: "product.subtitle",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.subtitle) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Description": {
        name: "Product Description",
        importDescriptor: {
            mapTo: "product.description",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.description) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Status": {
        name: "Product Status",
        importDescriptor: {
            mapTo: "product.status",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.status) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Thumbnail": {
        name: "Product Thumbnail",
        importDescriptor: {
            mapTo: "product.thumbnail",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.thumbnail) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    "Product Weight": {
        name: "Product Weight",
        importDescriptor: {
            mapTo: "product.weight",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.weight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Length": {
        name: "Product Length",
        importDescriptor: {
            mapTo: "product.length",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.length) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Width": {
        name: "Product Width",
        importDescriptor: {
            mapTo: "product.width",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.width) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Height": {
        name: "Product Height",
        importDescriptor: {
            mapTo: "product.height",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.height) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product HS Code": {
        name: "Product HS Code",
        importDescriptor: {
            mapTo: "product.hs_code",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.hs_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Origin Country": {
        name: "Product Origin Country",
        importDescriptor: {
            mapTo: "product.origin_country",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.origin_country) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product MID Code": {
        name: "Product MID Code",
        importDescriptor: {
            mapTo: "product.mid_code",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.mid_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Material": {
        name: "Product Material",
        importDescriptor: {
            mapTo: "product.material",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.material) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    // PRODUCT-COLLECTION
    "Product Collection Title": {
        name: "Product Collection Title",
        importDescriptor: {
            mapTo: "product.collection.title",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.collection) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Collection Handle": {
        name: "Product Collection Handle",
        importDescriptor: {
            mapTo: "product.collection.handle",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.collection) === null || _a === void 0 ? void 0 : _a.handle) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    // PRODUCT-TYPE
    "Product Type": {
        name: "Product Type",
        importDescriptor: {
            match: /Product Type/,
            reducer: function (builtLine, key, value) {
                if (typeof value === "undefined" || value === null) {
                    builtLine["product.type"] = undefined;
                }
                else {
                    builtLine["product.type.value"] = value;
                }
                return builtLine;
            },
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.type) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    // PRODUCT-TAGS
    "Product Tags": {
        name: "Product Tags",
        importDescriptor: {
            mapTo: "product.tags",
            transform: function (value) {
                return value && "".concat(value).split(",").map(function (v) { return ({ value: v }); });
            },
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return ((_a = product.tags.map(function (t) { return t.value; })) !== null && _a !== void 0 ? _a : []).join(","); },
            entityName: "product",
        },
    },
    //
    "Product Discountable": {
        name: "Product Discountable",
        importDescriptor: {
            mapTo: "product.discountable",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.discountable) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product External Id": {
        name: "Product External Id",
        importDescriptor: {
            mapTo: "product.external_id",
        },
        exportDescriptor: {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.external_id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    },
    // PRODUCT-PROFILE
    "Product Profile Name": {
        name: "Product Profile Name",
        importDescriptor: {
            mapTo: "__not_supported__",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.profile) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    "Product Profile Type": {
        name: "Product Profile Type",
        importDescriptor: {
            mapTo: "__not_supported__",
        },
        exportDescriptor: {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.profile) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    },
    // VARIANTS
    "Variant Id": {
        name: "Variant Id",
        importDescriptor: {
            mapTo: "variant.id",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    },
    "Variant Title": {
        name: "Variant Title",
        importDescriptor: {
            mapTo: "variant.title",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.title) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    },
    "Variant SKU": {
        name: "Variant SKU",
        importDescriptor: {
            mapTo: "variant.sku",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.sku) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    },
    "Variant Barcode": {
        name: "Variant Barcode",
        importDescriptor: {
            mapTo: "variant.barcode",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.barcode) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    },
    "Variant Inventory Quantity": {
        name: "Variant Inventory Quantity",
        importDescriptor: {
            mapTo: "variant.inventory_quantity",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.inventory_quantity) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Allow Backorder": {
        name: "Variant Allow Backorder",
        importDescriptor: {
            mapTo: "variant.allow_backorder",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.allow_backorder) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Manage Inventory": {
        name: "Variant Manage Inventory",
        importDescriptor: {
            mapTo: "variant.manage_inventory",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.manage_inventory) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Weight": {
        name: "Variant Weight",
        importDescriptor: {
            mapTo: "variant.weight",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.weight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Length": {
        name: "Variant Length",
        importDescriptor: {
            mapTo: "variant.length",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.length) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Width": {
        name: "Variant Width",
        importDescriptor: {
            mapTo: "variant.width",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.width) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Height": {
        name: "Variant Height",
        importDescriptor: {
            mapTo: "variant.height",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.height) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant HS Code": {
        name: "Variant HS Code",
        importDescriptor: {
            mapTo: "variant.hs_code",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.hs_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Origin Country": {
        name: "Variant Origin Country",
        importDescriptor: {
            mapTo: "variant.origin_country",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.origin_country) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant MID Code": {
        name: "Variant MID Code",
        importDescriptor: {
            mapTo: "variant.mid_code",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.mid_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    "Variant Material": {
        name: "Variant Material",
        importDescriptor: {
            mapTo: "variant.material",
        },
        exportDescriptor: {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.material) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    },
    // ==== DYNAMIC FIELDS ====
    // PRODUCT_OPTIONS
    "Option Name": {
        name: "Option Name",
        importDescriptor: {
            match: /Option \d+ Name/,
            reducer: function (builtLine, key, value) {
                builtLine["product.options"] = builtLine["product.options"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var options = builtLine["product.options"];
                options.push({ title: value });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Option ".concat(index + 1, " Name");
            },
        },
    },
    "Option Value": {
        name: "Option Value",
        importDescriptor: {
            match: /Option \d+ Value/,
            reducer: function (builtLine, key, value, context) {
                builtLine["variant.options"] = builtLine["variant.options"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var options = builtLine["variant.options"];
                options.push({
                    value: value,
                    _title: context.line[key.slice(0, -6) + " Name"],
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Option ".concat(index + 1, " Value");
            },
        },
    },
    // PRICES
    "Price Region": {
        name: "Price Region",
        importDescriptor: {
            match: /Price (.*) \[([A-Z]{3})\]/,
            reducer: function (builtLine, key, value) {
                builtLine["variant.prices"] = builtLine["variant.prices"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var _a = __read(key.trim().match(/Price (.*) \[([A-Z]{3})\]/) || [], 2), regionName = _a[1];
                builtLine["variant.prices"].push({
                    amount: parseFloat(value),
                    regionName: regionName,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (data) {
                var _a, _b, _c;
                return "Price ".concat((_a = data.region) === null || _a === void 0 ? void 0 : _a.name, " ").concat(((_b = data.region) === null || _b === void 0 ? void 0 : _b.currency_code)
                    ? "[" + ((_c = data.region) === null || _c === void 0 ? void 0 : _c.currency_code.toUpperCase()) + "]"
                    : "");
            },
        },
    },
    "Price Currency": {
        name: "Price Currency",
        importDescriptor: {
            match: /Price [A-Z]{3}/,
            reducer: function (builtLine, key, value) {
                builtLine["variant.prices"] = builtLine["variant.prices"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var currency = key.trim().split(" ")[1];
                builtLine["variant.prices"].push({
                    amount: parseFloat(value),
                    currency_code: currency,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (data) {
                var _a;
                return "Price ".concat((_a = data.currency_code) === null || _a === void 0 ? void 0 : _a.toUpperCase());
            },
        },
    },
    // IMAGES
    "Image Url": {
        name: "Image Url",
        importDescriptor: {
            match: /Image \d+ Url/,
            reducer: function (builtLine, key, value) {
                builtLine["product.images"] = builtLine["product.images"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                builtLine["product.images"].push(value);
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Image ".concat(index + 1, " Url");
            },
        },
    },
};
exports.productSalesChannelColumnsDefinition = {
    "Sales Channel Name": {
        name: "Sales Channel Name",
        importDescriptor: {
            match: /Sales Channel \d+ Name/,
            reducer: function (builtLine, key, value) {
                builtLine["product.sales_channels"] =
                    builtLine["product.sales_channels"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var channels = builtLine["product.sales_channels"];
                channels.push({
                    name: value,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Sales Channel ".concat(index + 1, " Name");
            },
        },
    },
    "Sales Channel Description": {
        name: "Sales Channel Description",
        importDescriptor: {
            match: /Sales Channel \d+ Description/,
            reducer: function (builtLine, key, value) {
                builtLine["product.sales_channels"] =
                    builtLine["product.sales_channels"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var channels = builtLine["product.sales_channels"];
                channels.push({
                    description: value,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Sales Channel ".concat(index + 1, " Description");
            },
        },
    },
    "Sales Channel Id": {
        name: "Sales Channel Id",
        importDescriptor: {
            match: /Sales Channel \d+ Id/,
            reducer: function (builtLine, key, value) {
                builtLine["product.sales_channels"] =
                    builtLine["product.sales_channels"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var channels = builtLine["product.sales_channels"];
                channels.push({
                    id: value,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Sales Channel ".concat(index + 1, " Id");
            },
        },
    },
};
exports.productCategoriesColumnsDefinition = {
    "Product Category Handle": {
        name: "Product Category Handle",
        importDescriptor: {
            match: /Product Category \d+ Handle/,
            reducer: function (builtLine, key, value) {
                builtLine["product.categories"] = builtLine["product.categories"] || [];
                if (typeof value === "undefined" || value === null) {
                    return builtLine;
                }
                var categories = builtLine["product.categories"];
                categories.push({
                    handle: value,
                });
                return builtLine;
            },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Product Category ".concat(index + 1, " Handle");
            },
        },
    },
    "Product Category Name": {
        name: "Product Category Name",
        importDescriptor: {
            match: /Product Category \d+ Name/,
            reducer: function (builtLine) { return builtLine; },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Product Category ".concat(index + 1, " Name");
            },
        },
    },
    "Product Category Description": {
        name: "Product Category Description",
        importDescriptor: {
            match: /Product Category \d+ Description/,
            reducer: function (builtLine) { return builtLine; },
        },
        exportDescriptor: {
            isDynamic: true,
            buildDynamicColumnName: function (index) {
                return "Product Category ".concat(index + 1, " Description");
            },
        },
    },
};
exports.productImportColumnsDefinition = {
    columns: Object.entries(exports.productColumnsDefinition)
        .map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], def = _b[1];
        return def.importDescriptor && __assign({ name: name }, def.importDescriptor);
    })
        .filter(function (v) {
        return !!v;
    }),
};
exports.productImportSalesChannelsColumnsDefinition = {
    columns: Object.entries(exports.productSalesChannelColumnsDefinition)
        .map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], def = _b[1];
        return def.importDescriptor && __assign({ name: name }, def.importDescriptor);
    })
        .filter(function (v) {
        return !!v;
    }),
};
exports.productImportProductCategoriesColumnsDefinition = {
    columns: Object.entries(exports.productCategoriesColumnsDefinition)
        .map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], def = _b[1];
        return def.importDescriptor && __assign({ name: name }, def.importDescriptor);
    })
        .filter(function (v) {
        return !!v;
    }),
};
//# sourceMappingURL=columns-definition.js.map