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
  GetIdentityPoolRolesInput,
  GetIdentityPoolRolesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetIdentityPoolRolesCommandInput
  extends GetIdentityPoolRolesInput {}
export interface GetIdentityPoolRolesCommandOutput
  extends GetIdentityPoolRolesResponse,
    __MetadataBearer {}
export declare class GetIdentityPoolRolesCommand extends $Command<
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: GetIdentityPoolRolesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdentityPoolRolesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityPoolRolesCommandInput,
    GetIdentityPoolRolesCommandOutput
  >;
  private serialize;
  private deserialize;
}
