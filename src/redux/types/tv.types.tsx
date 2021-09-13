export interface TVInterface {
    id: number;
    adult: boolean;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

export const FETCH_POPULAR_TV = 'FETCH_POPULAR_TV';
export const FETCH_TOP_TV = 'FETCH_TOP_TV';
export const FETCH_ON_AIR_TV = 'FETCH_ON_AIR_TV';

interface FetchPopularTvAction {
    type: typeof FETCH_POPULAR_TV,
    payload: TVInterface[];
}

interface FetchTopTvAction {
    type: typeof FETCH_TOP_TV,
    payload: TVInterface[];
}

interface FetchOnAirTvAction {
    type: typeof FETCH_ON_AIR_TV,
    payload: TVInterface[];
}

export type TvActionTypes
    = FetchPopularTvAction
    | FetchTopTvAction
    | FetchOnAirTvAction;
