export declare class StripeConfigCommon {
    protected static instance: StripeConfigCommon;
    static shared(): StripeConfigCommon;
    backendAPI: StripeBackendAPI;
    publishableKey: string;
    appleMerchantID: string;
    companyName: string;
    requiredBillingAddressFields: StripeBillingAddressFields;
    requiredShippingAddressFields: StripeShippingAddressField[];
    createCardSources: boolean;
}
export interface StripeBackendAPI {
    createCustomerKey(apiVersion: string): Promise<any>;
    capturePayment(sourceID: string, amount: number, shippingMethod?: StripeShippingMethod, shippingAddress?: StripeAddress): Promise<void>;
}
export interface StripePaymentListener {
    onCommunicatingStateChanged(isCommunicating: boolean): void;
    onPaymentDataChanged(data: StripePaymentData): void;
    onPaymentSuccess(): void;
    onUserCancelled(): void;
    onError(errorCode: number, message: string): void;
    provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}
export interface StripePaymentMethod {
    image: any;
    label: string;
    templateImage: any;
    type?: "Card" | "ApplePay";
    stripeID?: string;
    brand?: string;
}
export interface StripeShippingMethod {
    amount: number;
    detail: string;
    label: string;
    identifier: string;
}
export interface StripeShippingMethods {
    isValid: boolean;
    validationError: string;
    shippingMethods: StripeShippingMethod[];
    selectedShippingMethod: StripeShippingMethod;
}
export interface StripeAddress {
    name?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    phone?: string;
    email?: string;
}
export declare const enum StripeBillingAddressFields {
    None = 0,
    Zip = 1,
    Full = 2,
    Name = 3,
}
export declare const enum StripeShippingAddressField {
    Name = "name",
    PostalAddress = "address",
    Phone = "phone",
    Email = "email",
}
export interface StripePaymentData {
    isReadyToCharge: boolean;
    paymentMethod: StripePaymentMethod;
    shippingInfo: StripeShippingMethod;
    shippingAddress: StripeAddress;
}
