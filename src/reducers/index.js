import { combineReducers } from 'redux';

import { characters } from './characters';
import { heros } from './heros';

const rootReducers = combineReducers({
    characters,
    heros
})

export default rootReducers;