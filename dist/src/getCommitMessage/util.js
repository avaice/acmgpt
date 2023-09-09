export const isIncludesFunctionCall = (gptResult) => {
    if (!gptResult.function_call) {
        return false;
    }
    return true;
};
//# sourceMappingURL=util.js.map