import { ChatCompletionMessage } from 'openai/resources/chat/index.mjs';
import { Result } from '../types';
import { GetCommitResponse } from './types';
export declare const getCommitMessage: (gptResult: ChatCompletionMessage) => Promise<Result<GetCommitResponse, string>>;
