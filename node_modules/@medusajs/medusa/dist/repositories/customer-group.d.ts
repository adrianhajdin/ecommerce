import { DeleteResult, FindOperator, FindOptionsRelations } from "typeorm";
import { CustomerGroup } from "../models";
import { ExtendedFindConfig } from "../types/common";
export type DefaultWithoutRelations = Omit<ExtendedFindConfig<CustomerGroup>, "relations">;
export type FindWithoutRelationsOptions = DefaultWithoutRelations & {
    where: DefaultWithoutRelations["where"] & {
        discount_condition_id?: string | FindOperator<string>;
    };
};
export declare const CustomerGroupRepository: import("typeorm").Repository<CustomerGroup> & {
    addCustomers(groupId: string, customerIds: string[]): Promise<CustomerGroup>;
    removeCustomers(groupId: string, customerIds: string[]): Promise<DeleteResult>;
    findWithRelationsAndCount(relations?: FindOptionsRelations<CustomerGroup>, idsOrOptionsWithoutRelations?: string[] | FindWithoutRelationsOptions): Promise<[CustomerGroup[], number]>;
};
export default CustomerGroupRepository;
