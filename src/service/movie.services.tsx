import { EndpointConstant } from '../common/constants';
import { apiService } from '../common/network/apiService';
import { MovieInterface } from '../redux/types';

const BASE_ENDPOINT = EndpointConstant.MOVIES;

export const movieService = {
    fetchPopularMovies,
    fetchTopMovies,
    fetchUpcomingMovies,
    fetchNowMovies
};

async function fetchPopularMovies(): Promise<MovieInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.POPULAR}`
    return await apiService(endpoint, 'GET', null);
}

async function fetchTopMovies(): Promise<MovieInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.TOP_RATED}`
    return await apiService(endpoint, 'GET', null);
}

async function fetchUpcomingMovies(): Promise<MovieInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.UPCOMING}`
    return await apiService(endpoint, 'GET', null);
}

async function fetchNowMovies(): Promise<MovieInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.NOW_PLAYING}`
    return await apiService(endpoint, 'GET', null);
}


