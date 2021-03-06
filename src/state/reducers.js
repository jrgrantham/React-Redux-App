import * as actionTypes from "./actionTypes";

const initialState = {
  favourites: [],
  characters: []
};

export function characterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case actionTypes.REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          character => character.id !== action.payload.id
        )
      };
    case actionTypes.IMPORT_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
}
