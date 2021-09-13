import {
    FETCH_POPULAR_TV,
    FETCH_TOP_TV,
    FETCH_ON_AIR_TV,
    TvActionTypes,
    TVInterface
} from '../types';

interface TvState {
    popularTvs: TVInterface[];
    topTvs: TVInterface[];
    onAirTvs: TVInterface[];
}

const initialState: TvState = {
    popularTvs: [],
    topTvs: [],
    onAirTvs: []
};

export function tvReducer(state: TvState = initialState, action: TvActionTypes): TvState {
    switch (action.type) {
        case FETCH_POPULAR_TV: {
            return {
                ...state,
                popularTvs: action.payload
            };
        }
        case FETCH_TOP_TV: {
            return {
                ...state,
                topTvs: action.payload
            };
        }
        case FETCH_ON_AIR_TV: {
            return {
                ...state,
                onAirTvs: action.payload
            };
        }
        default:
            return state;
    }
}
