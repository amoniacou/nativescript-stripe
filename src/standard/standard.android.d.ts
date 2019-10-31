import { Page } from "tns-core-modules/ui/page";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingMethod } from "./standard.common";
export declare class StripeConfig extends StripeConfigCommon {
    private _native;
    private _paymentConfigurationInitiated;
    readonly native: com.stripe.android.PaymentSessionConfig;
    initPaymentConfiguration(): void;
    private toNative();
    static shared(): StripeConfig;
}
export declare class StripeCustomerSession {
    native: com.stripe.android.CustomerSession;
    constructor();
    private readonly context;
}
export declare class StripePaymentSession {
    customerSession: StripeCustomerSession;
    currency: string;
    listener: StripePaymentListener;
    native: com.stripe.android.PaymentSession;
    selectedPaymentMethod: StripePaymentMethod;
    selectedShippingMethod: StripeShippingMethod;
    shippingAddress: StripeAddress;
    loading: boolean;
    paymentInProgress: boolean;
    private receiver;
    constructor(_page: Page, customerSession: StripeCustomerSession, amount: number, currency: string, listener: StripePaymentListener, prefilledAddress?: StripeAddress);
    readonly amount: number;
    readonly isPaymentReady: boolean;
    requestPayment(): void;
    presentPaymentMethods(): void;
    presentShipping(): void;
    private patchActivity();
}
