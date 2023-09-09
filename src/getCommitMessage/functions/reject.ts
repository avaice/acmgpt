import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs'
import { Result } from '../../types'

export const gptFunctionReject = (
  gptResult: ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall
  }
): Result<{ result: 'reject'; reason: string }, string> => {
  const notValidatedResponse = JSON.parse(gptResult.function_call.arguments)
  if (typeof notValidatedResponse.reason !== 'string') {
    return {
      status: 'error',
      reason: 'reject function argument is not valid',
    }
  }
  return {
    status: 'succeed',
    data: {
      result: 'reject',
      reason: notValidatedResponse.reason,
    },
  }
}
