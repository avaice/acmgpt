import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs'

type isIncludesFunctionCallReturn = ChatCompletionMessage & {
  function_call: ChatCompletionMessage.FunctionCall
}
export const isIncludesFunctionCall = (
  gptResult: ChatCompletionMessage
): gptResult is isIncludesFunctionCallReturn => {
  if (!gptResult.function_call) {
    return false
  }
  return true
}
