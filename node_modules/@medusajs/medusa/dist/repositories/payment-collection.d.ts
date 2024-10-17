import { PaymentCollection } from "../models";
import { FindManyOptions } from "typeorm";
export declare const PaymentCollectionRepository: import("typeorm").Repository<PaymentCollection> & {
    getPaymentCollectionIdBySessionId(sessionId: string, config?: FindManyOptions<PaymentCollection>): Promise<PaymentCollection>;
    getPaymentCollectionIdByPaymentId(paymentId: string, config?: FindManyOptions<PaymentCollection>): Promise<PaymentCollection>;
};
export default PaymentCollectionRepository;
