import { MedusaContainer } from "@medusajs/types";
import { AdminPriceListRemoteQueryDTO } from "../types";
export declare function listPriceLists({ container, remoteQueryFields, variables, }: {
    container: MedusaContainer;
    remoteQueryFields: string[];
    variables: Record<string, any>;
}): Promise<[AdminPriceListRemoteQueryDTO[], number]>;
