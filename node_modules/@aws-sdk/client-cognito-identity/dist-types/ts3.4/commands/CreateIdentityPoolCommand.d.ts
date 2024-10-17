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
import { CreateIdentityPoolInput, IdentityPool } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateIdentityPoolCommandInput
  extends CreateIdentityPoolInput {}
export interface CreateIdentityPoolCommandOutput
  extends IdentityPool,
    __MetadataBearer {}
export declare class CreateIdentityPoolCommand extends $Command<
  CreateIdentityPoolCommandInput,
  CreateIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: CreateIdentityPoolCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateIdentityPoolCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput>;
  private serialize;
  private deserialize;
}
