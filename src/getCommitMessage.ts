import { callGPT } from './callGPT'
import { functions } from './resources/functions'
import { prompt } from './resources/prompt'
import { Result } from './types'

export const getCommitMessage = async (
  work: string
): Promise<Result<{ commit_msg: string; quality: number }, string>> => {
  const gptResult = await callGPT({
    initialPrompt: prompt,
    prompt: { role: 'user', content: work },
    functions,
  })
  if (!gptResult.function_call) {
    return { status: 'error', reason: 'function was not called' }
  }
  if (gptResult.function_call.name === 'commit') {
    const notValidatedResponse = JSON.parse(gptResult.function_call.arguments)
    if (
      typeof notValidatedResponse.commit_msg !== 'string' ||
      typeof notValidatedResponse.quality !== 'number'
    ) {
      return {
        status: 'error',
        reason: 'commit function argument is not valid',
      }
    }
    return {
      status: 'succeed',
      data: {
        commit_msg: notValidatedResponse.commit_msg,
        quality: notValidatedResponse.quality,
      },
    }
  }
  if (gptResult.function_call.name === 'reject') {
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

  return {
    status: 'error',
    reason: 'unknown function was called',
  }
}
