import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer';
import { peopleReducer } from './people.reducer';
import { tvReducer } from './tv.reducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
