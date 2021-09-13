import { MovieInterface } from './movie.types';
import { TVInterface } from './tv.types';

export interface PeopleInterface {
    id: number;
    adult: boolean;
    gender: number;
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
    known_for: MovieInterface | TVInterface;
}

export const FETCH_POPULAR_PEOPLE = 'FETCH_POPULAR_PEOPLE';

interface FetchPopularPeopleAction {
    type: typeof FETCH_POPULAR_PEOPLE,
    payload: PeopleInterface[];
}

export type PeopleActionTypes
    = FetchPopularPeopleAction;
