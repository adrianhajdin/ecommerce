import { TransactionBaseService } from "../interfaces";
import { ClaimItem } from "../models";
import { ClaimImageRepository } from "../repositories/claim-image";
import { ClaimItemRepository } from "../repositories/claim-item";
import { ClaimTagRepository } from "../repositories/claim-tag";
import { CreateClaimItemInput } from "../types/claim";
import { FindConfig, Selector } from "../types/common";
import EventBusService from "./event-bus";
import LineItemService from "./line-item";
declare class ClaimItemService extends TransactionBaseService {
    static Events: {
        CREATED: string;
        UPDATED: string;
        CANCELED: string;
    };
    protected readonly lineItemService_: LineItemService;
    protected readonly eventBus_: EventBusService;
    protected readonly claimItemRepository_: typeof ClaimItemRepository;
    protected readonly claimTagRepository_: typeof ClaimTagRepository;
    protected readonly claimImageRepository_: typeof ClaimImageRepository;
    constructor({ claimItemRepository, claimTagRepository, claimImageRepository, lineItemService, eventBusService, }: {
        claimItemRepository: any;
        claimTagRepository: any;
        claimImageRepository: any;
        lineItemService: any;
        eventBusService: any;
    });
    create(data: CreateClaimItemInput): Promise<ClaimItem>;
    update(id: any, data: any): Promise<ClaimItem>;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object for find
     * @return {Promise} the result of the find operation
     */
    list(selector: Selector<ClaimItem>, config?: FindConfig<ClaimItem>): Promise<ClaimItem[]>;
    /**
     * Gets a claim item by id.
     * @param {string} claimItemId - id of ClaimItem to retrieve
     * @param {Object} config - configuration for the find operation
     * @return {Promise<Order>} the ClaimItem
     */
    retrieve(claimItemId: string, config?: FindConfig<ClaimItem>): Promise<ClaimItem>;
}
export default ClaimItemService;
