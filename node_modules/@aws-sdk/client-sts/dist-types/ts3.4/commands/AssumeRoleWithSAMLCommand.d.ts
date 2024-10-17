import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  AssumeRoleWithSAMLRequest,
  AssumeRoleWithSAMLResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface AssumeRoleWithSAMLCommandInput
  extends AssumeRoleWithSAMLRequest {}
export interface AssumeRoleWithSAMLCommandOutput
  extends AssumeRoleWithSAMLResponse,
    __MetadataBearer {}
export declare class AssumeRoleWithSAMLCommand extends $Command<
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
  STSClientResolvedConfig
> {
  readonly input: AssumeRoleWithSAMLCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AssumeRoleWithSAMLCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput>;
  private serialize;
  private deserialize;
}
