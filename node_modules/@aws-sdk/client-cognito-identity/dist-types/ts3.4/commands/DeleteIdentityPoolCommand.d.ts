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
import { DeleteIdentityPoolInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteIdentityPoolCommandInput
  extends DeleteIdentityPoolInput {}
export interface DeleteIdentityPoolCommandOutput extends __MetadataBearer {}
export declare class DeleteIdentityPoolCommand extends $Command<
  DeleteIdentityPoolCommandInput,
  DeleteIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  readonly input: DeleteIdentityPoolCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteIdentityPoolCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIdentityPoolCommandInput, DeleteIdentityPoolCommandOutput>;
  private serialize;
  private deserialize;
}
