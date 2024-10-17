import { TransactionBaseService } from "../interfaces/transaction-base-service";
declare class SystemProviderService extends TransactionBaseService {
    static identifier: string;
    constructor(_: any);
    createPayment(_: any): Promise<Record<string, unknown>>;
    getStatus(_: any): Promise<string>;
    getPaymentData(_: any): Promise<Record<string, unknown>>;
    authorizePayment(_: any): Promise<Record<string, unknown>>;
    updatePaymentData(_: any): Promise<Record<string, unknown>>;
    updatePayment(_: any): Promise<Record<string, unknown>>;
    deletePayment(_: any): Promise<Record<string, unknown>>;
    capturePayment(_: any): Promise<Record<string, unknown>>;
    refundPayment(_: any): Promise<Record<string, unknown>>;
    cancelPayment(_: any): Promise<Record<string, unknown>>;
}
export default SystemProviderService;
