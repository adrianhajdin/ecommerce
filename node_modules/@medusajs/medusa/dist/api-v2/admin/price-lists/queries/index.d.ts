import { AdminPriceListRemoteQueryDTO } from "../types";
export * from "./get-price-list";
export * from "./list-price-lists";
export * from "./list-prices";
export declare function buildPriceListResponse(priceLists: any, apiFields: any): AdminPriceListRemoteQueryDTO[];
