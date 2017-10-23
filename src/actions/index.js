export const ADD_CHARACTER = 'ADD_CHARACTER'

export const addCharacterById = (id) => {
    return {
        type: ADD_CHARACTER,
        id
    }
}

export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'
export const removeCharacterByid = (id) => {
    return {
        type: REMOVE_CHARACTER,
        id
    }
}