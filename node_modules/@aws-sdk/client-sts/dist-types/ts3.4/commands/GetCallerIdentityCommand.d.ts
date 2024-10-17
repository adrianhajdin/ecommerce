import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetCallerIdentityRequest,
  GetCallerIdentityResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface GetCallerIdentityCommandInput
  extends GetCallerIdentityRequest {}
export interface GetCallerIdentityCommandOutput
  extends GetCallerIdentityResponse,
    __MetadataBearer {}
export declare class GetCallerIdentityCommand extends $Command<
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
  STSClientResolvedConfig
> {
  readonly input: GetCallerIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCallerIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput>;
  private serialize;
  private deserialize;
}
