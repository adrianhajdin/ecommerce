import { NextFunction, Request, Response } from "express";
/**
 * The middleware check if requested product is assigned to a SC associated with PK in the header.
 *
 * @param req - request object
 * @param res - response object
 * @param next - next middleware call
 */
declare function validateProductVariantSalesChannelAssociation(req: Request, res: Response, next: NextFunction): Promise<void>;
export { validateProductVariantSalesChannelAssociation };
