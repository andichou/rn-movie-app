import { ActionCreator } from 'redux';
import { tvService } from '../../service';
import {
    FETCH_POPULAR_TV,
    FETCH_TOP_TV,
    FETCH_ON_AIR_TV,
    TvActionTypes,
    TVInterface
} from '../types';
import { failure, request } from './common.actions';

const fetchPopularTvSuccess: ActionCreator<TvActionTypes> = (tvs: TVInterface[]) => {
    return { type: FETCH_POPULAR_TV, payload: tvs };
}
const fetchTopTvSuccess: ActionCreator<TvActionTypes> = (tvs: TVInterface[]) => {
    return { type: FETCH_TOP_TV, payload: tvs };
}
const fetchOnAirTvSuccess: ActionCreator<TvActionTypes> = (tvs: TVInterface[]) => {
    return { type: FETCH_ON_AIR_TV, payload: tvs };
}

export function fetchPopularTv() {
    return (dispatch: any) => {
        dispatch(request());
        return tvService.fetchPopularTvs()
            .then(
                response => {
                    dispatch(fetchPopularTvSuccess(response))
                },
                error => {
                    dispatch(failure('Something went wrong'))
                })
    }
}

export function fetchTopTv() {
    return (dispatch: any) => {
        dispatch(request());
        return tvService.fetchTopTvs()
            .then(
                response => {
                    dispatch(fetchTopTvSuccess(response))
                },
                error => {
                    dispatch(failure('Something went wrong'))
                })
    }
}

export function fetchOnAirTv() {
    return (dispatch: any) => {
        dispatch(request());
        return tvService.fetchOnAirTvs()
            .then(
                response => {
                    dispatch(fetchOnAirTvSuccess(response))
                },
                error => {
                    dispatch(failure('Something went wrong'))
                })
    }
}
