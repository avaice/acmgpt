import OpenAI from 'openai';
export const callGPT = async ({ initialPrompt, prompt, functions, apiKey, }) => {
    const openai = new OpenAI({
        apiKey: apiKey,
    });
    return (await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...initialPrompt, prompt],
        functions: functions && [...functions],
        function_call: 'auto', // auto is default, but we'll be explicit
    })).choices[0].message;
};
//# sourceMappingURL=callGPT.js.map