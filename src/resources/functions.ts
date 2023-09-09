import OpenAI from 'openai'

export const functions: readonly OpenAI.Chat.Completions.ChatCompletionCreateParams.Function[] =
  [
    {
      name: 'reject',
      description:
        '複数の作業を行っている場合や内容が不明確な場合、質の低い作業を行ったと思われる場合にリジェクトを行う',
      parameters: {
        type: 'object',
        properties: {
          reason: {
            type: 'string',
            description: 'コミットがリジェクトされた理由',
          },
        },
        required: ['commit_msg', 'quality'],
      },
    },
    {
      name: 'commit',
      description: '作業内容をコミットする',
      parameters: {
        type: 'object',
        properties: {
          commit_msg: {
            type: 'string',
            description:
              'コミットメッセージを指定する。例: feat: A new feature',
          },
          quality: {
            type: 'string',
            description:
              'コミット内容の適切度（1回のコミットに相応しい粒度かを0-1で指定する）',
          },
        },
        required: ['commit_msg', 'quality'],
      },
    },
  ] as const
