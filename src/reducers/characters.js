import characters_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER }from '../actions/'

import { createCharacters } from './helpers';

export const characters = (state = characters_json, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return state.filter(item => item.id !== action.id)
        case REMOVE_CHARACTER:
            return [...state, createCharacters(action.id)]
        default:
            return state
    }
}
