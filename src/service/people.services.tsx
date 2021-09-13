import { EndpointConstant } from '../common/constants';
import { apiService } from '../common/network/apiService';
import { TVInterface } from '../redux/types';

const BASE_ENDPOINT = EndpointConstant.PERSON;

export const peopleService = {
    fetchPopularPeoples
};

async function fetchPopularPeoples(): Promise<TVInterface[]> {
    const endpoint = `${BASE_ENDPOINT}${EndpointConstant.POPULAR}`
    return await apiService(endpoint, 'GET', null);
}


