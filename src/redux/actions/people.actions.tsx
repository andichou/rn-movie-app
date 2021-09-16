import { ActionCreator } from 'redux';
import { peopleService } from '../../service/people.services';
import {
    FETCH_POPULAR_PEOPLE,
    PeopleActionTypes,
    PeopleInterface
} from '../types';
import { failure, request } from './common.actions';

const fetchPopularPeopleSuccess: ActionCreator<PeopleActionTypes> = (peoples: PeopleInterface[]) => {
    return { type: FETCH_POPULAR_PEOPLE, payload: peoples };
}

export function fetchPopularPeople() {
    return (dispatch: any) => {
        dispatch(request());
        return peopleService.fetchPopularPeoples()
            .then(
                response => {
                    dispatch(fetchPopularPeopleSuccess(response))
                },
                error => {
                    dispatch(failure('Something went wrong'))
                })
    }
}
