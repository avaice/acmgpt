export type GetCommitResponse = {
    result: 'accept';
    commit_msg: string;
    quality: number;
} | {
    result: 'reject';
    reason: string;
};
