export const gptFunctionReject = (gptResult) => {
    const notValidatedResponse = JSON.parse(gptResult.function_call.arguments);
    if (typeof notValidatedResponse.reason !== 'string') {
        return {
            status: 'error',
            reason: 'reject function argument is not valid',
        };
    }
    return {
        status: 'succeed',
        data: {
            result: 'reject',
            reason: notValidatedResponse.reason,
        },
    };
};
//# sourceMappingURL=reject.js.map