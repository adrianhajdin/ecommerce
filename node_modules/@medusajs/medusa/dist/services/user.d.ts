import { Selector } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { User } from "../models";
import { UserRepository } from "../repositories/user";
import { FindConfig } from "../types/common";
import { CreateUserInput, FilterableUserProps, UpdateUserInput } from "../types/user";
import AnalyticsConfigService from "./analytics-config";
import EventBusService from "./event-bus";
type UserServiceProps = {
    userRepository: typeof UserRepository;
    analyticsConfigService: AnalyticsConfigService;
    eventBusService: EventBusService;
    manager: EntityManager;
    featureFlagRouter: FlagRouter;
};
/**
 * Provides layer to manipulate users.
 */
declare class UserService extends TransactionBaseService {
    static Events: {
        PASSWORD_RESET: string;
        CREATED: string;
        UPDATED: string;
        DELETED: string;
    };
    protected readonly analyticsConfigService_: AnalyticsConfigService;
    protected readonly userRepository_: typeof UserRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ userRepository, eventBusService, analyticsConfigService, featureFlagRouter, }: UserServiceProps);
    /**
     * @param {FilterableUserProps} selector - the query object for find
     * @param {Object} config - the configuration object for the query
     * @return {Promise} the result of the find operation
     */
    list(selector?: Selector<FilterableUserProps> & {
        q?: string;
    }, config?: FindConfig<FilterableUserProps>): Promise<User[]>;
    listAndCount(selector?: Selector<FilterableUserProps> & {
        q?: string;
    }, config?: FindConfig<FilterableUserProps>): Promise<[User[], number]>;
    /**
     * Gets a user by id.
     * Throws in case of DB Error and if user was not found.
     * @param {string} userId - the id of the user to get.
     * @param {FindConfig} config - query configs
     * @return {Promise<User>} the user document.
     */
    retrieve(userId: string, config?: FindConfig<User>): Promise<User>;
    /**
     * Gets a user by api token.
     * Throws in case of DB Error and if user was not found.
     * @param {string} apiToken - the token of the user to get.
     * @param {string[]} relations - relations to include with the user.
     * @return {Promise<User>} the user document.
     */
    retrieveByApiToken(apiToken: string, relations?: string[]): Promise<User>;
    /**
     * Gets a user by email.
     * Throws in case of DB Error and if user was not found.
     * @param {string} email - the email of the user to get.
     * @param {FindConfig} config - query config
     * @return {Promise<User>} the user document.
     */
    retrieveByEmail(email: string, config?: FindConfig<User>): Promise<User>;
    /**
     * Hashes a password
     * @param {string} password - the value to hash
     * @return {string} hashed password
     */
    hashPassword_(password: string): Promise<string>;
    /**
     * Creates a user with username being validated.
     * Fails if email is not a valid format.
     * @param {object} user - the user to create
     * @param {string} password - user's password to hash
     * @return {Promise} the result of create
     */
    create(user: CreateUserInput, password: string): Promise<User>;
    /**
     * Updates a user.
     * @param {object} userId - id of the user to update
     * @param {object} update - the values to be updated on the user
     * @return {Promise} the result of create
     */
    update(userId: string, update: UpdateUserInput): Promise<User>;
    /**
     * Deletes a user from a given user id.
     * @param {string} userId - the id of the user to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    delete(userId: string): Promise<void>;
    /**
     * Sets a password for a user
     * Fails if no user exists with userId and if the hashing of the new
     * password does not work.
     * @param {string} userId - the userId to set password for
     * @param {string} password - the old password to set
     * @return {Promise} the result of the update operation
     */
    setPassword_(userId: string, password: string): Promise<User>;
    /**
     * Generate a JSON Web token, that will be sent to a user, that wishes to
     * reset password.
     * The token will be signed with the users current password hash as a secret
     * a long side a payload with userId and the expiry time for the token, which
     * is always 15 minutes.
     * @param {string} userId - the id of the user to reset password for
     * @return {string} the generated JSON web token
     */
    generateResetPasswordToken(userId: string): Promise<string>;
}
export default UserService;
