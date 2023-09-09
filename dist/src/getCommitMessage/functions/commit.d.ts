import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs';
import { Result } from '../../types';
export declare const gptFunctionCommit: (gptResult: ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall;
}) => Result<{
    result: 'accept';
    commit_msg: string;
    quality: number;
}, string>;
