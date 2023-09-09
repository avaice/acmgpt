import { getCommitMessage } from './getCommitMessage'

const work = ''

const commitCheckResult = await getCommitMessage(work)
if (commitCheckResult.status === 'error') {
  console.log(commitCheckResult)
} else {
  if (commitCheckResult.data.result === 'accept') {
    console.log(`コミットメッセージ: "${commitCheckResult.data.commit_msg}"`)
    console.log(`コミットの適切度: ${100 * commitCheckResult.data.quality}%`)
  } else {
    console.log(`Rejected: "${commitCheckResult.data.reason}"`)
  }
}
