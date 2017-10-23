import { ADD_CHARACTER, REMOVE_CHARACTER }from '../actions/'
import { createCharacters } from './helpers';

export const heros = (state = [], action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return [...state, createCharacters(action.id)]
        case REMOVE_CHARACTER:
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}


