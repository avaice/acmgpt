import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs';
type isIncludesFunctionCallReturn = ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall;
};
export declare const isIncludesFunctionCall: (gptResult: ChatCompletionMessage) => gptResult is isIncludesFunctionCallReturn;
export {};
