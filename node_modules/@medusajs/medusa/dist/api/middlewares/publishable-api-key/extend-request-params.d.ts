import { NextFunction, Request, Response } from "express";
export type PublishableApiKeyScopes = {
    sales_channel_ids: string[];
};
/**
 * The middleware, in case that a key is present in the request header,
 * attaches ids of resources within the scope of the key to the req object.
 *
 * @param req - request object
 * @param res - response object
 * @param next - next middleware call
 *
 * @throws if sales channel id is passed as a url or body param
 *         but that id is not in the scope defined by the PK from the header
 */
declare function extendRequestParams(req: Request & {
    publishableApiKeyScopes: PublishableApiKeyScopes;
}, res: Response, next: NextFunction): Promise<void>;
export { extendRequestParams };
