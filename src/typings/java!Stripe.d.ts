/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module stripe {
		export module android {
			export abstract class ActivitySourceCallback<A>  extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Source> {
				public static class: java.lang.Class<com.stripe.android.ActivitySourceCallback<any>>;
				public onSuccess(param0: any): void;
				public onError(param0: java.lang.Exception): void;
				public getActivity(): any;
				public constructor(param0: any);
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsDataFactory {
				public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory>;
				public static UNKNOWN: string;
				public static NO_CONTEXT: string;
				public static FIELD_PRODUCT_USAGE: string;
				public static FIELD_ANALYTICS_UA: string;
				public static FIELD_APP_NAME: string;
				public static FIELD_APP_VERSION: string;
				public static FIELD_BINDINGS_VERSION: string;
				public static FIELD_DEVICE_TYPE: string;
				public static FIELD_EVENT: string;
				public static FIELD_ERROR_DATA: string;
				public static FIELD_INTENT_ID: string;
				public static FIELD_OS_NAME: string;
				public static FIELD_OS_RELEASE: string;
				public static FIELD_OS_VERSION: string;
				public static FIELD_PAYMENT_METHOD_ID: string;
				public static FIELD_PAYMENT_METHOD_TYPE: string;
				public static FIELD_PUBLISHABLE_KEY: string;
				public static FIELD_SOURCE_TYPE: string;
				public static FIELD_3DS2_UI_TYPE: string;
				public static FIELD_TOKEN_TYPE: string;
				public static VALID_PARAM_FIELDS: java.util.Set<string>;
				public static Companion: com.stripe.android.AnalyticsDataFactory.Companion;
				public static create(param0: globalAndroid.content.Context): com.stripe.android.AnalyticsDataFactory;
				public getSetupIntentConfirmationParams(param0: string, param1: string): java.util.Map<string,any>;
				public create3ds2ChallengeParams(param0: string, param1: string, param2: string, param3: string): java.util.Map<string,any>;
				public getTokenCreationParams(param0: java.util.List<string>, param1: string, param2: string): java.util.Map<string,any>;
				public createNameAndVersionParams(): java.util.Map<string,any>;
				public getSetupIntentRetrieveParams(param0: string): java.util.Map<string,any>;
				public getDeleteSourceParams(param0: java.util.List<string>, param1: string): java.util.Map<string,any>;
				public createPaymentMethodCreationParams(param0: string, param1: string): java.util.Map<string,any>;
				public getDetachPaymentMethodParams(param0: java.util.List<string>, param1: string): java.util.Map<string,any>;
				public getPaymentIntentRetrieveParams(param0: java.util.List<string>, param1: string): java.util.Map<string,any>;
				public static getAnalyticsUa(): string;
				public create3ds2ChallengeErrorParams(param0: string, param1: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent, param2: string): java.util.Map<string,any>;
				public getAttachPaymentMethodParams(param0: java.util.List<string>, param1: string): java.util.Map<string,any>;
				public getEventLoggingParams(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string): java.util.Map<string,any>;
				public static getEventParamName(param0: string): string;
				public create3ds2ChallengeErrorParams(param0: string, param1: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent, param2: string): java.util.Map<string,any>;
				public createAuthParams(param0: string, param1: string, param2: string): java.util.Map<string,any>;
				public getPaymentIntentConfirmationParams(param0: java.util.List<string>, param1: string, param2: string): java.util.Map<string,any>;
				public constructor(param0: globalAndroid.content.pm.PackageManager, param1: string);
				public getAddSourceParams(param0: java.util.List<string>, param1: string, param2: string): java.util.Map<string,any>;
				public getSourceCreationParams(param0: java.util.List<string>, param1: string, param2: string): java.util.Map<string,any>;
			}
			export module AnalyticsDataFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.Companion>;
					public getAnalyticsUa(): string;
					public create(param0: globalAndroid.content.Context): com.stripe.android.AnalyticsDataFactory;
					public getEventParamName(param0: string): string;
				}
				export class EventName {
					public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.EventName>;
					/**
					 * Constructs a new instance of the com.stripe.android.AnalyticsDataFactory$EventName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						<clinit>(): void;
					});
					public constructor();
					public static DEFAULT_SOURCE: string;
					public static CONFIRM_PAYMENT_INTENT: string;
					public static AUTH_3DS2_FINGERPRINT: string;
					public static AUTH_3DS2_CHALLENGE_COMPLETED: string;
					public static SET_SHIPPING_INFO: string;
					public static TOKEN_CREATION: string;
					public static DELETE_SOURCE: string;
					public static CONFIRM_SETUP_INTENT: string;
					public static Companion: com.stripe.android.AnalyticsDataFactory.EventName.Companion;
					public static CREATE_PAYMENT_METHOD: string;
					public static RETRIEVE_PAYMENT_INTENT: string;
					public static RETRIEVE_SETUP_INTENT: string;
					public static AUTH_3DS2_START: string;
					public static AUTH_ERROR: string;
					public static AUTH_3DS2_CHALLENGE_TIMEDOUT: string;
					public static AUTH_3DS2_CHALLENGE_PRESENTED: string;
					public static AUTH_3DS2_CHALLENGE_ERRORED: string;
					public static AUTH_REDIRECT: string;
					public static DETACH_PAYMENT_METHOD: string;
					public static SOURCE_CREATION: string;
					public static AUTH_3DS2_FRICTIONLESS: string;
					public static ATTACH_PAYMENT_METHOD: string;
					public static ADD_SOURCE: string;
					public static AUTH_3DS2_CHALLENGE_CANCELED: string;
				}
				export module EventName {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.EventName.Companion>;
						public static TOKEN_CREATION: string;
						public static CREATE_PAYMENT_METHOD: string;
						public static ATTACH_PAYMENT_METHOD: string;
						public static DETACH_PAYMENT_METHOD: string;
						public static SOURCE_CREATION: string;
						public static ADD_SOURCE: string;
						public static DEFAULT_SOURCE: string;
						public static DELETE_SOURCE: string;
						public static SET_SHIPPING_INFO: string;
						public static CONFIRM_PAYMENT_INTENT: string;
						public static RETRIEVE_PAYMENT_INTENT: string;
						public static CONFIRM_SETUP_INTENT: string;
						public static RETRIEVE_SETUP_INTENT: string;
						public static AUTH_3DS2_FINGERPRINT: string;
						public static AUTH_3DS2_START: string;
						public static AUTH_3DS2_FRICTIONLESS: string;
						public static AUTH_3DS2_CHALLENGE_PRESENTED: string;
						public static AUTH_3DS2_CHALLENGE_CANCELED: string;
						public static AUTH_3DS2_CHALLENGE_COMPLETED: string;
						public static AUTH_3DS2_CHALLENGE_ERRORED: string;
						public static AUTH_3DS2_CHALLENGE_TIMEDOUT: string;
						public static AUTH_REDIRECT: string;
						public static AUTH_ERROR: string;
					}
				}
				export class ThreeDS2UiType {
					public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType>;
					/**
					 * Constructs a new instance of the com.stripe.android.AnalyticsDataFactory$ThreeDS2UiType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						<clinit>(): void;
					});
					public constructor();
					public static OOB: string;
					public static SINGLE_SELECT: string;
					public static TEXT: string;
					public static MULTI_SELECT: string;
					public static HTML: string;
					public static Companion: com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType.Companion;
					public static NONE: string;
				}
				export module ThreeDS2UiType {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory.ThreeDS2UiType.Companion>;
						public static NONE: string;
						public static TEXT: string;
						public static SINGLE_SELECT: string;
						public static MULTI_SELECT: string;
						public static OOB: string;
						public static HTML: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AnalyticsRequest {
				public static class: java.lang.Class<com.stripe.android.AnalyticsRequest>;
				public static HOST: string;
				public static INSTANCE: com.stripe.android.AnalyticsRequest;
				public static create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.AppInfo): com.stripe.android.ApiRequest;
				public static create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.ApiRequest;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiKeyValidator {
				public static class: java.lang.Class<com.stripe.android.ApiKeyValidator>;
				public static Companion: com.stripe.android.ApiKeyValidator.Companion;
				public requireValid(param0: string): string;
				public static get(): com.stripe.android.ApiKeyValidator;
				public constructor();
			}
			export module ApiKeyValidator {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ApiKeyValidator.Companion>;
					public get(): com.stripe.android.ApiKeyValidator;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class ApiOperation<ResultType>  extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,com.stripe.android.ResultWrapper<any>> {
				public static class: java.lang.Class<com.stripe.android.ApiOperation<any>>;
				public doInBackground(param0: native.Array<java.lang.Void>): com.stripe.android.ResultWrapper<any>;
				public onPostExecute(param0: com.stripe.android.ResultWrapper<any>): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.ApiRequest>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
			export module ApiRequest {
				export class Options {
					public static class: java.lang.Class<com.stripe.android.ApiRequest.Options>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.ApiRequestExecutor>;
				/**
				 * Constructs a new instance of the com.stripe.android.ApiRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
				});
				public constructor();
				public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiResultCallback<ResultType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ApiResultCallback<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.ApiResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: ResultType): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onError(param0: java.lang.Exception): void;
				public onSuccess(param0: ResultType): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiVersion {
				public static class: java.lang.Class<com.stripe.android.ApiVersion>;
				public static Companion: com.stripe.android.ApiVersion.Companion;
				public copy(param0: string): com.stripe.android.ApiVersion;
				public component1(): string;
				public hashCode(): number;
				public static get(): com.stripe.android.ApiVersion;
				public equals(param0: any): boolean;
				public toString(): string;
				public getCode(): string;
				public constructor(param0: string);
			}
			export module ApiVersion {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ApiVersion.Companion>;
					public get(): com.stripe.android.ApiVersion;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class AppInfo {
				public static class: java.lang.Class<com.stripe.android.AppInfo>;
				public hashCode(): number;
				public static create(param0: string, param1: string, param2: string): com.stripe.android.AppInfo;
				public static create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.AppInfo;
				public equals(param0: any): boolean;
				public static create(param0: string): com.stripe.android.AppInfo;
				public static create(param0: string, param1: string): com.stripe.android.AppInfo;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.stripe.android.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CardUtils {
				public static class: java.lang.Class<com.stripe.android.CardUtils>;
				public static isValidCardNumber(param0: string): boolean;
				public static getPossibleCardType(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ConnectionFactory {
				public static class: java.lang.Class<com.stripe.android.ConnectionFactory>;
				public static Companion: com.stripe.android.ConnectionFactory.Companion;
				public create(param0: com.stripe.android.StripeRequest): java.net.HttpURLConnection;
				public getRequestOutputBytes(param0: com.stripe.android.StripeRequest): native.Array<number>;
				public constructor();
			}
			export module ConnectionFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ConnectionFactory.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerEphemeralKey extends com.stripe.android.EphemeralKey {
				public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.CustomerEphemeralKey>;
				public static Companion: com.stripe.android.CustomerEphemeralKey.Companion;
				public getCustomerId(): string;
				public static fromJson(param0: org.json.JSONObject, param1: com.stripe.android.EphemeralKey.Factory<any>): com.stripe.android.EphemeralKey;
				public static fromJson(param0: org.json.JSONObject): com.stripe.android.CustomerEphemeralKey;
			}
			export module CustomerEphemeralKey {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey.Companion>;
					public fromJson(param0: org.json.JSONObject): com.stripe.android.CustomerEphemeralKey;
				}
				export class Factory extends com.stripe.android.EphemeralKey.Factory<com.stripe.android.CustomerEphemeralKey> {
					public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey.Factory>;
					public constructor();
					public create$stripe_release(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string): com.stripe.android.CustomerEphemeralKey;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSession {
				public static class: java.lang.Class<com.stripe.android.CustomerSession>;
				public static ACTION_API_EXCEPTION: string;
				public static EXTRA_EXCEPTION: string;
				public static EVENT_SHIPPING_INFO_SAVED: string;
				public getCachedCustomer(): com.stripe.android.model.Customer;
				public static getInstance(): com.stripe.android.CustomerSession;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: boolean): void;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): void;
				public attachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
				public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: string): void;
				public setCustomerDefaultSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public addProductUsageTokenIfValid(param0: string): void;
				public deleteCustomerSource(param0: string, param1: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public setCustomerShippingInformation(param0: com.stripe.android.model.ShippingInformation): void;
				public static cancelCallbacks(): void;
				public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
				public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: string, param3: boolean): void;
				public addCustomerSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public static endCustomerSession(): void;
				public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public detachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
			}
			export module CustomerSession {
				export abstract class ActivityCustomerRetrievalListener<A>  extends com.stripe.android.CustomerSession.CustomerRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityCustomerRetrievalListener<any>>;
					public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
					public constructor(param0: any);
					public getActivity(): any;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export abstract class ActivityPaymentMethodRetrievalListener<A>  extends com.stripe.android.CustomerSession.PaymentMethodRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener<any>>;
					public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
					public constructor(param0: any);
					public getActivity(): any;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export abstract class ActivityPaymentMethodsRetrievalListener<A>  extends com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener<any>>;
					public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
					public constructor(param0: any);
					public getActivity(): any;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export abstract class ActivitySourceRetrievalListener<A>  extends com.stripe.android.CustomerSession.SourceRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivitySourceRetrievalListener<any>>;
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public constructor(param0: any);
					public getActivity(): any;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class CustomerRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class CustomerSessionHandler {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export module CustomerSessionHandler {
					export class Listener {
						public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionHandler.Listener>;
						/**
						 * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerSessionHandler$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCustomerRetrieved(param0: com.stripe.android.model.Customer, param1: string): void;
							onSourceRetrieved(param0: com.stripe.android.model.Source, param1: string): void;
							onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod, param1: string): void;
							onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>, param1: string): void;
							onCustomerShippingInfoSaved(param0: com.stripe.android.model.Customer): void;
							onError(param0: com.stripe.android.exception.StripeException, param1: string): void;
						});
						public constructor();
						public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod, param1: string): void;
						public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>, param1: string): void;
						public onSourceRetrieved(param0: com.stripe.android.model.Source, param1: string): void;
						public onCustomerShippingInfoSaved(param0: com.stripe.android.model.Customer): void;
						public onError(param0: com.stripe.android.exception.StripeException, param1: string): void;
						public onCustomerRetrieved(param0: com.stripe.android.model.Customer, param1: string): void;
					}
				}
				export abstract class CustomerSessionRunnable<T>  extends java.lang.Runnable {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionRunnable<any>>;
					public run(): void;
				}
				export module CustomerSessionRunnable {
					export class MessageData<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionRunnable.MessageData<any>>;
					}
				}
				export class MessageCode {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.MessageCode>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$MessageCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CUSTOMER_SHIPPING_INFO_SAVED: number;
					public static ERROR: number;
					public static SOURCE_RETRIEVED: number;
					public static CUSTOMER_RETRIEVED: number;
					public static PAYMENT_METHODS_RETRIEVED: number;
					public static PAYMENT_METHOD_RETRIEVED: number;
				}
				export class PaymentMethodRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class PaymentMethodsRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodsRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.RetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$RetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class SourceRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.SourceRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$SourceRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSourceRetrieved(param0: com.stripe.android.model.Source): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class EphemeralKey extends com.stripe.android.model.StripeModel {
				public static class: java.lang.Class<com.stripe.android.EphemeralKey>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public static fromJson(param0: org.json.JSONObject, param1: com.stripe.android.EphemeralKey.Factory<any>): com.stripe.android.EphemeralKey;
			}
			export module EphemeralKey {
				export abstract class Factory<TEphemeralKey>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.EphemeralKey.Factory<any>>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyManager<TEphemeralKey>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager<any>>;
			}
			export module EphemeralKeyManager {
				export class ClientKeyUpdateListener extends com.stripe.android.EphemeralKeyUpdateListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.ClientKeyUpdateListener>;
					public onKeyUpdate(param0: string): void;
					public onKeyUpdateFailure(param0: number, param1: string): void;
				}
				export class KeyManagerListener<TEphemeralKey>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.KeyManagerListener<any>>;
					/**
					 * Constructs a new instance of the com.stripe.android.EphemeralKeyManager$KeyManagerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyUpdate(param0: TEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
						onKeyError(param0: string, param1: number, param2: string): void;
					});
					public constructor();
					public onKeyError(param0: string, param1: number, param2: string): void;
					public onKeyUpdate(param0: TEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyProvider {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyProvider>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
				});
				public constructor();
				public createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyUpdateListener {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyUpdateListener>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onKeyUpdate(param0: string): void;
					onKeyUpdateFailure(param0: number, param1: string): void;
				});
				public constructor();
				public onKeyUpdate(param0: string): void;
				public onKeyUpdateFailure(param0: number, param1: string): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ErrorParser {
				public static class: java.lang.Class<com.stripe.android.ErrorParser>;
				public static MALFORMED_RESPONSE_MESSAGE: string;
				public static INSTANCE: com.stripe.android.ErrorParser;
				public static parseError(param0: string): com.stripe.android.StripeError;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Factory<ArgType, ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Factory<any,any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Factory<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: ArgType): ReturnType;
				});
				public constructor();
				public create(param0: ArgType): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Factory0<ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Factory0<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Factory0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(): ReturnType;
				});
				public constructor();
				public create(): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequest extends com.stripe.android.StripeRequest {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequest>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FingerprintRequestFactory extends com.stripe.android.Factory0<com.stripe.android.FingerprintRequest> {
				public static class: java.lang.Class<com.stripe.android.FingerprintRequestFactory>;
				public constructor(param0: com.stripe.android.TelemetryClientUtil);
				public constructor(param0: globalAndroid.content.Context);
				public create(): any;
				public create(): com.stripe.android.FingerprintRequest;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class FireAndForgetRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.FireAndForgetRequestExecutor>;
				/**
				 * Constructs a new instance of the com.stripe.android.FireAndForgetRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					executeAsync(param0: com.stripe.android.StripeRequest): void;
				});
				public constructor();
				public executeAsync(param0: com.stripe.android.StripeRequest): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class GooglePayConfig {
				public static class: java.lang.Class<com.stripe.android.GooglePayConfig>;
				public getTokenizationSpecification(): org.json.JSONObject;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class IssuingCardEphemeralKey extends com.stripe.android.EphemeralKey {
				public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.IssuingCardEphemeralKey>;
				public static Companion: com.stripe.android.IssuingCardEphemeralKey.Companion;
				public getIssuingCardId(): string;
			}
			export module IssuingCardEphemeralKey {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey.Companion>;
				}
				export class Factory extends com.stripe.android.EphemeralKey.Factory<com.stripe.android.IssuingCardEphemeralKey> {
					public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey.Factory>;
					public create$stripe_release(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string): com.stripe.android.IssuingCardEphemeralKey;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class IssuingCardPinService extends com.stripe.android.EphemeralKeyManager.KeyManagerListener<com.stripe.android.IssuingCardEphemeralKey> {
				public static class: java.lang.Class<com.stripe.android.IssuingCardPinService>;
				public retrievePin(param0: string, param1: string, param2: string, param3: com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener): void;
				public static create(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
				public onKeyUpdate(param0: com.stripe.android.IssuingCardEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
				public updatePin(param0: string, param1: string, param2: string, param3: string, param4: com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener): void;
				public onKeyError(param0: string, param1: number, param2: string): void;
				public onKeyUpdate(param0: any, param1: string, param2: string, param3: java.util.Map<string,any>): void;
			}
			export module IssuingCardPinService {
				export class CardPinActionError {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.CardPinActionError>;
					public static UNKNOWN_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static EPHEMERAL_KEY_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_INCORRECT: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_EXPIRED: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_TOO_MANY_ATTEMPTS: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static ONE_TIME_CODE_ALREADY_REDEEMED: com.stripe.android.IssuingCardPinService.CardPinActionError;
					public static values(): native.Array<com.stripe.android.IssuingCardPinService.CardPinActionError>;
					public static valueOf(param0: string): com.stripe.android.IssuingCardPinService.CardPinActionError;
				}
				export class IssuingCardPinRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onIssuingCardPinRetrieved(param0: string): void;
						onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					public onIssuingCardPinRetrieved(param0: string): void;
				}
				export class IssuingCardPinUpdateListener {
					public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onIssuingCardPinUpdated(): void;
						onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
					public onIssuingCardPinUpdated(): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ObjectBuilder<ObjectType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ObjectBuilder<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.ObjectBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): ObjectType;
				});
				public constructor();
				public build(): ObjectType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class OperationIdFactory {
				public static class: java.lang.Class<com.stripe.android.OperationIdFactory>;
				public create(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PayWithGoogleUtils {
				public static class: java.lang.Class<com.stripe.android.PayWithGoogleUtils>;
				public static getPriceString(param0: number, param1: java.util.Currency): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentAuthConfig {
				public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig>;
				public static init(param0: com.stripe.android.PaymentAuthConfig): void;
				public static get(): com.stripe.android.PaymentAuthConfig;
			}
			export module PaymentAuthConfig {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig> {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Builder>;
					public build(): com.stripe.android.PaymentAuthConfig;
					public constructor();
					public build(): any;
					public set3ds2Config(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2Config): com.stripe.android.PaymentAuthConfig.Builder;
				}
				export class Stripe3ds2ButtonCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module Stripe3ds2ButtonCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder>;
						public constructor();
						public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2Config {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config>;
				}
				export module Stripe3ds2Config {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder>;
						public setUiCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
						public constructor();
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config;
						public setTimeout(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2LabelCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module Stripe3ds2LabelCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder>;
						public constructor();
						public setHeadingTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization;
						public setHeadingTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setHeadingTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2TextBoxCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module Stripe3ds2TextBoxCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder>;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization;
						public constructor();
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setBorderWidth(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setBorderColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2ToolbarCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module Stripe3ds2ToolbarCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder>;
						public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public constructor();
						public setButtonText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setStatusBarColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization;
						public setHeaderText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
						public build(): any;
					}
				}
				export class Stripe3ds2UiCustomization {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public getUiCustomization(): com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization;
				}
				export module Stripe3ds2UiCustomization {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization> {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder>;
						public constructor();
						public setAccentColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public setButtonCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization, param1: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public setTextBoxCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public static createWithAppTheme(param0: globalAndroid.app.Activity): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
						public setToolbarCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public setLabelCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
						public build(): any;
					}
					export class ButtonType {
						public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
						public static SUBMIT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static CONTINUE: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static NEXT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static CANCEL: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static RESEND: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static SELECT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
						public static values(): native.Array<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
						public static valueOf(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentAuthWebViewStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentAuthWebViewStarter.Data> {
				public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter>;
				public static EXTRA_AUTH_URL: string;
				public static EXTRA_CLIENT_SECRET: string;
				public static EXTRA_RETURN_URL: string;
				public static EXTRA_UI_CUSTOMIZATION: string;
				public static Companion: com.stripe.android.PaymentAuthWebViewStarter.Companion;
				public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: number);
				public start(param0: any): void;
				public start(param0: com.stripe.android.PaymentAuthWebViewStarter.Data): void;
				public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: number, param2: com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization);
			}
			export module PaymentAuthWebViewStarter {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Companion>;
				}
				export class Data {
					public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Data>;
					public getUrl(): string;
					public getReturnUrl(): string;
					public constructor(param0: string, param1: string, param2: string);
					public getClientSecret(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentConfiguration {
				public static class: java.lang.Class<com.stripe.android.PaymentConfiguration>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.PaymentConfiguration>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getPublishableKey(): string;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public static init(param0: string): void;
				public static getInstance(): com.stripe.android.PaymentConfiguration;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentController {
				public static class: java.lang.Class<com.stripe.android.PaymentController>;
				public static PAYMENT_REQUEST_CODE: number;
				public static SETUP_REQUEST_CODE: number;
				public static Companion: com.stripe.android.PaymentController.Companion;
				public startConfirmAndAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.ConfirmStripeIntentParams, param2: com.stripe.android.ApiRequest.Options): void;
				public shouldHandlePaymentResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public handleSetupResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.stripe3ds2.service.StripeThreeDs2Service, param3: com.stripe.android.stripe3ds2.transaction.MessageVersionRegistry, param4: com.stripe.android.PaymentAuthConfig, param5: com.stripe.android.FireAndForgetRequestExecutor, param6: com.stripe.android.AnalyticsDataFactory, param7: com.stripe.android.PaymentController.ChallengeFlowStarter);
				public handleNextAction(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.model.StripeIntent, param2: com.stripe.android.ApiRequest.Options): void;
				public static getRequestCode(param0: com.stripe.android.model.ConfirmStripeIntentParams): number;
				public getClientSecret(param0: globalAndroid.content.Intent): string;
				public static create(param0: globalAndroid.content.Context, param1: com.stripe.android.StripeRepository): com.stripe.android.PaymentController;
				public handlePaymentResult(param0: globalAndroid.content.Intent, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>): void;
				public shouldHandleSetupResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				public startAuth(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: string, param2: com.stripe.android.ApiRequest.Options): void;
				public static getRequestCode(param0: com.stripe.android.model.StripeIntent): number;
			}
			export module PaymentController {
				export class ChallengeFlowStarter {
					public static class: java.lang.Class<com.stripe.android.PaymentController.ChallengeFlowStarter>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentController$ChallengeFlowStarter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(param0: java.lang.Runnable): void;
					});
					public constructor();
					public start(param0: java.lang.Runnable): void;
				}
				export class ChallengeFlowStarterImpl extends com.stripe.android.PaymentController.ChallengeFlowStarter {
					public static class: java.lang.Class<com.stripe.android.PaymentController.ChallengeFlowStarterImpl>;
					public static Companion: com.stripe.android.PaymentController.ChallengeFlowStarterImpl.Companion;
					public constructor();
					public start(param0: java.lang.Runnable): void;
				}
				export module ChallengeFlowStarterImpl {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.PaymentController.ChallengeFlowStarterImpl.Companion>;
						public createHandler(): globalAndroid.os.Handler;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentController.Companion>;
					public getRequestCode(param0: com.stripe.android.model.ConfirmStripeIntentParams): number;
					public create(param0: globalAndroid.content.Context, param1: com.stripe.android.StripeRepository): com.stripe.android.PaymentController;
					public getRequestCode(param0: com.stripe.android.model.StripeIntent): number;
				}
				export class ConfirmStripeIntentCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.PaymentController.ConfirmStripeIntentCallback>;
					public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.PaymentController, param3: number);
					public onSuccess(param0: com.stripe.android.model.StripeIntent): void;
					public onError(param0: java.lang.Exception): void;
					public onSuccess(param0: any): void;
				}
				export class ConfirmStripeIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.PaymentController.ConfirmStripeIntentTask>;
					public getResult$stripe_release(): com.stripe.android.model.StripeIntent;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.ConfirmStripeIntentParams, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.StripeIntent>);
				}
				export class PaymentAuth3ds2ChallengeStatusReceiver {
					public static class: java.lang.Class<com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver>;
					public static Companion: com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Companion;
					public constructor(param0: com.stripe.android.StripeRepository, param1: com.stripe.android.model.StripeIntent, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.FireAndForgetRequestExecutor, param5: com.stripe.android.AnalyticsDataFactory, param6: com.stripe.android.stripe3ds2.transaction.Transaction, param7: com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Complete3ds2AuthCallbackFactory);
					public completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string): void;
					public runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent): void;
					public cancelled(param0: string): void;
					public timedout(param0: string): void;
					public protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent): void;
				}
				export module PaymentAuth3ds2ChallengeStatusReceiver {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Companion>;
						public create(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.model.StripeIntent, param3: string, param4: com.stripe.android.ApiRequest.Options, param5: com.stripe.android.FireAndForgetRequestExecutor, param6: com.stripe.android.AnalyticsDataFactory, param7: com.stripe.android.stripe3ds2.transaction.Transaction): com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver;
					}
					export class Complete3ds2AuthCallbackFactory extends com.stripe.android.Factory<com.stripe.android.Stripe3ds2CompletionStarter.StartData,com.stripe.android.ApiResultCallback<java.lang.Boolean>> {
						public static class: java.lang.Class<com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver.Complete3ds2AuthCallbackFactory>;
						/**
						 * Constructs a new instance of the com.stripe.android.PaymentController$PaymentAuth3ds2ChallengeStatusReceiver$Complete3ds2AuthCallbackFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(param0: any): any;
						});
						public constructor();
						public create(param0: any): any;
					}
				}
				export class RetrieveIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
					public static class: java.lang.Class<com.stripe.android.PaymentController.RetrieveIntentTask>;
					public getResult$stripe_release(): com.stripe.android.model.StripeIntent;
					public constructor(param0: com.stripe.android.StripeRepository, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.StripeIntent>);
				}
				export class Stripe3ds2AuthCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult> {
					public static class: java.lang.Class<com.stripe.android.PaymentController.Stripe3ds2AuthCallback>;
					public onSuccess(param0: com.stripe.android.model.Stripe3ds2AuthResult): void;
					public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.stripe3ds2.transaction.Transaction, param3: number, param4: com.stripe.android.model.StripeIntent, param5: string, param6: com.stripe.android.ApiRequest.Options, param7: com.stripe.android.FireAndForgetRequestExecutor, param8: com.stripe.android.AnalyticsDataFactory, param9: com.stripe.android.PaymentController.ChallengeFlowStarter);
					public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: com.stripe.android.StripeRepository, param2: com.stripe.android.stripe3ds2.transaction.Transaction, param3: number, param4: com.stripe.android.model.StripeIntent, param5: string, param6: com.stripe.android.ApiRequest.Options, param7: com.stripe.android.PaymentRelayStarter, param8: com.stripe.android.FireAndForgetRequestExecutor, param9: com.stripe.android.AnalyticsDataFactory, param10: com.stripe.android.PaymentController.ChallengeFlowStarter);
					public onError(param0: java.lang.Exception): void;
					public onSuccess(param0: any): void;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.stripe.android.PaymentController.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.PaymentIntent> {
				public static class: java.lang.Class<com.stripe.android.PaymentIntentResult>;
			}
			export module PaymentIntentResult {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentIntentResult> {
					public static class: java.lang.Class<com.stripe.android.PaymentIntentResult.Builder>;
					public build(): any;
					public build(): com.stripe.android.PaymentIntentResult;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentRelayStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentRelayStarter.Data> {
				public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter>;
				public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: number);
				public start(param0: any): void;
				public start(param0: com.stripe.android.PaymentRelayStarter.Data): void;
			}
			export module PaymentRelayStarter {
				export class Data {
					public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Data>;
					public static Companion: com.stripe.android.PaymentRelayStarter.Data.Companion;
					public equals(param0: any): boolean;
					public getStripeIntent(): com.stripe.android.model.StripeIntent;
					public toString(): string;
					public static create(param0: java.lang.Exception): com.stripe.android.PaymentRelayStarter.Data;
					public constructor();
					public component1(): com.stripe.android.model.StripeIntent;
					public getException(): java.lang.Exception;
					public component2(): java.lang.Exception;
					public copy(param0: com.stripe.android.model.StripeIntent, param1: java.lang.Exception): com.stripe.android.PaymentRelayStarter.Data;
					public hashCode(): number;
					public constructor(param0: com.stripe.android.model.StripeIntent, param1: java.lang.Exception);
					public static create(param0: com.stripe.android.model.StripeIntent): com.stripe.android.PaymentRelayStarter.Data;
				}
				export module Data {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Data.Companion>;
						public create(param0: java.lang.Exception): com.stripe.android.PaymentRelayStarter.Data;
						public create(param0: com.stripe.android.model.StripeIntent): com.stripe.android.PaymentRelayStarter.Data;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSession {
				public static class: java.lang.Class<com.stripe.android.PaymentSession>;
				public static TOKEN_PAYMENT_SESSION: string;
				public static EXTRA_PAYMENT_SESSION_ACTIVE: string;
				public static PAYMENT_SESSION_DATA_KEY: string;
				public constructor(param0: globalAndroid.app.Activity);
				public constructor(param0: globalAndroid.support.v4.app.Fragment);
				public presentPaymentMethodSelection(param0: boolean): void;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig): boolean;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig, param2: globalAndroid.os.Bundle, param3: boolean): boolean;
				public presentPaymentMethodSelection(param0: string): void;
				public savePaymentSessionInstanceState(param0: globalAndroid.os.Bundle): void;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig, param2: globalAndroid.os.Bundle): boolean;
				public onCompleted(): void;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig, param2: boolean): boolean;
				public getPaymentSessionData(): com.stripe.android.PaymentSessionData;
				public setCartTotal(param0: number): void;
				public presentPaymentMethodSelection(): void;
				public presentShippingFlow(): void;
				public presentPaymentMethodSelection(param0: boolean, param1: string): void;
				public onDestroy(): void;
				public handlePaymentData(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
			}
			export module PaymentSession {
				export abstract class ActivityPaymentSessionListener<A>  extends com.stripe.android.PaymentSession.PaymentSessionListener {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.ActivityPaymentSessionListener<any>>;
					public constructor(param0: any);
					public onError(param0: number, param1: string): void;
					public onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					public onCommunicatingStateChanged(param0: boolean): void;
					public getListenerActivity(): any;
				}
				export class PaymentSessionListener {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.PaymentSessionListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentSession$PaymentSessionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommunicatingStateChanged(param0: boolean): void;
						onError(param0: number, param1: string): void;
						onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					});
					public constructor();
					public onError(param0: number, param1: string): void;
					public onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					public onCommunicatingStateChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionConfig {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.PaymentSessionConfig>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getOptionalShippingInfoFields(): java.util.List<string>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public isShippingInfoRequired(): boolean;
				public isShippingMethodRequired(): boolean;
				public getPrepopulatedShippingInfo(): com.stripe.android.model.ShippingInformation;
				public getHiddenShippingInfoFields(): java.util.List<string>;
			}
			export module PaymentSessionConfig {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentSessionConfig> {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Builder>;
					public setPrepopulatedShippingInfo(param0: com.stripe.android.model.ShippingInformation): com.stripe.android.PaymentSessionConfig.Builder;
					public build(): com.stripe.android.PaymentSessionConfig;
					public setOptionalShippingInfoFields(param0: native.Array<string>): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingInfoRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public constructor();
					public setShippingMethodsRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public build(): any;
					public setHiddenShippingInfoFields(param0: native.Array<string>): com.stripe.android.PaymentSessionConfig.Builder;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionData {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionData>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.PaymentSessionData>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				public updateIsPaymentReadyToCharge(param0: com.stripe.android.PaymentSessionConfig): boolean;
				public constructor();
				public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
				public setShippingInformation(param0: com.stripe.android.model.ShippingInformation): void;
				public getShippingMethod(): com.stripe.android.model.ShippingMethod;
				public isPaymentReadyToCharge(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getCartTotal(): number;
				public setPaymentReadyToCharge(param0: boolean): void;
				public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
				public getShippingTotal(): number;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionPrefs {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs>;
				public static Companion: com.stripe.android.PaymentSessionPrefs.Companion;
				public constructor(param0: globalAndroid.content.Context);
				public getSelectedPaymentMethodId(param0: string): string;
				public saveSelectedPaymentMethodId(param0: string, param1: string): void;
			}
			export module PaymentSessionPrefs {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ResultWrapper<ResultType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.ResultWrapper<any>>;
				public static Companion: com.stripe.android.ResultWrapper.Companion;
				public copy(param0: ResultType, param1: java.lang.Exception): com.stripe.android.ResultWrapper<ResultType>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component1(): ResultType;
				public static create(param0: java.lang.Exception): com.stripe.android.ResultWrapper<any>;
				public getResult(): ResultType;
				public toString(): string;
				public static create(param0: any): com.stripe.android.ResultWrapper<any>;
				public component2(): java.lang.Exception;
				public constructor(param0: ResultType, param1: java.lang.Exception);
				public getError(): java.lang.Exception;
				public constructor();
			}
			export module ResultWrapper {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.ResultWrapper.Companion>;
					public create(param0: any): com.stripe.android.ResultWrapper<any>;
					public create(param0: java.lang.Exception): com.stripe.android.ResultWrapper<any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class SetupIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.SetupIntent> {
				public static class: java.lang.Class<com.stripe.android.SetupIntentResult>;
			}
			export module SetupIntentResult {
				export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.SetupIntentResult> {
					public static class: java.lang.Class<com.stripe.android.SetupIntentResult.Builder>;
					public build(): com.stripe.android.SetupIntentResult;
					public build(): any;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class SourceCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Source> {
				public static class: java.lang.Class<com.stripe.android.SourceCallback>;
				/**
				 * Constructs a new instance of the com.stripe.android.SourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: any): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onSuccess(param0: any): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Stripe {
				public static class: java.lang.Class<com.stripe.android.Stripe>;
				public static API_VERSION: string;
				public static VERSION: string;
				public createPiiToken(param0: string, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.Source;
				public createTokenSynchronous(param0: com.stripe.android.model.Card): com.stripe.android.model.Token;
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.model.PaymentMethod;
				public confirmSetupIntentSynchronous(param0: com.stripe.android.model.ConfirmSetupIntentParams): com.stripe.android.model.SetupIntent;
				/** @deprecated */
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.PaymentMethod;
				/** @deprecated */
				public onPaymentResult(param0: number, param1: globalAndroid.content.Intent, param2: string, param3: com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>): boolean;
				public onPaymentResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>): boolean;
				/** @deprecated */
				public confirmSetupIntent(param0: globalAndroid.support.v4.app.Fragment, param1: com.stripe.android.model.ConfirmSetupIntentParams, param2: string): void;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams): com.stripe.android.model.Token;
				/** @deprecated */
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.ConfirmPaymentIntentParams): com.stripe.android.model.PaymentIntent;
				/** @deprecated */
				public createTokenSynchronous(param0: com.stripe.android.model.Card, param1: string): com.stripe.android.model.Token;
				/** @deprecated */
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams, param1: string): com.stripe.android.model.Token;
				public static setAppInfo(param0: com.stripe.android.AppInfo): void;
				/** @deprecated */
				public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public confirmSetupIntent(param0: globalAndroid.support.v4.app.Fragment, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
				/** @deprecated */
				public constructor(param0: globalAndroid.content.Context);
				public retrievePaymentIntentSynchronous(param0: string): com.stripe.android.model.PaymentIntent;
				/** @deprecated */
				public confirmPayment(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmPaymentIntentParams, param2: string): void;
				/** @deprecated */
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount, param1: string): com.stripe.android.model.Token;
				/** @deprecated */
				public authenticatePayment(param0: globalAndroid.app.Activity, param1: string, param2: string): void;
				public confirmSetupIntent(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
				public createCvcUpdateToken(param0: string, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public createPiiTokenSynchronous(param0: string): com.stripe.android.model.Token;
				/** @deprecated */
				public createCvcUpdateTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount): com.stripe.android.model.Token;
				public createToken(param0: com.stripe.android.model.Card, param1: java.util.concurrent.Executor, param2: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				/** @deprecated */
				public authenticateSetup(param0: globalAndroid.app.Activity, param1: string, param2: string): void;
				public retrieveSetupIntentSynchronous(param0: string): com.stripe.android.model.SetupIntent;
				public createCvcUpdateTokenSynchronous(param0: string): com.stripe.android.model.Token;
				/** @deprecated */
				public retrieveSetupIntentSynchronous(param0: string, param1: string): com.stripe.android.model.SetupIntent;
				/** @deprecated */
				public retrieveSourceSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Source;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod>): void;
				/** @deprecated */
				public authenticatePayment(param0: globalAndroid.support.v4.app.Fragment, param1: string, param2: string): void;
				/** @deprecated */
				public createCvcUpdateToken(param0: string, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public confirmPayment(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Source>): void;
				/** @deprecated */
				public confirmSetupIntent(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmSetupIntentParams, param2: string): void;
				public retrieveSourceSynchronous(param0: string, param1: string): com.stripe.android.model.Source;
				/** @deprecated */
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams, param1: string): com.stripe.android.model.Source;
				/** @deprecated */
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Source>, param2: string, param3: java.util.concurrent.Executor): void;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public authenticatePayment(param0: globalAndroid.app.Activity, param1: string): void;
				/** @deprecated */
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public confirmPayment(param0: globalAndroid.support.v4.app.Fragment, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
				/** @deprecated */
				public createPiiToken(param0: string, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				/** @deprecated */
				public authenticateSetup(param0: globalAndroid.support.v4.app.Fragment, param1: string, param2: string): void;
				public authenticateSetup(param0: globalAndroid.support.v4.app.Fragment, param1: string): void;
				public authenticateSetup(param0: globalAndroid.app.Activity, param1: string): void;
				/** @deprecated */
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod>, param2: string, param3: java.util.concurrent.Executor): void;
				/** @deprecated */
				public setStripeAccount(param0: string): void;
				/** @deprecated */
				public confirmSetupIntentSynchronous(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: string): com.stripe.android.model.SetupIntent;
				/** @deprecated */
				public createToken(param0: com.stripe.android.model.Card, param1: string, param2: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public createToken(param0: com.stripe.android.model.Card, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				public authenticatePayment(param0: globalAndroid.support.v4.app.Fragment, param1: string): void;
				/** @deprecated */
				public onSetupResult(param0: number, param1: globalAndroid.content.Intent, param2: string, param3: com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>): boolean;
				public onSetupResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>): boolean;
				/** @deprecated */
				public createPiiTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				/** @deprecated */
				public retrievePaymentIntentSynchronous(param0: string, param1: string): com.stripe.android.model.PaymentIntent;
				/** @deprecated */
				public confirmPayment(param0: globalAndroid.support.v4.app.Fragment, param1: com.stripe.android.model.ConfirmPaymentIntentParams, param2: string): void;
				/** @deprecated */
				public setDefaultPublishableKey(param0: string): void;
				/** @deprecated */
				public createToken(param0: com.stripe.android.model.Card, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
			}
			export module Stripe {
				export class CreatePaymentMethodTask extends com.stripe.android.ApiOperation<com.stripe.android.model.PaymentMethod> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreatePaymentMethodTask>;
				}
				export class CreateSourceTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Source> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateSourceTask>;
				}
				export class CreateTokenTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Token> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateTokenTask>;
				}
				export class TokenCreator {
					public static class: java.lang.Class<com.stripe.android.Stripe.TokenCreator>;
					/**
					 * Constructs a new instance of the com.stripe.android.Stripe$TokenCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
					});
					public constructor();
					public create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Stripe3ds2AuthParams extends com.stripe.android.model.StripeParamsModel {
				public static class: java.lang.Class<com.stripe.android.Stripe3ds2AuthParams>;
				public static FIELD_APP: string;
				public static FIELD_SOURCE: string;
				public static FIELD_FALLBACK_RETURN_URL: string;
				public static Companion: com.stripe.android.Stripe3ds2AuthParams.Companion;
				public toParamMap(): java.util.Map<string,any>;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string);
			}
			export module Stripe3ds2AuthParams {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.Stripe3ds2AuthParams.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Stripe3ds2CompletionStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.Stripe3ds2CompletionStarter.StartData> {
				public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter>;
				public constructor(param0: com.stripe.android.view.AuthActivityStarter.Host, param1: number);
				public start(param0: any): void;
				public start(param0: com.stripe.android.Stripe3ds2CompletionStarter.StartData): void;
			}
			export module Stripe3ds2CompletionStarter {
				export class ChallengeFlowOutcome {
					public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter.ChallengeFlowOutcome>;
					/**
					 * Constructs a new instance of the com.stripe.android.Stripe3ds2CompletionStarter$ChallengeFlowOutcome interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						<clinit>(): void;
					});
					public constructor();
					public static TIMEOUT: number;
					public static Companion: com.stripe.android.Stripe3ds2CompletionStarter.ChallengeFlowOutcome.Companion;
					public static PROTOCOL_ERROR: number;
					public static COMPLETE_SUCCESSFUL: number;
					public static COMPLETE_UNSUCCESSFUL: number;
					public static CANCEL: number;
					public static RUNTIME_ERROR: number;
				}
				export module ChallengeFlowOutcome {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter.ChallengeFlowOutcome.Companion>;
						public static COMPLETE_SUCCESSFUL: number;
						public static COMPLETE_UNSUCCESSFUL: number;
						public static CANCEL: number;
						public static TIMEOUT: number;
						public static PROTOCOL_ERROR: number;
						public static RUNTIME_ERROR: number;
					}
				}
				export class StartData {
					public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter.StartData>;
					public equals(param0: any): boolean;
					public getStripeIntent(): com.stripe.android.model.StripeIntent;
					public toString(): string;
					public constructor(param0: com.stripe.android.model.StripeIntent, param1: number);
					public component1(): com.stripe.android.model.StripeIntent;
					public copy(param0: com.stripe.android.model.StripeIntent, param1: number): com.stripe.android.Stripe3ds2CompletionStarter.StartData;
					public getOutcome(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeApiRepository extends com.stripe.android.StripeRepository {
				public static class: java.lang.Class<com.stripe.android.StripeApiRepository>;
				public static Companion: com.stripe.android.StripeApiRepository.Companion;
				public makeApiRequest(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
				public static getRetrieveTokenApiUrl(param0: string): string;
				public static getRetrieveSourceApiUrl(param0: string): string;
				public attachPaymentMethod(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options): boolean;
				public static getDeleteCustomerSourceUrl(param0: string, param1: string): string;
				public retrieveCustomer(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public static getAddCustomerSourceUrl(param0: string): string;
				public setCustomerShippingInfo(param0: string, param1: string, param2: java.util.List<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public getPaymentMethods(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.stripe.android.ApiRequest.Options): java.util.List<com.stripe.android.model.PaymentMethod>;
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.AppInfo);
				public static getIssuingCardPinUrl(param0: string): string;
				public retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
				public start3ds2Auth(param0: com.stripe.android.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult>): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.AppInfo, param2: com.stripe.android.ApiRequestExecutor, param3: com.stripe.android.FireAndForgetRequestExecutor);
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public constructor(param0: globalAndroid.content.Context);
				public complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<java.lang.Boolean>): void;
				public getDetachPaymentMethodUrl(param0: string): string;
				public deleteCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public static getRetrieveCustomerUrl(param0: string): string;
				public static getConfirmSetupIntentUrl(param0: string): string;
				public static getTokensUrl(): string;
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.AppInfo, param2: com.stripe.android.ApiRequestExecutor, param3: com.stripe.android.FireAndForgetRequestExecutor, param4: com.stripe.android.FingerprintRequestFactory);
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.AppInfo, param2: com.stripe.android.ApiRequestExecutor);
				public addCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public static getAttachPaymentMethodUrl(param0: string): string;
				public createToken(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string): com.stripe.android.model.Token;
				public static getPaymentMethodsUrl(): string;
				public setDefaultCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
				public start3ds2Auth(param0: com.stripe.android.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Stripe3ds2AuthResult;
				public static getSourcesUrl(): string;
				public static getRetrieveSetupIntentUrl(param0: string): string;
				public detachPaymentMethod(param0: string, param1: java.util.List<string>, param2: string, param3: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public static getConfirmPaymentIntentUrl(param0: string): string;
				public static getRetrievePaymentIntentUrl(param0: string): string;
				public fireAnalyticsRequest(param0: java.util.Map<string,any>, param1: string): void;
				public retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
			}
			export module StripeApiRepository {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.Companion>;
					public getRetrievePaymentIntentUrl(param0: string): string;
					public getRetrieveSetupIntentUrl(param0: string): string;
					public getRetrieveSourceApiUrl(param0: string): string;
					public getConfirmPaymentIntentUrl(param0: string): string;
					public getSourcesUrl(): string;
					public getRetrieveCustomerUrl(param0: string): string;
					public getTokensUrl(): string;
					public getIssuingCardPinUrl(param0: string): string;
					public getRetrieveTokenApiUrl(param0: string): string;
					public getAttachPaymentMethodUrl(param0: string): string;
					public getConfirmSetupIntentUrl(param0: string): string;
					public getAddCustomerSourceUrl(param0: string): string;
					public getPaymentMethodsUrl(): string;
					public getDeleteCustomerSourceUrl(param0: string, param1: string): string;
				}
				export class Complete3ds2AuthTask extends com.stripe.android.ApiOperation<java.lang.Boolean> {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.Complete3ds2AuthTask>;
					public getResult$stripe_release(): java.lang.Boolean;
					public constructor(param0: com.stripe.android.StripeApiRepository, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<java.lang.Boolean>);
				}
				export class Start3ds2AuthTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Stripe3ds2AuthResult> {
					public static class: java.lang.Class<com.stripe.android.StripeApiRepository.Start3ds2AuthTask>;
					public getResult$stripe_release(): com.stripe.android.model.Stripe3ds2AuthResult;
					public constructor(param0: com.stripe.android.StripeApiRepository, param1: com.stripe.android.Stripe3ds2AuthParams, param2: string, param3: com.stripe.android.ApiRequest.Options, param4: com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult>);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeApiRequestExecutor extends com.stripe.android.ApiRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.StripeApiRequestExecutor>;
				public static Companion: com.stripe.android.StripeApiRequestExecutor.Companion;
				public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
				public constructor();
			}
			export module StripeApiRequestExecutor {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeApiRequestExecutor.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeError {
				public static class: java.lang.Class<com.stripe.android.StripeError>;
				public type: string;
				public message: string;
				public code: string;
				public param: string;
				public declineCode: string;
				public charge: string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeFireAndForgetRequestExecutor extends com.stripe.android.FireAndForgetRequestExecutor {
				public static class: java.lang.Class<com.stripe.android.StripeFireAndForgetRequestExecutor>;
				public static Companion: com.stripe.android.StripeFireAndForgetRequestExecutor.Companion;
				public executeAsync(param0: com.stripe.android.StripeRequest): void;
				public execute(param0: com.stripe.android.StripeRequest): number;
				public constructor();
			}
			export module StripeFireAndForgetRequestExecutor {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeFireAndForgetRequestExecutor.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class StripeIntentResult<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.StripeIntentResult<any>>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getIntent(): T;
				public getOutcome(): number;
				/** @deprecated */
				public getStatus(): number;
			}
			export module StripeIntentResult {
				export class Outcome {
					public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Outcome>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeIntentResult$Outcome interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static UNKNOWN: number;
					public static TIMEDOUT: number;
					public static FAILED: number;
					public static SUCCEEDED: number;
					public static CANCELED: number;
				}
				export class Status {
					public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Status>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeIntentResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static UNKNOWN: number;
					public static TIMEDOUT: number;
					public static FAILED: number;
					public static SUCCEEDED: number;
					public static CANCELED: number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeNetworkUtils {
				public static class: java.lang.Class<com.stripe.android.StripeNetworkUtils>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeRepository {
				public static class: java.lang.Class<com.stripe.android.StripeRepository>;
				/**
				 * Constructs a new instance of the com.stripe.android.StripeRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
					retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
					confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
					retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
					createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
					createToken(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string): com.stripe.android.model.Token;
					addCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					deleteCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
					attachPaymentMethod(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
					detachPaymentMethod(param0: string, param1: java.util.List<string>, param2: string, param3: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
					getPaymentMethods(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.stripe.android.ApiRequest.Options): java.util.List<com.stripe.android.model.PaymentMethod>;
					setDefaultCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
					setCustomerShippingInfo(param0: string, param1: string, param2: java.util.List<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
					retrieveCustomer(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
					retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
					updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					start3ds2Auth(param0: com.stripe.android.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult>): void;
					complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<java.lang.Boolean>): void;
				});
				public constructor();
				public retrieveSource(param0: string, param1: string, param2: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public attachPaymentMethod(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public retrieveCustomer(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public confirmSetupIntent(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public addCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public createToken(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string): com.stripe.android.model.Token;
				public setDefaultCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: string, param5: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public setCustomerShippingInfo(param0: string, param1: string, param2: java.util.List<string>, param3: com.stripe.android.model.ShippingInformation, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Customer;
				public confirmPaymentIntent(param0: com.stripe.android.model.ConfirmPaymentIntentParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
				public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public getPaymentMethods(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.stripe.android.ApiRequest.Options): java.util.List<com.stripe.android.model.PaymentMethod>;
				public detachPaymentMethod(param0: string, param1: java.util.List<string>, param2: string, param3: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentMethod;
				public retrieveIssuingCardPin(param0: string, param1: string, param2: string, param3: string): string;
				public updateIssuingCardPin(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public start3ds2Auth(param0: com.stripe.android.Stripe3ds2AuthParams, param1: string, param2: com.stripe.android.ApiRequest.Options, param3: com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult>): void;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
				public complete3ds2Auth(param0: string, param1: com.stripe.android.ApiRequest.Options, param2: com.stripe.android.ApiResultCallback<java.lang.Boolean>): void;
				public retrieveSetupIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.SetupIntent;
				public retrievePaymentIntent(param0: string, param1: com.stripe.android.ApiRequest.Options): com.stripe.android.model.PaymentIntent;
				public deleteCustomerSource(param0: string, param1: string, param2: java.util.List<string>, param3: string, param4: com.stripe.android.ApiRequest.Options): com.stripe.android.model.Source;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class StripeRequest {
				public static class: java.lang.Class<com.stripe.android.StripeRequest>;
			}
			export module StripeRequest {
				export class Method {
					public static class: java.lang.Class<com.stripe.android.StripeRequest.Method>;
					public static GET: com.stripe.android.StripeRequest.Method;
					public static POST: com.stripe.android.StripeRequest.Method;
					public static DELETE: com.stripe.android.StripeRequest.Method;
					public static values(): native.Array<com.stripe.android.StripeRequest.Method>;
					public static valueOf(param0: string): com.stripe.android.StripeRequest.Method;
				}
				export class Parameter {
					public static class: java.lang.Class<com.stripe.android.StripeRequest.Parameter>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeResponse {
				public static class: java.lang.Class<com.stripe.android.StripeResponse>;
				public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
				public getResponseBody(): string;
				public constructor(param0: number, param1: string, param2: java.util.Map<string,any>);
				public hasErrorCode(): boolean;
				public getResponseCode(): number;
				public isOk(): boolean;
				public getRequestId(): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeSSLSocketFactory {
				public static class: java.lang.Class<com.stripe.android.StripeSSLSocketFactory>;
				public static Companion: com.stripe.android.StripeSSLSocketFactory.Companion;
				public constructor(param0: boolean, param1: boolean);
				public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
				public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public getEnabledProtocols(param0: native.Array<string>): native.Array<string>;
				public constructor(param0: javax.net.ssl.SSLSocketFactory, param1: boolean, param2: boolean);
				public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public getDefaultCipherSuites(): native.Array<string>;
				public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				public constructor(param0: native.Array<string>);
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(param0: string, param1: number): java.net.Socket;
				public constructor();
			}
			export module StripeSSLSocketFactory {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeSSLSocketFactory.Companion>;
					public getSupportedProtocols(): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeTextUtils {
				public static class: java.lang.Class<com.stripe.android.StripeTextUtils>;
				public static nullIfBlank(param0: string): string;
				public static isBlank(param0: string): boolean;
				public static emptyIfNull(param0: string): string;
				public static isEmpty(param0: string): boolean;
				public constructor();
				public static removeSpacesAndHyphens(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeUid {
				public static class: java.lang.Class<com.stripe.android.StripeUid>;
				public static Companion: com.stripe.android.StripeUid.Companion;
				public copy(param0: string): com.stripe.android.StripeUid;
				public component1(): string;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public static create(param0: string): com.stripe.android.StripeUid;
				public toString(): string;
				public constructor(param0: string);
			}
			export module StripeUid {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.StripeUid.Companion>;
					public create(param0: string): com.stripe.android.StripeUid;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Supplier<ReturnType>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.Supplier<any>>;
				/**
				 * Constructs a new instance of the com.stripe.android.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): ReturnType;
				});
				public constructor();
				public get(): ReturnType;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class TelemetryClientUtil {
				public static class: java.lang.Class<com.stripe.android.TelemetryClientUtil>;
				public static Companion: com.stripe.android.TelemetryClientUtil.Companion;
				public createTelemetryMap(): java.util.Map<string,any>;
				public constructor(param0: globalAndroid.content.Context);
				public getHashedUid(): string;
				public constructor(param0: com.stripe.android.Supplier<com.stripe.android.StripeUid>, param1: globalAndroid.util.DisplayMetrics, param2: string, param3: globalAndroid.content.pm.PackageManager, param4: string);
				public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.Supplier<com.stripe.android.StripeUid>);
			}
			export module TelemetryClientUtil {
				export class Companion {
					public static class: java.lang.Class<com.stripe.android.TelemetryClientUtil.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class TokenCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Token> {
				public static class: java.lang.Class<com.stripe.android.TokenCallback>;
				/**
				 * Constructs a new instance of the com.stripe.android.TokenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: any): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onSuccess(param0: any): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class UidSupplier extends com.stripe.android.Supplier<com.stripe.android.StripeUid> {
				public static class: java.lang.Class<com.stripe.android.UidSupplier>;
				public constructor(param0: globalAndroid.content.Context);
				public get(): any;
				public get(): com.stripe.android.StripeUid;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIConnectionException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIConnectionException>;
					public static create(param0: string, param1: java.lang.Exception): com.stripe.android.exception.APIConnectionException;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIException>;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: number, param3: com.stripe.android.StripeError, param4: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class AuthenticationException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.AuthenticationException>;
					public constructor(param0: string, param1: string, param2: com.stripe.android.StripeError);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class CardException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.CardException>;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.stripe.android.StripeError);
					public getCode(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public getCharge(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
					public getDeclineCode(): string;
					public getParam(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class InvalidRequestException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.InvalidRequestException>;
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public getErrorDeclineCode(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
					public getErrorCode(): string;
					public getParam(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class PermissionException extends com.stripe.android.exception.AuthenticationException {
					public static class: java.lang.Class<com.stripe.android.exception.PermissionException>;
					public constructor(param0: string, param1: string, param2: com.stripe.android.StripeError);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class RateLimitException extends com.stripe.android.exception.InvalidRequestException {
					public static class: java.lang.Class<com.stripe.android.exception.RateLimitException>;
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.StripeError);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export abstract class StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.StripeException>;
					public static serialVersionUID: number;
					public getStatusCode(): number;
					public toString(): string;
					public getStripeError(): com.stripe.android.StripeError;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
					public getRequestId(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AccountParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.AccountParams>;
					public equals(param0: any): boolean;
					public static createAccountParams(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessType, param2: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module AccountParams {
					export class BusinessType {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessType>;
						public static Individual: com.stripe.android.model.AccountParams.BusinessType;
						public static Company: com.stripe.android.model.AccountParams.BusinessType;
						public code: string;
						public static values(): native.Array<com.stripe.android.model.AccountParams.BusinessType>;
						public static valueOf(param0: string): com.stripe.android.model.AccountParams.BusinessType;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Address extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.Address>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.Address>;
					public describeContents(): number;
					public getLine1(): string;
					public getCountry(): string;
					public getState(): string;
					public getCity(): string;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public getLine2(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
					public static fromString(param0: string): com.stripe.android.model.Address;
					public hashCode(): number;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Address;
				}
				export module Address {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Address> {
						public static class: java.lang.Class<com.stripe.android.model.Address.Builder>;
						public setPostalCode(param0: string): com.stripe.android.model.Address.Builder;
						public constructor();
						public setLine2(param0: string): com.stripe.android.model.Address.Builder;
						public setState(param0: string): com.stripe.android.model.Address.Builder;
						public build(): com.stripe.android.model.Address;
						public setCountry(param0: string): com.stripe.android.model.Address.Builder;
						public setCity(param0: string): com.stripe.android.model.Address.Builder;
						public setLine1(param0: string): com.stripe.android.model.Address.Builder;
						public build(): any;
					}
					export class RequiredBillingAddressFields {
						public static class: java.lang.Class<com.stripe.android.model.Address.RequiredBillingAddressFields>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Address$RequiredBillingAddressFields interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static NONE: number;
						public static NAME: number;
						public static FULL: number;
						public static ZIP: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BankAccount extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.BankAccount>;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
					public getFingerprint(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string);
					public getCountryCode(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.BankAccount;
					public getCurrency(): string;
					public getBankName(): string;
					public getAccountHolderType(): string;
					public static asBankAccountType(param0: string): string;
					public getAccountNumber(): string;
					public getRoutingNumber(): string;
					public toParamMap(): java.util.Map<string,any>;
					public getLast4(): string;
					public equals(param0: any): boolean;
					public static fromString(param0: string): com.stripe.android.model.BankAccount;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public hashCode(): number;
					public getAccountHolderName(): string;
				}
				export module BankAccount {
					export class BankAccountType {
						public static class: java.lang.Class<com.stripe.android.model.BankAccount.BankAccountType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.BankAccount$BankAccountType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static COMPANY: string;
						public static INDIVIDUAL: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Card extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Card>;
					public static CVC_LENGTH_AMERICAN_EXPRESS: number;
					public static CVC_LENGTH_COMMON: number;
					public static PREFIXES_AMERICAN_EXPRESS: native.Array<string>;
					public static PREFIXES_DISCOVER: native.Array<string>;
					public static PREFIXES_JCB: native.Array<string>;
					public static PREFIXES_DINERS_CLUB: native.Array<string>;
					public static PREFIXES_VISA: native.Array<string>;
					public static PREFIXES_MASTERCARD: native.Array<string>;
					public static PREFIXES_UNIONPAY: native.Array<string>;
					public static MAX_LENGTH_STANDARD: number;
					public static MAX_LENGTH_AMERICAN_EXPRESS: number;
					public static MAX_LENGTH_DINERS_CLUB: number;
					public validateCVC(): boolean;
					public getFunding(): string;
					public getId(): string;
					public getFingerprint(): string;
					public getAddressCity(): string;
					public getCurrency(): string;
					public static asCardBrand(param0: string): string;
					public static asFundingType(param0: string): string;
					public getCvcCheck(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Card;
					public getAddressCountry(): string;
					public getExpYear(): java.lang.Integer;
					public getAddressLine2(): string;
					public validateExpiryDate(): boolean;
					public validateExpMonth(): boolean;
					public hashCode(): number;
					public getAddressState(): string;
					public getCustomerId(): string;
					public getNumber(): string;
					public toPaymentMethodParamsCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public getExpMonth(): java.lang.Integer;
					public getBrand(): string;
					public getAddressLine1Check(): string;
					public static fromString(param0: string): com.stripe.android.model.Card;
					public getAddressLine1(): string;
					public static getBrandIcon(param0: string): number;
					public getAddressZipCheck(): string;
					public getCountry(): string;
					public validateNumber(): boolean;
					public getLast4(): string;
					public equals(param0: any): boolean;
					public getLoggingTokens(): java.util.List<string>;
					public getAddressZip(): string;
					public static create(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string): com.stripe.android.model.Card;
					public toBuilder(): com.stripe.android.model.Card.Builder;
					public getName(): string;
					public getMetadata(): java.util.Map<string,string>;
					public getCVC(): string;
					public validateCard(): boolean;
				}
				export module Card {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Card> {
						public static class: java.lang.Class<com.stripe.android.model.Card.Builder>;
						public addressLine2(param0: string): com.stripe.android.model.Card.Builder;
						public last4(param0: string): com.stripe.android.model.Card.Builder;
						public addressCountry(param0: string): com.stripe.android.model.Card.Builder;
						public tokenizationMethod(param0: string): com.stripe.android.model.Card.Builder;
						public metadata(param0: java.util.Map<string,string>): com.stripe.android.model.Card.Builder;
						public fingerprint(param0: string): com.stripe.android.model.Card.Builder;
						public addressZip(param0: string): com.stripe.android.model.Card.Builder;
						public name(param0: string): com.stripe.android.model.Card.Builder;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
						public addressLine1(param0: string): com.stripe.android.model.Card.Builder;
						public currency(param0: string): com.stripe.android.model.Card.Builder;
						public build(): any;
						public funding(param0: string): com.stripe.android.model.Card.Builder;
						public brand(param0: string): com.stripe.android.model.Card.Builder;
						public loggingTokens(param0: java.util.List<string>): com.stripe.android.model.Card.Builder;
						public cvcCheck(param0: string): com.stripe.android.model.Card.Builder;
						public addressZipCheck(param0: string): com.stripe.android.model.Card.Builder;
						public customer(param0: string): com.stripe.android.model.Card.Builder;
						public build(): com.stripe.android.model.Card;
						public id(param0: string): com.stripe.android.model.Card.Builder;
						public addressLine1Check(param0: string): com.stripe.android.model.Card.Builder;
						public country(param0: string): com.stripe.android.model.Card.Builder;
						public addressCity(param0: string): com.stripe.android.model.Card.Builder;
						public addressState(param0: string): com.stripe.android.model.Card.Builder;
					}
					export class CardBrand {
						public static class: java.lang.Class<com.stripe.android.model.Card.CardBrand>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Card$CardBrand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static UNIONPAY: string;
						public static DISCOVER: string;
						public static MASTERCARD: string;
						public static VISA: string;
						public static JCB: string;
						public static UNKNOWN: string;
						public static DINERS_CLUB: string;
						public static AMERICAN_EXPRESS: string;
					}
					export class FundingType {
						public static class: java.lang.Class<com.stripe.android.model.Card.FundingType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Card$FundingType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CREDIT: string;
						public static DEBIT: string;
						public static UNKNOWN: string;
						public static PREPAID: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmPaymentIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams>;
					public static API_PARAM_SOURCE_DATA: string;
					public static API_PARAM_PAYMENT_METHOD_DATA: string;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceId(param0: string, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getSourceId(): string;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getClientSecret(): string;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static create(param0: string, param1: string, param2: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public hashCode(): number;
					public getPaymentMethodId(): string;
					public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public getSourceParams(): com.stripe.android.model.SourceParams;
					public static createWithPaymentMethodId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public toParamMap(): java.util.Map<string,any>;
					public static create(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public equals(param0: any): boolean;
					public static createWithPaymentMethodId(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public static create(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
					public shouldSavePaymentMethod(): boolean;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public getExtraParams(): java.util.Map<string,any>;
					public getReturnUrl(): string;
					public static createWithSourceId(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
					public shouldUseStripeSdk(): boolean;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
				export module ConfirmPaymentIntentParams {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.ConfirmPaymentIntentParams> {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Builder>;
						public build(): com.stripe.android.model.ConfirmPaymentIntentParams;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmSetupIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams>;
					public equals(param0: any): boolean;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmSetupIntentParams;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public shouldUseStripeSdk(): boolean;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
					public static create(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public static create(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
					public getClientSecret(): string;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
				export module ConfirmSetupIntentParams {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.ConfirmSetupIntentParams> {
						public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams.Builder>;
						public build(): com.stripe.android.model.ConfirmSetupIntentParams;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ConfirmStripeIntentParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.ConfirmStripeIntentParams>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.ConfirmStripeIntentParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getClientSecret(): string;
						shouldUseStripeSdk(): boolean;
						withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
						toParamMap(): java.util.Map<string,any>;
					});
					public constructor();
					public static API_PARAM_CLIENT_SECRET: string;
					public static API_PARAM_PAYMENT_METHOD_DATA: string;
					public static API_PARAM_RETURN_URL: string;
					public static API_PARAM_USE_STRIPE_SDK: string;
					public static API_PARAM_PAYMENT_METHOD_ID: string;
					public shouldUseStripeSdk(): boolean;
					public toParamMap(): java.util.Map<string,any>;
					public getClientSecret(): string;
					public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Customer extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.Customer>;
					public equals(param0: any): boolean;
					public getId(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Customer;
					public getUrl(): string;
					public getTotalCount(): java.lang.Integer;
					public getDefaultSource(): string;
					public getSources(): java.util.List<com.stripe.android.model.CustomerSource>;
					public static fromString(param0: string): com.stripe.android.model.Customer;
					public getSourceById(param0: string): com.stripe.android.model.CustomerSource;
					public hashCode(): number;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
					public getHasMore(): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CustomerSource extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.CustomerSource>;
					public getStripePaymentSource(): com.stripe.android.model.StripePaymentSource;
					public getTokenizationMethod(): string;
					public equals(param0: any): boolean;
					public getId(): string;
					public getSourceType(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.CustomerSource;
					public static fromString(param0: string): com.stripe.android.model.CustomerSource;
					public asCard(): com.stripe.android.model.Card;
					public hashCode(): number;
					public asSource(): com.stripe.android.model.Source;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CvcTokenParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.CvcTokenParams>;
					public constructor(param0: string);
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ModelUtils {
					public static class: java.lang.Class<com.stripe.android.model.ModelUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentIntent extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeIntent {
					public static class: java.lang.Class<com.stripe.android.model.PaymentIntent>;
					public static parseIdFromClientSecret(param0: string): string;
					public getId(): string;
					public requiresConfirmation(): boolean;
					public getCurrency(): string;
					public static fromString(param0: string): com.stripe.android.model.PaymentIntent;
					/** @deprecated */
					public getSource(): string;
					public getClientSecret(): string;
					public getCaptureMethod(): string;
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public isLiveMode(): boolean;
					public getPaymentMethodTypes(): java.util.List<string>;
					public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
					public getCanceledAt(): number;
					public hashCode(): number;
					public getPaymentMethodId(): string;
					public getNextAction(): java.util.Map<string,any>;
					public getCancellationReason(): com.stripe.android.model.PaymentIntent.CancellationReason;
					public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
					public getAmount(): java.lang.Long;
					public getLastPaymentError(): com.stripe.android.model.PaymentIntent.Error;
					public getCreated(): number;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
					public getReceiptEmail(): string;
					public getRedirectUrl(): globalAndroid.net.Uri;
					public getConfirmationMethod(): string;
					public equals(param0: any): boolean;
					public requiresAction(): boolean;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public getDescription(): string;
				}
				export module PaymentIntent {
					export class CancellationReason {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.CancellationReason>;
						public static Duplicate: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Fraudulent: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static RequestedByCustomer: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Abandoned: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static FailedInvoice: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static VoidInvoice: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static Automatic: com.stripe.android.model.PaymentIntent.CancellationReason;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.CancellationReason;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.CancellationReason>;
					}
					export class Error {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error>;
						public charge: string;
						public code: string;
						public declineCode: string;
						public docUrl: string;
						public message: string;
						public param: string;
						public paymentMethod: com.stripe.android.model.PaymentMethod;
						public type: com.stripe.android.model.PaymentIntent.Error.Type;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Error {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentIntent.Error> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Builder>;
							public build(): any;
							public build(): com.stripe.android.model.PaymentIntent.Error;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Error.Type>;
							public static ApiConnectionError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static ApiError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static AuthenticationError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static CardError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static IdempotencyError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static InvalidRequestError: com.stripe.android.model.PaymentIntent.Error.Type;
							public static RateLimitError: com.stripe.android.model.PaymentIntent.Error.Type;
							public code: string;
							public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.Error.Type;
							public static values(): native.Array<com.stripe.android.model.PaymentIntent.Error.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentMethod extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethod>;
					public id: string;
					public created: java.lang.Long;
					public liveMode: boolean;
					public type: string;
					public billingDetails: com.stripe.android.model.PaymentMethod.BillingDetails;
					public customerId: string;
					public metadata: java.util.Map<string,string>;
					public card: com.stripe.android.model.PaymentMethod.Card;
					public cardPresent: com.stripe.android.model.PaymentMethod.CardPresent;
					public fpx: com.stripe.android.model.PaymentMethod.Fpx;
					public ideal: com.stripe.android.model.PaymentMethod.Ideal;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod>;
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
					public isValid(): boolean;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public static fromString(param0: string): com.stripe.android.model.PaymentMethod;
				}
				export module PaymentMethod {
					export class BillingDetails extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails>;
						public address: com.stripe.android.model.Address;
						public email: string;
						public name: string;
						public phone: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.BillingDetails>;
						public describeContents(): number;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.BillingDetails;
						public toParamMap(): java.util.Map<string,any>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module BillingDetails {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.BillingDetails> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethod.BillingDetails;
							public setPhone(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public build(): any;
							public setName(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setEmail(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
						}
					}
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod> {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Builder>;
						public setId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public constructor();
						public setCardPresent(param0: com.stripe.android.model.PaymentMethod.CardPresent): com.stripe.android.model.PaymentMethod.Builder;
						public setIdeal(param0: com.stripe.android.model.PaymentMethod.Ideal): com.stripe.android.model.PaymentMethod.Builder;
						public build(): any;
						public setCreated(param0: java.lang.Long): com.stripe.android.model.PaymentMethod.Builder;
						public build(): com.stripe.android.model.PaymentMethod;
						public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.PaymentMethod.Builder;
						public setFpx(param0: com.stripe.android.model.PaymentMethod.Fpx): com.stripe.android.model.PaymentMethod.Builder;
						public setType(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public setCard(param0: com.stripe.android.model.PaymentMethod.Card): com.stripe.android.model.PaymentMethod.Builder;
						public setCustomerId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public setLiveMode(param0: boolean): com.stripe.android.model.PaymentMethod.Builder;
						public setBillingDetails(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethod.Builder;
					}
					export class Card extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card>;
						public brand: string;
						public checks: com.stripe.android.model.PaymentMethod.Card.Checks;
						public country: string;
						public expiryMonth: java.lang.Integer;
						public expiryYear: java.lang.Integer;
						public funding: string;
						public last4: string;
						public threeDSecureUsage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
						public wallet: com.stripe.android.model.wallets.Wallet;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module Card {
						export class Brand {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Brand>;
							/**
							 * Constructs a new instance of the com.stripe.android.model.PaymentMethod$Card$Brand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static UNIONPAY: string;
							public static DISCOVER: string;
							public static MASTERCARD: string;
							public static VISA: string;
							public static JCB: string;
							public static UNKNOWN: string;
							public static DINERS_CLUB: string;
							public static AMERICAN_EXPRESS: string;
						}
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Builder>;
							public constructor();
							public setThreeDSecureUsage(param0: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setLast4(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setFunding(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setCountry(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setWallet(param0: com.stripe.android.model.wallets.Wallet): com.stripe.android.model.PaymentMethod.Card.Builder;
							public build(): com.stripe.android.model.PaymentMethod.Card;
							public setChecks(param0: com.stripe.android.model.PaymentMethod.Card.Checks): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public build(): any;
							public setBrand(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
						}
						export class Checks extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks>;
							public addressLine1Check: string;
							public addressPostalCodeCheck: string;
							public cvcCheck: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card.Checks>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
							public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.Checks;
						}
						export module Checks {
							export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card.Checks> {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks.Builder>;
								public setAddressLine1Check(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
								public setAddressPostalCodeCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
								public build(): com.stripe.android.model.PaymentMethod.Card.Checks;
								public build(): any;
								public constructor();
								public setCvcCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
							}
						}
						export class ThreeDSecureUsage extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
							public isSupported: boolean;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
							public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
						export module ThreeDSecureUsage {
							export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage> {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder>;
								public build(): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
								public build(): any;
								public constructor();
								public setSupported(param0: boolean): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder;
							}
						}
					}
					export class CardPresent extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent>;
						public static EMPTY: com.stripe.android.model.PaymentMethod.CardPresent;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.CardPresent>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export class Fpx extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Fpx>;
						public bank: string;
						public accountHolderType: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Fpx>;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Fpx;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Fpx {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Fpx> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Fpx.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethod.Fpx;
							public setBank(param0: string): com.stripe.android.model.PaymentMethod.Fpx.Builder;
							public setAccountHolderType(param0: string): com.stripe.android.model.PaymentMethod.Fpx.Builder;
							public build(): any;
						}
					}
					export class Ideal extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal>;
						public bank: string;
						public bankIdentifierCode: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Ideal>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Ideal;
					}
					export module Ideal {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Ideal> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal.Builder>;
							public constructor();
							public setBankIdentifierCode(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
							public setBank(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
							public build(): any;
							public build(): com.stripe.android.model.PaymentMethod.Ideal;
						}
					}
					export abstract class PaymentMethodTypeImpl extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl>;
						public type: com.stripe.android.model.PaymentMethod.Type;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Type>;
						public static Card: com.stripe.android.model.PaymentMethod.Type;
						public static CardPresent: com.stripe.android.model.PaymentMethod.Type;
						public static Fpx: com.stripe.android.model.PaymentMethod.Type;
						public static Ideal: com.stripe.android.model.PaymentMethod.Type;
						public code: string;
						public isReusable: boolean;
						public static values(): native.Array<com.stripe.android.model.PaymentMethod.Type>;
						public static valueOf(param0: string): com.stripe.android.model.PaymentMethod.Type;
						public static lookup(param0: string): com.stripe.android.model.PaymentMethod.Type;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentMethodCreateParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams>;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card): com.stripe.android.model.PaymentMethodCreateParams;
					public static createFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public toParamMap(): java.util.Map<string,any>;
					public equals(param0: any): boolean;
					public getTypeCode(): string;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Fpx, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public hashCode(): number;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module PaymentMethodCreateParams {
					export class Card extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card>;
						public toParamMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static create(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card;
					}
					export module Card {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Card> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Card;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public build(): any;
							public setCvc(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setNumber(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
						}
					}
					export class Fpx extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx>;
						public toParamMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Fpx {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Fpx> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Fpx.Builder>;
							public constructor();
							public build(): any;
							public setBank(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Fpx.Builder;
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Fpx;
						}
					}
					export class Ideal extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal>;
						public toParamMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Ideal {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Ideal> {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder>;
							public constructor();
							public build(): any;
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Ideal;
							public setBank(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder;
						}
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Type>;
						public static Card: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Ideal: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Fpx: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static valueOf(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static values(): native.Array<com.stripe.android.model.PaymentMethodCreateParams.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PiiTokenParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.PiiTokenParams>;
					public constructor(param0: string);
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SetupIntent extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeIntent {
					public static class: java.lang.Class<com.stripe.android.model.SetupIntent>;
					public static parseIdFromClientSecret(param0: string): string;
					public getId(): string;
					public getUsage(): com.stripe.android.model.StripeIntent.Usage;
					public requiresConfirmation(): boolean;
					public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
					public getCreated(): number;
					public getLastSetupError(): com.stripe.android.model.SetupIntent.Error;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent;
					public static fromString(param0: string): com.stripe.android.model.SetupIntent;
					public getRedirectUrl(): globalAndroid.net.Uri;
					public getClientSecret(): string;
					public equals(param0: any): boolean;
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public getCancellationReason(): com.stripe.android.model.SetupIntent.CancellationReason;
					public requiresAction(): boolean;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public isLiveMode(): boolean;
					public getPaymentMethodTypes(): java.util.List<string>;
					/** @deprecated */
					public getCustomerId(): string;
					public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
					public getDescription(): string;
					public hashCode(): number;
					public getPaymentMethodId(): string;
				}
				export module SetupIntent {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.SetupIntent> {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Builder>;
						public build(): com.stripe.android.model.SetupIntent;
						public build(): any;
					}
					export class CancellationReason {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.CancellationReason>;
						public static Duplicate: com.stripe.android.model.SetupIntent.CancellationReason;
						public static RequestedByCustomer: com.stripe.android.model.SetupIntent.CancellationReason;
						public static Abandoned: com.stripe.android.model.SetupIntent.CancellationReason;
						public static values(): native.Array<com.stripe.android.model.SetupIntent.CancellationReason>;
						public static valueOf(param0: string): com.stripe.android.model.SetupIntent.CancellationReason;
					}
					export class Error {
						public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error>;
						public code: string;
						public declineCode: string;
						public docUrl: string;
						public message: string;
						public param: string;
						public paymentMethod: com.stripe.android.model.PaymentMethod;
						public type: com.stripe.android.model.SetupIntent.Error.Type;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Error {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.SetupIntent.Error> {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Builder>;
							public build(): any;
							public build(): com.stripe.android.model.SetupIntent.Error;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Error.Type>;
							public static ApiConnectionError: com.stripe.android.model.SetupIntent.Error.Type;
							public static ApiError: com.stripe.android.model.SetupIntent.Error.Type;
							public static AuthenticationError: com.stripe.android.model.SetupIntent.Error.Type;
							public static CardError: com.stripe.android.model.SetupIntent.Error.Type;
							public static IdempotencyError: com.stripe.android.model.SetupIntent.Error.Type;
							public static InvalidRequestError: com.stripe.android.model.SetupIntent.Error.Type;
							public static RateLimitError: com.stripe.android.model.SetupIntent.Error.Type;
							public code: string;
							public static valueOf(param0: string): com.stripe.android.model.SetupIntent.Error.Type;
							public static values(): native.Array<com.stripe.android.model.SetupIntent.Error.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingInformation extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingInformation>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingInformation>;
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.ShippingInformation;
					public constructor();
					public getName(): string;
					public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhone(): string;
					public hashCode(): number;
					public getAddress(): com.stripe.android.model.Address;
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingMethod extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingMethod>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingMethod>;
					public getLabel(): string;
					public equals(param0: any): boolean;
					public getAmount(): number;
					public constructor();
					public describeContents(): number;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string);
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDetail(): string;
					public hashCode(): number;
					public getCurrency(): java.util.Currency;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Source extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Source>;
					/** @deprecated */
					public setAmount(param0: number): void;
					public getId(): string;
					public getWeChat(): com.stripe.android.model.WeChat;
					public getReceiver(): com.stripe.android.model.SourceReceiver;
					public getCurrency(): string;
					public getCodeVerification(): com.stripe.android.model.SourceCodeVerification;
					/** @deprecated */
					public setReceiver(param0: com.stripe.android.model.SourceReceiver): void;
					/** @deprecated */
					public setRedirect(param0: com.stripe.android.model.SourceRedirect): void;
					/** @deprecated */
					public setTypeRaw(param0: string): void;
					public getClientSecret(): string;
					/** @deprecated */
					public setFlow(param0: string): void;
					public getRedirect(): com.stripe.android.model.SourceRedirect;
					/** @deprecated */
					public setClientSecret(param0: string): void;
					public getOwner(): com.stripe.android.model.SourceOwner;
					/** @deprecated */
					public setLiveMode(param0: boolean): void;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Source;
					public getFlow(): string;
					public getUsage(): string;
					/** @deprecated */
					public setCreated(param0: number): void;
					public getType(): string;
					public hashCode(): number;
					public getSourceTypeModel(): com.stripe.android.model.StripeSourceTypeModel;
					/** @deprecated */
					public setOwner(param0: com.stripe.android.model.SourceOwner): void;
					/** @deprecated */
					public setMetaData(param0: java.util.Map<string,string>): void;
					/** @deprecated */
					public setStatus(param0: string): void;
					public static fromString(param0: string): com.stripe.android.model.Source;
					public getAmount(): java.lang.Long;
					public getMetaData(): java.util.Map<string,string>;
					/** @deprecated */
					public setCodeVerification(param0: com.stripe.android.model.SourceCodeVerification): void;
					public getStatus(): string;
					public getSourceTypeData(): java.util.Map<string,any>;
					public getTypeRaw(): string;
					/** @deprecated */
					public setId(param0: string): void;
					/** @deprecated */
					public setCurrency(param0: string): void;
					/** @deprecated */
					public setType(param0: string): void;
					public equals(param0: any): boolean;
					/** @deprecated */
					public setSourceTypeData(param0: java.util.Map<string,any>): void;
					/** @deprecated */
					public setUsage(param0: string): void;
					public getCreated(): java.lang.Long;
					public isLiveMode(): java.lang.Boolean;
				}
				export module Source {
					export class SourceFlow {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceFlow>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceFlow interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CODE_VERIFICATION: string;
						public static NONE: string;
						public static REDIRECT: string;
						public static RECEIVER: string;
					}
					export class SourceStatus {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceStatus>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static FAILED: string;
						public static CANCELED: string;
						public static CONSUMED: string;
						public static CHARGEABLE: string;
						public static PENDING: string;
					}
					export class SourceType {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static IDEAL: string;
						public static P24: string;
						public static ALIPAY: string;
						public static THREE_D_SECURE: string;
						public static SOFORT: string;
						public static UNKNOWN: string;
						public static GIROPAY: string;
						public static BANCONTACT: string;
						public static SEPA_DEBIT: string;
						public static MULTIBANCO: string;
						public static WECHAT: string;
						public static EPS: string;
						public static CARD: string;
					}
					export class Usage {
						public static class: java.lang.Class<com.stripe.android.model.Source.Usage>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$Usage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static REUSABLE: string;
						public static SINGLE_USE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceCardData extends com.stripe.android.model.StripeSourceTypeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceCardData>;
					public getExpiryMonth(): java.lang.Integer;
					public getFunding(): string;
					public getAddressLine1Check(): string;
					public getBrand(): string;
					public getDynamicLast4(): string;
					public getAddressZipCheck(): string;
					public getCountry(): string;
					public getThreeDSecureStatus(): string;
					public getLast4(): string;
					public getCvcCheck(): string;
					public getTokenizationMethod(): string;
					public equals(param0: any): boolean;
					public getExpiryYear(): java.lang.Integer;
					public hashCode(): number;
				}
				export module SourceCardData {
					export class Builder extends com.stripe.android.model.StripeSourceTypeModel.BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.SourceCardData.Builder>;
						public build(): com.stripe.android.model.SourceCardData;
					}
					export class ThreeDSecureStatus {
						public static class: java.lang.Class<com.stripe.android.model.SourceCardData.ThreeDSecureStatus>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.SourceCardData$ThreeDSecureStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static NOT_SUPPORTED: string;
						public static OPTIONAL: string;
						public static RECOMMENDED: string;
						public static REQUIRED: string;
						public static UNKNOWN: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceCodeVerification extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceCodeVerification>;
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceCodeVerification;
					public getAttemptsRemaining(): number;
					public static fromString(param0: string): com.stripe.android.model.SourceCodeVerification;
					public getStatus(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceOwner extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceOwner>;
					public equals(param0: any): boolean;
					public getVerifiedName(): string;
					public getName(): string;
					public static fromString(param0: string): com.stripe.android.model.SourceOwner;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceOwner;
					public getVerifiedAddress(): com.stripe.android.model.Address;
					public getPhone(): string;
					public getVerifiedEmail(): string;
					public hashCode(): number;
					public getAddress(): com.stripe.android.model.Address;
					public getEmail(): string;
					public getVerifiedPhone(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceParams extends com.stripe.android.model.StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceParams>;
					public setToken(param0: string): com.stripe.android.model.SourceParams;
					public getRedirect(): java.util.Map<string,any>;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): com.stripe.android.model.SourceParams;
					public static createCardParams(param0: com.stripe.android.model.Card): com.stripe.android.model.SourceParams;
					public static createMasterpassParams(param0: string, param1: string): com.stripe.android.model.SourceParams;
					public static createSourceFromTokenParams(param0: string): com.stripe.android.model.SourceParams;
					public static createBancontactParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public getCurrency(): string;
					public static createVisaCheckoutParams(param0: string): com.stripe.android.model.SourceParams;
					public setAmount(param0: number): com.stripe.android.model.SourceParams;
					public static createEPSParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createSofortParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createIdealParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public setMetaData(param0: java.util.Map<string,string>): com.stripe.android.model.SourceParams;
					public getOwner(): java.util.Map<string,any>;
					public getUsage(): string;
					public setUsage(param0: string): com.stripe.android.model.SourceParams;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.SourceParams;
					public setCurrency(param0: string): com.stripe.android.model.SourceParams;
					public static createGiropayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getType(): string;
					public hashCode(): number;
					public static createMultibancoParams(param0: number, param1: string, param2: string): com.stripe.android.model.SourceParams;
					public getApiParameterMap(): java.util.Map<string,any>;
					public setExtraParams(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public getAmount(): java.lang.Long;
					public getMetaData(): java.util.Map<string,string>;
					public static createAlipayReusableParams(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createThreeDSecureParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getTypeRaw(): string;
					public setOwner(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public toParamMap(): java.util.Map<string,any>;
					public setApiParameterMap(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public static createRetrieveSourceParams(param0: string): java.util.Map<string,string>;
					public equals(param0: any): boolean;
					public static createWeChatPayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createAlipaySingleUseParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public static createP24Params(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public setReturnUrl(param0: string): com.stripe.android.model.SourceParams;
					public static createCustomParams(param0: string): com.stripe.android.model.SourceParams;
					public static createCardParamsFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.SourceParams;
					public setRedirect(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
				}
				export module SourceParams {
					export class Owner extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceParams.Owner>;
						public toParamMap(): java.util.Map<string,any>;
					}
					export module Owner {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.SourceParams.Owner> {
							public static class: java.lang.Class<com.stripe.android.model.SourceParams.Owner.Builder>;
							public build(): com.stripe.android.model.SourceParams.Owner;
							public build(): any;
						}
					}
					export class WeChatParams extends com.stripe.android.model.StripeParamsModel {
						public static class: java.lang.Class<com.stripe.android.model.SourceParams.WeChatParams>;
						public toParamMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceReceiver extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceReceiver>;
					public getAddress(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceReceiver;
					public equals(param0: any): boolean;
					public getAmountCharged(): number;
					public hashCode(): number;
					public getAmountReceived(): number;
					public getAmountReturned(): number;
					public static fromString(param0: string): com.stripe.android.model.SourceReceiver;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceRedirect extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceRedirect>;
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceRedirect;
					public static fromString(param0: string): com.stripe.android.model.SourceRedirect;
					public getUrl(): string;
					public getReturnUrl(): string;
					public getStatus(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceSepaDebitData extends com.stripe.android.model.StripeSourceTypeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceSepaDebitData>;
					public getFingerPrint(): string;
					public equals(param0: any): boolean;
					public getBranchCode(): string;
					public getMandateReference(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceSepaDebitData;
					public getBankCode(): string;
					public getCountry(): string;
					public hashCode(): number;
					public getLast4(): string;
					public getMandateUrl(): string;
				}
				export module SourceSepaDebitData {
					export class Builder extends com.stripe.android.model.StripeSourceTypeModel.BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.SourceSepaDebitData.Builder>;
						public build(): com.stripe.android.model.SourceSepaDebitData;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3ds2AuthResult {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult>;
					public static Companion: com.stripe.android.model.Stripe3ds2AuthResult.Companion;
					public getId(): string;
					public constructor(param0: string, param1: string, param2: com.stripe.android.model.Stripe3ds2AuthResult.Ares, param3: java.lang.Long, param4: string, param5: string, param6: boolean, param7: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error, param8: string);
					public component8(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
					public component5(): string;
					public getSource(): string;
					public getError(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
					public component4(): java.lang.Long;
					public getState(): string;
					public component3(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
					public equals(param0: any): boolean;
					public getFallbackRedirectUrl(): string;
					public toString(): string;
					public component1(): string;
					public getCreated(): java.lang.Long;
					public component6(): string;
					public component9(): string;
					public copy(param0: string, param1: string, param2: com.stripe.android.model.Stripe3ds2AuthResult.Ares, param3: java.lang.Long, param4: string, param5: string, param6: boolean, param7: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error, param8: string): com.stripe.android.model.Stripe3ds2AuthResult;
					public getAres(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
					public hashCode(): number;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult;
				}
				export module Stripe3ds2AuthResult {
					export class Ares {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares>;
						public static VALUE_YES: string;
						public static Companion: com.stripe.android.model.Stripe3ds2AuthResult.Ares.Companion;
						public component3(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>, param8: string, param9: string, param10: string);
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public shouldChallenge(): boolean;
						public getAcsSignedContent(): string;
						public toString(): string;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>, param8: string, param9: string, param10: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
						public component4(): string;
						public static fromJson$stripe_release(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
						public getThreeDSServerTransId(): string;
						public getAcsTransId(): string;
					}
					export module Ares {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.Ares> {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder>;
							public setAcsChallengeMandated(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public constructor();
							public setThreeDSServerTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setMessageType(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setSdkTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public build(): any;
							public setAuthenticationType(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public build(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
							public setAcsUrl(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setMessageExtension(param0: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setCardholderInfo(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setMessageVersion(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setAcsSignedContent(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
							public setAcsTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares.Companion>;
							public fromJson$stripe_release(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
						}
					}
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult> {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Builder>;
						public setState(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public constructor();
						public setSource(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setAres(param0: com.stripe.android.model.Stripe3ds2AuthResult.Ares): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setError(param0: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setCreated(param0: number): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setLiveMode(param0: boolean): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public build(): com.stripe.android.model.Stripe3ds2AuthResult;
						public setObjectType(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public setFallbackRedirectUrl(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.Builder;
						public build(): any;
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Companion>;
						public fromJson(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult;
					}
					export class MessageExtension {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
						public static Companion: com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Companion;
						public component4(): java.util.Map<string,string>;
						public component3(): string;
						public constructor(param0: string, param1: boolean, param2: string, param3: java.util.Map<string,string>);
						public static fromJson$stripe_release(param0: org.json.JSONArray): java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
						public getData(): java.util.Map<string,string>;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public copy(param0: string, param1: boolean, param2: string, param3: java.util.Map<string,string>): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension;
						public getName(): string;
						public toString(): string;
					}
					export module MessageExtension {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension> {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder>;
							public setId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder;
							public build(): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension;
							public constructor();
							public setData(param0: java.util.Map<string,string>): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder;
							public build(): any;
							public setName(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder;
							public setCriticalityIndicator(param0: boolean): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Companion>;
							public fromJson$stripe_release(param0: org.json.JSONArray): java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
						}
					}
					export class ThreeDS2Error {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error>;
						public static Companion: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Companion;
						public getErrorDetail(): string;
						public component5(): string;
						public getErrorDescription(): string;
						public getErrorCode(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component11(): string;
						public component9(): string;
						public getMessageVersion(): string;
						public component4(): string;
						public getErrorMessageType(): string;
						public static fromJson$stripe_release(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
						public getThreeDSServerTransId(): string;
						public component10(): string;
						public getAcsTransId(): string;
						public component8(): string;
						public component3(): string;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
						public getSdkTransId(): string;
						public component7(): string;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string);
						public component2(): string;
						public component6(): string;
						public getDsTransId(): string;
						public getErrorComponent(): string;
						public getMessageType(): string;
					}
					export module ThreeDS2Error {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error> {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder>;
							public constructor();
							public setThreeDSServerTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setSdkTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setErrorDescription(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public build(): any;
							public setErrorComponent(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public build(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
							public setErrorCode(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setErrorMessageType(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setAcsTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setDsTransId(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setMessageType(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setErrorDetail(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
							public setMessageVersion(param0: string): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Companion>;
							public fromJson$stripe_release(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3ds2Fingerprint {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint>;
					public static Companion: com.stripe.android.model.Stripe3ds2Fingerprint.Companion;
					public getSource(): string;
					public getDirectoryServerEncryption(): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
					public getServerTransactionId(): string;
					public getDirectoryServer(): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
					public static create(param0: com.stripe.android.model.StripeIntent.SdkData): com.stripe.android.model.Stripe3ds2Fingerprint;
				}
				export module Stripe3ds2Fingerprint {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.Companion>;
						public create(param0: com.stripe.android.model.StripeIntent.SdkData): com.stripe.android.model.Stripe3ds2Fingerprint;
					}
					export class DirectoryServer {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer>;
						public static Visa: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
						public static Mastercard: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
						public static Amex: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
						public static Companion: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer.Companion;
						public getNetworkName(): string;
						public static valueOf(param0: string): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
						public static values(): native.Array<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer>;
						public getId(): string;
					}
					export module DirectoryServer {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer.Companion>;
							public lookup$stripe_release(param0: string): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
						}
					}
					export class DirectoryServerEncryption {
						public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption>;
						public static Companion: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption.Companion;
						public static create$stripe_release(param0: java.util.Map<string,any>): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
						public getDirectoryServerPublicKey(): java.security.PublicKey;
						public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: string);
						public getRootCerts(): java.util.List<java.security.cert.X509Certificate>;
						public getKeyId(): string;
						public getDirectoryServerId(): string;
					}
					export module DirectoryServerEncryption {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption.Companion>;
							public create$stripe_release(param0: java.util.Map<string,any>): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Stripe3dsRedirect {
					public static class: java.lang.Class<com.stripe.android.model.Stripe3dsRedirect>;
					public getUrl(): string;
					public static create(param0: com.stripe.android.model.StripeIntent.SdkData): com.stripe.android.model.Stripe3dsRedirect;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeIntent {
					public static class: java.lang.Class<com.stripe.android.model.StripeIntent>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripeIntent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
						getCreated(): number;
						getDescription(): string;
						isLiveMode(): boolean;
						requiresAction(): boolean;
						requiresConfirmation(): boolean;
						getPaymentMethodId(): string;
						getPaymentMethodTypes(): java.util.List<string>;
						getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
						getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
						getClientSecret(): string;
						getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
						getStatus(): com.stripe.android.model.StripeIntent.Status;
					});
					public constructor();
					public getId(): string;
					public requiresConfirmation(): boolean;
					public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
					public getCreated(): number;
					public getClientSecret(): string;
					public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
					public requiresAction(): boolean;
					public getStatus(): com.stripe.android.model.StripeIntent.Status;
					public isLiveMode(): boolean;
					public getPaymentMethodTypes(): java.util.List<string>;
					public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
					public getDescription(): string;
					public getPaymentMethodId(): string;
				}
				export module StripeIntent {
					export class NextActionType {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionType>;
						public static RedirectToUrl: com.stripe.android.model.StripeIntent.NextActionType;
						public static UseStripeSdk: com.stripe.android.model.StripeIntent.NextActionType;
						public code: string;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.NextActionType>;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
						public static fromCode(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
						public toString(): string;
					}
					export class RedirectData {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.RedirectData>;
						public url: globalAndroid.net.Uri;
						public returnUrl: string;
					}
					export class SdkData {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.SdkData>;
						public is3ds1(): boolean;
						public is3ds2(): boolean;
					}
					export class Status {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Status>;
						public static Canceled: com.stripe.android.model.StripeIntent.Status;
						public static Processing: com.stripe.android.model.StripeIntent.Status;
						public static RequiresAction: com.stripe.android.model.StripeIntent.Status;
						public static RequiresConfirmation: com.stripe.android.model.StripeIntent.Status;
						public static RequiresPaymentMethod: com.stripe.android.model.StripeIntent.Status;
						public static Succeeded: com.stripe.android.model.StripeIntent.Status;
						public static RequiresCapture: com.stripe.android.model.StripeIntent.Status;
						public code: string;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Status;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.Status>;
						public static fromCode(param0: string): com.stripe.android.model.StripeIntent.Status;
						public toString(): string;
					}
					export class Usage {
						public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Usage>;
						public static OnSession: com.stripe.android.model.StripeIntent.Usage;
						public static OffSession: com.stripe.android.model.StripeIntent.Usage;
						public static OneTime: com.stripe.android.model.StripeIntent.Usage;
						public code: string;
						public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Usage;
						public static values(): native.Array<com.stripe.android.model.StripeIntent.Usage>;
						public static fromCode(param0: string): com.stripe.android.model.StripeIntent.Usage;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeJsonUtils {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonUtils>;
					public static optString(param0: org.json.JSONObject, param1: string): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeModel>;
					public equals(param0: any): boolean;
					public constructor();
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeParamsModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeParamsModel>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripeParamsModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toParamMap(): java.util.Map<string,any>;
					});
					public constructor();
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.StripePaymentSource>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripePaymentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
					});
					public constructor();
					public getId(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class StripeSourceTypeModel extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeSourceTypeModel>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export module StripeSourceTypeModel {
					export abstract class BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.StripeSourceTypeModel.BaseBuilder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Token extends com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Token>;
					public getId(): string;
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.Card);
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.BankAccount);
					public getUsed(): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Token;
					public getCard(): com.stripe.android.model.Card;
					public equals(param0: any): boolean;
					public static fromString(param0: string): com.stripe.android.model.Token;
					public constructor(param0: string, param1: string, param2: boolean, param3: java.util.Date, param4: java.lang.Boolean);
					public getType(): string;
					public getBankAccount(): com.stripe.android.model.BankAccount;
					public hashCode(): number;
					public getCreated(): java.util.Date;
					public getLivemode(): boolean;
				}
				export module Token {
					export class TokenType {
						public static class: java.lang.Class<com.stripe.android.model.Token.TokenType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Token$TokenType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PII: string;
						public static BANK_ACCOUNT: string;
						public static ACCOUNT: string;
						public static CARD: string;
						public static CVC_UPDATE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class WeChat extends com.stripe.android.model.StripeModel {
					public static class: java.lang.Class<com.stripe.android.model.WeChat>;
					public statementDescriptor: string;
					public appId: string;
					public nonce: string;
					public packageValue: string;
					public partnerId: string;
					public prepayId: string;
					public sign: string;
					public timestamp: string;
					public qrCodeUrl: string;
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.WeChat;
					public hashCode(): number;
				}
				export module WeChat {
					export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.WeChat> {
						public static class: java.lang.Class<com.stripe.android.model.WeChat.Builder>;
						public build(): com.stripe.android.model.WeChat;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class AmexExpressCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.AmexExpressCheckoutWallet>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.AmexExpressCheckoutWallet>;
					}
					export module AmexExpressCheckoutWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.AmexExpressCheckoutWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.AmexExpressCheckoutWallet.Builder>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class ApplePayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.ApplePayWallet>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.ApplePayWallet>;
					}
					export module ApplePayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.ApplePayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.ApplePayWallet.Builder>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class GooglePayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.GooglePayWallet>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.GooglePayWallet>;
					}
					export module GooglePayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.GooglePayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.GooglePayWallet.Builder>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class MasterpassWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.MasterpassWallet>;
						public billingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public email: string;
						public name: string;
						public shippingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.MasterpassWallet>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module MasterpassWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.MasterpassWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.MasterpassWallet.Builder>;
							public constructor();
							public setBillingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public setName(param0: string): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public setEmail(param0: string): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public build(): com.stripe.android.model.wallets.MasterpassWallet;
							public setShippingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.MasterpassWallet.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class SamsungPayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.SamsungPayWallet>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.SamsungPayWallet>;
					}
					export module SamsungPayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.SamsungPayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.SamsungPayWallet.Builder>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class VisaCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.VisaCheckoutWallet>;
						public billingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public email: string;
						public name: string;
						public shippingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.VisaCheckoutWallet>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module VisaCheckoutWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.VisaCheckoutWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.VisaCheckoutWallet.Builder>;
							public constructor();
							public setShippingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public setName(param0: string): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public build(): com.stripe.android.model.wallets.VisaCheckoutWallet;
							public setEmail(param0: string): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public setBillingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export abstract class Wallet extends com.stripe.android.model.StripeModel {
						public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Wallet {
						export class Address extends com.stripe.android.model.StripeModel {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address>;
							public city: string;
							public country: string;
							public line1: string;
							public line2: string;
							public postalCode: string;
							public state: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.Wallet.Address>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public equals(param0: any): boolean;
						}
						export module Address {
							export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.wallets.Wallet.Address> {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address.Builder>;
								public setLine1(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setPostalCode(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setCountry(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setLine2(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setState(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public build(): any;
								public build(): com.stripe.android.model.wallets.Wallet.Address;
								public setCity(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
							}
						}
						export abstract class Builder<W>  extends java.lang.Object {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Builder<any>>;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Type>;
							public static AmexExpressCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public static ApplePay: com.stripe.android.model.wallets.Wallet.Type;
							public static GooglePay: com.stripe.android.model.wallets.Wallet.Type;
							public static Masterpass: com.stripe.android.model.wallets.Wallet.Type;
							public static SamsungPay: com.stripe.android.model.wallets.Wallet.Type;
							public static VisaCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public code: string;
							public static valueOf(param0: string): com.stripe.android.model.wallets.Wallet.Type;
							public static values(): native.Array<com.stripe.android.model.wallets.Wallet.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export module wallets {
					export class WalletFactory {
						public static class: java.lang.Class<com.stripe.android.model.wallets.WalletFactory>;
						public constructor();
						public create(param0: org.json.JSONObject): com.stripe.android.model.wallets.Wallet;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ClassUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ClassUtils>;
					public static INSTANCE: com.stripe.android.utils.ClassUtils;
					public static findField(param0: java.lang.Class<any>, param1: java.util.Collection<string>): java.lang.reflect.Field;
					public static getInternalObject(param0: java.lang.Class<any>, param1: java.util.Set<string>, param2: any): any;
					public static findMethod(param0: java.lang.Class<any>, param1: java.util.Collection<string>): java.lang.reflect.Method;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ObjectUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ObjectUtils>;
					public static hash(param0: native.Array<any>): number;
					public constructor();
					public static getOrDefault(param0: any, param1: any): any;
					public static equals(param0: any, param1: any): boolean;
					public static getOrEmpty(param0: java.util.Collection, param1: java.util.Collection): java.util.Collection;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class ActivityStarter<TargetActivityType, ArgsType>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.view.ActivityStarter<any,any>>;
					public startForResult(param0: ArgsType): void;
					public startForResult(): void;
				}
				export module ActivityStarter {
					export class Args {
						public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Args>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ActivityStarter$Args interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static EXTRA: string;
					}
					export class Result {
						public static class: java.lang.Class<com.stripe.android.view.ActivityStarter.Result>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ActivityStarter$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static EXTRA: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity>;
					public static TOKEN_ADD_PAYMENT_METHOD_ACTIVITY: string;
					public static EXTRA_NEW_PAYMENT_METHOD: string;
					public onActionSave(): void;
					public setCommunicatingProgress(param0: boolean): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
				export module AddPaymentMethodActivity {
					export abstract class ActivityPaymentMethodCallback<A>  extends com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod> {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback<any>>;
						public onSuccess(param0: any): void;
						public onError(param0: java.lang.Exception): void;
						public getActivity(): any;
					}
					export class PaymentMethodCallbackImpl extends com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback<com.stripe.android.view.AddPaymentMethodActivity> {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.PaymentMethodCallbackImpl>;
						public onSuccess(param0: any): void;
						public onError(param0: java.lang.Exception): void;
						public onSuccess(param0: com.stripe.android.model.PaymentMethod): void;
					}
					export class PaymentMethodRetrievalListenerImpl extends com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener<com.stripe.android.view.AddPaymentMethodActivity> {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.PaymentMethodRetrievalListenerImpl>;
						public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
						public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.AddPaymentMethodActivity,com.stripe.android.view.AddPaymentMethodActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter>;
					public static REQUEST_CODE: number;
				}
				export module AddPaymentMethodActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.view.AddPaymentMethodActivityStarter.Args>;
						public describeContents(): number;
						public static create(param0: globalAndroid.content.Intent): com.stripe.android.view.AddPaymentMethodActivityStarter.Args;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.AddPaymentMethodActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder>;
							public constructor();
							public setShouldAttachToCustomer(param0: boolean): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public setShouldRequirePostalCode(param0: boolean): com.stripe.android.view.AddPaymentMethodActivityStarter.Args.Builder;
							public build(): any;
							public build(): com.stripe.android.view.AddPaymentMethodActivityStarter.Args;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodCardRowView extends com.stripe.android.view.AddPaymentMethodRowView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardRowView>;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: com.stripe.android.view.PaymentMethodsActivityStarter.Args);
					public constructor(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: com.stripe.android.view.AddPaymentMethodActivityStarter.Args);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodCardView extends com.stripe.android.view.AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView>;
					public static Companion: com.stripe.android.view.AddPaymentMethodCardView.Companion;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setCommunicatingProgress(param0: boolean): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public static create(param0: globalAndroid.content.Context, param1: boolean): com.stripe.android.view.AddPaymentMethodCardView;
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module AddPaymentMethodCardView {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView.Companion>;
						public create(param0: globalAndroid.content.Context, param1: boolean): com.stripe.android.view.AddPaymentMethodCardView;
					}
					export class OnEditorActionListenerImpl {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodCardView.OnEditorActionListenerImpl>;
						public constructor(param0: com.stripe.android.view.AddPaymentMethodActivity, param1: com.stripe.android.view.AddPaymentMethodCardView, param2: globalAndroid.view.inputmethod.InputMethodManager);
						public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodFpxRowView extends com.stripe.android.view.AddPaymentMethodRowView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxRowView>;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: com.stripe.android.view.PaymentMethodsActivityStarter.Args);
					public constructor(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: com.stripe.android.view.AddPaymentMethodActivityStarter.Args);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddPaymentMethodFpxView extends com.stripe.android.view.AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView>;
					public static Companion: com.stripe.android.view.AddPaymentMethodFpxView.Companion;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: globalAndroid.content.Context): com.stripe.android.view.AddPaymentMethodFpxView;
				}
				export module AddPaymentMethodFpxView {
					export class Adapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder> {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Adapter>;
						public updateSelected(param0: number): void;
						public getSelectedPosition(): number;
						public getSelectedBank$stripe_release(): com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder;
						public constructor(param0: com.stripe.android.view.ThemeConfig);
						public setSelectedPosition(param0: number): void;
						public onBindViewHolder(param0: com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder, param1: number): void;
					}
					export module Adapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Adapter.ViewHolder>;
							public constructor(param0: globalAndroid.view.View, param1: com.stripe.android.view.ThemeConfig);
							public update$stripe_release(param0: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank): void;
							public setSelected$stripe_release(param0: boolean): void;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.Companion>;
						public create(param0: globalAndroid.content.Context): com.stripe.android.view.AddPaymentMethodFpxView;
					}
					export class FpxBank {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.FpxBank>;
						public static AffinBank: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static AllianceBankBusiness: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static AmBank: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static BankIslam: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static BankMuamalat: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static BankRakyat: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Bsn: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Cimb: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static HongLeongBank: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Hsbc: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Kfh: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Maybank2E: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Maybank2U: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Ocbc: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static PublicBank: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static Rhb: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static StandardChartered: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public static UobBank: com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public getDisplayName(): string;
						public static valueOf(param0: string): com.stripe.android.view.AddPaymentMethodFpxView.FpxBank;
						public getBrandIconResId(): number;
						public getCode(): string;
						public static values(): native.Array<com.stripe.android.view.AddPaymentMethodFpxView.FpxBank>;
					}
					export class SavedState {
						public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.SavedState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.view.AddPaymentMethodFpxView.SavedState>;
						public static Companion: com.stripe.android.view.AddPaymentMethodFpxView.SavedState.Companion;
						public getSelectedPosition$stripe_release(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.os.Parcelable, param1: number);
					}
					export module SavedState {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodFpxView.SavedState.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class AddPaymentMethodRowView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodRowView>;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: com.stripe.android.view.AddPaymentMethodActivityStarter.Args);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class AddPaymentMethodView {
					public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodView>;
					public constructor(param0: globalAndroid.content.Context);
					public setCommunicatingProgress(param0: boolean): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AuthActivityStarter<StartDataType>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter<any>>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.AuthActivityStarter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(param0: StartDataType): void;
					});
					public constructor();
					public start(param0: StartDataType): void;
				}
				export module AuthActivityStarter {
					export class Host {
						public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter.Host>;
						public static Companion: com.stripe.android.view.AuthActivityStarter.Host.Companion;
						public getActivity(): globalAndroid.app.Activity;
						public static create(param0: globalAndroid.support.v4.app.Fragment): com.stripe.android.view.AuthActivityStarter.Host;
						public startActivityForResult(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle, param2: number): void;
						public static create(param0: globalAndroid.app.Activity): com.stripe.android.view.AuthActivityStarter.Host;
					}
					export module Host {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter.Host.Companion>;
							public create(param0: globalAndroid.app.Activity): com.stripe.android.view.AuthActivityStarter.Host;
							public create(param0: globalAndroid.support.v4.app.Fragment): com.stripe.android.view.AuthActivityStarter.Host;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BackUpFieldDeleteListener extends com.stripe.android.view.StripeEditText.DeleteEmptyListener {
					public static class: java.lang.Class<com.stripe.android.view.BackUpFieldDeleteListener>;
					public onDeleteEmpty(): void;
					public constructor(param0: com.stripe.android.view.StripeEditText);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputListener {
					public static class: java.lang.Class<com.stripe.android.view.CardInputListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardInputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFocusChange(param0: string): void;
						onCardComplete(): void;
						onExpirationComplete(): void;
						onCvcComplete(): void;
						onPostalCodeComplete(): void;
					});
					public constructor();
					public onCvcComplete(): void;
					public onExpirationComplete(): void;
					public onFocusChange(param0: string): void;
					public onCardComplete(): void;
					public onPostalCodeComplete(): void;
				}
				export module CardInputListener {
					export class FocusField {
						public static class: java.lang.Class<com.stripe.android.view.CardInputListener.FocusField>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardInputListener$FocusField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static FOCUS_CARD: string;
						public static FOCUS_CVC: string;
						public static FOCUS_EXPIRY: string;
						public static FOCUS_POSTAL: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputWidget implements com.stripe.android.view.CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardInputWidget>;
					public setEnabled(param0: boolean): void;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public setCardHint(param0: string): void;
					public setCardNumber(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setExpiryDate(param0: number, param1: number): void;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCard(): com.stripe.android.model.Card;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public clear(): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public setCvcCode(param0: string): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public isEnabled(): boolean;
					public onWindowFocusChanged(param0: boolean): void;
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
				}
				export module CardInputWidget {
					export abstract class AnimationEndListener {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.AnimationEndListener>;
						public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
						public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
					}
					export class DimensionOverrideSettings {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.DimensionOverrideSettings>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardInputWidget$DimensionOverrideSettings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPixelWidth(param0: string, param1: globalAndroid.widget.EditText): number;
							getFrameWidth(): number;
						});
						public constructor();
						public getPixelWidth(param0: string, param1: globalAndroid.widget.EditText): number;
						public getFrameWidth(): number;
					}
					export class PlacementParameters {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.PlacementParameters>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardMultilineWidget implements com.stripe.android.view.CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardMultilineWidget>;
					public setCardHint(param0: string): void;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public setCvcLabel(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCard(): com.stripe.android.model.Card;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public clear(): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public setShouldShowPostalCode(param0: boolean): void;
					public setCvcCode(param0: string): void;
					public isEnabled(): boolean;
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
					public setEnabled(param0: boolean): void;
					public setCardNumber(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getPaymentMethodBillingDetails(): com.stripe.android.model.PaymentMethod.BillingDetails;
					public setExpiryDate(param0: number, param1: number): void;
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public constructor(param0: globalAndroid.content.Context);
					public validateCardNumber(): boolean;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public onWindowFocusChanged(param0: boolean): void;
					public validateAllFields(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardNumberEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCardNumber(): string;
					public getCardBrand(): string;
					public getLengthMax(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public isCardNumberValid(): boolean;
				}
				export module CardNumberEditText {
					export class CardBrandChangeListener {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardBrandChangeListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardNumberEditText$CardBrandChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCardBrandChanged(param0: string): void;
						});
						public constructor();
						public onCardBrandChanged(param0: string): void;
					}
					export class CardNumberCompleteListener {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardNumberCompleteListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardNumberEditText$CardNumberCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCardNumberComplete(): void;
						});
						public constructor();
						public onCardNumberComplete(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardWidget>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCard(): com.stripe.android.model.Card;
						getCardBuilder(): com.stripe.android.model.Card.Builder;
						getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
						getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
						setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
						setCardHint(param0: string): void;
						clear(): void;
						setCardNumber(param0: string): void;
						setExpiryDate(param0: number, param1: number): void;
						setCvcCode(param0: string): void;
					});
					public constructor();
					public getCard(): com.stripe.android.model.Card;
					public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public setCardHint(param0: string): void;
					public setCardNumber(param0: string): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public clear(): void;
					public setCvcCode(param0: string): void;
					public setExpiryDate(param0: number, param1: number): void;
					public getCardBuilder(): com.stripe.android.model.Card.Builder;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAdapter extends globalAndroid.widget.ArrayAdapter<string> {
					public static class: java.lang.Class<com.stripe.android.view.CountryAdapter>;
					public getFilter(): globalAndroid.widget.Filter;
					public getCount(): number;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
					public getItem(param0: number): string;
					public getItemId(param0: number): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAutoCompleteTextView {
					public static class: java.lang.Class<com.stripe.android.view.CountryAutoCompleteTextView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public getSelectedCountryCode(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setCountryChangeListener(param0: com.stripe.android.view.CountryAutoCompleteTextView.CountryChangeListener): void;
					public setCountrySelected(param0: string): void;
					public setSelectedCountryCode(param0: string): void;
					public updateUiForCountryEntered(param0: string): void;
				}
				export module CountryAutoCompleteTextView {
					export class CountryChangeListener {
						public static class: java.lang.Class<com.stripe.android.view.CountryAutoCompleteTextView.CountryChangeListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CountryAutoCompleteTextView$CountryChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCountryChanged(param0: string): void;
						});
						public constructor();
						public onCountryChanged(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryUtils {
					public static class: java.lang.Class<com.stripe.android.view.CountryUtils>;
					public static INSTANCE: com.stripe.android.view.CountryUtils;
					public static getOrderedCountries(param0: java.util.Locale): java.util.List<string>;
					public static getCountryCode(param0: string): string;
					public static doesCountryUsePostalCode(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class DateUtils {
					public static class: java.lang.Class<com.stripe.android.view.DateUtils>;
					public static INSTANCE: com.stripe.android.view.DateUtils;
					public static isExpiryDataValid(param0: number, param1: number): boolean;
					public static createDateStringFromIntegerInput(param0: number, param1: number): string;
					public static convertTwoDigitYearToFour(param0: number): number;
					public static convertTwoDigitYearToFour(param0: number, param1: java.util.Calendar): number;
					public static isValidMonth(param0: string): boolean;
					public static isExpiryDataValid(param0: number, param1: number, param2: java.util.Calendar): boolean;
					public static separateDateStringParts(param0: string): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ErrorListener extends com.stripe.android.view.StripeEditText.ErrorMessageListener {
					public static class: java.lang.Class<com.stripe.android.view.ErrorListener>;
					public constructor(param0: globalAndroid.support.design.widget.TextInputLayout);
					public displayErrorMessage(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ExpiryDateEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isDateValid(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setExpiryDateEditListener(param0: com.stripe.android.view.ExpiryDateEditText.ExpiryDateEditListener): void;
					public getValidDateFields(): native.Array<number>;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				}
				export module ExpiryDateEditText {
					export class ExpiryDateEditListener {
						public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText.ExpiryDateEditListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ExpiryDateEditText$ExpiryDateEditListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onExpiryDateComplete(): void;
						});
						public constructor();
						public onExpiryDateComplete(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class IconTextInputLayout {
					public static class: java.lang.Class<com.stripe.android.view.IconTextInputLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class MaskedCardView {
					public static class: java.lang.Class<com.stripe.android.view.MaskedCardView>;
					public static Companion: com.stripe.android.view.MaskedCardView.Companion;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getCardBrand(): string;
					public setSelected(param0: boolean): void;
					public setPaymentMethod(param0: com.stripe.android.model.PaymentMethod): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public getTextColorValues(): native.Array<number>;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getLast4(): string;
					public isSelected(): boolean;
				}
				export module MaskedCardView {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.MaskedCardView.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentAuthWebView {
					public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public init(param0: globalAndroid.app.Activity, param1: globalAndroid.widget.ProgressBar, param2: string, param3: string): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module PaymentAuthWebView {
					export class PaymentAuthWebViewClient {
						public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient>;
						public static PARAM_PAYMENT_CLIENT_SECRET: string;
						public static PARAM_SETUP_CLIENT_SECRET: string;
						public static Companion: com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient.Companion;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
						public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.content.pm.PackageManager, param2: globalAndroid.widget.ProgressBar, param3: string, param4: string);
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
						public getCompletionUrlParam(): string;
					}
					export module PaymentAuthWebViewClient {
						export class Companion {
							public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentAuthWebViewActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivity>;
					public static TOKEN_PAYMENT_FLOW_ACTIVITY: string;
					public static TOKEN_SHIPPING_INFO_SCREEN: string;
					public static TOKEN_SHIPPING_METHOD_SCREEN: string;
					public onActionSave(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public onPause(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentFlowActivity,com.stripe.android.view.PaymentFlowActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter>;
					public static REQUEST_CODE: number;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module PaymentFlowActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.view.PaymentFlowActivityStarter.Args>;
						public describeContents(): number;
						public static create(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentFlowActivityStarter.Args;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.PaymentFlowActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder>;
							public constructor();
							public build(): com.stripe.android.view.PaymentFlowActivityStarter.Args;
							public build(): any;
							public setPaymentSessionData(param0: com.stripe.android.PaymentSessionData): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
							public setPaymentSessionConfig(param0: com.stripe.android.PaymentSessionConfig): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
							public setIsPaymentSessionActive(param0: boolean): com.stripe.android.view.PaymentFlowActivityStarter.Args.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowExtras {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowExtras>;
					public static EXTRA_DEFAULT_SHIPPING_METHOD: string;
					public static EXTRA_IS_SHIPPING_INFO_VALID: string;
					public static EXTRA_SHIPPING_INFO_DATA: string;
					public static EXTRA_SHIPPING_INFO_ERROR: string;
					public static EVENT_SHIPPING_INFO_PROCESSED: string;
					public static EVENT_SHIPPING_INFO_SUBMITTED: string;
					public static EXTRA_VALID_SHIPPING_METHODS: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPagerAdapter {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter>;
					public setShippingMethods(param0: java.util.List<com.stripe.android.model.ShippingMethod>, param1: com.stripe.android.model.ShippingMethod): void;
					public hideShippingPage(): void;
					public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public getCount(): number;
					public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
					public getPageTitle(param0: number): string;
					public constructor(param0: globalAndroid.content.Context, param1: com.stripe.android.PaymentSessionConfig);
					public setShippingInfoSaved(param0: boolean): void;
					public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
					public getPageAt(param0: number): com.stripe.android.view.PaymentFlowPagerEnum;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPagerEnum {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerEnum>;
					public static SHIPPING_INFO: com.stripe.android.view.PaymentFlowPagerEnum;
					public static SHIPPING_METHOD: com.stripe.android.view.PaymentFlowPagerEnum;
					public static valueOf(param0: string): com.stripe.android.view.PaymentFlowPagerEnum;
					public getLayoutResId(): number;
					public static values(): native.Array<com.stripe.android.view.PaymentFlowPagerEnum>;
					public getTitleResId(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity>;
					public static EXTRA_SELECTED_PAYMENT: string;
					public static TOKEN_PAYMENT_METHODS_ACTIVITY: string;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					/** @deprecated */
					public static newIntent(param0: globalAndroid.app.Activity): globalAndroid.content.Intent;
				}
				export module PaymentMethodsActivity {
					export class PaymentMethodsRetrievalListener extends com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener<com.stripe.android.view.PaymentMethodsActivity> {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity.PaymentMethodsRetrievalListener>;
						public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
						public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentMethodsActivity,com.stripe.android.view.PaymentMethodsActivityStarter.Args> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter>;
					public static REQUEST_CODE: number;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module PaymentMethodsActivityStarter {
					export class Args extends com.stripe.android.view.ActivityStarter.Args {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args>;
						public shouldRequirePostalCode: boolean;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.view.PaymentMethodsActivityStarter.Args>;
						public describeContents(): number;
						public static create(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentMethodsActivityStarter.Args;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Args {
						export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.view.PaymentMethodsActivityStarter.Args> {
							public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder>;
							public constructor();
							public build(): com.stripe.android.view.PaymentMethodsActivityStarter.Args;
							public setInitialPaymentMethodId(param0: string): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public build(): any;
							public setIsPaymentSessionActive(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setPaymentConfiguration(param0: com.stripe.android.PaymentConfiguration): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
							public setShouldRequirePostalCode(param0: boolean): com.stripe.android.view.PaymentMethodsActivityStarter.Args.Builder;
						}
					}
					export class Result extends com.stripe.android.view.ActivityStarter.Result {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter.Result>;
						public paymentMethod: com.stripe.android.model.PaymentMethod;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.view.PaymentMethodsActivityStarter.Result>;
						public describeContents(): number;
						public static fromIntent(param0: globalAndroid.content.Intent): com.stripe.android.view.PaymentMethodsActivityStarter.Result;
						public constructor(param0: com.stripe.android.model.PaymentMethod);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toBundle(): globalAndroid.os.Bundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter>;
					public static Companion: com.stripe.android.view.PaymentMethodsAdapter.Companion;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.PaymentMethodsAdapter.ViewHolder;
					public setSelectedPaymentMethod(param0: string): boolean;
					public setPaymentMethods(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
					public constructor();
					public getItemCount(): number;
					public getSelectedPaymentMethod(): com.stripe.android.model.PaymentMethod;
					public getItemViewType(param0: number): number;
					public getItemId(param0: number): number;
					public onBindViewHolder(param0: com.stripe.android.view.PaymentMethodsAdapter.ViewHolder, param1: number): void;
					public setSelectedIndex(param0: number): void;
				}
				export module PaymentMethodsAdapter {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.Companion>;
					}
					export class ViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsAdapter.ViewHolder>;
						public setPaymentMethod(param0: com.stripe.android.model.PaymentMethod): void;
						public setSelected(param0: boolean): void;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentRelayActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentRelayActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public constructor();
					public _$_clearFindViewByIdCache(): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentUtils {
					public static class: java.lang.Class<com.stripe.android.view.PaymentUtils>;
					public static INSTANCE: com.stripe.android.view.PaymentUtils;
					public static formatPriceStringUsingFree(param0: number, param1: java.util.Currency, param2: string): string;
					public static formatPriceString(param0: number, param1: java.util.Currency): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class SelectShippingMethodWidget {
					public static class: java.lang.Class<com.stripe.android.view.SelectShippingMethodWidget>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setShippingMethods(param0: java.util.List<com.stripe.android.model.ShippingMethod>, param1: com.stripe.android.model.ShippingMethod): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getSelectedShippingMethod(): com.stripe.android.model.ShippingMethod;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingInfoWidget {
					public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOptionalFields(param0: java.util.List<string>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public populateShippingInfo(param0: com.stripe.android.model.ShippingInformation): void;
					public validateAllFields(): boolean;
					public setHiddenFields(param0: java.util.List<string>): void;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				}
				export module ShippingInfoWidget {
					export class CustomizableShippingField {
						public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ShippingInfoWidget$CustomizableShippingField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CITY_FIELD: string;
						public static STATE_FIELD: string;
						public static PHONE_FIELD: string;
						public static ADDRESS_LINE_TWO_FIELD: string;
						public static ADDRESS_LINE_ONE_FIELD: string;
						public static POSTAL_CODE_FIELD: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.stripe.android.view.ShippingMethodAdapter.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter>;
					public setShippingMethods(param0: java.util.List<com.stripe.android.model.ShippingMethod>, param1: com.stripe.android.model.ShippingMethod): void;
					public constructor();
					public onBindViewHolder(param0: com.stripe.android.view.ShippingMethodAdapter.ViewHolder, param1: number): void;
					public getItemCount(): number;
					public onShippingMethodSelected(param0: number): void;
					public getSelectedShippingMethod(): com.stripe.android.model.ShippingMethod;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.ShippingMethodAdapter.ViewHolder;
				}
				export module ShippingMethodAdapter {
					export class ViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter.ViewHolder>;
						public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
						public setSelected(param0: boolean): void;
						public constructor(param0: com.stripe.android.view.ShippingMethodView, param1: com.stripe.android.view.ShippingMethodAdapter);
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodView {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setSelected(param0: boolean): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingPostalCodeValidator {
					public static class: java.lang.Class<com.stripe.android.view.ShippingPostalCodeValidator>;
					public static Companion: com.stripe.android.view.ShippingPostalCodeValidator.Companion;
					public isValid(param0: string, param1: string, param2: java.util.List<string>, param3: java.util.List<string>): boolean;
					public constructor();
				}
				export module ShippingPostalCodeValidator {
					export class Companion {
						public static class: java.lang.Class<com.stripe.android.view.ShippingPostalCodeValidator.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.StripeActivity>;
					public progressBar: globalAndroid.widget.ProgressBar;
					public viewStub: globalAndroid.view.ViewStub;
					public setViewStub(param0: globalAndroid.view.ViewStub): void;
					public onActionSave(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public getProgressBar(): globalAndroid.widget.ProgressBar;
					public setProgressBar(param0: globalAndroid.widget.ProgressBar): void;
					public onResume(): void;
					public setCommunicatingProgress(param0: boolean): void;
					public constructor();
					public getViewStub(): globalAndroid.view.ViewStub;
					public onPause(): void;
					public setAlertMessageListener(param0: com.stripe.android.view.StripeActivity.AlertMessageListener): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public showError(param0: string): void;
				}
				export module StripeActivity {
					export class AlertMessageListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeActivity.AlertMessageListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeActivity$AlertMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAlertMessageDisplayed(param0: string): void;
						});
						public constructor();
						public onAlertMessageDisplayed(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.StripeEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public getShouldShowError(): boolean;
					public setErrorColor(param0: number): void;
					public setHintDelayed(param0: number, param1: number): void;
					public getCachedColorStateList(): globalAndroid.content.res.ColorStateList;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getDefaultErrorColorInt(): number;
					public setShouldShowError(param0: boolean): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					public setHintDelayed(param0: string, param1: number): void;
				}
				export module StripeEditText {
					export class AfterTextChangedListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.AfterTextChangedListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$AfterTextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextChanged(param0: string): void;
						});
						public constructor();
						public onTextChanged(param0: string): void;
					}
					export class DeleteEmptyListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.DeleteEmptyListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$DeleteEmptyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDeleteEmpty(): void;
						});
						public constructor();
						public onDeleteEmpty(): void;
					}
					export class ErrorMessageListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.ErrorMessageListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$ErrorMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							displayErrorMessage(param0: string): void;
						});
						public constructor();
						public displayErrorMessage(param0: string): void;
					}
					export class SoftDeleteInputConnection {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.SoftDeleteInputConnection>;
						public deleteSurroundingText(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class StripeIntentResultExtras {
					public static class: java.lang.Class<com.stripe.android.view.StripeIntentResultExtras>;
					public static CLIENT_SECRET: string;
					public static AUTH_EXCEPTION: string;
					public static FLOW_OUTCOME: string;
					public static INSTANCE: com.stripe.android.view.StripeIntentResultExtras;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ThemeConfig {
					public static class: java.lang.Class<com.stripe.android.view.ThemeConfig>;
					public constructor(param0: globalAndroid.content.Context);
					public getTextColorValues(): native.Array<number>;
					public getTextAlphaColor(param0: boolean): number;
					public getTintColor(param0: boolean): number;
					public getTextColor(param0: boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ViewUtils {
					public static class: java.lang.Class<com.stripe.android.view.ViewUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export module i18n {
					export class ErrorMessageTranslator {
						public static class: java.lang.Class<com.stripe.android.view.i18n.ErrorMessageTranslator>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.i18n.ErrorMessageTranslator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						});
						public constructor();
						public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
					}
					export module ErrorMessageTranslator {
						export class Default extends com.stripe.android.view.i18n.ErrorMessageTranslator {
							public static class: java.lang.Class<com.stripe.android.view.i18n.ErrorMessageTranslator.Default>;
							public constructor();
							public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export module i18n {
					export class TranslatorManager {
						public static class: java.lang.Class<com.stripe.android.view.i18n.TranslatorManager>;
						public static getErrorMessageTranslator(): com.stripe.android.view.i18n.ErrorMessageTranslator;
						public static setErrorMessageTranslator(param0: com.stripe.android.view.i18n.ErrorMessageTranslator): void;
					}
				}
			}
		}
	}
}

//Generics information:
//com.stripe.android.ActivitySourceCallback:1
//com.stripe.android.ApiOperation:1
//com.stripe.android.ApiResultCallback:1
//com.stripe.android.CustomerSession.ActivityCustomerRetrievalListener:1
//com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener:1
//com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener:1
//com.stripe.android.CustomerSession.ActivitySourceRetrievalListener:1
//com.stripe.android.CustomerSession.CustomerSessionRunnable:1
//com.stripe.android.CustomerSession.CustomerSessionRunnable.MessageData:1
//com.stripe.android.EphemeralKey.Factory:1
//com.stripe.android.EphemeralKeyManager:1
//com.stripe.android.EphemeralKeyManager.KeyManagerListener:1
//com.stripe.android.Factory:2
//com.stripe.android.Factory0:1
//com.stripe.android.ObjectBuilder:1
//com.stripe.android.PaymentSession.ActivityPaymentSessionListener:1
//com.stripe.android.ResultWrapper:1
//com.stripe.android.StripeIntentResult:1
//com.stripe.android.Supplier:1
//com.stripe.android.model.wallets.Wallet.Builder:1
//com.stripe.android.view.ActivityStarter:2
//com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback:1
//com.stripe.android.view.AuthActivityStarter:1

