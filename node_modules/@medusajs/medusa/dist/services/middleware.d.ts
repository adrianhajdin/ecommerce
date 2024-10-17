import { RequestHandler, Router } from "express";
type middlewareHandlerType = (options: Record<string, unknown>) => RequestHandler;
type middlewareType = {
    middleware: middlewareHandlerType;
    options: Record<string, unknown>;
};
/**
 * Orchestrates dynamic middleware registered through the Medusa Middleware API
 */
declare class MiddlewareService {
    protected readonly postAuthentication_: middlewareType[];
    protected readonly preAuthentication_: middlewareType[];
    protected readonly preCartCreation_: RequestHandler[];
    protected readonly routers: Record<string, Router[]>;
    constructor();
    addRouter(path: string, router: Router): void;
    getRouters(path: string): Router[];
    /**
     * Validates a middleware function, throws if fn is not of type function.
     * @param {function} fn - the middleware function to validate.
     * @returns nothing if the middleware is a function
     */
    validateMiddleware_(fn: unknown): void;
    /**
     * Adds a middleware function to be called after authentication is completed.
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @param {object} options - the arguments that will be passed to the
     *   middleware
     * @return void
     */
    addPostAuthentication(middleware: middlewareHandlerType, options: Record<string, unknown>): void;
    /**
     * Adds a middleware function to be called before authentication is completed.
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @param {object} options - the arguments that will be passed to the
     *   middleware
     * @return void
     */
    addPreAuthentication(middleware: middlewareHandlerType, options: Record<string, unknown>): void;
    /**
     * Adds a middleware function to be called before cart creation
     * @param {function} middleware - the middleware function. Should return a
     *   middleware function.
     * @return {void}
     */
    addPreCartCreation(middleware: RequestHandler): void;
    /**
     * Adds post authentication middleware to an express app.
     * @param {ExpressApp} app - the express app to add the middleware to
     * @return {void}
     */
    usePostAuthentication(app: Router): void;
    /**
     * Adds pre authentication middleware to an express app.
     * @param {ExpressApp} app - the express app to add the middleware to
     * @return {void}
     */
    usePreAuthentication(app: Router): void;
    usePreCartCreation(): RequestHandler[];
}
export default MiddlewareService;
