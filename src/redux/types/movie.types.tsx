export interface MovieInterface {
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

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
export const FETCH_TOP_MOVIES = 'FETCH_TOP_MOVIES';
export const FETCH_UPCOMING_MOVIES = 'FETCH_UPCOMING_MOVIES';
export const FETCH_NOW_MOVIES = 'FETCH_NOW_MOVIES';

interface FetchPopularMovieAction {
    type: typeof FETCH_POPULAR_MOVIES,
    payload: MovieInterface[];
}

interface FetchTopMovieAction {
    type: typeof FETCH_TOP_MOVIES,
    payload: MovieInterface[];
}

interface FetchUpcomingMovieAction {
    type: typeof FETCH_UPCOMING_MOVIES,
    payload: MovieInterface[];
}

interface FetchNowMovieAction {
    type: typeof FETCH_NOW_MOVIES,
    payload: MovieInterface[];
}

export type MovieActionTypes
    = FetchPopularMovieAction
    | FetchTopMovieAction
    | FetchUpcomingMovieAction
    | FetchNowMovieAction;
