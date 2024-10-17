import { ShippingProfile } from "../models";
export declare const ShippingProfileRepository: import("typeorm").Repository<ShippingProfile> & {
    findByProducts(productIds: string | string[]): Promise<{
        [product_id: string]: ShippingProfile[];
    }>;
};
export default ShippingProfileRepository;
