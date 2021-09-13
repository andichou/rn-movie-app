import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer';
import { tvReducer } from './tv.reducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    tv: tvReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
