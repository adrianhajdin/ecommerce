import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetCredentialsForIdentityCommandInput
  extends GetCredentialsForIdentityInput {}
export interface GetCredentialsForIdentityCommandOutput
  extends GetCredentialsForIdentityResponse,
    __MetadataBearer {}
export declare class GetCredentialsForIdentityCommand extends $Command<
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetCredentialsForIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCredentialsForIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCredentialsForIdentityCommandInput,
    GetCredentialsForIdentityCommandOutput
  >;
  private serialize;
  private deserialize;
}
