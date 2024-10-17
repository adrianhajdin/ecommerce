import { NextFunction } from "express";
import { MedusaRequest } from "../../types/routing";
export declare function maybeApplyLinkFilter({ entryPoint, resourceId, filterableField, }: {
    entryPoint: any;
    resourceId: any;
    filterableField: any;
}): (req: MedusaRequest, _: any, next: NextFunction) => Promise<void>;
