import { ActionCreator } from 'redux';
import { movieService } from '../../service';
import {
    FETCH_NOW_MOVIES,
    FETCH_POPULAR_MOVIES,
    FETCH_TOP_MOVIES,
    FETCH_UPCOMING_MOVIES,
    MovieActionTypes,
    MovieInterface
} from '../types';
import { request } from './common.actions';

const fetchPopularMoviesSuccess: ActionCreator<MovieActionTypes> = (movies: MovieInterface[]) => {
    return { type: FETCH_POPULAR_MOVIES, payload: movies };
}
const fetchTopMoviesSuccess: ActionCreator<MovieActionTypes> = (movies: MovieInterface[]) => {
    return { type: FETCH_TOP_MOVIES, payload: movies };
}
const fetchUpcomingMoviesSuccess: ActionCreator<MovieActionTypes> = (movies: MovieInterface[]) => {
    return { type: FETCH_UPCOMING_MOVIES, payload: movies };
}
const fetchNowMoviesSuccess: ActionCreator<MovieActionTypes> = (movies: MovieInterface[]) => {
    return { type: FETCH_NOW_MOVIES, payload: movies };
}

export function fetchPopularMovies() {
    return (dispatch: any) => {
        dispatch(request());
        return movieService.fetchPopularMovies()
            .then(
                response => {
                    dispatch(fetchPopularMoviesSuccess(response))
                },
                error => {
                    dispatch(fail('Something went wrong'))
                })
    }
}

export function fetchTopMovies() {
    return (dispatch: any) => {
        dispatch(request());
        return movieService.fetchTopMovies()
            .then(
                response => {
                    dispatch(fetchTopMoviesSuccess(response))
                },
                error => {
                    dispatch(fail('Something went wrong'))
                })
    }
}

export function fetchUpcomingMovies() {
    return (dispatch: any) => {
        dispatch(request());
        return movieService.fetchUpcomingMovies()
            .then(
                response => {
                    dispatch(fetchUpcomingMoviesSuccess(response))
                },
                error => {
                    dispatch(fail('Something went wrong'))
                })
    }
}

export function fetchNowMovies() {
    return (dispatch: any) => {
        dispatch(request());
        return movieService.fetchNowMovies()
            .then(
                response => {
                    dispatch(fetchNowMoviesSuccess(response))
                },
                error => {
                    dispatch(fail('Something went wrong'))
                })
    }
}
