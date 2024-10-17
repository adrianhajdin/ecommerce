import { AuthenticateResult } from "../types/auth";
import { TransactionBaseService } from "../interfaces";
import UserService from "./user";
import CustomerService from "./customer";
import { EntityManager } from "typeorm";
import { Logger } from "@medusajs/types";
type InjectedDependencies = {
    manager: EntityManager;
    userService: UserService;
    customerService: CustomerService;
    logger: Logger;
};
/**
 * Can authenticate a user based on email password combination
 */
declare class AuthService extends TransactionBaseService {
    protected readonly userService_: UserService;
    protected readonly customerService_: CustomerService;
    protected readonly logger_: Logger;
    constructor({ userService, customerService, logger }: InjectedDependencies);
    /**
     * Verifies if a password is valid given the provided password hash
     * @param {string} password - the raw password to check
     * @param {string} hash - the hash to compare against
     * @return {bool} the result of the comparison
     */
    protected comparePassword_(password: string, hash: string): Promise<boolean>;
    /**
     * Authenticates a given user with an API token
     * @param {string} token - the api_token of the user to authenticate
     * @return {AuthenticateResult}
     *    success: whether authentication succeeded
     *    user: the user document if authentication succeeded
     *    error: a string with the error message
     */
    authenticateAPIToken(token: string): Promise<AuthenticateResult>;
    /**
     * Authenticates a given user based on an email, password combination. Uses
     * scrypt to match password with hashed value.
     * @param {string} email - the email of the user
     * @param {string} password - the password of the user
     * @return {AuthenticateResult}
     *    success: whether authentication succeeded
     *    user: the user document if authentication succeeded
     *    error: a string with the error message
     */
    authenticate(email: string, password: string): Promise<AuthenticateResult>;
    /**
     * Authenticates a customer based on an email, password combination. Uses
     * scrypt to match password with hashed value.
     * @param {string} email - the email of the user
     * @param {string} password - the password of the user
     * @return {{ success: (bool), customer: (object | undefined) }}
     *    success: whether authentication succeeded
     *    customer: the customer document if authentication succeded
     *    error: a string with the error message
     */
    authenticateCustomer(email: string, password: string): Promise<AuthenticateResult>;
}
export default AuthService;
