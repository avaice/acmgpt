export const gptFunctionCommit = (gptResult) => {
    const notValidatedResponse = JSON.parse(gptResult.function_call.arguments);
    if (typeof notValidatedResponse.commit_msg !== 'string' ||
        typeof notValidatedResponse.quality === 'undefined') {
        return {
            status: 'error',
            reason: 'commit function argument is not valid',
        };
    }
    return {
        status: 'succeed',
        data: {
            result: 'accept',
            commit_msg: notValidatedResponse.commit_msg,
            quality: parseFloat(notValidatedResponse.quality),
        },
    };
};
//# sourceMappingURL=commit.js.map