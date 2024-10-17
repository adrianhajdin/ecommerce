"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @packageDocumentation
 * @module migrations
 */
__exportStar(require("./Migrator"), exports);
__exportStar(require("./Migration"), exports);
__exportStar(require("./MigrationRunner"), exports);
__exportStar(require("./MigrationGenerator"), exports);
__exportStar(require("./JSMigrationGenerator"), exports);
__exportStar(require("./TSMigrationGenerator"), exports);
__exportStar(require("./MigrationStorage"), exports);
__exportStar(require("./typings"), exports);
