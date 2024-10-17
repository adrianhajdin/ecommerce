import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AssumeRoleWithSAMLCommand, se_AssumeRoleWithSAMLCommand } from "../protocols/Aws_query";
export { $Command };
export class AssumeRoleWithSAMLCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleWithSAMLCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithSAMLCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: AssumeRoleWithSAMLRequestFilterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleWithSAMLResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSecurityTokenServiceV20110615",
                operation: "AssumeRoleWithSAML",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_AssumeRoleWithSAMLCommand(input, context);
    }
    deserialize(output, context) {
        return de_AssumeRoleWithSAMLCommand(output, context);
    }
}
