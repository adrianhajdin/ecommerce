import { FindOperator, FindOptionsWhere } from "typeorm";
import { Customer } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const CustomerRepository: import("typeorm").Repository<Customer> & {
    listAndCount(query: ExtendedFindConfig<Customer> & {
        where: FindOptionsWhere<Customer & {
            groups?: FindOperator<string[]>;
        }>;
    }, q?: string | undefined): Promise<[Customer[], number]>;
};
export default CustomerRepository;
