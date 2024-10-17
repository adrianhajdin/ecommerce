import { NextFunction } from "express";
import { AuthenticatedMedusaRequest } from "../../../../types/routing";
export declare function filterByValidSalesChannels(): (req: AuthenticatedMedusaRequest, _: any, next: NextFunction) => Promise<void>;
