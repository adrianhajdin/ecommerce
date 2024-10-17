import { NextFunction, Request, Response } from "express";
/**
 * Middleware that includes the default sales channel on the request, if no sales channels present
 * @param context Object of options
 * @param context.attachChannelAsArray Whether to attach the default sales channel as an array or just a string
 */
export declare function withDefaultSalesChannel({ attachChannelAsArray, }?: {
    attachChannelAsArray: boolean;
}): (req: Request, res: Response, next: NextFunction) => Promise<void>;
