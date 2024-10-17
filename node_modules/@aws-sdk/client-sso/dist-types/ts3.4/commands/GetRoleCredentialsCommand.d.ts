import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetRoleCredentialsRequest,
  GetRoleCredentialsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOClientResolvedConfig,
} from "../SSOClient";
export { __MetadataBearer, $Command };
export interface GetRoleCredentialsCommandInput
  extends GetRoleCredentialsRequest {}
export interface GetRoleCredentialsCommandOutput
  extends GetRoleCredentialsResponse,
    __MetadataBearer {}
export declare class GetRoleCredentialsCommand extends $Command<
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
  SSOClientResolvedConfig
> {
  readonly input: GetRoleCredentialsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetRoleCredentialsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput>;
  private serialize;
  private deserialize;
}
