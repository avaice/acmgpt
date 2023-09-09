export declare const ACMGpt: (apiKey: string) => {
    commit: (work: string) => Promise<import("./types").Result<import("./getCommitMessage/types").GetCommitResponse, string>>;
};
