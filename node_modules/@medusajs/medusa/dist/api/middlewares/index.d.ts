/// <reference types="qs" />
/// <reference types="express" />
export { default as authenticate } from "./authenticate";
export { default as authenticateCustomer } from "./authenticate-customer";
export { default as wrapHandler } from "./await-middleware";
export { canAccessBatchJob } from "./batch-job/can-access-batch-job";
export { getRequestedBatchJob } from "./batch-job/get-requested-batch-job";
export { doesConditionBelongToDiscount } from "./discount/does-condition-belong-to-discount";
export { default as errorHandler } from "./error-handler";
export { isFeatureFlagEnabled } from "./feature-flag-enabled";
export { default as normalizeQuery } from "./normalized-query";
export { default as requireCustomerAuthentication } from "./require-customer-authentication";
export { transformBody } from "./transform-body";
export { transformIncludesOptions } from "./transform-includes-options";
export { transformQuery, transformStoreQuery } from "./transform-query";
/**
 * @deprecated you can now import the middlewares directly without passing by the default export
 * e.g `import { authenticate } from "@medusajs/medusa"
 */
declare const _default: {
    authenticate: () => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    authenticateCustomer: () => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    requireCustomerAuthentication: () => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    normalizeQuery: () => (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
    /**
     * @deprecated use `import { wrapHandler } from "@medusajs/medusa"`
     */
    wrap: (fn: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>) => Promise<void>) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
export default _default;
