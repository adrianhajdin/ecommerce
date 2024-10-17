import { MedusaContainer } from "@medusajs/types";
export declare const fetchPriceList: (id: string, scope: MedusaContainer, fields: string[]) => Promise<any>;
export declare const transformPriceList: (priceList: any) => any;
export declare const fetchPriceListPriceIdsForProduct: (priceListId: string, productIds: string[], scope: MedusaContainer) => Promise<string[]>;
