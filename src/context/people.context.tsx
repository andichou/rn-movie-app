import { createContext } from 'react';
import { initialState } from './people.reducer';

export const PeopleContext = createContext(initialState.popularPeoples);
