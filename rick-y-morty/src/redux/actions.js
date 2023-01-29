export const addToFavorites = (character) => {
    return {
        type: "ADD_FAVORITES",
        payload: character
    }
}

export const removeFromFavorites = (id) => {
    return {
        type: "REMOVE_FAVORITES",
        payload: id
    }
}

