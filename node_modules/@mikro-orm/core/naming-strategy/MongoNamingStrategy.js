"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoNamingStrategy = void 0;
const AbstractNamingStrategy_1 = require("./AbstractNamingStrategy");
class MongoNamingStrategy extends AbstractNamingStrategy_1.AbstractNamingStrategy {
    classToTableName(entityName) {
        return entityName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    joinColumnName(propertyName) {
        return propertyName;
    }
    joinKeyColumnName(entityName, referencedColumnName) {
        return entityName;
    }
    joinTableName(sourceEntity, targetEntity, propertyName) {
        return this.classToTableName(sourceEntity) + '_' + this.propertyToColumnName(propertyName);
    }
    propertyToColumnName(propertyName) {
        return propertyName;
    }
    referenceColumnName() {
        return '_id';
    }
}
exports.MongoNamingStrategy = MongoNamingStrategy;
