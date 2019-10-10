import React from "react";
import { connect } from "react-redux";
import { getCharacters, removeFromFavourites } from "../state/actionCreators";

const FavCharacters = props => {
  return (
    <div className="favCharacters">
      <h2>Favourite Characters</h2>
      <div>
        {props.rickAndMorty.favourites.map(character => {
          return (
            <div className="favCharacter Card" key={character.id}>
              <h3>{character.name}, {character.species}</h3>
              <img
                className="largeImage"
                src={character.image}
                alt={character.name}
              />
              <h4>Location: {character.location.name}</h4>
              <button onClick={() => props.removeFromFavourites(character)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { getCharacters, removeFromFavourites }
)(FavCharacters);
