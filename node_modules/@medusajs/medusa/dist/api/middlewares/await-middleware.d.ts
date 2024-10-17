import { Request, RequestHandler, Response } from "express";
type handler = (req: Request, res: Response) => Promise<void>;
/**
 * @deprecated use `import { wrapHandler } from "@medusajs/utils"`
 */
declare const _default: (fn: handler) => RequestHandler;
export default _default;
/**
 * @schema MultipleErrors
 * title: "Multiple Errors"
 * type: object
 * properties:
 *  errors:
 *    type: array
 *    description: Array of errors
 *    items:
 *      $ref: "#/components/schemas/Error"
 *  message:
 *    type: string
 *    default: "Provided request body contains errors. Please check the data and retry the request"
 */
