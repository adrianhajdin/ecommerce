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
import { IdentityPool } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateIdentityPoolCommandInput extends IdentityPool {}
export interface UpdateIdentityPoolCommandOutput
  extends IdentityPool,
    __MetadataBearer {}
export declare class UpdateIdentityPoolCommand extends $Command<
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: UpdateIdentityPoolCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateIdentityPoolCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput>;
  private serialize;
  private deserialize;
}
