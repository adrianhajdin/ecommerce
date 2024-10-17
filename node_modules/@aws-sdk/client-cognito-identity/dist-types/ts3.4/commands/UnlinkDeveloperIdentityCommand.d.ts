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
import { UnlinkDeveloperIdentityInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UnlinkDeveloperIdentityCommandInput
  extends UnlinkDeveloperIdentityInput {}
export interface UnlinkDeveloperIdentityCommandOutput
  extends __MetadataBearer {}
export declare class UnlinkDeveloperIdentityCommand extends $Command<
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: UnlinkDeveloperIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UnlinkDeveloperIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UnlinkDeveloperIdentityCommandInput,
    UnlinkDeveloperIdentityCommandOutput
  >;
  private serialize;
  private deserialize;
}
