import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { GetSessionTokenResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetSessionTokenCommand, se_GetSessionTokenCommand } from "../protocols/Aws_query";
export { $Command };
export class GetSessionTokenCommand extends $Command {
    static getEndpointParameterInstructions() {
        return {
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetSessionTokenCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetSessionTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: GetSessionTokenResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSecurityTokenServiceV20110615",
                operation: "GetSessionToken",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_GetSessionTokenCommand(input, context);
    }
    deserialize(output, context) {
        return de_GetSessionTokenCommand(output, context);
    }
}
