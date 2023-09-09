export type Result<T, Err> = {
    status: 'succeed';
    data: T;
} | {
    status: 'error';
    reason: Err;
};
