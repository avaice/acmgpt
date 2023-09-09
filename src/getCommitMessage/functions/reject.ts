import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs'
import { Result } from '../../types'

export const gptFunctionReject = (
  gptResult: ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall
  }
): Result<{ commit_msg: string; quality: number }, string> => {
  const notValidatedResponse = JSON.parse(gptResult.function_call.arguments)
  if (typeof notValidatedResponse.reason !== 'string') {
    return {
      status: 'error',
      reason: 'reject function argument is not valid',
    }
  }
  return {
    status: 'error',
    reason: notValidatedResponse.reason,
  }
}
