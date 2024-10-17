import { NextFunction, Request, Response } from "express";
/**
 * Retrieve the includes options from the fields query param.
 * If the include option is present then assigned it to includes on req
 * @param allowedIncludes The list of fields that can be passed and assign to req.includes
 * @param expectedIncludes The list of fields that the consumer can pass to the end point using this middleware. It is a subset of `allowedIncludes`
 */
export declare function transformIncludesOptions(allowedIncludes?: string[], expectedIncludes?: string[]): (req: Request, res: Response, next: NextFunction) => void;
