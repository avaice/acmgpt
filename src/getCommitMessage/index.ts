import { callGPT } from '../callGPT'
import { functions } from '../resources/functions'
import { prompt } from '../resources/prompt'
import { Result } from '../types'
import { gptFunctionCommit } from './functions/commit'
import { gptFunctionReject } from './functions/reject'
import { GetCommitResponse } from './types'
import { isIncludesFunctionCall } from './util'

export const getCommitMessage = async (
  work: string
): Promise<Result<GetCommitResponse, string>> => {
  const gptResult = await callGPT({
    initialPrompt: prompt,
    prompt: { role: 'user', content: work },
    functions,
  })
  if (!gptResult.function_call) {
    return { status: 'error', reason: 'function was not called' }
  }
  if (isIncludesFunctionCall(gptResult)) {
    if (gptResult.function_call.name === 'commit') {
      return gptFunctionCommit(gptResult)
    }
    if (gptResult.function_call.name === 'reject') {
      return gptFunctionReject(gptResult)
    }
  }

  return {
    status: 'error',
    reason: 'unknown function was called',
  }
}
