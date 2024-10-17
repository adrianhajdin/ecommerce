import { RemoteProviderInit as _RemoteProviderInit } from "@smithy/credential-provider-imds";
import { AwsCredentialIdentityProvider } from "@smithy/types";
export interface RemoteProviderInit extends _RemoteProviderInit {}
export declare const fromContainerMetadata: (
  init?: RemoteProviderInit
) => AwsCredentialIdentityProvider;
