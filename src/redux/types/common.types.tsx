export const FETCH = 'FETCH';
export const FETCH_FAIL = 'FETCH_FAIL';

interface FetchAction  {
    type: typeof FETCH
}

interface FetchFailAction  {
    type: typeof FETCH_FAIL,
    payload: any
}

export type FetchActionTypes
    = FetchAction
    | FetchFailAction;
