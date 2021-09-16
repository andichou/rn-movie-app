import { FETCH_POPULAR_PEOPLE, PeopleActionTypes, PeopleInterface } from '../redux/types';

export interface PeopleState {
    popularPeoples: PeopleInterface[];
}

export const initialState: PeopleState = {
    popularPeoples: [],
};

export function peopleReducer(state: PeopleState = initialState, action: PeopleActionTypes) {
    switch (action.type) {
        case FETCH_POPULAR_PEOPLE: {
            return {
                ...state,
                popularPeoples: action.payload,
            };
        }
        default:
            return state;
    }
}
