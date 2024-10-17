"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImplementingTypes = void 0;
function getImplementingTypes(interfaceName, schema) {
    const allTypesMap = schema.getTypeMap();
    const result = [];
    for (const graphqlTypeName in allTypesMap) {
        const graphqlType = allTypesMap[graphqlTypeName];
        if ('getInterfaces' in graphqlType) {
            const allInterfaces = graphqlType.getInterfaces();
            if (allInterfaces.find(int => int.name === interfaceName)) {
                result.push(graphqlType.name);
            }
        }
    }
    return result;
}
exports.getImplementingTypes = getImplementingTypes;
