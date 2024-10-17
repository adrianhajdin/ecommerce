import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DecodeAuthorizationMessageRequest,
  DecodeAuthorizationMessageResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface DecodeAuthorizationMessageCommandInput
  extends DecodeAuthorizationMessageRequest {}
export interface DecodeAuthorizationMessageCommandOutput
  extends DecodeAuthorizationMessageResponse,
    __MetadataBearer {}
export declare class DecodeAuthorizationMessageCommand extends $Command<
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
  STSClientResolvedConfig
> {
  readonly input: DecodeAuthorizationMessageCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DecodeAuthorizationMessageCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DecodeAuthorizationMessageCommandInput,
    DecodeAuthorizationMessageCommandOutput
  >;
  private serialize;
  private deserialize;
}
