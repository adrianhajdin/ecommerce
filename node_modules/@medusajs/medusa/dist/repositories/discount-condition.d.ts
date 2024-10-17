import { DeleteResult, EntityTarget } from "typeorm";
import { Discount, DiscountCondition, DiscountConditionCustomerGroup, DiscountConditionProduct, DiscountConditionProductCollection, DiscountConditionProductTag, DiscountConditionProductType, DiscountConditionType } from "../models";
export declare enum DiscountConditionJoinTableForeignKey {
    PRODUCT_ID = "product_id",
    PRODUCT_TYPE_ID = "product_type_id",
    PRODUCT_COLLECTION_ID = "product_collection_id",
    PRODUCT_TAG_ID = "product_tag_id",
    CUSTOMER_GROUP_ID = "customer_group_id"
}
type DiscountConditionResourceType = EntityTarget<DiscountConditionProduct | DiscountConditionProductType | DiscountConditionProductCollection | DiscountConditionProductTag | DiscountConditionCustomerGroup>;
export declare const DiscountConditionRepository: import("typeorm").Repository<DiscountCondition> & {
    findOneWithDiscount(conditionId: string, discountId: string): Promise<(DiscountCondition & {
        discount: Discount;
    }) | undefined>;
    getJoinTableResourceIdentifiers(type: string): {
        joinTable: string;
        resourceKey: string;
        joinTableForeignKey: DiscountConditionJoinTableForeignKey;
        conditionTable: DiscountConditionResourceType;
        joinTableKey: string;
        relatedTable: string;
    };
    removeConditionResources(id: string, type: DiscountConditionType, resourceIds: (string | {
        id: string;
    })[]): Promise<DeleteResult | void>;
    addConditionResources(conditionId: string, resourceIds: (string | {
        id: string;
    })[], type: DiscountConditionType, overrideExisting?: boolean): Promise<(DiscountConditionProduct | DiscountConditionProductType | DiscountConditionProductCollection | DiscountConditionProductTag | DiscountConditionCustomerGroup)[]>;
    queryConditionTable({ type, conditionId, resourceId, }: {
        type: any;
        conditionId: any;
        resourceId: any;
    }): Promise<number>;
    isValidForProduct(discountRuleId: string, productId: string): Promise<boolean>;
    canApplyForCustomer(discountRuleId: string, customerId: string): Promise<boolean>;
};
export default DiscountConditionRepository;
