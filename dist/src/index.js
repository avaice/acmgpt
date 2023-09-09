import { callGPT } from './callGPT';
import { getCommitMessage } from './getCommitMessage';
import { functions } from './resources/functions';
import { prompt } from './resources/prompt';
export const ACMGpt = (apiKey) => ({
    commit: async (work) => {
        const gptResult = await callGPT({
            initialPrompt: prompt,
            prompt: { role: 'user', content: work },
            functions,
            apiKey,
        });
        return await getCommitMessage(gptResult);
    },
});
// SAMPLE:
// if (!Bun.env.OPENAI_API_KEY) {
//   throw new Error('Enviroment var: OPENAI_API_KEY is not defined')
// }
// const acmGpt = ACMGpt(Bun.env.OPENAI_API_KEY)
// console.log(await acmGpt.commit('GPT呼び出しとパース処理の分離をした'))
//# sourceMappingURL=index.js.map