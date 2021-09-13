import { EndpointConstant } from '../common/constants';
import { apiService } from '../common/network/apiService';
import { TVInterface } from '../redux/types';

const BASE_ENDPOINT = EndpointConstant.TV;

export const tvService = {
    fetchPopularTvs,
    fetchTopTvs,
    fetchOnAirTvs
};

async function fetchPopularTvs(): Promise<TVInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.POPULAR}`
    return await apiService(endpoint, 'GET', null);
}

async function fetchTopTvs(): Promise<TVInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.TOP_RATED}`
    return await apiService(endpoint, 'GET', null);
}

async function fetchOnAirTvs(): Promise<TVInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.ON_THE_AIR}`
    return await apiService(endpoint, 'GET', null);
}


