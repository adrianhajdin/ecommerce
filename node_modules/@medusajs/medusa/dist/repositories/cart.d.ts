import { FindManyOptions, FindOptionsRelations } from "typeorm";
import { Cart } from "../models";
export declare const CartRepository: import("typeorm").Repository<Cart> & {
    findWithRelations(relations?: FindOptionsRelations<Cart>, optionsWithoutRelations?: Omit<FindManyOptions<Cart>, "relations">): Promise<Cart[]>;
    findOneWithRelations(relations?: FindOptionsRelations<Cart>, optionsWithoutRelations?: Omit<FindManyOptions<Cart>, "relations">): Promise<Cart>;
};
export default CartRepository;
