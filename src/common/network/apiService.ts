import axios, { Method } from 'axios';
import { API_KEY } from '../config';
import { EndpointConstant } from '../constants';

const api = axios.create({
    baseURL: EndpointConstant.BASE_URL
});

api.interceptors.request.use((config) => {
    const configuration = { ...config };
    const { params } = configuration;

    configuration.params = {
        ...params,
        api_key: API_KEY,
        language: 'en-US',
    };

    return configuration;
}, e => (
    Promise.reject(e)
));

export const apiService = function(url: string, method: Method, params: any) {
    const onSuccess = (response: any) => {
        console.info("Request Success", response.data.results);
        return response.data.results;
    }

    const onError = (error: any) => {
        console.error("Request Error", error);
        return Promise.reject(error.response || error.message);
    }

    return api({
        url,
        method,
        params
    })
        .then(onSuccess)
        .catch(onError);
}
