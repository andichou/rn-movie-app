import { FETCH_POPULAR_PEOPLE, PeopleActionTypes, PeopleInterface } from '../types';

interface PeopleState {
    popularPeoples: PeopleInterface[];
}

const initialState: PeopleState = {
    popularPeoples: []
};

export function peopleReducer(state: PeopleState = initialState, action: PeopleActionTypes): PeopleState {
    switch (action.type) {
        case FETCH_POPULAR_PEOPLE: {
            return {
                ...state,
                popularPeoples: action.payload
            };
        }
        default:
            return state;
    }
}
