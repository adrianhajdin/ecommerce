import { AddOrderEditLineItemInput, CreateOrderEditInput } from "../types/order-edit";
import { OrderEdit } from "../models";
import { DeepPartial, EntityManager } from "typeorm";
import { FindConfig, Selector } from "../types/common";
import { LineItemAdjustmentService, LineItemService, NewTotalsService, OrderEditItemChangeService, OrderService, TaxProviderService, TotalsService } from "./index";
import EventBusService from "./event-bus";
import { IInventoryService } from "@medusajs/types";
import { OrderEditRepository } from "../repositories/order-edit";
import { TransactionBaseService } from "../interfaces";
type InjectedDependencies = {
    manager: EntityManager;
    orderEditRepository: typeof OrderEditRepository;
    orderService: OrderService;
    totalsService: TotalsService;
    newTotalsService: NewTotalsService;
    lineItemService: LineItemService;
    eventBusService: EventBusService;
    taxProviderService: TaxProviderService;
    lineItemAdjustmentService: LineItemAdjustmentService;
    orderEditItemChangeService: OrderEditItemChangeService;
    inventoryService?: IInventoryService;
};
export default class OrderEditService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        DECLINED: string;
        REQUESTED: string;
        CANCELED: string;
        CONFIRMED: string;
    };
    protected readonly orderEditRepository_: typeof OrderEditRepository;
    protected readonly orderService_: OrderService;
    protected readonly totalsService_: TotalsService;
    protected readonly newTotalsService_: NewTotalsService;
    protected readonly lineItemService_: LineItemService;
    protected readonly eventBusService_: EventBusService;
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly lineItemAdjustmentService_: LineItemAdjustmentService;
    protected readonly orderEditItemChangeService_: OrderEditItemChangeService;
    protected get inventoryService_(): IInventoryService | undefined;
    constructor({ orderEditRepository, orderService, lineItemService, eventBusService, totalsService, newTotalsService, orderEditItemChangeService, lineItemAdjustmentService, taxProviderService, }: InjectedDependencies);
    retrieve(orderEditId: string, config?: FindConfig<OrderEdit>): Promise<OrderEdit>;
    listAndCount(selector: Selector<OrderEdit> & {
        q?: string;
    }, config?: FindConfig<OrderEdit>): Promise<[OrderEdit[], number]>;
    list(selector: Selector<OrderEdit>, config?: FindConfig<OrderEdit>): Promise<OrderEdit[]>;
    create(data: CreateOrderEditInput, context: {
        createdBy: string;
    }): Promise<OrderEdit>;
    update(orderEditId: string, data: DeepPartial<OrderEdit>): Promise<OrderEdit>;
    delete(id: string): Promise<void>;
    decline(orderEditId: string, context: {
        declinedReason?: string;
        declinedBy?: string;
    }): Promise<OrderEdit>;
    /**
     * Create or update order edit item change line item and apply the quantity
     * - If the item change already exists then update the quantity of the line item as well as the line adjustments
     * - If the item change does not exist then create the item change of type update and apply the quantity as well as update the line adjustments
     * @param orderEditId
     * @param itemId
     * @param data
     */
    updateLineItem(orderEditId: string, itemId: string, data: {
        quantity: number;
    }): Promise<void>;
    removeLineItem(orderEditId: string, lineItemId: string): Promise<void>;
    refreshAdjustments(orderEditId: string, config?: {
        preserveCustomAdjustments: boolean;
    }): Promise<void>;
    decorateTotals(orderEdit: OrderEdit): Promise<OrderEdit>;
    addLineItem(orderEditId: string, data: AddOrderEditLineItemInput): Promise<void>;
    deleteItemChange(orderEditId: string, itemChangeId: string): Promise<void>;
    requestConfirmation(orderEditId: string, context?: {
        requestedBy?: string;
    }): Promise<OrderEdit>;
    cancel(orderEditId: string, context?: {
        canceledBy?: string;
    }): Promise<OrderEdit>;
    confirm(orderEditId: string, context?: {
        confirmedBy?: string;
    }): Promise<OrderEdit>;
    protected retrieveActive(orderId: string, config?: FindConfig<OrderEdit>): Promise<OrderEdit | undefined | null>;
    protected deleteClonedItems(orderEditId: string): Promise<void>;
    private static isOrderEditActive;
}
export {};
