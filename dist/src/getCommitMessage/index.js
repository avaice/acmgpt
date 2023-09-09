import { gptFunctionCommit } from './functions/commit';
import { gptFunctionReject } from './functions/reject';
import { isIncludesFunctionCall } from './util';
export const getCommitMessage = async (gptResult) => {
    if (!gptResult.function_call) {
        console.log(gptResult);
        return { status: 'error', reason: 'function was not called' };
    }
    if (isIncludesFunctionCall(gptResult)) {
        if (gptResult.function_call.name === 'commit') {
            return gptFunctionCommit(gptResult);
        }
        if (gptResult.function_call.name === 'reject') {
            return gptFunctionReject(gptResult);
        }
    }
    return {
        status: 'error',
        reason: 'unknown function was called',
    };
};
//# sourceMappingURL=index.js.map