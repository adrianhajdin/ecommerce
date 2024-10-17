import { FetchHttpHandler as RequestHandler } from "@smithy/fetch-http-handler";
import { CognitoIdentityClientConfig } from "./CognitoIdentityClient";
export declare const getRuntimeConfig: (
  config: CognitoIdentityClientConfig
) => {
  runtime: string;
  defaultsMode: import("@smithy/types").Provider<
    import("@smithy/smithy-client").ResolvedDefaultsMode
  >;
  bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
  credentialDefaultProvider: (
    input: any
  ) => import("@smithy/types").Provider<import("@aws-sdk/types").Credentials>;
  defaultUserAgentProvider: import("@smithy/types").Provider<
    import("@smithy/types").UserAgent
  >;
  maxAttempts: number | import("@smithy/types").Provider<number>;
  region: string | import("@smithy/types").Provider<any>;
  requestHandler:
    | (import("@smithy/types").RequestHandler<
        any,
        any,
        import("@smithy/types").HttpHandlerOptions
      > &
        import("@smithy/types").RequestHandler<
          import("@smithy/protocol-http").HttpRequest,
          import("@smithy/protocol-http").HttpResponse,
          import("@smithy/types").HttpHandlerOptions
        > & {
          updateHttpClientConfig(key: never, value: never): void;
          httpHandlerConfigs(): {};
        })
    | RequestHandler;
  retryMode: string | import("@smithy/types").Provider<string>;
  sha256: import("@smithy/types").HashConstructor;
  streamCollector: import("@smithy/types").StreamCollector;
  useDualstackEndpoint: boolean | import("@smithy/types").Provider<boolean>;
  useFipsEndpoint: boolean | import("@smithy/types").Provider<boolean>;
  apiVersion: string;
  urlParser: import("@smithy/types").UrlParser;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: import("@smithy/types").Encoder;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: import("@smithy/types").Encoder;
  disableHostPrefix: boolean;
  serviceId: string;
  logger: import("@smithy/types").Logger;
  extensions: import("./runtimeExtensions").RuntimeExtension[];
  endpoint?:
    | ((
        | string
        | import("@smithy/types").Endpoint
        | import("@smithy/types").Provider<import("@smithy/types").Endpoint>
        | import("@smithy/types").EndpointV2
        | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>
      ) &
        (
          | string
          | import("@smithy/types").Provider<string>
          | import("@smithy/types").Endpoint
          | import("@smithy/types").Provider<import("@smithy/types").Endpoint>
          | import("@smithy/types").EndpointV2
          | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>
        ))
    | undefined;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@smithy/types").Logger | undefined;
    }
  ) => import("@smithy/types").EndpointV2;
  tls?: boolean | undefined;
  retryStrategy?:
    | import("@smithy/types").RetryStrategy
    | import("@smithy/types").RetryStrategyV2
    | undefined;
  credentials?:
    | import("@smithy/types").AwsCredentialIdentity
    | import("@smithy/types").Provider<
        import("@smithy/types").AwsCredentialIdentity
      >
    | undefined;
  signer?:
    | import("@smithy/types").RequestSigner
    | ((
        authScheme?: import("@smithy/types").AuthScheme | undefined
      ) => Promise<import("@smithy/types").RequestSigner>)
    | undefined;
  signingEscapePath?: boolean | undefined;
  systemClockOffset?: number | undefined;
  signingRegion?: string | undefined;
  signerConstructor?:
    | (new (
        options: import("@smithy/signature-v4").SignatureV4Init &
          import("@smithy/signature-v4").SignatureV4CryptoInit
      ) => import("@smithy/types").RequestSigner)
    | undefined;
  customUserAgent?: string | import("@smithy/types").UserAgent | undefined;
};
