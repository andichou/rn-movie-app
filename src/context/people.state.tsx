import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { fetchPopularPeople } from './people.actions';
import { PeopleContext } from './people.context';
import { initialState, peopleReducer } from './people.reducer';

export const PeopleStateWrap = ({ children }: {children: any}) => {
    const [state, dispatch] = useReducer(peopleReducer, initialState);

    const loadData = async () => {
        fetchPopularPeople(dispatch);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <PeopleContext.Provider value={state.popularPeoples}>
            {children}
        </PeopleContext.Provider>
    );
};
