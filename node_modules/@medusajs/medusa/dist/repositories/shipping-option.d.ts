import { ShippingOption } from "../models";
export declare const ShippingOptionRepository: import("typeorm").Repository<ShippingOption> & {
    upsertShippingProfile(shippingOptionIds: string[], shippingProfileId: string): Promise<ShippingOption[]>;
};
export default ShippingOptionRepository;
