import {
    FETCH_NOW_MOVIES,
    FETCH_POPULAR_MOVIES,
    FETCH_TOP_MOVIES,
    FETCH_UPCOMING_MOVIES,
    MovieActionTypes,
    MovieInterface
} from '../types';

interface MovieState {
    popularMovies: MovieInterface[];
    topMovies: MovieInterface[];
    upcomingMovies: MovieInterface[];
    nowMovies: MovieInterface[];
}

const initialState: MovieState = {
    popularMovies: [],
    topMovies: [],
    upcomingMovies: [],
    nowMovies: []
};

export function movieReducer(state: MovieState = initialState, action: MovieActionTypes): MovieState {
    switch (action.type) {
        case FETCH_POPULAR_MOVIES: {
            return {
                ...state,
                popularMovies: action.payload
            };
        }
        case FETCH_TOP_MOVIES: {
            return {
                ...state,
                topMovies: action.payload
            };
        }
        case FETCH_UPCOMING_MOVIES: {
            return {
                ...state,
                upcomingMovies: action.payload
            };
        }
        case FETCH_NOW_MOVIES: {
            return {
                ...state,
                nowMovies: action.payload
            };
        }
        default:
            return state;
    }
}
