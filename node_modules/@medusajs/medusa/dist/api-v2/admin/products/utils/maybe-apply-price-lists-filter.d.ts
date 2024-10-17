import { NextFunction } from "express";
import { MedusaRequest } from "../../../../types/routing";
export declare function maybeApplyPriceListsFilter(): (req: MedusaRequest, _: any, next: NextFunction) => Promise<void>;
