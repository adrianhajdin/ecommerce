import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Oauth as OAuthModel } from "../models";
import { OauthRepository } from "../repositories/oauth";
import { Selector } from "../types/common";
import { MedusaContainer } from "../types/global";
import { CreateOauthInput, UpdateOauthInput } from "../types/oauth";
import EventBusService from "./event-bus";
type InjectedDependencies = MedusaContainer & {
    manager: EntityManager;
    eventBusService: EventBusService;
    oauthRepository: typeof OauthRepository;
};
declare class Oauth extends TransactionBaseService {
    static Events: {
        TOKEN_GENERATED: string;
        TOKEN_REFRESHED: string;
    };
    protected container_: InjectedDependencies;
    protected oauthRepository_: typeof OauthRepository;
    protected eventBus_: EventBusService;
    constructor(cradle: InjectedDependencies);
    retrieveByName(appName: string): Promise<OAuthModel>;
    retrieve(oauthId: string): Promise<OAuthModel>;
    list(selector: Selector<OAuthModel>): Promise<OAuthModel[]>;
    create(data: CreateOauthInput): Promise<OAuthModel>;
    update(id: string, update: UpdateOauthInput): Promise<OAuthModel>;
    registerOauthApp(appDetails: CreateOauthInput): Promise<OAuthModel>;
    generateToken(appName: string, code: string, state: string): Promise<OAuthModel>;
    refreshToken(appName: string): Promise<OAuthModel>;
}
export default Oauth;
