import { JwtPayload } from "jsonwebtoken";
import { EntityManager } from "typeorm";
import { UserService } from ".";
import { User } from "..";
import { TransactionBaseService } from "../interfaces";
import { UserRoles } from "../models/user";
import { InviteRepository } from "../repositories/invite";
import { UserRepository } from "../repositories/user";
import { ConfigModule } from "../types/global";
import { ListInvite } from "../types/invites";
import EventBusService from "./event-bus";
type InviteServiceProps = {
    manager: EntityManager;
    userService: UserService;
    userRepository: typeof UserRepository;
    inviteRepository: typeof InviteRepository;
    eventBusService: EventBusService;
};
declare class InviteService extends TransactionBaseService {
    static Events: {
        CREATED: string;
    };
    protected readonly userService_: UserService;
    protected readonly userRepo_: typeof UserRepository;
    protected readonly inviteRepository_: typeof InviteRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly configModule_: ConfigModule;
    constructor({ userService, userRepository, inviteRepository, eventBusService, }: InviteServiceProps, configModule: ConfigModule);
    generateToken(data: any): string;
    list(selector: any, config?: {}): Promise<ListInvite[]>;
    /**
     * Updates an account_user.
     * @param user - user emails
     * @param role - role to assign to the user
     * @param validDuration - role to assign to the user
     * @return the result of create
     */
    create(user: string, role: UserRoles, validDuration?: number): Promise<void>;
    /**
     * Deletes an invite from a given user id.
     * @param inviteId - the id of the invite to delete. Must be
     *   castable as an ObjectId
     * @return the result of the delete operation.
     */
    delete(inviteId: any): Promise<void>;
    accept(token: any, user_: any): Promise<User>;
    verifyToken(token: any): JwtPayload | string;
    resend(id: any): Promise<void>;
}
export default InviteService;
