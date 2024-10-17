"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrder = exports.DraftOrderStatus = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var base_entity_1 = require("../interfaces/models/base-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var manual_auto_increment_1 = require("../utils/manual-auto-increment");
var cart_1 = require("./cart");
var order_1 = require("./order");
/**
 * @enum
 *
 * The draft order's status.
 */
var DraftOrderStatus;
(function (DraftOrderStatus) {
    /**
     * The draft order is open.
     */
    DraftOrderStatus["OPEN"] = "open";
    /**
     * The draft order is completed, and an order has been created from it.
     */
    DraftOrderStatus["COMPLETED"] = "completed";
})(DraftOrderStatus = exports.DraftOrderStatus || (exports.DraftOrderStatus = {}));
var DraftOrder = /** @class */ (function (_super) {
    __extends(DraftOrder, _super);
    function DraftOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    DraftOrder.prototype.beforeInsert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var disId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "dorder");
                        if (!(process.env.NODE_ENV === "development" && !this.display_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, manual_auto_increment_1.manualAutoIncrement)("draft_order")];
                    case 1:
                        disId = _a.sent();
                        if (disId) {
                            this.display_id = disId;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: DraftOrderStatus, default: "open" }),
        __metadata("design:type", String)
    ], DraftOrder.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)("increment"),
        __metadata("design:type", Number)
    ], DraftOrder.prototype, "display_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], DraftOrder.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return cart_1.Cart; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], DraftOrder.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], DraftOrder.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return order_1.Order; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], DraftOrder.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DraftOrder.prototype, "canceled_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], DraftOrder.prototype, "completed_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], DraftOrder.prototype, "no_notification_order", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DraftOrder.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], DraftOrder.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DraftOrder.prototype, "beforeInsert", null);
    DraftOrder = __decorate([
        (0, typeorm_1.Entity)()
    ], DraftOrder);
    return DraftOrder;
}(base_entity_1.BaseEntity));
exports.DraftOrder = DraftOrder;
/**
 * @schema DraftOrder
 * title: "DraftOrder"
 * description: "A draft order is created by an admin without direct involvement of the customer. Once its payment is marked as captured, it is transformed into an order."
 * type: object
 * required:
 *   - canceled_at
 *   - cart_id
 *   - completed_at
 *   - created_at
 *   - display_id
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - no_notification_order
 *   - order_id
 *   - status
 *   - updated_at
 * properties:
 *   id:
 *     description: The draft order's ID
 *     type: string
 *     example: dorder_01G8TJFKBG38YYFQ035MSVG03C
 *   status:
 *     description: The status of the draft order. It's changed to `completed` when it's transformed to an order.
 *     type: string
 *     enum:
 *       - open
 *       - completed
 *     default: open
 *   display_id:
 *     description: The draft order's display ID
 *     type: string
 *     example: 2
 *   cart_id:
 *     description: The ID of the cart associated with the draft order.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart associated with the draft order.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   order_id:
 *     description: The ID of the order created from the draft order when its payment is captured.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order created from the draft order when its payment is captured.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   canceled_at:
 *     description: The date the draft order was canceled at.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   completed_at:
 *     description: The date the draft order was completed at.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   no_notification_order:
 *     description: Whether to send the customer notifications regarding order updates.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the cart associated with the draft order in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=draft-order.js.map