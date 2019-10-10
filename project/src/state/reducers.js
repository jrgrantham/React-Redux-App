import * as actionTypes from "./actionCreators";

const initialState = {
  favourites: [],
  characters: [
    {
      created: "2017-11-04T18:48:46.250Z",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/31"
      ],
      gender: "Male",
      id: 1,
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      name: "Rick Sanchez",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      species: "Human",
      status: "Alive",
      type: "",
      url: "https://rickandmortyapi.com/api/character/1"
    }
  ]
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
    default:
      return state;
  }
}
