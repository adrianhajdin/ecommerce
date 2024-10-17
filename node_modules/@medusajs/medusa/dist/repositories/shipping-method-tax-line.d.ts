import { ShippingMethodTaxLine } from "../models";
export declare const ShippingMethodTaxLineRepository: import("typeorm").Repository<ShippingMethodTaxLine> & {
    upsertLines(lines: ShippingMethodTaxLine[]): Promise<ShippingMethodTaxLine[]>;
    deleteForCart(cartId: string): Promise<void>;
};
export default ShippingMethodTaxLineRepository;
