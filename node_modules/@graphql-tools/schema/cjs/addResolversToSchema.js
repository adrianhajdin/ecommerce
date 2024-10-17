"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addResolversToSchema = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("@graphql-tools/utils");
const checkForResolveTypeResolver_js_1 = require("./checkForResolveTypeResolver.js");
const extendResolversFromInterfaces_js_1 = require("./extendResolversFromInterfaces.js");
function addResolversToSchema({ schema, resolvers: inputResolvers, defaultFieldResolver, resolverValidationOptions = {}, inheritResolversFromInterfaces = false, updateResolversInPlace = false, }) {
    const { requireResolversToMatchSchema = 'error', requireResolversForResolveType } = resolverValidationOptions;
    const resolvers = inheritResolversFromInterfaces
        ? (0, extendResolversFromInterfaces_js_1.extendResolversFromInterfaces)(schema, inputResolvers)
        : inputResolvers;
    for (const typeName in resolvers) {
        const resolverValue = resolvers[typeName];
        const resolverType = typeof resolverValue;
        if (resolverType !== 'object') {
            throw new Error(`"${typeName}" defined in resolvers, but has invalid value "${resolverValue}". The resolver's value must be of type object.`);
        }
        const type = schema.getType(typeName);
        if (type == null) {
            const msg = `"${typeName}" defined in resolvers, but not in schema`;
            if (requireResolversToMatchSchema && requireResolversToMatchSchema !== 'error') {
                if (requireResolversToMatchSchema === 'warn') {
                    console.warn(msg);
                }
                continue;
            }
            throw new Error(msg);
        }
        else if ((0, graphql_1.isSpecifiedScalarType)(type)) {
            // allow -- without recommending -- overriding of specified scalar types
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else {
                    type[fieldName] = resolverValue[fieldName];
                }
            }
        }
        else if ((0, graphql_1.isEnumType)(type)) {
            const values = type.getValues();
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__') &&
                    !values.some(value => value.name === fieldName) &&
                    requireResolversToMatchSchema &&
                    requireResolversToMatchSchema !== 'ignore') {
                    const msg = `${type.name}.${fieldName} was defined in resolvers, but not present within ${type.name}`;
                    if (requireResolversToMatchSchema === 'error') {
                        throw new Error(msg);
                    }
                    else {
                        console.warn(msg);
                    }
                }
            }
        }
        else if ((0, graphql_1.isUnionType)(type)) {
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__') &&
                    requireResolversToMatchSchema &&
                    requireResolversToMatchSchema !== 'ignore') {
                    const msg = `${type.name}.${fieldName} was defined in resolvers, but ${type.name} is not an object or interface type`;
                    if (requireResolversToMatchSchema === 'error') {
                        throw new Error(msg);
                    }
                    else {
                        console.warn(msg);
                    }
                }
            }
        }
        else if ((0, graphql_1.isObjectType)(type) || (0, graphql_1.isInterfaceType)(type)) {
            for (const fieldName in resolverValue) {
                if (!fieldName.startsWith('__')) {
                    const fields = type.getFields();
                    const field = fields[fieldName];
                    if (field == null) {
                        // Field present in resolver but not in schema
                        if (requireResolversToMatchSchema && requireResolversToMatchSchema !== 'ignore') {
                            const msg = `${typeName}.${fieldName} defined in resolvers, but not in schema`;
                            if (requireResolversToMatchSchema === 'error') {
                                throw new Error(msg);
                            }
                            else {
                                console.error(msg);
                            }
                        }
                    }
                    else {
                        // Field present in both the resolver and schema
                        const fieldResolve = resolverValue[fieldName];
                        if (typeof fieldResolve !== 'function' && typeof fieldResolve !== 'object') {
                            throw new Error(`Resolver ${typeName}.${fieldName} must be object or function`);
                        }
                    }
                }
            }
        }
    }
    schema = updateResolversInPlace
        ? addResolversToExistingSchema(schema, resolvers, defaultFieldResolver)
        : createNewSchemaWithResolvers(schema, resolvers, defaultFieldResolver);
    if (requireResolversForResolveType && requireResolversForResolveType !== 'ignore') {
        (0, checkForResolveTypeResolver_js_1.checkForResolveTypeResolver)(schema, requireResolversForResolveType);
    }
    return schema;
}
exports.addResolversToSchema = addResolversToSchema;
function addResolversToExistingSchema(schema, resolvers, defaultFieldResolver) {
    const typeMap = schema.getTypeMap();
    for (const typeName in resolvers) {
        const type = schema.getType(typeName);
        const resolverValue = resolvers[typeName];
        if ((0, graphql_1.isScalarType)(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else if (fieldName === 'astNode' && type.astNode != null) {
                    type.astNode = {
                        ...type.astNode,
                        description: resolverValue?.astNode?.description ??
                            type.astNode.description,
                        directives: (type.astNode.directives ?? []).concat(resolverValue?.astNode?.directives ?? []),
                    };
                }
                else if (fieldName === 'extensionASTNodes' && type.extensionASTNodes != null) {
                    type.extensionASTNodes = type.extensionASTNodes.concat(resolverValue?.extensionASTNodes ?? []);
                }
                else if (fieldName === 'extensions' &&
                    type.extensions != null &&
                    resolverValue.extensions != null) {
                    type.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                }
                else {
                    type[fieldName] = resolverValue[fieldName];
                }
            }
        }
        else if ((0, graphql_1.isEnumType)(type)) {
            const config = type.toConfig();
            const enumValueConfigMap = config.values;
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    config[fieldName.substring(2)] = resolverValue[fieldName];
                }
                else if (fieldName === 'astNode' && config.astNode != null) {
                    config.astNode = {
                        ...config.astNode,
                        description: resolverValue?.astNode?.description ??
                            config.astNode.description,
                        directives: (config.astNode.directives ?? []).concat(resolverValue?.astNode?.directives ?? []),
                    };
                }
                else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                    config.extensionASTNodes = config.extensionASTNodes.concat(resolverValue?.extensionASTNodes ?? []);
                }
                else if (fieldName === 'extensions' &&
                    type.extensions != null &&
                    resolverValue.extensions != null) {
                    type.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                }
                else if (enumValueConfigMap[fieldName]) {
                    enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                }
            }
            typeMap[typeName] = new graphql_1.GraphQLEnumType(config);
        }
        else if ((0, graphql_1.isUnionType)(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                }
            }
        }
        else if ((0, graphql_1.isObjectType)(type) || (0, graphql_1.isInterfaceType)(type)) {
            for (const fieldName in resolverValue) {
                if (fieldName.startsWith('__')) {
                    // this is for isTypeOf and resolveType and all the other stuff.
                    type[fieldName.substring(2)] = resolverValue[fieldName];
                    continue;
                }
                const fields = type.getFields();
                const field = fields[fieldName];
                if (field != null) {
                    const fieldResolve = resolverValue[fieldName];
                    if (typeof fieldResolve === 'function') {
                        // for convenience. Allows shorter syntax in resolver definition file
                        field.resolve = fieldResolve.bind(resolverValue);
                    }
                    else {
                        setFieldProperties(field, fieldResolve);
                    }
                }
            }
        }
    }
    // serialize all default values prior to healing fields with new scalar/enum types.
    (0, utils_1.forEachDefaultValue)(schema, utils_1.serializeInputValue);
    // schema may have new scalar/enum types that require healing
    (0, utils_1.healSchema)(schema);
    // reparse all default values with new parsing functions.
    (0, utils_1.forEachDefaultValue)(schema, utils_1.parseInputValue);
    if (defaultFieldResolver != null) {
        (0, utils_1.forEachField)(schema, field => {
            if (!field.resolve) {
                field.resolve = defaultFieldResolver;
            }
        });
    }
    return schema;
}
function createNewSchemaWithResolvers(schema, resolvers, defaultFieldResolver) {
    schema = (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.SCALAR_TYPE]: type => {
            const config = type.toConfig();
            const resolverValue = resolvers[type.name];
            if (!(0, graphql_1.isSpecifiedScalarType)(type) && resolverValue != null) {
                for (const fieldName in resolverValue) {
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    }
                    else if (fieldName === 'astNode' && config.astNode != null) {
                        config.astNode = {
                            ...config.astNode,
                            description: resolverValue?.astNode?.description ??
                                config.astNode.description,
                            directives: (config.astNode.directives ?? []).concat(resolverValue?.astNode?.directives ?? []),
                        };
                    }
                    else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                        config.extensionASTNodes = config.extensionASTNodes.concat(resolverValue?.extensionASTNodes ?? []);
                    }
                    else if (fieldName === 'extensions' &&
                        config.extensions != null &&
                        resolverValue.extensions != null) {
                        config.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                    }
                    else {
                        config[fieldName] = resolverValue[fieldName];
                    }
                }
                return new graphql_1.GraphQLScalarType(config);
            }
        },
        [utils_1.MapperKind.ENUM_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            const config = type.toConfig();
            const enumValueConfigMap = config.values;
            if (resolverValue != null) {
                for (const fieldName in resolverValue) {
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    }
                    else if (fieldName === 'astNode' && config.astNode != null) {
                        config.astNode = {
                            ...config.astNode,
                            description: resolverValue?.astNode?.description ??
                                config.astNode.description,
                            directives: (config.astNode.directives ?? []).concat(resolverValue?.astNode?.directives ?? []),
                        };
                    }
                    else if (fieldName === 'extensionASTNodes' && config.extensionASTNodes != null) {
                        config.extensionASTNodes = config.extensionASTNodes.concat(resolverValue?.extensionASTNodes ?? []);
                    }
                    else if (fieldName === 'extensions' &&
                        config.extensions != null &&
                        resolverValue.extensions != null) {
                        config.extensions = Object.assign(Object.create(null), type.extensions, resolverValue.extensions);
                    }
                    else if (enumValueConfigMap[fieldName]) {
                        enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                    }
                }
                return new graphql_1.GraphQLEnumType(config);
            }
        },
        [utils_1.MapperKind.UNION_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__resolveType']) {
                    config.resolveType = resolverValue['__resolveType'];
                }
                return new graphql_1.GraphQLUnionType(config);
            }
        },
        [utils_1.MapperKind.OBJECT_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__isTypeOf']) {
                    config.isTypeOf = resolverValue['__isTypeOf'];
                }
                return new graphql_1.GraphQLObjectType(config);
            }
        },
        [utils_1.MapperKind.INTERFACE_TYPE]: type => {
            const resolverValue = resolvers[type.name];
            if (resolverValue != null) {
                const config = type.toConfig();
                if (resolverValue['__resolveType']) {
                    config.resolveType = resolverValue['__resolveType'];
                }
                return new graphql_1.GraphQLInterfaceType(config);
            }
        },
        [utils_1.MapperKind.COMPOSITE_FIELD]: (fieldConfig, fieldName, typeName) => {
            const resolverValue = resolvers[typeName];
            if (resolverValue != null) {
                const fieldResolve = resolverValue[fieldName];
                if (fieldResolve != null) {
                    const newFieldConfig = { ...fieldConfig };
                    if (typeof fieldResolve === 'function') {
                        // for convenience. Allows shorter syntax in resolver definition file
                        newFieldConfig.resolve = fieldResolve.bind(resolverValue);
                    }
                    else {
                        setFieldProperties(newFieldConfig, fieldResolve);
                    }
                    return newFieldConfig;
                }
            }
        },
    });
    if (defaultFieldResolver != null) {
        schema = (0, utils_1.mapSchema)(schema, {
            [utils_1.MapperKind.OBJECT_FIELD]: fieldConfig => ({
                ...fieldConfig,
                resolve: fieldConfig.resolve != null ? fieldConfig.resolve : defaultFieldResolver,
            }),
        });
    }
    return schema;
}
function setFieldProperties(field, propertiesObj) {
    for (const propertyName in propertiesObj) {
        field[propertyName] = propertiesObj[propertyName];
    }
}
