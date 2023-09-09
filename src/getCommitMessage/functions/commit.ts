import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs'
import { Result } from '../../types'

export const gptFunctionCommit = (
  gptResult: ChatCompletionMessage & {
    function_call: ChatCompletionMessage.FunctionCall
  }
): Result<
  { result: 'accept'; commit_msg: string; quality: number },
  string
> => {
  const notValidatedResponse = JSON.parse(gptResult.function_call.arguments)
  if (
    typeof notValidatedResponse.commit_msg !== 'string' ||
    typeof notValidatedResponse.quality === 'undefined'
  ) {
    return {
      status: 'error',
      reason: 'commit function argument is not valid',
    }
  }
  return {
    status: 'succeed',
    data: {
      result: 'accept',
      commit_msg: notValidatedResponse.commit_msg,
      quality: parseFloat(notValidatedResponse.quality),
    },
  }
}
