import { FETCH, FETCH_FAIL, FetchActionTypes } from '../types'
import { ActionCreator } from 'redux';

export const request: ActionCreator<FetchActionTypes> = () => {
    return { type: FETCH };
}
export const failure: ActionCreator<FetchActionTypes> = (error: any) => {
    return { type: FETCH_FAIL, payload: error };
}
