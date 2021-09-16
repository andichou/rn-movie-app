import { ActionCreator } from 'redux';
import { failure, request } from '../redux/actions';
import { FETCH_POPULAR_PEOPLE, PeopleActionTypes, PeopleInterface } from '../redux/types';
import { peopleService } from '../service/people.services';

const fetchPopularPeopleSuccess: ActionCreator<PeopleActionTypes> = (peoples: PeopleInterface[]) => {
    return { type: FETCH_POPULAR_PEOPLE, payload: peoples };
}

export const fetchPopularPeople = (dispatch: any) => {
    dispatch(request());
    return peopleService.fetchPopularPeoples()
        .then(
            response => {
                console.log('Success ', response)
                dispatch(fetchPopularPeopleSuccess(response))
            },
            error => {
                console.error('Error ', error);
                dispatch(failure('Something went wrong'))
            })
}
