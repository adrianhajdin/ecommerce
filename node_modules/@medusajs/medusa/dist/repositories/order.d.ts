import { FindManyOptions, FindOptionsRelations } from "typeorm";
import { Order } from "../models";
export declare const OrderRepository: import("typeorm").Repository<Order> & {
    findWithRelations(relations?: FindOptionsRelations<Order>, optionsWithoutRelations?: Omit<FindManyOptions<Order>, "relations">): Promise<Order[]>;
    findOneWithRelations(relations?: FindOptionsRelations<Order>, optionsWithoutRelations?: Omit<FindManyOptions<Order>, "relations">): Promise<Order>;
};
export default OrderRepository;
