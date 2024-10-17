import { EventBusTypes } from "@medusajs/types";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { OrderItemChange } from "../models";
import { OrderItemChangeRepository } from "../repositories/order-item-change";
import { FindConfig, Selector } from "../types/common";
import { CreateOrderEditItemChangeInput } from "../types/order-edit";
import { LineItemService } from "./index";
import TaxProviderService from "./tax-provider";
type InjectedDependencies = {
    manager: EntityManager;
    orderItemChangeRepository: typeof OrderItemChangeRepository;
    eventBusService: EventBusTypes.IEventBusService;
    lineItemService: LineItemService;
    taxProviderService: TaxProviderService;
};
export default class OrderEditItemChangeService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        DELETED: string;
    };
    protected readonly orderItemChangeRepository_: typeof OrderItemChangeRepository;
    protected readonly eventBus_: EventBusTypes.IEventBusService;
    protected readonly lineItemService_: LineItemService;
    protected readonly taxProviderService_: TaxProviderService;
    constructor({ orderItemChangeRepository, eventBusService, lineItemService, taxProviderService, }: InjectedDependencies);
    retrieve(id: string, config?: FindConfig<OrderItemChange>): Promise<OrderItemChange | never>;
    list(selector: Selector<OrderItemChange>, config?: FindConfig<OrderItemChange>): Promise<OrderItemChange[]>;
    create(data: CreateOrderEditItemChangeInput): Promise<OrderItemChange>;
    delete(itemChangeIds: string | string[]): Promise<void>;
}
export {};
