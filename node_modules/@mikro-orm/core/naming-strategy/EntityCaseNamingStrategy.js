"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCaseNamingStrategy = void 0;
const AbstractNamingStrategy_1 = require("./AbstractNamingStrategy");
/**
 * This strategy keeps original entity/property names for table/column.
 */
class EntityCaseNamingStrategy extends AbstractNamingStrategy_1.AbstractNamingStrategy {
    classToTableName(entityName) {
        return entityName;
    }
    joinColumnName(propertyName) {
        return propertyName;
    }
    joinKeyColumnName(entityName, referencedColumnName, composite = false) {
        const name = entityName.substr(0, 1).toLowerCase() + entityName.substr(1);
        if (composite && referencedColumnName) {
            return name + '_' + referencedColumnName;
        }
        return name;
    }
    joinTableName(sourceEntity, targetEntity, propertyName) {
        return this.classToTableName(sourceEntity) + '_' + this.propertyToColumnName(propertyName);
    }
    propertyToColumnName(propertyName) {
        return propertyName;
    }
    referenceColumnName() {
        return 'id';
    }
}
exports.EntityCaseNamingStrategy = EntityCaseNamingStrategy;
