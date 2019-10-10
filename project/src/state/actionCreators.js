import axios from "axios";
import * as types from "./actionTypes";

const characterApi = "https://rickandmortyapi.com/api/character/";

export function addToFavourites() {
  return {
    type: types.ADD_FAVOURITE,
    // payload: character
  };
}

// export function removeFromFavourites() {
//   return {
//     type: types.ADD_FAVOURITE,
//     payload: character
//   };
// }

export const getCharacters = () => dispatch => {
  axios
    .get(characterApi)
    .then(response => {
      const apiCharacters = response.data.results;
      console.log(apiCharacters);
      dispatch({
        type: types.IMPORT_CHARACTERS,
        payload: apiCharacters
      });
    })
    .catch(err => {
      console.log(err);
    });
};
