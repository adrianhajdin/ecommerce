export interface FromHttpOptions {
  awsContainerCredentialsFullUri?: string;
  awsContainerCredentialsRelativeUri?: string;
  awsContainerAuthorizationTokenFile?: string;
  awsContainerAuthorizationToken?: string;
  credentialsFullUri?: string;
  authorizationToken?: string;
  maxRetries?: number;
  timeout?: number;
}
export type HttpProviderCredentials = {
  AccessKeyId: string;
  SecretAccessKey: string;
  Token: string;
  AccountId?: string;
  Expiration: string;
};
