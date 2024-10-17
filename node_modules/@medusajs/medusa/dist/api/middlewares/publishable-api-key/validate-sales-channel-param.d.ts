import { NextFunction, Request, Response } from "express";
import { PublishableApiKeyScopes } from "./extend-request-params";
/**
 * The middleware will return 400 if sales channel id is passed as an url or body param
 * but that id is not in the scope of the PK from the header.
 *
 * NOTE: must be applied after the `extendRequestParams` middleware
 *
 * @param req - request object
 * @param res - response object
 * @param next - next middleware call
 */
declare function validateSalesChannelParam(req: Request & {
    publishableApiKeyScopes: PublishableApiKeyScopes;
}, res: Response, next: NextFunction): Promise<void>;
export { validateSalesChannelParam };
