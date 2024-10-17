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
import { SetIdentityPoolRolesInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface SetIdentityPoolRolesCommandInput
  extends SetIdentityPoolRolesInput {}
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {}
export declare class SetIdentityPoolRolesCommand extends $Command<
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: SetIdentityPoolRolesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetIdentityPoolRolesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityPoolRolesCommandInput,
    SetIdentityPoolRolesCommandOutput
  >;
  private serialize;
  private deserialize;
}
