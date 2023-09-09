import OpenAI from 'openai'

type Props = {
  initialPrompt: readonly OpenAI.Chat.Completions.ChatCompletionMessageParam[]
  prompt: OpenAI.Chat.Completions.ChatCompletionMessageParam
  functions?: readonly OpenAI.Chat.Completions.ChatCompletionCreateParams.Function[]
}

const openai = new OpenAI({
  apiKey: Bun.env.OPENAI_API_KEY,
})

export const callGPT = async ({ initialPrompt, prompt, functions }: Props) =>
  (
    await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [...initialPrompt, prompt],
      functions: functions && [...functions],
      function_call: 'auto', // auto is default, but we'll be explicit
    })
  ).choices[0].message
