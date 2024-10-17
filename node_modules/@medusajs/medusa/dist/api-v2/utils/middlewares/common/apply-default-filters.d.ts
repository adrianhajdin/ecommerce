import { NextFunction } from "express";
import { MedusaRequest } from "../../../../types/routing";
export declare function applyDefaultFilters<TFilter extends object>(filtersToApply: TFilter): (req: MedusaRequest, _: any, next: NextFunction) => Promise<void>;
