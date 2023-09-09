import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs';
import { Result } from '../../types';
export declare const gptFunctionReject: (gptResult: ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall;
}) => Result<{
    result: 'reject';
    reason: string;
}, string>;
