import OpenAI from 'openai';
type Props = {
    initialPrompt: readonly OpenAI.Chat.Completions.ChatCompletionMessageParam[];
    prompt: OpenAI.Chat.Completions.ChatCompletionMessageParam;
    functions?: readonly OpenAI.Chat.Completions.ChatCompletionCreateParams.Function[];
    apiKey: string;
};
export declare const callGPT: ({ initialPrompt, prompt, functions, apiKey, }: Props) => Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
export {};
