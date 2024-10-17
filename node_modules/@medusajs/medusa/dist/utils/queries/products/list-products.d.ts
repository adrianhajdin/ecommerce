import { MedusaContainer } from "@medusajs/types";
export declare function listProducts(container: MedusaContainer, filterableFields: any, listConfig: any): Promise<any[]>;
export declare const defaultAdminProductRemoteQueryObject: {
    fields: string[];
    images: {
        fields: string[];
    };
    tags: {
        fields: string[];
    };
    type: {
        fields: string[];
    };
    collection: {
        fields: string[];
    };
    categories: {
        fields: string[];
    };
    options: {
        fields: string[];
        values: {
            fields: string[];
        };
    };
    variants: {
        fields: string[];
        options: {
            fields: string[];
        };
    };
    profile: {
        fields: string[];
    };
    sales_channels: {
        fields: string[];
    };
};
